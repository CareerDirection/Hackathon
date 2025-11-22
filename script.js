// =========================
// CONFIG
// =========================
const HACKATHON_DURATION_MIN = 90; // 90 minutes
const LOCK_DAYS = 20;
const LOCK_KEY = "hackathon_last_attempt";
const ADMIN_RESET_CODE = "CDRESET2025";

// ======= PLACEHOLDER QUESTIONS =========
// Replace this array with YOUR real 30 questions later.
const QUESTIONS = [
  {
    id: 1,
    text: "Sample Question 1: 2 + 2 = ?",
    options: ["1", "2", "3", "4"],
    correctIndex: 3,
    marks: 4
  },
  {
    id: 2,
    text: "Sample Question 2: Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    correctIndex: 1,
    marks: 4
  }
  // 👉 Add more questions here up to 30
  // Each question: { id, text, options[4], correctIndex(0-3), marks }
];

// ============= STATE =================
let shuffledQuestions = [];
let currentIndex = 0;
let answers = {}; // questionId -> selectedIndex
let timerInterval = null;
let remainingSeconds = HACKATHON_DURATION_MIN * 60;

// ============= HELPERS ===============
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

function setLock() {
  const now = Date.now();
  localStorage.setItem(LOCK_KEY, String(now));
}

function getLockInfo() {
  const v = localStorage.getItem(LOCK_KEY);
  if (!v) return null;
  const last = parseInt(v, 10);
  if (isNaN(last)) return null;

  const msSince = Date.now() - last;
  const daysSince = msSince / (1000 * 60 * 60 * 24);
  return { last, daysSince };
}

function clearLock() {
  localStorage.removeItem(LOCK_KEY);
}

// ========== DOM ELEMENTS ===========
const lockMessageEl = document.getElementById("lockMessage");
const startSection = document.getElementById("startSection");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const userForm = document.getElementById("userForm");
const timerEl = document.getElementById("timer");
const userInfoDisplay = document.getElementById("userInfoDisplay");
const questionNumberEl = document.getElementById("questionNumber");
const questionTextEl = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const scoreTextEl = document.getElementById("scoreText");
const summaryTextEl = document.getElementById("summaryText");
const remarkTextEl = document.getElementById("remarkText");
const adminResetBtn = document.getElementById("adminResetBtn");
const adminCodeInput = document.getElementById("adminCode");

// ========== INITIAL LOCK CHECK ==========
(function checkLock() {
  const info = getLockInfo();
  if (!info) return;
  if (info.daysSince < LOCK_DAYS) {
    const remainingDays = Math.ceil(LOCK_DAYS - info.daysSince);
    lockMessageEl.classList.remove("hidden");
    lockMessageEl.textContent =
      `You have already attempted this hackathon. ` +
      `You can attempt again after approximately ${remainingDays} day(s).`;
    // disable form
    userForm.querySelectorAll("input, button").forEach(el => (el.disabled = true));
  }
})();

// Admin reset
adminResetBtn.addEventListener("click", () => {
  const val = adminCodeInput.value.trim();
  if (!val) {
    alert("Enter admin reset code.");
    return;
  }
  if (val === ADMIN_RESET_CODE) {
    clearLock();
    alert("Lock cleared. Refresh the page and participant can attempt again.");
  } else {
    alert("Incorrect admin code.");
  }
});

// ========== START HACKATHON ==========
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // If locked, don't start
  const info = getLockInfo();
  if (info && info.daysSince < LOCK_DAYS) {
    alert("This browser is locked for 20 days from the last attempt.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter both name and email.");
    return;
  }

  // Save to display (not sending anywhere in this version)
  userInfoDisplay.textContent = `${name} | ${email}`;

  // Prepare quiz
  shuffledQuestions = shuffleArray(QUESTIONS);
  currentIndex = 0;
  answers = {};
  remainingSeconds = HACKATHON_DURATION_MIN * 60;

  startSection.classList.add("hidden");
  quizSection.classList.remove("hidden");
  resultSection.classList.add("hidden");

  renderQuestion();
  startTimer();
  preventBackNavigation();
  enableCheatRestrictions();
});

