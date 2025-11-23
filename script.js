// =====================
// CONFIG
// =====================
const HACKATHON_DURATION_MIN = 60;
const MAX_WARNINGS = 5;
const QUESTIONS_PER_SET = 10;
const NOISE_THRESHOLD = 0.08;
const FREEZE_CHECK_INTERVAL = 5; // seconds
const FREEZE_DURATION = 90; // 90 sec no movement
const ADMIN_RESET_CODE = "JKRESET2025";
const LOCK_PREFIX = "hackathon_lock_"; // per-email lock

// =====================
// QUESTIONS (30 total)
// =====================
const QUESTIONS = [
  {
    id: 1,
    text: `What will this code output?\n\nfor i in range(2, 7, 2):\n    print(i, end=' ')`,
    options: ["2 4 6", "2 3 4 5 6", "2 4", "3 5 7"],
    correctIndex: 0,
    marks: 3
  },
  {
    id: 2,
    text: "Which line correctly reverses a string s in Python?",
    options: ["rev = s[::-1]", "rev = reverse(s)", "rev = s.reverse()", "rev = rev(s)"],
    correctIndex: 0,
    marks: 4
  },
  {
    id: 3,
    text: `What’s the output of: len("Tech" + "Talk")?`,
    options: ["8", "7", "9", "Error"],
    correctIndex: 0,
    marks: 3
  },
  {
    id: 4,
    text: "In debugging, what’s the best first step for runtime errors?",
    options: ["Check syntax", "Check variable initialization", "Restart IDE", "Ignore and rerun"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 5,
    text: `Identify the error in this function:\n\ndef add(a, b=2, c):\n    return a + b + c`,
    options: [
      "Default argument before non-default",
      "Missing return",
      "Syntax is correct",
      "Too many arguments"
    ],
    correctIndex: 0,
    marks: 4
  },
  {
    id: 6,
    text: "Which of these function calls is valid (assume sum is defined as sum(a, b))?",
    options: ["sum(a, b)", "sum(3, 4)", "sum(a=3, 4)", "sum(,3,4)"],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 7,
    text: `What is printed?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)`,
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 3, 2, 1]", "Error"],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 8,
    text: "Stack works on which principle?",
    options: ["FIFO", "FILO", "LIFO", "LILO"],
    correctIndex: 2,
    marks: 3
  },
  {
    id: 9,
    text: "Which algorithm is best for searching in a sorted array?",
    options: ["Linear Search", "Binary Search", "Bubble Sort", "Merge Sort"],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 10,
    text: "What is the time complexity of Bubble Sort in the worst case?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 11,
    text: "Which data structure can be implemented using two stacks?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 12,
    text: "Which sorting algorithm is best for almost-sorted data?",
    options: ["Quick Sort", "Insertion Sort", "Merge Sort", "Heap Sort"],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 13,
    text: "What happens if pop is performed on an empty stack?",
    options: ["Returns None", "Underflow", "Overflow", "Returns Zero"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 14,
    text: `What is the output?\n\ns = 0\nfor i in range(1, 5):\n    s += i\nprint(s)`,
    options: ["10", "15", "5", "6"],
    correctIndex: 0,
    marks: 4
  },
  {
    id: 15,
    text: "Next number in the sequence: 3, 6, 12, 24, ?",
    options: ["36", "48", "30", "40"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 16,
    text: `What pattern is printed by this code?\n\nfor i in range(3):\n    print("*" * (i + 1))`,
    options: ["***", "Triangle pattern", "Square", "None"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 17,
    text: "If sum of 1 to 10 is 55, what is the general formula for the sum of 1 to n?",
    options: ["n(n+1)/2", "n²/2", "n(n-1)/2", "n²"],
    correctIndex: 0,
    marks: 4
  },
  {
    id: 18,
    text: "Logic to find even numbers from a list?",
    options: ["x % 2 == 1", "x % 2 == 0", "x / 2 == 1", "x**2 is even"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 19,
    text: `What is printed?\n\nfor i in range(3):\n    for j in range(2):\n        print(i + j, end='')`,
    options: ["011223", "012345", "010203", "001122"],
    correctIndex: 0,
    marks: 3
  },
  {
    id: 20,
    text: "Which AWS service provides compute instances?",
    options: ["EC2", "S3", "RDS", "CloudWatch"],
    correctIndex: 0,
    marks: 3
  },
  {
    id: 21,
    text: "Which AWS service stores static files and backups?",
    options: ["EC2", "S3", "DynamoDB", "Route53"],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 22,
    text: `What does “CI” stand for in DevOps?`,
    options: [
      "Continuous Integration",
      "Cloud Implementation",
      "Continuous Improvement",
      "Code Invocation"
    ],
    correctIndex: 0,
    marks: 4
  },
  {
    id: 23,
    text: "In CI/CD, Jenkins is mainly used for:",
    options: [
      "Monitoring only",
      "Automating build & deploy",
      "Manual testing",
      "Storage"
    ],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 24,
    text: "What is the first step in a typical ML workflow?",
    options: ["Train model", "Collect data", "Tune parameters", "Deploy model"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 25,
    text: "Which ML model type predicts continuous values?",
    options: ["Classification", "Regression", "Clustering", "Segmentation"],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 26,
    text: "A Confusion Matrix is mainly used to calculate:",
    options: [
      "Accuracy, Recall, Precision",
      "Cost function",
      "Training time",
      "Dataset size"
    ],
    correctIndex: 0,
    marks: 4
  },
  {
    id: 27,
    text: "Accuracy can be misleading as a metric when:",
    options: [
      "Dataset is balanced",
      "Dataset is imbalanced",
      "Model is fast",
      "Model is simple"
    ],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 28,
    text: "An effective prompt for Gen-AI should be:",
    options: ["Short", "Context-rich", "Random", "Over-detailed"],
    correctIndex: 1,
    marks: 3
  },
  {
    id: 29,
    text: "Which is true about LLM APIs like OpenAI or Gemini?",
    options: [
      "Always local models",
      "Always cloud hosted",
      "Run without internet",
      "Need manual training every time"
    ],
    correctIndex: 1,
    marks: 4
  },
  {
    id: 30,
    text: "In API usage, what is the correct sequence?",
    options: [
      "Response → Request → Output",
      "Request → Response → Output",
      "Output → Request",
      "None of the above"
    ],
    correctIndex: 1,
    marks: 3
  }
];

// =====================
// STATE
// =====================
let currentUser = null;
let shuffledQuestions = [];
let currentSetIndex = 0;
let answers = {};
let inExam = false;
let quizFinished = false;
let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let timerInterval = null;

let mediaStream = null;
let audioContext = null;
let noiseCheckInterval = null;
let cameraCheckInterval = null;
let motionCheckInterval = null;
let prevFrameData = null;
let stillFrameCount = 0;

let warningCount = 0;
let violationReasons = [];

// DOM references
let loginSection, examSection, resultSection;
let lockMessageEl, userForm;
let nameInput, emailInput, collegeInput, departmentInput;
let proctorPanel, cameraFeed, overlayCandidate, overlayTime, overlayWarnings;
let warningBanner, examNameLine, examStatusLine, timerEl, userInfoDisplay, setInfoEl;
let questionsContainer, nextSetBtn, submitBtn;
let resultCandidate, resultCandidateExtra, violationSummary, badgeArea, badgeLabel, scoreText, remarkText;
let adminPanel, adminEmailInput, adminCodeInput, adminResetBtn;

// =====================
// HELPERS
// =====================
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function playBeep(freq = 880, duration = 0.25) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration);
  } catch {}
}

// Per-email lock
function getLockKey(email) {
  return LOCK_PREFIX + email.toLowerCase().trim();
}

function setLockForEmail(email) {
  const key = getLockKey(email);
  const lockUntil = Date.now() + 20 * 24 * 60 * 60 * 1000; // 20 days
  localStorage.setItem(key, String(lockUntil));
}

function isLocked(email) {
  const key = getLockKey(email);
  const value = localStorage.getItem(key);
  if (!value) return false;
  const lockUntil = Number(value);
  if (Number.isNaN(lockUntil)) return false;
  return Date.now() < lockUntil;
}

function clearLockForEmail(email) {
  const key = getLockKey(email);
  localStorage.removeItem(key);
}

// =====================
// INIT
// =====================
document.addEventListener("DOMContentLoaded", () => {
  loginSection = document.getElementById("loginSection");
  examSection = document.getElementById("examSection");
  resultSection = document.getElementById("resultSection");

  lockMessageEl = document.getElementById("lockMessage");
  userForm = document.getElementById("userForm");
  nameInput = document.getElementById("name");
  emailInput = document.getElementById("email");
  collegeInput = document.getElementById("college");
  departmentInput = document.getElementById("department");

  proctorPanel = document.getElementById("proctorPanel");
  cameraFeed = document.getElementById("cameraFeed");
  overlayCandidate = document.getElementById("overlayCandidate");
  overlayTime = document.getElementById("overlayTime");
  overlayWarnings = document.getElementById("overlayWarnings");

  warningBanner = document.getElementById("warningBanner");
  examNameLine = document.getElementById("examNameLine");
  examStatusLine = document.getElementById("examStatusLine");
  timerEl = document.getElementById("timer");
  userInfoDisplay = document.getElementById("userInfoDisplay");
  setInfoEl = document.getElementById("setInfo");
  questionsContainer = document.getElementById("questionsContainer");
  nextSetBtn = document.getElementById("nextSetBtn");
  submitBtn = document.getElementById("submitBtn");

  resultCandidate = document.getElementById("resultCandidate");
  resultCandidateExtra = document.getElementById("resultCandidateExtra");
  violationSummary = document.getElementById("violationSummary");
  badgeArea = document.getElementById("badgeArea");
  badgeLabel = document.getElementById("badgeLabel");
  scoreText = document.getElementById("scoreText");
  remarkText = document.getElementById("remarkText");

  adminPanel = document.getElementById("adminPanel");
  adminEmailInput = document.getElementById("adminEmail");
  adminCodeInput = document.getElementById("adminCode");
  adminResetBtn = document.getElementById("adminResetBtn");

  // Hide admin panel by default
  if (adminPanel) {
    adminPanel.style.display = "none";
  }

  // Show/hide admin panel on Ctrl+Alt+A
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.altKey && (e.key === "a" || e.key === "A")) {
      if (!adminPanel) return;
      adminPanel.style.display = adminPanel.style.display === "none" ? "block" : "none";
    }
  });

  // Admin reset per email
  if (adminResetBtn) {
    adminResetBtn.addEventListener("click", () => {
      const email = (adminEmailInput.value || "").trim();
      const code = (adminCodeInput.value || "").trim();
      if (!email) {
        alert("Please enter the student's email ID.");
        return;
      }
      if (code !== ADMIN_RESET_CODE) {
        alert("Invalid admin reset code.");
        return;
      }
      clearLockForEmail(email);
      alert(`Lock cleared for: ${email}`);
      adminEmailInput.value = "";
      adminCodeInput.value = "";
    });
  }

  // Block mobile devices
  if (isMobile()) {
    if (lockMessageEl) {
      lockMessageEl.textContent =
        "This hackathon is allowed only on Laptop/PC. Mobile devices are not supported.";
      lockMessageEl.classList.remove("hidden");
    }
    if (userForm) {
      Array.from(userForm.elements).forEach(el => {
        el.disabled = true;
      });
    }
  }

  // Prevent accidental page close while in exam
  window.addEventListener("beforeunload", (e) => {
    if (inExam && !quizFinished) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  // Start form
  if (userForm) {
    userForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (isMobile()) {
        alert("This hackathon must be taken on a Laptop/PC, not on mobile.");
        return;
      }

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const college = collegeInput.value.trim();
      const department = departmentInput.value.trim();

      if (!name || !email || !college || !department) {
        alert("Please fill all the fields.");
        return;
      }

      if (isLocked(email)) {
        lockMessageEl.textContent =
          "You have already attempted this hackathon. Please contact admin if you need a re-attempt.";
        lockMessageEl.classList.remove("hidden");
        return;
      }

      currentUser = { name, email, college, department };
      try {
        await startExam();
      } catch {
        // handled inside
      }
    });
  }
});

