const LOCK_KEY = "global_hackathon_last_attempt";
const LOCK_DAYS = 20;
const ADMIN_RESET_CODE = "CDRESET2025";

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

document.addEventListener("DOMContentLoaded", () => {
  const lockMessageEl = document.getElementById("lockMessage");
  const userForm = document.getElementById("userForm");
  const adminResetBtn = document.getElementById("adminResetBtn");
  const adminCodeInput = document.getElementById("adminCode");

  // Check lock on load
  const info = getLockInfo();
  if (info && info.daysSince < LOCK_DAYS) {
    const remainingDays = Math.ceil(LOCK_DAYS - info.daysSince);
    lockMessageEl.classList.remove("hidden");
    lockMessageEl.textContent =
      `You have already attempted this hackathon. ` +
      `You can attempt again after approximately ${remainingDays} day(s).`;
    userForm.querySelectorAll("input, button").forEach(el => (el.disabled = true));
  }

  // Admin reset
  adminResetBtn.addEventListener("click", () => {
    const val = adminCodeInput.value.trim();
    if (!val) {
      alert("Enter admin reset code.");
      return;
    }
    if (val === ADMIN_RESET_CODE) {
      clearLock();
      alert("Lock cleared. Reload this page and you can start again.");
    } else {
      alert("Incorrect admin code.");
    }
  });

  // Start form
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const info2 = getLockInfo();
    if (info2 && info2.daysSince < LOCK_DAYS) {
      alert("This browser is locked for 20 days from the last attempt.");
      return;
    }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }

    sessionStorage.setItem("hackathon_user", JSON.stringify({ name, email }));
    window.location.href = "test.html";
  });
});
