document.addEventListener("DOMContentLoaded", () => {
  // ---------- Navigation Toggle ----------
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    // Optional: auto-close menu when a link is clicked
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      });
    });
  }

  // ---------- Page-Specific Rendering ----------
  const renderIfEmpty = (selector, renderFn) => {
    const el = document.querySelector(selector);
    if (el && el.childElementCount === 0) {
      renderFn();
    }
  };

  renderIfEmpty("#site-title", renderCommonElements);
  renderIfEmpty("#contact-email", renderCommonElements);

  renderIfEmpty(".hero-content h2", renderHeroSection);
  renderIfEmpty("#about-section", renderAboutSection);
  renderIfEmpty("#vmv-section", renderVMV);
  renderIfEmpty("#services-cards", renderServices);
  renderIfEmpty("#projects-cards", renderProjects);
  renderIfEmpty("#projects-grid", renderProjects);
  renderIfEmpty("#team-cards", renderTeam);
  renderIfEmpty("#team-grid", renderTeam);
  renderIfEmpty("#testimonials-cards", renderTestimonials);
  renderIfEmpty("#blog-cards", renderBlog);
  renderIfEmpty("#contact-info", renderContactInfo);
  renderIfEmpty("#google-map", renderGoogleMap);
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
      });
    });
  }
});
