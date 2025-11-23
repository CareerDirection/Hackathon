// ====== CONFIG ======
const HACKATHON_DURATION_MIN = 60;
const MAX_WARNINGS = 5;
const LOCK_DAYS = 20;
const ADMIN_RESET_CODE = "JKRESET2025";

// ====== QUESTION BANK (30 QUESTIONS, TOTAL MARKS 105) ======
const questionBank = [
  // Python & Debugging (7)
  {
    id: "Q1",
    section: "Python & Debugging",
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
    section: "Python & Debugging",
    marks: 4,
    text: "Which line correctly reverses a string s in Python?",
    options: [
      "A) rev = s[::-1]",
      "B) rev = reverse(s)",
      "C) rev = s.reverse()",
      "D) rev = rev(s)"
    ],
    correct: "A"
  },
  {
    id: "Q3",
    section: "Python & Debugging",
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
    id: "Q4",
    section: "Python & Debugging",
    marks: 3,
    text: "In debugging, what’s the best first step for runtime errors?",
    options: [
      "A) Check syntax",
      "B) Check variable initialization",
      "C) Restart IDE",
      "D) Ignore and rerun"
    ],
    correct: "B"
  },
  {
    id: "Q5",
    section: "Python & Debugging",
    marks: 4,
    text: "Identify the error:\n\ndef add(a, b=2, c):\n    return a + b + c",
    options: [
      "A) Default argument before non-default",
      "B) Missing return",
      "C) Syntax correct",
      "D) Too many arguments"
    ],
    correct: "A"
  },
  {
    id: "Q6",
    section: "Python & Debugging",
    marks: 4,
    text: "Which of these function calls is valid?",
    options: [
      "A) sum(a, b)",
      "B) sum(3, 4)",
      "C) sum(a=3, 4)",
      "D) sum(,3,4)"
    ],
    correct: "B"
  },
  {
    id: "Q7",
    section: "Python & Debugging",
    marks: 4,
    text: "What is the output?\n\nx = [1,2,3]\ny = x\ny.append(4)\nprint(x)",
    options: [
      "A) [1,2,3]",
      "B) [1,2,3,4]",
      "C) [4,3,2,1]",
      "D) Error"
    ],
    correct: "B"
  },

  // DSA (6)
  {
    id: "Q8",
    section: "DSA",
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
  {
    id: "Q9",
    section: "DSA",
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
    id: "Q10",
    section: "DSA",
    marks: 3,
    text: "Time complexity of bubble sort?",
    options: [
      "A) O(n)",
      "B) O(n²)",
      "C) O(log n)",
      "D) O(1)"
    ],
    correct: "B"
  },
  {
    id: "Q11",
    section: "DSA",
    marks: 3,
    text: "Which data structure can be implemented using two stacks?",
    options: [
      "A) Stack",
      "B) Queue",
      "C) Tree",
      "D) Heap"
    ],
    correct: "B"
  },
  {
    id: "Q12",
    section: "DSA",
    marks: 4,
    text: "Best sorting algorithm for almost sorted data?",
    options: [
      "A) Quick Sort",
      "B) Insertion Sort",
      "C) Merge Sort",
      "D) Heap Sort"
    ],
    correct: "B"
  },
  {
    id: "Q13",
    section: "DSA",
    marks: 3,
    text: "What will happen if pop is performed on empty stack?",
    options: [
      "A) Returns None",
      "B) Underflow",
      "C) Overflow",
      "D) Zero"
    ],
    correct: "B"
  },

  // Problem Solving (6)
  {
    id: "Q14",
    section: "Problem Solving",
    marks: 4,
    text: "What’s the output?\n\ns = 0\nfor i in range(1, 5):\n    s += i\nprint(s)",
    options: [
      "A) 10",
      "B) 15",
      "C) 5",
      "D) 6"
    ],
    correct: "A"
  },
  {
    id: "Q15",
    section: "Problem Solving",
    marks: 3,
    text: "Next number in sequence: 3, 6, 12, 24, ?",
    options: [
      "A) 36",
      "B) 48",
      "C) 30",
      "D) 40"
    ],
    correct: "B"
  },
  {
    id: "Q16",
    section: "Problem Solving",
    marks: 3,
    text: "Pattern output for range(3) printing stars line-by-line:",
    options: [
      "A) ***",
      "B) Triangle pattern",
      "C) Square",
      "D) None"
    ],
    correct: "B"
  },
  {
    id: "Q17",
    section: "Problem Solving",
    marks: 4,
    text: "If sum of 1 to 10 = 55, what’s sum of 1 to n formula?",
    options: [
      "A) n(n+1)/2",
      "B) n²/2",
      "C) n(n-1)/2",
      "D) n²"
    ],
    correct: "A"
  },
  {
    id: "Q18",
    section: "Problem Solving",
    marks: 3,
    text: "Logic to find even numbers from a list?",
    options: [
      "A) x%2==1",
      "B) x%2==0",
      "C) x/2==1",
      "D) x**2==even"
    ],
    correct: "B"
  },
  {
    id: "Q19",
    section: "Problem Solving",
    marks: 3,
    text: "What is printed for:\n\nfor i in range(3):\n    for j in range(2):\n        print(i+j, end='')",
    options: [
      "A) 011223",
      "B) 012345",
      "C) 010203",
      "D) 001122"
    ],
    correct: "A"
  },

  // Cloud (4)
  {
    id: "Q20",
    section: "Cloud & CI/CD",
    marks: 3,
    text: "Which AWS service provides compute instances?",
    options: [
      "A) EC2",
      "B) S3",
      "C) RDS",
      "D) CloudWatch"
    ],
    correct: "A"
  },
  {
    id: "Q21",
    section: "Cloud & CI/CD",
    marks: 4,
    text: "Which AWS service stores static files and backups?",
    options: [
      "A) EC2",
      "B) S3",
      "C) DynamoDB",
      "D) Route 53"
    ],
    correct: "B"
  },
  {
    id: "Q22",
    section: "Cloud & CI/CD",
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
    id: "Q23",
    section: "Cloud & CI/CD",
    marks: 4,
    text: "In CI/CD, Jenkins is used for:",
    options: [
      "A) Monitoring only",
      "B) Automating build & deploy",
      "C) Manual testing",
      "D) Storage"
    ],
    correct: "B"
  },

  // AI/ML (4)
  {
    id: "Q24",
    section: "AI / ML",
    marks: 3,
    text: "First step in ML workflow?",
    options: [
      "A) Train model",
      "B) Collect data",
      "C) Tune parameters",
      "D) Deploy model"
    ],
    correct: "B"
  },
  {
    id: "Q25",
    section: "AI / ML",
    marks: 4,
    text: "Which ML model predicts continuous values?",
    options: [
      "A) Classification",
      "B) Regression",
      "C) Clustering",
      "D) Segmentation"
    ],
    correct: "B"
  },
  {
    id: "Q26",
    section: "AI / ML",
    marks: 4,
    text: "Confusion Matrix is used to calculate:",
    options: [
      "A) Accuracy, Recall, Precision",
      "B) Cost function",
      "C) Training time",
      "D) Dataset size"
    ],
    correct: "A"
  },
  {
    id: "Q27",
    section: "AI / ML",
    marks: 4,
    text: "Accuracy becomes misleading when:",
    options: [
      "A) Dataset balanced",
      "B) Dataset imbalanced",
      "C) Model fast",
      "D) Model simple"
    ],
    correct: "B"
  },

  // Gen-AI (3)
  {
    id: "Q28",
    section: "Gen-AI",
    marks: 3,
    text: "An effective prompt should be:",
    options: [
      "A) Short",
      "B) Context-rich",
      "C) Random",
      "D) Over-detailed"
    ],
    correct: "B"
  },
  {
    id: "Q29",
    section: "Gen-AI",
    marks: 4,
    text: "Which is true about LLM APIs like OpenAI or Gemini?",
    options: [
      "A) Always local models",
      "B) Always cloud hosted",
      "C) Run without internet",
      "D) Need manual training every time"
    ],
    correct: "B"
  },
  {
    id: "Q30",
    section: "Gen-AI",
    marks: 3,
    text: "In API usage, the correct sequence is:",
    options: [
      "A) Response → Request → Output",
      "B) Request → Response → Output",
      "C) Output → Request",
      "D) None"
    ],
    correct: "B"
  }
];

const TOTAL_MARKS = questionBank.reduce((sum, q) => sum + q.marks, 0); // 105

// ====== GLOBAL STATE ======
let currentUser = null;
let shuffledQuestions = [];
let currentSetIndex = 0;
let userAnswers = {};
let timerId = null;
let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let warnings = 0;
let violationReasons = [];
let quizFinished = false;
let inExam = false;
let lastActivityTime = Date.now();
let activityTimerId = null;
let stream = null;

// ====== HELPERS ======
function $(id) {
  return document.getElementById(id);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

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

// ====== UI SECTION CONTROL ======
function showSection(name) {
  ["loginSection", "examSection", "resultSection"].forEach(id => {
    $(id).classList.add("hidden");
  });
  $(name).classList.remove("hidden");
}

// ====== TIMER ======
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
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

function updateTimerDisplay() {
  const t = formatTime(remainingSeconds);
  $("timer").textContent = "Time Left: " + t;
  $("overlayTime").textContent = "Time Left: " + t;
}

// ====== CAMERA ======
async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const video = $("cameraFeed");
    video.srcObject = stream;
    $("proctorPanel").classList.remove("hidden");
  } catch (e) {
    issueWarning("Camera/Mic permission denied.");
  }
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach(t => t.stop());
    stream = null;
  }
}

