// =========================
// CONFIG
// =========================
const HACKATHON_DURATION_MIN = 60; // 60 minutes
const LOCK_DAYS = 20;
const LOCK_KEY = "global_hackathon_last_attempt";
const ADMIN_RESET_CODE = "CDRESET2025";

const QUESTIONS_PER_SET = 10;
const MAX_WARNINGS = 5;

// No-movement detection: 55 seconds (check every 5s -> 11 intervals)
const NO_MOTION_INTERVAL_SEC = 5;
const NO_MOTION_THRESHOLD_CHECKS = Math.ceil(55 / NO_MOTION_INTERVAL_SEC);

// Audio thresholds
const NOISE_THRESHOLD = 0.08; // adjust if too sensitive

// =========================
// QUESTIONS (30 total; 105 marks normalized to 100)
// =========================
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

// ============= STATE =================
let remainingSeconds = HACKATHON_DURATION_MIN * 60;
let timerInterval = null;
let quizFinished = false;
let shuffledQuestions = [];
let currentSetIndex = 0; // 0,1,2
let answers = {}; // qId -> selectedIndex

// Proctoring
let mediaStream = null;
let audioContext = null;
let noiseCheckInterval = null;
let cameraCheckInterval = null;
let motionCheckInterval = null;
let warningCount = 0;
let violationReasons = [];

let previousFrameData = null;
let stillFrameChecks = 0;

// Candidate info
let candidateName = "";
let candidateEmail = "";

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