// =====================
// EXAM FLOW
// =====================
function updateExamStatus() {
  if (!currentUser) return;

  // Time used text
  const totalSec = HACKATHON_DURATION_MIN * 60;
  const used = Math.max(0, totalSec - remainingSeconds);
  const usedTxt = formatTime(used);

  const attempted = Object.keys(answers).length;
  examNameLine.textContent = `Name: ${currentUser.name}`;
  examStatusLine.textContent =
    `Email: ${currentUser.email} | College: ${currentUser.college} | Stream: ${currentUser.department} | ` +
    `Time used: ${usedTxt} | Warnings: ${warningCount} / ${MAX_WARNINGS} | Attempted: ${attempted}`;
  userInfoDisplay.textContent =
    `Email: ${currentUser.email} | College: ${currentUser.college} | Stream: ${currentUser.department}`;
}

function updateTimerDisplay() {
  const text = `Time Left: ${formatTime(remainingSeconds)}`;
  timerEl.textContent = text;
  overlayTime.textContent = text;
}

function updateWarningsUI(reasonText) {
  overlayWarnings.textContent = `Warnings: ${warningCount} / ${MAX_WARNINGS}`;
  warningBanner.textContent = `⚠ ${reasonText} (Warning ${warningCount} of ${MAX_WARNINGS})`;
  warningBanner.classList.remove("hidden");
  playBeep(900, 0.25);
  setTimeout(() => {
    warningBanner.classList.add("hidden");
  }, 4000);
  updateExamStatus();
}

