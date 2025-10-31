document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const status = document.createElement("div");
  status.id = "form-status";
  status.style.marginTop = "1rem";
  form.appendChild(status);

  form.addEventListener("submit", (e) => {
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    // Basic validation
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault(); // block submission only if invalid
      status.textContent = "Please fill out all fields.";
      status.style.color = "red";
      return;
    }

    // Show sending status (but let Getform handle submission)
    status.textContent = "Sending...";
    status.style.color = "black";
  });
});
