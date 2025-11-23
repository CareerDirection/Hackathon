// ================== CONFIG ==================
const HACKATHON_DURATION_MIN = 60;
const MAX_WARNINGS = 5;
const LOCK_DAYS = 20; // 20-day lock after attempt
const ADMIN_RESET_CODE = "JKRESET2025";

// ================== QUESTION BANK ==================
//
// IMPORTANT:
// 1) Keep EXACTLY this structure.
// 2) Each question must have:
//    - id: unique string
//    - marks: 3 or 4
//    - text: question text
//    - options: ["A) ...","B) ...","C) ...","D) ..."]
//    - correct: "A" or "B" or "C" or "D"
//
// 3) You MUST add your 160+ questions here, following these examples.
// 4) The script will automatically:
//      - pick 20 random 3-mark questions
//      - pick 10 random 4-mark questions
//      - total marks = 30 + 30 + 40 = 100
// ====================================================

const questionBank = [
  // === Sample 3-mark questions (REPLACE / EXTEND WITH YOUR DATA) ===
  {
    id: "Q1",
    marks: 3,
    text: "What will this code output?\n\nfor i in range(2, 7, 2):\n    print(i, end=' ')",
    options: [
      "A) 2 4 6",
      "B) 2 3 4 5 6",
      "C) 2 4",
      "D) 3 5 7"
    ],
    correct: "A"
  },
  {
    id: "Q2",
    marks: 3,
    text: "What’s the output of len(\"Tech\" + \"Talk\")?",
    options: [
      "A) 8",
      "B) 7",
      "C) 9",
      "D) Error"
    ],
    correct: "A"
  },
  {
    id: "Q3",
    marks: 3,
    text: "Stack works on:",
    options: [
      "A) FIFO",
      "B) FILO",
      "C) LIFO",
      "D) LILO"
    ],
    correct: "C"
  },

  // === Sample 4-mark questions (REPLACE / EXTEND WITH YOUR DATA) ===
  {
    id: "Q101",
    marks: 4,
    text: "Which algorithm is best for sorted array search?",
    options: [
      "A) Linear Search",
      "B) Binary Search",
      "C) Bubble Sort",
      "D) Merge Sort"
    ],
    correct: "B"
  },
  {
    id: "Q102",
    marks: 4,
    text: "What does “CI” mean in DevOps?",
    options: [
      "A) Continuous Integration",
      "B) Cloud Implementation",
      "C) Continuous Improvement",
      "D) Code Invocation"
    ],
    correct: "A"
  },
  {
    id: "Q103",
    marks: 4,
    text: "Which ML model predicts continuous values?",
    options: [
      "A) Classification",
      "B) Regression",
      "C) Clustering",
      "D) Segmentation"
    ],
    correct: "B"
  }

  // TODO: Add ALL your remaining questions here.
  // Make sure:
  // - Exactly some are marks:3
  // - Some are marks:4
  // The script will randomly pick:
  // - 20 x marks=3
  // - 10 x marks=4
];

// ================== GLOBAL STATE ==================
let chosenQuestions = [];   // the 30 chosen for this attempt
let currentSetIndex = 0;    // 0,1,2
let userAnswers = {};       // { questionId: "A"/"B"/... }

let currentUser = null;
let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let timerId = null;
let warnings = 0;
let violationReasons = [];
let quizFinished = false;
let inExam = false;

let lastActivityTime = Date.now();
let activityTimerId = null;

let stream = null;          // camera+mic stream
let audioMonitorId = null;  // interval for audio
let brightnessCheckId = null; // interval for camera brightness

// ================== HELPERS ==================
function $(id) {
  return document.getElementById(id);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// lock key per email
function lockKey(email) {
  return "hackathon_lock_" + email.toLowerCase().trim();
}

function isLocked(email) {
  const v = localStorage.getItem(lockKey(email));
  if (!v) return false;
  const until = Number(v);
  return Date.now() < until;
}

function setLock(email) {
  const until = Date.now() + LOCK_DAYS * 24 * 60 * 60 * 1000;
  localStorage.setItem(lockKey(email), String(until));
}

function clearLockForEmail(email) {
  localStorage.removeItem(lockKey(email.toLowerCase().trim()));
}

// ================== TIMER ==================
function updateTimerDisplay() {
  const t = formatTime(remainingSeconds);
  $("timer").textContent = "Time Left: " + t;
  $("overlayTime").textContent = "Time Left: " + t;
}

function startTimer() {
  remainingSeconds = HACKATHON_DURATION_MIN * 60;
  updateTimerDisplay();
  if (timerId) clearInterval(timerId);

  timerId = setInterval(() => {
    remainingSeconds--;
    updateTimerDisplay();
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      autoSubmit("time");
    }
  }, 1000);
}

