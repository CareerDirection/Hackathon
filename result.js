document.addEventListener("DOMContentLoaded", () => {
  const dataRaw = localStorage.getItem("hackathon_result");
  const resultCandidate = document.getElementById("resultCandidate");
  const violationSummary = document.getElementById("violationSummary");
  const badgeArea = document.getElementById("badgeArea");
  const badgeLabel = document.getElementById("badgeLabel");
  const scoreText = document.getElementById("scoreText");
  const remarkText = document.getElementById("remarkText");

  if (!dataRaw) {
    resultCandidate.textContent = "No result found. Please complete the hackathon first.";
    badgeArea.classList.add("hidden");
    return;
  }

  const data = JSON.parse(dataRaw);

  resultCandidate.textContent =
    `Name: ${data.name}, Email-ID: ${data.email}`;

  const violationAuto = data.autoSubmitted && data.reasonCode === "violation";

  if (violationAuto) {
    const uniqueReasons = [...new Set(data.violations || [])];
    let html = "<strong>⚠ Test auto-submitted due to security violations.</strong><br><br>";
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

    violationSummary.innerHTML = html;
    violationSummary.classList.remove("hidden");

    badgeArea.classList.add("hidden");
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
});
