// =========================
// CONFIG
// =========================
const HACKATHON_DURATION_MIN = 90; // 90 minutes
const LOCK_DAYS = 20;
const LOCK_KEY = "global_hackathon_last_attempt";
const ADMIN_RESET_CODE = "CDRESET2025";

// =========================
// QUESTIONS (30 total, 105 marks; normalized to 100)
// =========================
const QUESTIONS = [
  // 1
  {
    id: 1,
    text: `What will this code output?\n\nfor i in range(2, 7, 2):\n    print(i, end=' ')`,
    options: ["2 4 6", "2 3 4 5 6", "2 4", "3 5 7"],
    correctIndex: 0,
    marks: 3
  },
  // 2
  {
    id: 2,
    text: "Which line correctly reverses a string s in Python?",
    options: ["rev = s[::-1]", "rev = reverse(s)", "rev = s.reverse()", "rev = rev(s)"],
    correctIndex: 0,
    marks: 4
  },
  // 3
  {
    id: 3,
    text: `What’s the output of: len("Tech" + "Talk")?`,
    options: ["8", "7", "9", "Error"],
    correctIndex: 0,
    marks: 3
  },
  // 4
  {
    id: 4,
    text: "In debugging, what’s the best first step for runtime errors?",
    options: ["Check syntax", "Check variable initialization", "Restart IDE", "Ignore and rerun"],
    correctIndex: 1,
    marks: 3
  },
  // 5
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
  // 6
  {
    id: 6,
    text: "Which of these function calls is valid (assume sum is defined as sum(a, b))?",
    options: ["sum(a, b)", "sum(3, 4)", "sum(a=3, 4)", "sum(,3,4)"],
    correctIndex: 1,
    marks: 4
  },
  // 7
  {
    id: 7,
    text: `What is printed?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)`,
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 3, 2, 1]", "Error"],
    correctIndex: 1,
    marks: 4
  },
  // 8
  {
    id: 8,
    text: "Stack works on which principle?",
    options: ["FIFO", "FILO", "LIFO", "LILO"],
    correctIndex: 2,
    marks: 3
  },
  // 9
  {
    id: 9,
    text: "Which algorithm is best for searching in a sorted array?",
    options: ["Linear Search", "Binary Search", "Bubble Sort", "Merge Sort"],
    correctIndex: 1,
    marks: 4
  },
  // 10
  {
    id: 10,
    text: "What is the time complexity of Bubble Sort in the worst case?",
    options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
    correctIndex: 1,
    marks: 3
  },
  // 11
  {
    id: 11,
    text: "Which data structure can be implemented using two stacks?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    correctIndex: 1,
    marks: 3
  },
  // 12
  {
    id: 12,
    text: "Which sorting algorithm is best for almost-sorted data?",
    options: ["Quick Sort", "Insertion Sort", "Merge Sort", "Heap Sort"],
    correctIndex: 1,
    marks: 4
  },
  // 13
  {
    id: 13,
    text: "What happens if pop is performed on an empty stack?",
    options: ["Returns None", "Underflow", "Overflow", "Returns Zero"],
    correctIndex: 1,
    marks: 3
  },
  // 14
  {
    id: 14,
    text: `What is the output?\n\ns = 0\nfor i in range(1, 5):\n    s += i\nprint(s)`,
    options: ["10", "15", "5", "6"],
    correctIndex: 0,
    marks: 4
  },
  // 15
  {
    id: 15,
    text: "Next number in the sequence: 3, 6, 12, 24, ?",
    options: ["36", "48", "30", "40"],
    correctIndex: 1,
    marks: 3
  },
  // 16
  {
    id: 16,
    text: `What pattern is printed by this code?\n\nfor i in range(3):\n    print("*" * (i + 1))`,
    options: ["***", "Triangle pattern", "Square", "None"],
    correctIndex: 1,
    marks: 3
  },
  // 17
  {
    id: 17,
    text: "If sum of 1 to 10 is 55, what is the general formula for the sum of 1 to n?",
    options: ["n(n+1)/2", "n²/2", "n(n-1)/2", "n²"],
    correctIndex: 0,
    marks: 4
  },
  // 18
  {
    id: 18,
    text: "Logic to find even numbers from a list?",
    options: ["x % 2 == 1", "x % 2 == 0", "x / 2 == 1", "x**2 is even"],
    correctIndex: 1,
    marks: 3
  },
  // 19
  {
    id: 19,
    text: `What is printed?\n\nfor i in range(3):\n    for j in range(2):\n        print(i + j, end='')`,
    options: ["011223", "012345", "010203", "001122"],
    correctIndex: 0,
    marks: 3
  },
  // 20
  {
    id: 20,
    text: "Which AWS service provides compute instances?",
    options: ["EC2", "S3", "RDS", "CloudWatch"],
    correctIndex: 0,
    marks: 3
  },
  // 21
  {
    id: 21,
    text: "Which AWS service stores static files and backups?",
    options: ["EC2", "S3", "DynamoDB", "Route53"],
    correctIndex: 1,
    marks: 4
  },
  // 22
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
  // 23
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
  // 24
  {
    id: 24,
    text: "What is the first step in a typical ML workflow?",
    options: ["Train model", "Collect data", "Tune parameters", "Deploy model"],
    correctIndex: 1,
    marks: 3
  },
  // 25
  {
    id: 25,
    text: "Which ML model type predicts continuous values?",
    options: ["Classification", "Regression", "Clustering", "Segmentation"],
    correctIndex: 1,
    marks: 4
  },
  // 26
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
  // 27
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
  // 28
  {
    id: 28,
    text: "An effective prompt for Gen-AI should be:",
    options: ["Short", "Context-rich", "Random", "Over-detailed"],
    correctIndex: 1,
    marks: 3
  },
  // 29
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
  // 30
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