// ================== CAMERA + MIC ==================
async function startCameraAndMic() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    const video = $("cameraFeed");
    video.srcObject = stream;

    $("proctorPanel").classList.remove("hidden");

    startAudioMonitor(stream);
    startBrightnessMonitor(video);
  } catch (e) {
    issueWarning("Camera/Mic permission denied or blocked.");
  }
}

function stopCameraAndMic() {
  if (stream) {
    stream.getTracks().forEach(t => t.stop());
    stream = null;
  }
  if (audioMonitorId) clearInterval(audioMonitorId);
  if (brightnessCheckId) clearInterval(brightnessCheckId);
}

// ===== Audio monitoring: HIGH strict mode =====
// Any sustained sound > threshold for ~3s => warning.
function startAudioMonitor(mediaStream) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaStreamSource(mediaStream);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);

    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    let loudStart = null;
    const LOUD_THRESHOLD = 80; // 0-255 scale; adjust if needed
    const REQUIRED_MS = 3000; // 3 seconds

    audioMonitorId = setInterval(() => {
      if (!inExam || quizFinished) return;
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((sum, v) => sum + v, 0) / dataArray.length;

      const now = Date.now();

      if (avg > LOUD_THRESHOLD) {
        if (loudStart === null) loudStart = now;
        if (now - loudStart >= REQUIRED_MS) {
          issueWarning("High continuous sound / speaking detected via mic.");
          loudStart = now; // reset so it doesn't spam too fast
        }
      } else {
        loudStart = null; // sound dropped
      }
    }, 300);
  } catch (e) {
    // ignore; can't monitor audio
  }
}

// ===== Camera brightness monitoring (cover/black) =====
function startBrightnessMonitor(videoEl) {
  try {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    let lowBrightnessCount = 0;
    const BRIGHTNESS_THRESHOLD = 20; // out of 255
    const REQUIRED_CHECKS = 5; // consecutive low brightness checks

    brightnessCheckId = setInterval(() => {
      if (!inExam || quizFinished) return;
      if (!videoEl.videoWidth || !videoEl.videoHeight) return;

      canvas.width = 160;
      canvas.height = 120;

      ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let sumBrightness = 0;
      const len = pixels.length / 4;
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const brightness = (r + g + b) / 3;
        sumBrightness += brightness;
      }
      const avgBrightness = sumBrightness / len;

      if (avgBrightness < BRIGHTNESS_THRESHOLD) {
        lowBrightnessCount++;
        if (lowBrightnessCount >= REQUIRED_CHECKS) {
          issueWarning("Camera image too dark/covered. Ensure your face is clearly visible.");
          lowBrightnessCount = 0;
        }
      } else {
        lowBrightnessCount = 0;
      }
    }, 1500);
  } catch (e) {
    // ignore
  }
}

// ================== ACTIVITY / VIOLATIONS ==================
function issueWarning(message) {
  if (!inExam || quizFinished) return;

  warnings++;
  if (!violationReasons.includes(message)) {
    violationReasons.push(message);
  }

  $("overlayWarnings").textContent = `Warnings: ${warnings} / ${MAX_WARNINGS}`;

  const banner = $("warningBanner");
  banner.textContent = "⚠ " + message;
  banner.classList.remove("hidden");

  // beep
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 1000;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {}

  if (warnings >= MAX_WARNINGS) {
    autoSubmit("violation");
  }
}

function setupActivityWatcher() {
  lastActivityTime = Date.now();
  const markActivity = () => {
    lastActivityTime = Date.now();
  };
  ["mousemove", "keydown", "click"].forEach(evt => {
    document.addEventListener(evt, markActivity, { passive: true });
  });

  if (activityTimerId) clearInterval(activityTimerId);
  activityTimerId = setInterval(() => {
    if (!inExam || quizFinished) return;
    const diff = Date.now() - lastActivityTime;
    if (diff > 90 * 1000) {
      issueWarning("No movement detected for 90 seconds.");
      lastActivityTime = Date.now();
    }
  }, 15000);
}

