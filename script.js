// Hamburger Menu Toggle
const hamburger=document.getElementById("hamburger");
const navLinks=document.querySelector(".nav-links");
hamburger.addEventListener("click",()=>{
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});

// Card Overlay Toggle (projects, industries, team)
const cards=document.querySelectorAll(".project-card, .industry-card, .team-card");
cards.forEach(card=>{
  card.addEventListener("click",()=>{card.classList.toggle("overlay-active")});
});
// Wait for the DOM to load before running scripts
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  // ✅ Toggle the navigation menu on mobile
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
  });

  // ✅ Close the menu when a link is clicked (mobile)
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("toggle");
    });
  });

  // ✅ Card overlay toggle for Projects, Industries, and Team pages
  const cards = document.querySelectorAll(
    ".project-card, .industry-card, .team-card"
  );

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("overlay-active");
    });
  });

  // ✅ Optional: Add smooth scroll for anchor links
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
