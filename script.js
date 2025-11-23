// Global anti-copy / anti-cheat handlers
function blockAndWarn(e, reason) {
  e.preventDefault();
  if (inExam && !quizFinished) {
    issueWarning(reason);
  }
}

document.addEventListener("copy",   e => blockAndWarn(e, "Copy action is not allowed during the test."));
document.addEventListener("cut",    e => blockAndWarn(e, "Cut action is not allowed during the test."));
document.addEventListener("paste",  e => blockAndWarn(e, "Paste action is not allowed during the test."));
document.addEventListener("contextmenu", e => blockAndWarn(e, "Right-click is disabled during the test."));
document.addEventListener("selectstart", e => blockAndWarn(e, "Text selection is disabled during the test."));

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  // Ctrl + C/X/V/S
  if (e.ctrlKey && !e.shiftKey && ["c","x","v","s"].includes(key)) {
    blockAndWarn(e, "Keyboard shortcuts like Ctrl+C/X/V/S are not allowed during the test.");
    return;
  }

  // Developer tools: F12 or Ctrl+Shift+I/J/C
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && ["i","j","c"].includes(key))) {
    blockAndWarn(e, "Developer tools / Inspect is not allowed during the test.");
    return;
  }

  // PrintScreen
  if (e.key === "PrintScreen") {
    blockAndWarn(e, "Screenshot / PrintScreen attempt detected.");
    return;
  }
});
