// Mobile Navigation
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.nav-mobile');

// Toggle mobile menu on click
menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
});

// Ensure the menu icon displays correctly on resize
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    menuIcon.style.display = 'block';
  } else {
    mobileMenu.classList.remove('active');
    menuIcon.style.display = 'none';
  }
});