function issueWarning(reasonText) {
  if (!inExam || quizFinished) return;
  warningCount++;
  violationReasons.push(reasonText);
  updateWarningsUI(reasonText);
  if (warningCount >= MAX_WARNINGS) {
    finishQuiz(true, "violation");
  }
}

function startTimer() {
  remainingSeconds = HACKATHON_DURATION_MIN * 60;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (!inExam) return;
    remainingSeconds--;
    if (remainingSeconds <= 0) {
      remainingSeconds = 0;
      updateTimerDisplay();
      updateExamStatus();
      clearInterval(timerInterval);

      warningBanner.textContent = "⏰ Time is over. Auto-submitting in 15 seconds...";
      warningBanner.classList.remove("hidden");
      playBeep(700, 0.4);

      const radios = document.querySelectorAll("input[type='radio']");
      radios.forEach(r => (r.disabled = true));
      nextSetBtn.disabled = true;
      submitBtn.disabled = true;

      setTimeout(() => {
        if (!quizFinished) {
          finishQuiz(true, "time");
        }
      }, 15000);
      return;
    }
    updateTimerDisplay();
    updateExamStatus();
  }, 1000);
}

async function startCameraAndAudio() {
  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
  } catch (err) {
    alert("Camera and microphone access are required to start the hackathon.");
    throw err;
  }

  cameraFeed.srcObject = mediaStream;
  proctorPanel.classList.remove("hidden");

  // Audio monitor
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioCtx();
    const source = audioContext.createMediaStreamSource(mediaStream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);
    const dataArray = new Uint8Array(analyser.fftSize);

    noiseCheckInterval = setInterval(() => {
      if (!inExam || quizFinished) return;
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const v = (dataArray[i] - 128) / 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / dataArray.length);

      const audioTracks = mediaStream.getAudioTracks();
      if (audioTracks.length) {
        const track = audioTracks[0];
        if (!track.enabled || track.muted) {
          issueWarning("Microphone seems muted or blocked.");
        } else if (rms > NOISE_THRESHOLD) {
          issueWarning("High background noise / talking detected.");
        }
      }
    }, 7000);
  } catch {}

  // Camera track check
  cameraCheckInterval = setInterval(() => {
    if (!inExam || quizFinished) return;
    const videoTracks = mediaStream.getVideoTracks();
    if (!videoTracks.length || videoTracks[0].readyState !== "live") {
      issueWarning("Camera turned off or disconnected.");
    }
  }, 7000);

  // Freeze / dark check
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  motionCheckInterval = setInterval(() => {
    if (!inExam || quizFinished) return;
    if (!cameraFeed.videoWidth || !cameraFeed.videoHeight) return;

    canvas.width = cameraFeed.videoWidth;
    canvas.height = cameraFeed.videoHeight;
    ctx.drawImage(cameraFeed, 0, 0, canvas.width, canvas.height);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = frame.data;

    let brightnessSum = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      brightnessSum += (r + g + b) / 3;
    }
    const avgBrightness = brightnessSum / (data.length / 4);
    if (avgBrightness < 20) {
      issueWarning("Camera seems covered or too dark.");
    }

    if (prevFrameData) {
      let diffSum = 0;
      const length = data.length;
      for (let i = 0; i < length; i += 4 * 20) {
        const dr = data[i] - prevFrameData[i];
        const dg = data[i + 1] - prevFrameData[i + 1];
        const db = data[i + 2] - prevFrameData[i + 2];
        diffSum += Math.abs(dr) + Math.abs(dg) + Math.abs(db);
      }
      const avgDiff = diffSum / (length / (4 * 20));
      if (avgDiff < 10) {
        stillFrameCount++;
        const neededChecks = Math.ceil(FREEZE_DURATION / FREEZE_CHECK_INTERVAL);
        if (stillFrameCount >= neededChecks) {
          issueWarning("No movement detected for a long time (90 seconds).");
          stillFrameCount = 0;
        }
      } else {
        stillFrameCount = 0;
      }
    }

    prevFrameData = new Uint8ClampedArray(data);
  }, FREEZE_CHECK_INTERVAL * 1000);

  // Tab/visibility changes
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && inExam && !quizFinished) {
      issueWarning("Tab or window change detected.");
    }
  });

  window.addEventListener("blur", () => {
    if (inExam && !quizFinished) {
      issueWarning("Window focus lost (possible minimize or switch).");
    }
  });
}

