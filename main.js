// ---------- Navigation Toggle ----------
(() => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
})();

// ---------- Page-Specific Rendering ----------
(() => {
  if (document.getElementById("site-title") || document.getElementById("contact-email")) {
    renderCommonElements();
  }

  if (document.querySelector(".hero-content h2") || document.querySelector(".hero-content p")) {
    renderHeroSection();
  }

  if (document.getElementById("about-section")) {
    renderAboutSection();
  }

  if (document.getElementById("vmv-section")) {
    renderVMV();
  }

  if (document.getElementById("services-cards")) {
    renderServices();
  }

  if (document.getElementById("projects-cards") || document.getElementById("projects-grid")) {
    renderProjects();
  }

  if (document.getElementById("team-cards") || document.getElementById("team-grid")) {
    renderTeam();
  }

  if (document.getElementById("testimonials-cards")) {
    renderTestimonials();
  }

  if (document.getElementById("blog-cards")) {
    renderBlog();
  }

  if (document.getElementById("contact-info")) {
    renderContactInfo();
  }

  if (document.getElementById("google-map")) {
    renderGoogleMap();
  }
})();