// Tab / window change
document.addEventListener("visibilitychange", () => {
  if (!inExam || quizFinished) return;
  if (document.hidden) {
    issueWarning("Tab switch or window minimized detected.");
  }
});

window.addEventListener("blur", () => {
  if (!inExam || quizFinished) return;
  issueWarning("Window focus lost (app switch / Alt+Tab).");
});

// Global anti-copy / shortcuts / PrintScreen
function blockAndWarn(e, reason) {
  e.preventDefault();
  if (inExam && !quizFinished) {
    issueWarning(reason);
  }
}

document.addEventListener("copy", e => blockAndWarn(e, "Copy action is not allowed during the test."));
document.addEventListener("cut", e => blockAndWarn(e, "Cut action is not allowed during the test."));
document.addEventListener("paste", e => blockAndWarn(e, "Paste action is not allowed during the test."));
document.addEventListener("contextmenu", e => blockAndWarn(e, "Right-click is disabled during the test."));
document.addEventListener("selectstart", e => blockAndWarn(e, "Text selection is disabled during the test."));

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (e.ctrlKey && !e.shiftKey && ["c", "x", "v", "s"].includes(key)) {
    blockAndWarn(e, "Keyboard shortcuts like Ctrl+C/X/V/S are not allowed during the test.");
    return;
  }

  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key))) {
    blockAndWarn(e, "Developer tools / Inspect is not allowed during the test.");
    return;
  }

  if (e.key === "PrintScreen") {
    blockAndWarn(e, "Screenshot / PrintScreen attempt detected.");
    return;
  }
});

// ================== QUESTION SELECTION ==================
function pickQuestionsForExam() {
  const threeMark = questionBank.filter(q => q.marks === 3);
  const fourMark = questionBank.filter(q => q.marks === 4);

  if (threeMark.length < 20 || fourMark.length < 10) {
    alert("Not enough questions in questionBank. Need at least 20 (3-mark) and 10 (4-mark) questions.");
    chosenQuestions = [];
    return;
  }

  shuffleArray(threeMark);
  shuffleArray(fourMark);

  const chosenThree = threeMark.slice(0, 20);
  const chosenFour = fourMark.slice(0, 10);

  // For sets:
  // Set 1: first 10 of chosenThree (3 marks each)
  // Set 2: next 10 of chosenThree (3 marks each)
  // Set 3: all chosenFour (4 marks each)
  chosenQuestions = chosenThree.concat(chosenFour);
}

// Render current set
function renderCurrentSet() {
  const container = $("questionsContainer");
  container.innerHTML = "";

  const startIdx = currentSetIndex * 10;
  const endIdx = startIdx + 10;
  const questions = chosenQuestions.slice(startIdx, endIdx);

  $("setInfo").textContent = `Set ${currentSetIndex + 1} of 3`;

  questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const header = document.createElement("div");
    header.className = "question-header";
    header.textContent = `Q${startIdx + idx + 1} (${q.marks} marks)`;
    card.appendChild(header);

    const text = document.createElement("div");
    text.className = "question-text";
    text.textContent = q.text;
    card.appendChild(text);

    q.options.forEach(opt => {
      const val = opt.trim().charAt(0); // 'A' / 'B' / 'C' / 'D'
      const optDiv = document.createElement("div");
      optDiv.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = q.id;
      input.value = val;

      if (userAnswers[q.id] === val) {
        input.checked = true;
      }

      input.addEventListener("change", () => {
        userAnswers[q.id] = val;
      });

      const label = document.createElement("label");
      label.textContent = opt;

      optDiv.appendChild(input);
      optDiv.appendChild(label);
      card.appendChild(optDiv);
    });

    container.appendChild(card);
  });

  if (currentSetIndex < 2) {
    $("nextSetBtn").classList.remove("hidden");
    $("submitBtn").classList.add("hidden");
  } else {
    $("nextSetBtn").classList.add("hidden");
    $("submitBtn").classList.remove("hidden");
  }
}

