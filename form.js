document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const status = document.createElement("div");
  status.id = "form-status";
  status.setAttribute("role", "alert");
  status.style.marginTop = "1rem";
  status.style.opacity = "0";
  status.style.transition = "opacity 0.3s ease";
  form.appendChild(status);

  form.addEventListener("submit", (e) => {
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    // Basic validation
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault(); // block submission only if invalid
      showStatus("Please fill out all fields.", "red");
      return;
    }

    // Show sending status (but let Getform handle submission)
    showStatus("Sending...", "black");
  });

  function showStatus(message, color) {
    status.textContent = message;
    status.style.color = color;
    status.style.opacity = "1";
  }
});