// ====== ACTIVITY / VIOLATIONS ======
function issueWarning(message) {
  if (!inExam || quizFinished) return;

  warnings++;
  if (!violationReasons.includes(message)) {
    violationReasons.push(message);
  }

  $("overlayWarnings").textContent = `Warnings: ${warnings} / ${MAX_WARNINGS}`;
  const banner = $("warningBanner");
  banner.textContent = `⚠ ${message}`;
  banner.classList.remove("hidden");

  // Short beep using Web Audio
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 880;
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
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

// block tab switching
document.addEventListener("visibilitychange", () => {
  if (!inExam || quizFinished) return;
  if (document.hidden) {
    issueWarning("Tab switch / window change detected.");
  }
});

// anti-copy / anti-shortcuts
function blockAndWarn(e, reason) {
  e.preventDefault();
  if (inExam && !quizFinished) {
    issueWarning(reason);
  }
}

document.addEventListener("copy",    e => blockAndWarn(e, "Copy action is not allowed during the test."));
document.addEventListener("cut",     e => blockAndWarn(e, "Cut action is not allowed during the test."));
document.addEventListener("paste",   e => blockAndWarn(e, "Paste action is not allowed during the test."));
document.addEventListener("contextmenu", e => blockAndWarn(e, "Right-click is disabled during the test."));
document.addEventListener("selectstart", e => blockAndWarn(e, "Text selection is disabled during the test."));

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (e.ctrlKey && !e.shiftKey && ["c","x","v","s"].includes(key)) {
    blockAndWarn(e, "Keyboard shortcuts like Ctrl+C/X/V/S are not allowed during the test.");
    return;
  }

  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(key))) {
    blockAndWarn(e, "Developer tools / Inspect is not allowed during the test.");
    return;
  }

  if (e.key === "PrintScreen") {
    blockAndWarn(e, "Screenshot / PrintScreen attempt detected.");
    return;
  }
});

