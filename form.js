document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic validation
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      status.textContent = "Please fill out all fields.";
      status.style.color = "red";
      return;
    }

    // Simulate submission
    status.textContent = "Sending...";
    status.style.color = "black";

    setTimeout(() => {
      status.textContent = "Thank you! Your message has been sent.";
      status.style.color = "green";
      form.reset();
    }, 1500);
  });
});
