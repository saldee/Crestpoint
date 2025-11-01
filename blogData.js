// blog.js

const blogPosts = [
  {
    title: "Sustainable Construction in Uganda",
    author: "Rabiu Saleh Deen",
    date: "2025-11-01",
    summary: "Discover how sustainable practices are transforming the Ugandan construction industry.",
    image: "images/blog1.jpg",
    link: "blogs/sustainable-construction.html"
  },
  {
    title: "5 Project Management Tips",
    author: "Lamunu Noel",
    date: "2025-10-25",
    summary: "Learn key strategies to keep your construction projects on time and within budget.",
    image: "images/blog2.jpg",
    link: "blogs/project-management.html"
  },
  {
    title: "EHS Management Tips",
    author: "Rachel Auma",
    date: "2025-10-20",
    summary: "Learn key strategies to keep your construction projects aligned with best Environmental, Health and Safety practices.",
    image: "images/blog3.jpg",
    link: "blogs/ehs-management-tips.html"
  }
];

function renderBlogCards(containerId, limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const postsToShow = limit ? blogPosts.slice(0, limit) : blogPosts;

  postsToShow.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <h4>${post.title}</h4>
      <p class="meta">By ${post.author} | ${post.date}</p>
      <p>${post.summary}</p>
      <a href="${post.link}" class="btn-secondary">Read More</a>
    `;
    container.appendChild(card);
  });
}

// Render homepage preview (latest 3 posts)
document.addEventListener("DOMContentLoaded", () => {
  renderBlogCards("homepage-blog-container", 3);
});