function playBeep() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 880;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.3);
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {
    // ignore if audio cannot play
  }
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
  const nextSetBtn = document.getElementById("nextSetBtn");
  const submitBtn = document.getElementById("submitBtn");
  const scoreTextEl = document.getElementById("scoreText");
  const summaryTextEl = document.getElementById("summaryText");
  const remarkTextEl = document.getElementById("remarkText");
  const adminResetBtn = document.getElementById("adminResetBtn");
  const adminCodeInput = document.getElementById("adminCode");
  const setInfoEl = document.getElementById("setInfo");
  const warningBanner = document.getElementById("warningBanner");

  const badgeArea = document.getElementById("badgeArea");
  const championBadges = document.getElementById("championBadges");
  const singleBadgeWrapper = document.getElementById("singleBadgeWrapper");
  const badgeImg = document.getElementById("badgeImg");
  const badgeLabel = document.getElementById("badgeLabel");

  const proctorOverlay = document.getElementById("proctorOverlay");
  const cameraFeed = document.getElementById("cameraFeed");
  const overlayCandidate = document.getElementById("overlayCandidate");
  const overlayTime = document.getElementById("overlayTime");
  const overlayWarnings = document.getElementById("overlayWarnings");

  const violationSummaryEl = document.getElementById("violationSummary");

  const examNameLine = document.getElementById("examNameLine");
  const examStatusLine = document.getElementById("examStatusLine");
  const resultSummaryLine = document.getElementById("resultSummaryLine");

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

  function updateWarningUI(reason) {
    overlayWarnings.textContent = `Warnings: ${warningCount} / ${MAX_WARNINGS}`;
    warningBanner.textContent = `⚠ ${reason} (Warning ${warningCount} of ${MAX_WARNINGS})`;
    warningBanner.classList.remove("hidden");
    playBeep();
    setTimeout(() => {
      warningBanner.classList.add("hidden");
    }, 4000);
  }

  function issueWarning(reason) {
    if (quizFinished) return;
    warningCount++;
    violationReasons.push(reason);
    updateWarningUI(reason);
    updateExamStatus(); // refresh warnings line
    if (warningCount >= MAX_WARNINGS) {
      finishQuiz(true, "violation");
    }
  }

  async function startProctoring() {
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
    proctorOverlay.classList.remove("hidden");
    document.body.classList.add("with-overlay");

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
        if (quizFinished) return;

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
    } catch (e) {
      console.warn("Audio monitoring not fully supported:", e);
    }

    // Camera track monitor (ON/OFF)
    cameraCheckInterval = setInterval(() => {
      if (quizFinished) return;
      const videoTracks = mediaStream.getVideoTracks();
      if (!videoTracks.length || videoTracks[0].readyState !== "live") {
        issueWarning("Camera turned off or disconnected.");
      }
    }, 7000);

    // No-motion / brightness check using canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    motionCheckInterval = setInterval(() => {
      if (quizFinished) return;
      if (!cameraFeed.videoWidth || !cameraFeed.videoHeight) return;

      canvas.width = cameraFeed.videoWidth;
      canvas.height = cameraFeed.videoHeight;
      ctx.drawImage(cameraFeed, 0, 0, canvas.width, canvas.height);
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      // Compute brightness
      let brightnessSum = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = (r + g + b) / 3;
        brightnessSum += brightness;
      }
      const avgBrightness = brightnessSum / (data.length / 4);

      if (avgBrightness < 20) {
        issueWarning("Camera seems covered or too dark.");
      }

      // Compute motion (difference with previous frame)
      if (previousFrameData) {
        let diffSum = 0;
        const length = data.length;
        for (let i = 0; i < length; i += 4 * 20) {
          const dr = data[i] - previousFrameData[i];
          const dg = data[i + 1] - previousFrameData[i + 1];
          const db = data[i + 2] - previousFrameData[i + 2];
          const diff = Math.abs(dr) + Math.abs(dg) + Math.abs(db);
          diffSum += diff;
        }
        const avgDiff = diffSum / (length / (4 * 20));
        if (avgDiff < 10) {
          stillFrameChecks++;
          if (stillFrameChecks >= NO_MOTION_THRESHOLD_CHECKS) {
            issueWarning("No face / no movement detected for a while.");
            stillFrameChecks = 0;
          }
        } else {
          stillFrameChecks = 0;
        }
      }

      previousFrameData = new Uint8ClampedArray(data);
    }, NO_MOTION_INTERVAL_SEC * 1000);

    // Tab switch detection
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && !quizFinished) {
        issueWarning("Tab or window change detected.");
      }
    });
  }

  function cleanupProctoring() {
    try {
      if (noiseCheckInterval) clearInterval(noiseCheckInterval);
      if (cameraCheckInterval) clearInterval(cameraCheckInterval);
      if (motionCheckInterval) clearInterval(motionCheckInterval);
      if (audioContext) audioContext.close();
      if (mediaStream) {
        mediaStream.getTracks().forEach(t => t.stop());
      }
    } catch (e) {
      // ignore
    }
    // Always hide overlay when exam ends
    const proctorOverlay = document.getElementById("proctorOverlay");
    proctorOverlay.classList.add("hidden");
    document.body.classList.remove("with-overlay");
  }

  function updateExamStatus() {
    if (!candidateName || !candidateEmail) return;

    const totalSeconds = HACKATHON_DURATION_MIN * 60;
    let used = totalSeconds - remainingSeconds;
    if (used < 0) used = 0;
    const timeUsed = formatTime(used);

    const attempted = Object.keys(answers).length;

    examNameLine.textContent =
      `Name: ${candidateName}, Email-ID: ${candidateEmail}`;
    examStatusLine.textContent =
      `Time used: ${timeUsed} | Warnings: ${warningCount} / ${MAX_WARNINGS} | Attempted ${attempted} Questions`;
  }

  // Start form submit
  userForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (quizFinished) return;

    const info = getLockInfo();
    if (info && info.daysSince < LOCK_DAYS) {
      alert("This browser is locked for 20 days from the last attempt.");
      return;
    }

    candidateName = document.getElementById("name").value.trim();
    candidateEmail = document.getElementById("email").value.trim();

    if (!candidateName || !candidateEmail) {
      alert("Please enter both name and email.");
      return;
    }

    try {
      await startProctoring();
    } catch {
      return; // failed, do not start quiz
    }

    userInfoDisplay.textContent = `${candidateName} | ${candidateEmail}`;

    overlayCandidate.textContent = `Candidate: ${candidateName} (${candidateEmail})`;
    overlayWarnings.textContent = `Warnings: 0 / ${MAX_WARNINGS}`;
    overlayTime.textContent = `Time Left: ${formatTime(remainingSeconds)}`;

    shuffledQuestions = shuffleArray(QUESTIONS);
    currentSetIndex = 0;
    answers = {};
    warningCount = 0;
    violationReasons = [];
    previousFrameData = null;
    stillFrameChecks = 0;

    remainingSeconds = HACKATHON_DURATION_MIN * 60;
    updateTimerDisplay(timerEl, overlayTime);

    startSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    resultSection.classList.add("hidden");

    renderCurrentSet(setInfoEl, questionsContainer);
    updateExamStatus();
    startTimer(timerEl, overlayTime, (reason) => finishQuiz(true, reason));
    preventBackNavigation();
    enableCheatRestrictions();
  });

  nextSetBtn.addEventListener("click", () => {
    if (quizFinished) return;
    if (currentSetIndex < 2) {
      currentSetIndex++;
      renderCurrentSet(setInfoEl, questionsContainer);
      if (currentSetIndex === 2) {
        nextSetBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
      }
    }
  });

  submitBtn.addEventListener("click", () => {
    if (quizFinished) return;
    if (confirm("Are you sure you want to submit your answers now?")) {
      finishQuiz(false, null);
    }
  });

  function renderCurrentSet(setInfoElement, container) {
    const totalSets = Math.ceil(shuffledQuestions.length / QUESTIONS_PER_SET);
    const setNumber = currentSetIndex + 1;
    setInfoElement.textContent = `Set ${setNumber} of ${totalSets}`;

    const startIndex = currentSetIndex * QUESTIONS_PER_SET;
    const endIndex = Math.min(startIndex + QUESTIONS_PER_SET, shuffledQuestions.length);
    const slice = shuffledQuestions.slice(startIndex, endIndex);

    container.innerHTML = "";
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

        if (answers[q.id] === optIndex) {
          input.checked = true;
        }

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

      container.appendChild(card);
    });

    if (currentSetIndex < 2) {
      nextSetBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }
  }

  function startTimer(timerElement, overlayTimeElement, onTimeUp) {
    updateTimerDisplay(timerElement, overlayTimeElement);
    timerInterval = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        remainingSeconds = 0;
        updateTimerDisplay(timerElement, overlayTimeElement);
        updateExamStatus();
        if (!quizFinished) {
          onTimeUp("time");
        }
      } else {
        updateTimerDisplay(timerElement, overlayTimeElement);
        updateExamStatus();
      }
    }, 1000);
  }

  function updateTimerDisplay(timerElement, overlayTimeElement) {
    const text = `Time Left: ${formatTime(remainingSeconds)}`;
    timerElement.textContent = text;
    if (overlayTimeElement) {
      overlayTimeElement.textContent = text;
    }
  }

  function finishQuiz(autoSubmitted, reasonCode) {
    if (quizFinished) return;
    quizFinished = true;

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    cleanupProctoring();

    let totalScore = 0;
    let totalMarks = 0;

    shuffledQuestions.forEach(q => {
      totalMarks += q.marks || 0;
      const ans = answers[q.id];
      if (ans !== undefined) {
        if (ans === q.correctIndex) {
          totalScore += q.marks || 0;     // correct: +marks
        } else {
          totalScore -= 1;               // wrong: -1
        }
      }
    });

    // Normalize to 100 and clamp between 0 and 100
    let normalizedScore;
    if (totalMarks > 0 && totalMarks !== 100) {
      normalizedScore = Math.round((totalScore / totalMarks) * 100);
    } else {
      normalizedScore = totalScore;
    }
    if (normalizedScore < 0) normalizedScore = 0;
    if (normalizedScore > 100) normalizedScore = 100;

    setLock();

    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    // Result summary line
    resultSummaryLine.textContent =
      `Name: ${candidateName}, Email-ID: ${candidateEmail} | Your Score: ${normalizedScore} / 100`;

    scoreTextEl.textContent = `Your Score: ${normalizedScore} / 100`;

    violationSummaryEl.classList.add("hidden");
    violationSummaryEl.innerHTML = "";

    const violationAuto = autoSubmitted && reasonCode === "violation";

    if (autoSubmitted && reasonCode === "time") {
      summaryTextEl.textContent = "Time is over. Your test was auto-submitted.";
    } else if (violationAuto) {
      // Show violation summary block
      const uniqueReasons = [...new Set(violationReasons)];
      let html = "<strong>⚠ Test auto-submitted due to Security Violations.</strong><br><br>";
      if (uniqueReasons.length) {
        html += "Detected issues:<ul>";
        uniqueReasons.forEach(r => {
          html += `<li>${r}</li>`;
        });
        html += "</ul>";
      }
      html +=
        "📌 To request ONE FINAL re-attempt:<br>" +
        "Step-1: Take a screenshot of this page<br>" +
        "Step-2: Email us at " +
        `<a href="mailto:support@careerdirection.co.in"><strong>support@careerdirection.co.in</strong></a><br><br>` +
        "⚠ If violation happens again after re-attempt approval, you will be blocked for the next 3 months.";

      violationSummaryEl.innerHTML = html;
      violationSummaryEl.classList.remove("hidden");

      summaryTextEl.textContent = "Your responses were auto-submitted due to security violations.";
    } else {
      summaryTextEl.textContent = "You have submitted your hackathon answers.";
    }

    // Classification + badges + messages
    let remark = "";
    let resultType = "";

    if (normalizedScore >= 90) {
      resultType = "champion";
      remark =
        "Congratulations! You are now Eligible for 2nd round interview for paid internship.";
    } else if (normalizedScore >= 70) {
      resultType = "winner";
      remark =
        "Congratulations! You are now Eligible to choose 2nd round interview for paid internship or you can skip and choose un-paid internship.";
    } else {
      resultType = "participation";
      remark =
        "Congratulations! You are now Eligible to choose un-paid internship.";
    }

    if (violationAuto) {
      remark =
        "You session got closed due to violation so email to admin and request for 1 more attempt and make sure you take it serious support@careerdirection.co.in";
    }

    remarkTextEl.textContent = remark;

    // Show or hide badges
    badgeArea.classList.add("hidden");
    championBadges.classList.add("hidden");
    singleBadgeWrapper.classList.add("hidden");

    if (!violationAuto) {
      badgeArea.classList.remove("hidden");

      if (resultType === "champion") {
        championBadges.classList.remove("hidden");
        badgeLabel.textContent = "Champion";
      } else if (resultType === "winner") {
        singleBadgeWrapper.classList.remove("hidden");
        badgeImg.src = "winner.png";
        badgeImg.alt = "Winner Badge";
        badgeLabel.textContent = "Winner";
      } else {
        singleBadgeWrapper.classList.remove("hidden");
        badgeImg.src = "participation.png";
        badgeImg.alt = "Participation Badge";
        badgeLabel.textContent = "Participation";
      }
    }
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
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      issueWarning("Right-click / context menu is blocked during the exam.");
    });

    // Basic key restrictions
    document.addEventListener("keydown", (e) => {
      if (
        e.ctrlKey &&
        ["c", "v", "x", "s", "u", "p"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        issueWarning("Keyboard shortcuts for copy/save/inspect are blocked during the exam.");
      }

      if (e.key === "F12") {
        e.preventDefault();
        issueWarning("Developer tools access is blocked during the exam.");
      }
    });
  }
});