function cleanupProctoring() {
  try {
    if (noiseCheckInterval) clearInterval(noiseCheckInterval);
    if (cameraCheckInterval) clearInterval(cameraCheckInterval);
    if (motionCheckInterval) clearInterval(motionCheckInterval);
    if (audioContext) audioContext.close();
    if (mediaStream) mediaStream.getTracks().forEach(t => t.stop());
  } catch {}
  if (proctorPanel) proctorPanel.classList.add("hidden");
}

function renderCurrentSet() {
  const totalSets = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_SET);
  const setNumber = currentSetIndex + 1;
  setInfoEl.textContent = `Set ${setNumber} of ${totalSets}`;

  const startIndex = currentSetIndex * QUESTIONS_PER_SET;
  const endIndex = Math.min(startIndex + QUESTIONS_PER_SET, shuffledQuestions.length);
  const slice = shuffledQuestions.slice(startIndex, endIndex);

  questionsContainer.innerHTML = "";
  slice.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const header = document.createElement("div");
    header.className = "question-header";
    header.textContent = `Q${startIndex + idx + 1} (${q.marks} marks)`;
    card.appendChild(header);

    const textEl = document.createElement("div");
    textEl.className = "question-text";
    textEl.textContent = q.text;
    card.appendChild(textEl);

    q.options.forEach((opt, optIndex) => {
      const optWrap = document.createElement("div");
      optWrap.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${q.id}`;
      input.value = String(optIndex);
      if (answers[q.id] === optIndex) input.checked = true;
      input.addEventListener("change", () => {
        answers[q.id] = optIndex;
        updateExamStatus();
      });

      const label = document.createElement("label");
      label.textContent = `${String.fromCharCode(65 + optIndex)}) ${opt}`;

      optWrap.appendChild(input);
      optWrap.appendChild(label);
      card.appendChild(optWrap);
    });

    questionsContainer.appendChild(card);
  });

  if (currentSetIndex < 2) {
    nextSetBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  } else {
    nextSetBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
}

function preventBackNavigation() {
  history.pushState(null, "", location.href);
  window.onpopstate = function () {
    history.pushState(null, "", location.href);
    if (inExam && !quizFinished) {
      alert("Back/forward navigation is disabled during the hackathon.");
    } else if (quizFinished) {
      alert("Back/forward navigation is locked after completing the hackathon.");
    }
  };
}

async function startExam() {
  inExam = true;
  quizFinished = false;
  warningCount = 0;
  violationReasons = [];
  answers = {};
  currentSetIndex = 0;
  remainingSeconds = HACKATHON_DURATION_MIN * 60;

  loginSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  examSection.classList.remove("hidden");

  overlayCandidate.textContent = `Candidate: ${currentUser.name}`;
  overlayWarnings.textContent = `Warnings: 0 / ${MAX_WARNINGS}`;
  overlayTime.textContent = `Time Left: ${formatTime(remainingSeconds)}`;

  shuffledQuestions = shuffleArray(QUESTIONS);
  renderCurrentSet();
  updateExamStatus();
  updateTimerDisplay();

  try {
    await startCameraAndAudio();
  } catch (e) {
    inExam = false;
    examSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
    alert("Unable to start camera/mic. Please allow access and try again.");
    return;
  }

  startTimer();
  preventBackNavigation();

  nextSetBtn.addEventListener("click", () => {
    if (!inExam || quizFinished) return;
    if (currentSetIndex < 2) {
      currentSetIndex++;
      renderCurrentSet();
    }
  });

  submitBtn.addEventListener("click", () => {
    if (!inExam || quizFinished) return;
    if (confirm("Are you sure you want to submit your answers now?")) {
      finishQuiz(false, null);
    }
  });
}

// =====================
// SCORING & RESULT
// =====================
function finishQuiz(autoSubmitted, reasonCode) {
  if (quizFinished) return;
  quizFinished = true;
  inExam = false;

  if (timerInterval) clearInterval(timerInterval);
  cleanupProctoring();

  if (currentUser && currentUser.email) {
    setLockForEmail(currentUser.email);
  }

  let totalScore = 0;
  let totalMarks = 0;
  let unansweredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;

  shuffledQuestions.forEach(q => {
    totalMarks += q.marks || 0;
    const ans = answers[q.id];
    if (ans === undefined) {
      unansweredCount++;
    } else if (ans === q.correctIndex) {
      correctCount++;
      totalScore += q.marks || 0;
    } else {
      wrongCount++;
      totalScore -= 1; // wrong answer penalty
    }
  });

  const unansweredPenalty = Math.floor(unansweredCount / 3);
  totalScore -= unansweredPenalty;

  let normalizedScore;
  if (totalMarks > 0 && totalMarks !== 100) {
    normalizedScore = Math.round((totalScore / totalMarks) * 100);
  } else {
    normalizedScore = totalScore;
  }
  if (normalizedScore > 100) normalizedScore = 100;
  const displayScore = Math.max(0, normalizedScore);

  let category = "participation";
  let remark = "";
  const violationAuto = autoSubmitted && reasonCode === "violation";

  if (!violationAuto) {
    if (displayScore >= 90) {
      category = "champion";
      remark = "Congratulations! You are now Eligible for 2nd round interview for paid internship.";
    } else if (displayScore >= 70) {
      category = "winner";
      remark = "Congratulations! You are now Eligible to choose 2nd round interview for paid internship or you can skip and choose un-paid internship.";
    } else {
      category = "participation";
      remark = "Congratulations! You are now Eligible to choose un-paid internship.";
    }
  } else {
    remark = "Your session was auto-submitted due to security violations.";
  }

  const resultData = {
    name: currentUser.name,
    email: currentUser.email,
    college: currentUser.college,
    department: currentUser.department,
    score: displayScore,
    category,
    autoSubmitted,
    reasonCode: reasonCode || null,
    violations: violationReasons,
    correctCount,
    wrongCount,
    unansweredCount,
    remark
  };

  showResult(resultData, violationAuto);
  preventBackNavigation(); // keep on result
}

function showResult(data, violationAuto) {
  examSection.classList.add("hidden");
  loginSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  resultCandidate.textContent =
    `Name: ${data.name}, Email-ID: ${data.email}`;
  resultCandidateExtra.textContent =
    `College: ${data.college} | Department: ${data.department}`;

  if (violationAuto) {
    badgeArea.classList.add("hidden");
    const uniqueReasons = [...new Set(data.violations || [])];
    let html =
      "<strong>⚠ Your session was auto-submitted due to security violations (camera/mic/noise/tab switching).</strong><br><br>";
    if (uniqueReasons.length) {
      html += "Detected issues:<ul>";
      uniqueReasons.forEach(r => {
        html += `<li>${r}</li>`;
      });
      html += "</ul><br>";
    }
    html +=
      "If you are serious, you can request 1 re-attempt:<br>" +
      "1️⃣ Take a screenshot of this page<br>" +
      "2️⃣ Email to support team with justification<br><br>" +
      "Note: Another violation may block your access for 3 months.";
    violationSummary.innerHTML = html;
    violationSummary.classList.remove("hidden");
  } else {
    violationSummary.classList.add("hidden");
    badgeArea.classList.remove("hidden");
    if (data.category === "champion") {
      badgeLabel.textContent = "Champion";
    } else if (data.category === "winner") {
      badgeLabel.textContent = "Winner";
    } else {
      badgeLabel.textContent = "Participation";
    }
  }

  scoreText.textContent = `Your Score: ${data.score} / 100`;
  remarkText.textContent = data.remark || "";
}
