// ---------- Common Elements ----------
(() => {
  const siteTitleEl = document.getElementById("site-title");
  if (siteTitleEl) siteTitleEl.textContent = siteData.siteTitle;

  const contactEmailEl = document.getElementById("contact-email");
  if (contactEmailEl) contactEmailEl.textContent = siteData.contact.email;
})();

// ---------- Hero Section ----------
(() => {
  const heroTitle = document.querySelector(".hero-content h2");
  const heroText = document.querySelector(".hero-content p");
  if (heroTitle) heroTitle.textContent = siteData.tagline;
  if (heroText) heroText.textContent = "Delivering safe, timely and high-quality construction projects across sectors.";
})();

// ---------- About Section ----------
(() => {
  const aboutSection = document.getElementById("about-section");
  if (aboutSection) {
    aboutSection.innerHTML = `
      <h3 class="section-title">${siteData.about.heading}</h3>
      <p>${siteData.about.content}</p>
    `;
  }
})();

// ---------- Vision, Mission, Values ----------
(() => {
  const vmvContainer = document.getElementById("vmv-section");
  if (vmvContainer) {
    siteData.visionMissionValues.forEach(item => {
      const card = document.createElement("div");
      card.className = "vmv-card";
      card.style.cssText = "flex:1 1 calc(33% - 20px);border:1px solid #ddd;border-radius:8px;padding:20px;text-align:center;";
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}" style="width:60px;height:60px;margin-bottom:12px;">
        <h4>${item.title}</h4>
        <p style="text-align:left">${item.desc}</p>
      `;
      vmvContainer.appendChild(card);
    });
  }
})();

// ---------- Services ----------
(() => {
  const servicesContainer = document.getElementById("services-cards");
  if (servicesContainer) {
    siteData.services.forEach(service => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${service.img}" alt="${service.title}" class="card-icon">
        <h4>${service.title}</h4>
        <p>${service.desc}</p>
      `;
      servicesContainer.appendChild(card);
    });
  }
})();

// ---------- Projects ----------
(() => {
  const projectsContainer = document.getElementById("projects-cards") || document.getElementById("projects-grid");
  if (projectsContainer) {
    siteData.projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "card project-card";
      card.innerHTML = `
        <img src="${project.img}" alt="${project.title}" class="card-img">
        <h4>${project.title}</h4>
        <p>${project.desc}</p>
      `;
      projectsContainer.appendChild(card);
    });
  }
})();

// ---------- Team ----------
(() => {
  const teamContainer = document.getElementById("team-cards") || document.getElementById("team-grid");
  if (teamContainer) {
    siteData.team.forEach(member => {
      const card = document.createElement("div");
      card.className = "card team-member";
      card.innerHTML = `
        <img src="${member.img}" alt="${member.name}" class="card-img-circle">
        <h4>${member.name}</h4>
        <p>${member.role}</p>
      `;
      teamContainer.appendChild(card);
    });
  }
})();

// ---------- Testimonials ----------
(() => {
  const testimonialsContainer = document.getElementById("testimonials-cards");
  if (testimonialsContainer) {
    siteData.testimonials.forEach(t => {
      const card = document.createElement("div");
      card.className = "card testimonial-card";
      card.innerHTML = `<p>"${t.text}"</p><h5>- ${t.name}</h5>`;
      testimonialsContainer.appendChild(card);
    });
  }
})();

// ---------- Blog ----------
(() => {
  const blogContainer = document.getElementById("blog-cards");
  if (blogContainer) {
    siteData.blogPosts.forEach(b => {
      const card = document.createElement("div");
      card.className = "card blog-card";
      card.innerHTML = `
        <h4>${b.title}</h4>
        <small>${b.date}</small>
        <p>${b.excerpt}</p>
        <a href="${b.link}" class="btn-secondary">Read More</a>
      `;
      blogContainer.appendChild(card);
    });
  }
})();

// ---------- Contact ----------
(() => {
  const contactInfo = document.getElementById("contact-info");
  if (contactInfo) {
    contactInfo.innerHTML = `
      <p>Email: ${siteData.contact.email}</p>
      <p>Phone: ${siteData.contact.phone}</p>
      <p>Address: ${siteData.contact.address}</p>
    `;
  }
})();

// ---------- Google Map ----------
(() => {
  const mapContainer = document.getElementById("google-map");
  if (mapContainer && siteData.contact.googleMapKey) {
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "350";
    iframe.style.border = 0;
    iframe.loading = "lazy";
    iframe.allowFullscreen = true;
    iframe.src = `https://www.google.com/maps/embed/v1/place?key=${siteData.contact.googleMapKey}&q=${encodeURIComponent(siteData.contact.address)}`;
    mapContainer.appendChild(iframe);
  }
})();