// ====== QUESTIONS / RENDERING ======
function buildQuestionSets() {
  shuffledQuestions = [...questionBank];
  shuffleArray(shuffledQuestions);   // full shuffle each attempt
  currentSetIndex = 0;
  userAnswers = {};
}

function renderCurrentSet() {
  const container = $("questionsContainer");
  container.innerHTML = "";

  const startIdx = currentSetIndex * 10;
  const endIdx = startIdx + 10;
  const questions = shuffledQuestions.slice(startIdx, endIdx);

  $("setInfo").textContent = `Set ${currentSetIndex + 1} of 3`;

  questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-card";

    const header = document.createElement("div");
    header.className = "question-header";
    header.textContent = `Q${startIdx + idx + 1} (${q.marks} marks) — ${q.section}`;
    card.appendChild(header);

    const text = document.createElement("div");
    text.className = "question-text";
    text.textContent = q.text;
    card.appendChild(text);

    q.options.forEach(opt => {
      const val = opt.trim().charAt(0); // 'A' / 'B' etc.
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

  // Buttons
  if (currentSetIndex < 2) {
    $("nextSetBtn").classList.remove("hidden");
    $("submitBtn").classList.add("hidden");
  } else {
    $("nextSetBtn").classList.add("hidden");
    $("submitBtn").classList.remove("hidden");
  }
}

// ====== SCORE / RESULT ======
function computeResult() {
  let rawCorrectMarks = 0;
  let wrongCount = 0;
  let unansweredCount = 0;

  questionBank.forEach(q => {
    const ans = userAnswers[q.id];
    if (!ans) {
      unansweredCount++;
    } else if (ans === q.correct) {
      rawCorrectMarks += q.marks;
    } else {
      wrongCount++;
    }
  });

  const penaltyWrong = wrongCount * 1;
  const penaltyBlank = Math.floor(unansweredCount / 3) * 1;
  let finalRaw = rawCorrectMarks - penaltyWrong - penaltyBlank;
  if (finalRaw < 0) finalRaw = 0;

  const normalized = Math.round((finalRaw / TOTAL_MARKS) * 100);

  return {
    rawCorrectMarks,
    wrongCount,
    unansweredCount,
    penaltyWrong,
    penaltyBlank,
    finalRaw,
    normalized
  };
}

function showResult(resultData, autoSubmitted, reasonCode) {
  quizFinished = true;
  inExam = false;
  stopCamera();
  if (timerId) clearInterval(timerId);
  if (activityTimerId) clearInterval(activityTimerId);

  showSection("resultSection");

  $("resultCandidate").textContent =
    `Name: ${currentUser.name}, Email-ID: ${currentUser.email}`;
  $("resultCandidateExtra").textContent =
    `College: ${currentUser.college} | Department: ${currentUser.department}`;

  // Violation section
  const vBox = $("violationSummary");
  const badgeArea = $("badgeArea");
  badgeArea.classList.add("hidden");
  vBox.classList.add("hidden");
  vBox.innerHTML = "";

  if (autoSubmitted && reasonCode === "violation") {
    const list = violationReasons.length
      ? ("<ul><li>" + violationReasons.join("</li><li>") + "</li></ul>")
      : "";
    vBox.innerHTML =
      `<strong>⚠ Test auto-submitted due to security violations (camera/mic/noise/tab switching or restricted actions).</strong><br>` +
      `<br><strong>Detected issues:</strong>${list}<br>` +
      `<br>If you are serious, you can request <strong>1 re-attempt</strong>:<br>` +
      `1️⃣ Take a screenshot of this page<br>` +
      `2️⃣ Email the support team with your justification<br>` +
      `<br>Note: Another violation may block your access for up to 3 months.`;
    vBox.classList.remove("hidden");
  } else {
    // Show badge only if not violation
    const score = resultData.normalized;
    let label = "";
    if (score >= 90) {
      label = "Champion Badge — Score ≥ 90";
    } else if (score >= 70) {
      label = "Winner Badge — Score 70–89";
    } else {
      label = "Participation Badge — Score < 70";
    }
    $("badgeLabel").textContent = label;
    badgeArea.classList.remove("hidden");
  }

  $("scoreText").textContent = `Your Score: ${resultData.normalized} / 100`;

  let remark = "";
  const s = resultData.normalized;

  if (autoSubmitted && reasonCode === "violation") {
    remark = "Your session was auto-submitted due to security violations. Please contact admin if you need a re-attempt.";
  } else if (s >= 90) {
    remark = "Congratulations! You are now Eligible for 2nd round interview for Paid Internship.";
  } else if (s >= 70) {
    remark =
      "Congratulations! You are now Eligible to choose 2nd round interview for Paid Internship, or you can skip and choose Unpaid Internship.";
  } else {
    remark =
      "Congratulations! You are now Eligible to choose Unpaid Internship.";
  }

  $("remarkText").textContent = remark;

  // Store last result so same user sees result page next time
  try {
    const stored = {
      name: currentUser.name,
      email: currentUser.email,
      college: currentUser.college,
      department: currentUser.department,
      normalized: resultData.normalized,
      autoSubmitted,
      reasonCode
    };
    localStorage.setItem("hackathon_last_result", JSON.stringify(stored));
    localStorage.setItem("hackathon_last_email", currentUser.email);
  } catch {}
}

// ====== FINISH / SUBMIT ======
function finishQuiz(reasonCode) {
  const result = computeResult();
  // lock for 20 days
  setLock(currentUser.email);

  const autoSubmitted = reasonCode === "violation" || reasonCode === "time";
  showResult(result, autoSubmitted, reasonCode);
}

function autoSubmit(reasonCode) {
  if (quizFinished) return;
  quizFinished = true;
  finishQuiz(reasonCode);
}

// ====== START EXAM ======
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

  buildQuestionSets();
  renderCurrentSet();
  startTimer();
  startCamera();
  setupActivityWatcher();

  // block back navigation
  history.pushState(null, "", location.href);
  window.addEventListener("popstate", () => {
    history.pushState(null, "", location.href);
  });

  showSection("examSection");
}

// ====== DOM READY ======
document.addEventListener("DOMContentLoaded", () => {
  const userForm = $("userForm");
  const startBtn = $("startBtn");
  const lockMsg = $("lockMessage");

  // Block mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  if (isMobile) {
    lockMsg.textContent =
      "This Hackathon must be attended from a Laptop / PC. Mobile / Tablet devices are not allowed.";
    lockMsg.classList.remove("hidden");
    startBtn.disabled = true;
  }

  // If last result exists and that email is still locked => show result directly
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
      showResult(
        { normalized: data.normalized },
        data.autoSubmitted,
        data.reasonCode
      );
      showSection("resultSection");
      return; // skip showing login page
    } catch {
      // ignore parse errors
    }
  }

  // Otherwise show login
  showSection("loginSection");

  // Start Hackathon
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

  // Next Set
  $("nextSetBtn").addEventListener("click", () => {
    if (currentSetIndex < 2) {
      currentSetIndex++;
      renderCurrentSet();
    }
  });

  // Submit
  $("submitBtn").addEventListener("click", () => {
    if (confirm("Are you sure you want to submit your Hackathon answers?")) {
      autoSubmit("normal");
    }
  });

  // ADMIN RESET
  $("adminResetBtn").addEventListener("click", () => {
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

    alert(`Lock cleared for: ${email}`);
    location.reload();
  });
});