// ========== RENDER QUESTION ==========
function renderQuestion() {
  const q = shuffledQuestions[currentIndex];
  if (!q) return;

  questionNumberEl.textContent = `Question ${currentIndex + 1} of ${shuffledQuestions.length}`;
  questionTextEl.textContent = q.text;

  optionsContainer.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const wrapper = document.createElement("div");
    wrapper.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = idx;

    if (answers[q.id] === idx) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      answers[q.id] = idx;
    });

    const label = document.createElement("label");
    label.textContent = opt;

    wrapper.appendChild(input);
    wrapper.appendChild(label);
    optionsContainer.appendChild(wrapper);
  });

  // Last question: change Next button text
  if (currentIndex === shuffledQuestions.length - 1) {
    nextBtn.textContent = "Finish & Submit";
  } else {
    nextBtn.textContent = "Next Question";
  }
}

// Next button handler
nextBtn.addEventListener("click", () => {
  if (currentIndex < shuffledQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    // last question -> submit
    finishQuiz(false);
  }
});

// Manual submit
submitBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to submit now?")) {
    finishQuiz(false);
  }
});

// ========== TIMER ==========
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    remainingSeconds--;
    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      remainingSeconds = 0;
      updateTimerDisplay();
      finishQuiz(true); // auto submit
    } else {
      updateTimerDisplay();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerEl.textContent = `Time Left: ${formatTime(remainingSeconds)}`;
}

// ========== FINISH QUIZ ==========
function finishQuiz(autoSubmitted) {
  // Stop timer
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // Calculate score
  let totalScore = 0;
  let totalMarks = 0;

  shuffledQuestions.forEach(q => {
    const marks = q.marks || 0;
    totalMarks += marks;
    if (answers[q.id] === q.correctIndex) {
      totalScore += marks;
    }
  });

  // Normalize to 100 if needed
  let normalizedScore = totalScore;
  if (totalMarks !== 100 && totalMarks > 0) {
    normalizedScore = Math.round((totalScore / totalMarks) * 100);
  }

  // Lock further attempts
  setLock();

  // Show result
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  scoreTextEl.textContent = `Your Score: ${normalizedScore} / 100`;

  if (autoSubmitted) {
    summaryTextEl.textContent = "Time is over. Your test was auto-submitted.";
  } else {
    summaryTextEl.textContent = "You have submitted your hackathon answers.";
  }

  // Classification logic
  let remark = "";
  if (normalizedScore >= 90) {
    remark =
      "🏆 You are a Champion and eligible for Paid Internship – Interview Level 2.";
  } else if (normalizedScore >= 70) {
    remark =
      "🥇 You are a Winner. You can choose Interview Level 1 or skip interview and opt for Unpaid Internship.";
  } else {
    remark =
      "🌱 You are eligible for an Unpaid Internship and further learning opportunities.";
  }

  remarkTextEl.textContent = remark;
}

// ========== CHEAT RESTRICTIONS ==========
function preventBackNavigation() {
  // Push current state
  history.pushState(null, "", location.href);
  window.onpopstate = function () {
    history.pushState(null, "", location.href);
    alert("Back navigation is disabled during the hackathon.");
  };
}

function enableCheatRestrictions() {
  // Disable right-click
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Basic key restrictions
  document.addEventListener("keydown", (e) => {
    // Ctrl+C/V/X/S/U/P etc.
    if (
      e.ctrlKey &&
      ["c", "v", "x", "s", "u", "p"].includes(e.key.toLowerCase())
    ) {
      e.preventDefault();
    }

    // F12 (DevTools)
    if (e.key === "F12") {
      e.preventDefault();
    }
  });
}

// On load, just ensure any prior cheat restrictions are not yet active
// They get enabled when hackathon starts.

