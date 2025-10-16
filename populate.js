// =======================
// POPULATE.CJS - Integrated for all pages
// =======================

// ---------- Common Elements ----------
const siteTitleEl = document.getElementById("site-title");
if (siteTitleEl) siteTitleEl.textContent = siteData.siteTitle;

const contactEmailEl = document.getElementById("contact-email");
if (contactEmailEl) contactEmailEl.textContent = siteData.contact.email;

// ---------- Hero Section (Home Only) ----------
const heroTitle = document.querySelector(".hero-content h2");
const heroText  = document.querySelector(".hero-content p");
if (heroTitle) heroTitle.textContent = siteData.tagline;
if (heroText)  heroText.textContent = "Delivering safe, timely and high-quality construction projects across sectors.";

// ---------- About Section ----------
const aboutSection = document.getElementById("about-section");
if (aboutSection) {
    aboutSection.innerHTML = `
        <h3 class="section-title">${siteData.about.heading}</h3>
        <p>${siteData.about.content}</p>
    `;
}

// ---------- Vision, Mission, Values ----------
const vmvContainer = document.getElementById("vmv-section");
if (vmvContainer) {
    vmvContainer.innerHTML = "";
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

// ---------- Generic Function to Populate Cards ----------
function populateCards(containerId, items, type) {
    const container = document.getElementById(containerId);
    if (!container || !items) return;
    container.innerHTML = ""; // clear old content

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = `card ${type}-card`;

        switch(type) {
            case "service":
                card.innerHTML = `
                    <img src="${item.img || 'images/default-service-icon.png'}" alt="${item.title}" class="card-icon">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>`;
                break;
            case "project":
                card.innerHTML = `
                    <img src="${item.img}" alt="${item.title}" class="card-img">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>`;
                break;
            case "team":
                card.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" class="card-img-circle">
                    <h4>${item.name}</h4>
                    <p>${item.role}</p>`;
                break;
            case "testimonial":
                card.innerHTML = `<p>"${item.text}"</p><h5>- ${item.name}</h5>`;
                break;
            case "blog":
                card.innerHTML = `
                    <h4>${item.title}</h4>
                    <small>${item.date}</small>
                    <p>${item.excerpt}</p>
                    <a href="${item.link}" class="btn-secondary">Read More</a>`;
                break;
        }

        container.appendChild(card);
    });
}

// ---------- Populate All Sections ----------
populateCards("services-cards", siteData.services, "service");
populateCards("projects-cards", siteData.projects, "project");
populateCards("team-cards", siteData.team, "team");
populateCards("testimonials-cards", siteData.testimonials, "testimonial");
populateCards("blog-cards", siteData.blogPosts, "blog");

// ---------- Contact Section ----------
const contactInfo = document.getElementById("contact-info");
if (contactInfo) {
    contactInfo.innerHTML = `
        <h3 class="section-title">Contact Us</h3>
        <p><strong>Email:</strong> ${siteData.contact.email}</p>
        <p><strong>Phone:</strong> ${siteData.contact.phone}</p>
        <p><strong>Address:</strong> ${siteData.contact.address}</p>
    `;
}

// ---------- Google Map ----------
const mapContainer = document.getElementById("google-map");
if (mapContainer && siteData.contact.googleMapKey) {
    mapContainer.src = `https://www.google.com/maps/embed/v1/place?key=${siteData.contact.googleMapKey}&q=${encodeURIComponent(siteData.contact.address)}`;
}

// ---------- Contact Form (optional alert demo) ----------
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you! Your message has been received.");
        form.reset();
    });
}