// ================== SCORING ==================
function computeResult() {
  let correctMarks = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  chosenQuestions.forEach(q => {
    const ans = userAnswers[q.id];
    if (!ans) {
      unansweredCount++;
    } else if (ans === q.correct) {
      correctMarks += q.marks;
    } else {
      wrongCount++;
    }
  });

  const penaltyWrong = wrongCount * 2;                 // -2 per wrong
  const penaltyUnanswered = Math.floor(unansweredCount / 5) * 2; // -2 per 5 blanks

  let finalScore = correctMarks - penaltyWrong - penaltyUnanswered;
  if (finalScore < 0) finalScore = 0; // never show negative

  return finalScore;
}

function showResult(finalScore, autoSubmitted, reasonCode) {
  quizFinished = true;
  inExam = false;

  stopCameraAndMic();
  if (timerId) clearInterval(timerId);
  if (activityTimerId) clearInterval(activityTimerId);

  // fill result UI (Result page is already designed, we only inject values)
  $("resultCandidate").textContent =
    `Name: ${currentUser.name}, Email-ID: ${currentUser.email}`;
  $("resultCandidateExtra").textContent =
    `College: ${currentUser.college} | Department: ${currentUser.department}`;

  const vBox = $("violationSummary");
  const badgeArea = $("badgeArea");
  const badgeLabel = $("badgeLabel");

  vBox.classList.add("hidden");
  vBox.innerHTML = "";
  badgeArea.classList.add("hidden");

  if (autoSubmitted && reasonCode === "violation") {
    // Violation case → no badge
    const list = violationReasons.length
      ? "<ul><li>" + violationReasons.join("</li><li>") + "</li></ul>"
      : "";
    vBox.innerHTML =
      `<strong>Your session was auto-submitted due to security violations (camera/mic/noise/tab switching or restricted actions).</strong><br><br>` +
      `<strong>Detected reasons:</strong>${list}<br><br>` +
      `If you are serious, you can request 1 re-attempt:<br>` +
      `1️⃣ Take a screenshot of this page<br>` +
      `2️⃣ Email the support team with justification<br><br>` +
      `Note: Another violation may block your access for up to 3 months.`;
    vBox.classList.remove("hidden");
  } else {
    // Normal time/submit → show badge according to score
    if (finalScore >= 90) {
      badgeLabel.textContent = "Champion Badge — Score ≥ 90";
    } else if (finalScore >= 70) {
      badgeLabel.textContent = "Winner Badge — Score 70–89";
    } else {
      badgeLabel.textContent = "Participation Badge — Score < 70";
    }
    badgeArea.classList.remove("hidden");
  }

  $("scoreText").textContent = `Your Score: ${finalScore} / 100`;

  let remark = "";
  if (autoSubmitted && reasonCode === "violation") {
    remark = "Your session was auto-submitted due to security violations. Please contact support for one more chance if justified.";
  } else if (finalScore >= 90) {
    remark = "Congratulations! You are now Eligible for 2nd round interview for Paid Internship.";
  } else if (finalScore >= 70) {
    remark = "Congratulations! You are now Eligible to choose 2nd round interview for Paid Internship, or you can skip and choose Unpaid Internship.";
  } else {
    remark = "Congratulations! You are now Eligible to choose Unpaid Internship.";
  }
  $("remarkText").textContent = remark;

  // Store last result + lock for 20 days
  try {
    const stored = {
      name: currentUser.name,
      email: currentUser.email,
      college: currentUser.college,
      department: currentUser.department,
      score: finalScore,
      autoSubmitted,
      reasonCode
    };
    localStorage.setItem("hackathon_last_result", JSON.stringify(stored));
    localStorage.setItem("hackathon_last_email", currentUser.email);
    setLock(currentUser.email);
  } catch {}

  showSection("resultSection");
}

// ================== FINISH / AUTO SUBMIT ==================
function finishQuiz(reasonCode) {
  const finalScore = computeResult();
  const autoSubmitted = reasonCode === "violation" || reasonCode === "time";
  showResult(finalScore, autoSubmitted, reasonCode);
}

function autoSubmit(reasonCode) {
  if (quizFinished) return;
  quizFinished = true;
  finishQuiz(reasonCode);
}

// ================== SECTION SWITCH ==================
function showSection(sectionId) {
  ["loginSection", "examSection", "resultSection"].forEach(id => {
    const sec = $(id);
    if (sec) sec.classList.add("hidden");
  });
  const target = $(sectionId);
  if (target) target.classList.remove("hidden");
}

