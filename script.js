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