// ============= STATE =================
let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let timerInterval = null;
let quizFinished = false;
let shuffledQuestions = [];

// ========== HELPERS ==========
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

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
  const lockMessageEl = document.getElementById("lockMessage");
  const startSection = document.getElementById("startSection");
  const quizSection = document.getElementById("quizSection");
  const resultSection = document.getElementById("resultSection");
  const userForm = document.getElementById("userForm");
  const questionsContainer = document.getElementById("questionsContainer");
  const timerEl = document.getElementById("timer");
  const userInfoDisplay = document.getElementById("userInfoDisplay");
  const submitBtn = document.getElementById("submitBtn");
  const scoreTextEl = document.getElementById("scoreText");
  const summaryTextEl = document.getElementById("summaryText");
  const remarkTextEl = document.getElementById("remarkText");
  const adminResetBtn = document.getElementById("adminResetBtn");
  const adminCodeInput = document.getElementById("adminCode");

  // Lock check
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
      alert("Lock cleared. Refresh the page to allow a new attempt.");
    } else {
      alert("Incorrect admin code.");
    }
  });

  // Start form submit
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (quizFinished) return;

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

    userInfoDisplay.textContent = `${name} | ${email}`;
    shuffledQuestions = shuffleArray(QUESTIONS);

    // Render all questions
    renderQuestions(shuffledQuestions, questionsContainer);

    remainingSeconds = HACKATHON_DURATION_MIN * 60;
    updateTimerDisplay(timerEl);

    startSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    resultSection.classList.add("hidden");

    startTimer(timerEl, () => finishQuiz(true));
    preventBackNavigation();
    enableCheatRestrictions();
  });

  // Submit button
  submitBtn.addEventListener("click", () => {
    if (quizFinished) return;
    if (confirm("Are you sure you want to submit your answers now?")) {
      finishQuiz(false);
    }
  });

  function renderQuestions(questions, container) {
    container.innerHTML = "";
    questions.forEach((q, idx) => {
      const card = document.createElement("div");
      card.className = "question-card";

      const header = document.createElement("div");
      header.className = "question-header";
      header.textContent = `Q${idx + 1} (${q.marks} marks)`;
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

        const label = document.createElement("label");
        label.textContent = `${String.fromCharCode(65 + optIndex)}) ${opt}`;

        optWrap.appendChild(input);
        optWrap.appendChild(label);
        card.appendChild(optWrap);
      });

      container.appendChild(card);
    });
  }

  function startTimer(timerElement, onTimeUp) {
    updateTimerDisplay(timerElement);
    timerInterval = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        remainingSeconds = 0;
        updateTimerDisplay(timerElement);
        if (!quizFinished) {
          onTimeUp();
        }
      } else {
        updateTimerDisplay(timerElement);
      }
    }, 1000);
  }

  function updateTimerDisplay(timerElement) {
    timerElement.textContent = `Time Left: ${formatTime(remainingSeconds)}`;
  }

  function finishQuiz(autoSubmitted) {
    if (quizFinished) return;
    quizFinished = true;

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    // Calculate score
    let totalScore = 0;
    let totalMarks = 0;

    shuffledQuestions.forEach(q => {
      totalMarks += q.marks || 0;
      const selected = document.querySelector(
        `input[name="q_${q.id}"]:checked`
      );
      if (selected) {
        const chosenIndex = parseInt(selected.value, 10);
        if (chosenIndex === q.correctIndex) {
          totalScore += q.marks || 0;
        }
      }
    });

    // Normalize to 100
    let normalizedScore = totalScore;
    if (totalMarks > 0 && totalMarks !== 100) {
      normalizedScore = Math.round((totalScore / totalMarks) * 100);
    }

    // Lock further attempts
    setLock();

    // Hide quiz, show result
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    scoreTextEl.textContent = `Your Score: ${normalizedScore} / 100`;
    summaryTextEl.textContent = autoSubmitted
      ? "Time is over. Your test was auto-submitted."
      : "You have submitted your hackathon answers.";

    // Classification
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

  function preventBackNavigation() {
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
});