// ================== EXAM START ==================
function startExam() {
  inExam = true;
  quizFinished = false;
  warnings = 0;
  violationReasons = [];
  $("overlayWarnings").textContent = `Warnings: 0 / ${MAX_WARNINGS}`;
  $("warningBanner").classList.add("hidden");

  $("examNameLine").textContent =
    `Name: ${currentUser.name}, Email-ID: ${currentUser.email}`;
  $("examStatusLine").textContent =
    `Time used: 00:00 | Warnings: 0 / ${MAX_WARNINGS} | Attempted 0 Questions`;
  $("userInfoDisplay").textContent =
    `${currentUser.name} | ${currentUser.email}`;
  $("overlayCandidate").textContent = `Candidate: ${currentUser.name}`;

  userAnswers = {};
  currentSetIndex = 0;

  pickQuestionsForExam();
  if (chosenQuestions.length !== 30) {
    alert("Error: Could not pick 30 questions. Check questionBank marks.");
    return;
  }

  startTimer();
  startCameraAndMic();
  setupActivityWatcher();

  renderCurrentSet();

  // Disable back navigation
  history.pushState(null, "", location.href);
  window.addEventListener("popstate", () => {
    history.pushState(null, "", location.href);
  });

  showSection("examSection");
}

// ================== DOM READY ==================
document.addEventListener("DOMContentLoaded", () => {
  const userForm = $("userForm");
  const startBtn = $("startBtn");
  const lockMsg = $("lockMessage");

  // Block mobile / tablet
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  if (isMobile) {
    lockMsg.textContent =
      "This Hackathon must be attended from a Laptop / PC. Mobile / Tablet devices are not allowed.";
    lockMsg.classList.remove("hidden");
    if (startBtn) startBtn.disabled = true;
  }

  // If last result exists & email is locked => show result directly
  const lastEmail = localStorage.getItem("hackathon_last_email");
  const lastResultJson = localStorage.getItem("hackathon_last_result");
  if (lastEmail && lastResultJson && isLocked(lastEmail)) {
    try {
      const data = JSON.parse(lastResultJson);
      currentUser = {
        name: data.name,
        email: data.email,
        college: data.college,
        department: data.department
      };
      showResult(data.score, data.autoSubmitted, data.reasonCode);
      showSection("resultSection");
      return;
    } catch {
      // ignore errors
    }
  }

  // else show login
  showSection("loginSection");

  // Start Hackathon
  if (userForm) {
    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (isMobile) return;

      const name = $("name").value.trim();
      const email = $("email").value.trim();
      const college = $("college").value.trim();
      const department = $("department").value.trim();

      if (!name || !email || !college || !department) {
        alert("Please fill all fields before starting the Hackathon.");
        return;
      }

      if (isLocked(email)) {
        lockMsg.textContent =
          "This email is locked for 20 days after the last attempt. Please contact admin for reset.";
        lockMsg.classList.remove("hidden");
        return;
      }

      currentUser = { name, email, college, department };
      lockMsg.classList.add("hidden");

      startExam();
    });
  }

  // Next Set
  const nextSetBtn = $("nextSetBtn");
  if (nextSetBtn) {
    nextSetBtn.addEventListener("click", () => {
      if (currentSetIndex < 2) {
        currentSetIndex++;
        renderCurrentSet();
      }
    });
  }

  // Submit
  const submitBtn = $("submitBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to submit your Hackathon answers?")) {
        autoSubmit("normal");
      }
    });
  }

  // ADMIN RESET (works only on this browser/device)
  const adminResetBtn = $("adminResetBtn");
  if (adminResetBtn) {
    adminResetBtn.addEventListener("click", () => {
      const email = $("adminEmail").value.trim();
      const code = $("adminCode").value.trim();

      if (!email || !code) {
        alert("Enter student email and reset code.");
        return;
      }

      if (code !== ADMIN_RESET_CODE) {
        alert("Invalid reset code.");
        return;
      }

      clearLockForEmail(email);

      const lastEmailStored = localStorage.getItem("hackathon_last_email");
      if (
        lastEmailStored &&
        lastEmailStored.toLowerCase() === email.toLowerCase()
      ) {
        localStorage.removeItem("hackathon_last_email");
        localStorage.removeItem("hackathon_last_result");
      }

      alert(`Lock cleared for: ${email}\n\nNote: This reset works only on this browser/device.`);
      location.reload();
    });
  }
});
