// Shared interactions
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Lightbox for project images
  document.addEventListener('click', e=>{
    if(e.target.classList.contains('project-thumb')){
      const src = e.target.getAttribute('data-full') || e.target.src;
      const lb = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');
      img.src = src;
      lb.style.display = 'flex';
    }
  });
  const lb = document.getElementById('lightbox');
  if(lb) lb.addEventListener('click', e=>{ if(e.target.id === 'lightbox' || e.target.id === 'lightbox-close') lb.style.display='none'; });
});