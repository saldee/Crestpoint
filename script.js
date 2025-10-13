<!-- JS for Hamburger -->
<script>
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', (e) => {
    if(!hamburger.contains(e.target) && !mobileNav.contains(e.target)){
      mobileNav.classList.remove('show');
    }
  });
</script>
