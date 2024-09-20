// Mobile Navigation
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('#mobileMenu');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) &&!menuIcon.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
});

// Toggle menu on smaller devices
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    menuIcon.style.display = 'block';
    mobileMenu.style.display = 'none';
  } else {
    menuIcon.style.display = 'none';
    mobileMenu.style.display = 'block';
  }
});

// Add event listener to toggle menu on smaller devices
menuIcon.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    mobileMenu.style.display = 'block';
  }
});

// Add event listener to close menu on smaller devices
mobileMenu.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    mobileMenu.style.display = 'none';
  }
});

// Hero Section
const heroSection = document.querySelector('.hero-section');
const heroContent = document.querySelector('.hero-content');

// Add event listener to hero section to animate on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    heroSection.classList.add('animate');
  } else {
    heroSection.classList.remove('animate');
  }
});

// About Section
const aboutSection = document.querySelector('.about-section');
const aboutContent = document.querySelector('.about-content');

// Add event listener to about section to animate on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
    aboutSection.classList.add('animate');
  } else {
    aboutSection.classList.remove('animate');
  }
});

// Services Section
const servicesSection = document.querySelector('.services-section');
const serviceCards = document.querySelectorAll('.service-card');

// Add event listener to services section to animate on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
    servicesSection.classList.add('animate');
  } else {
    servicesSection.classList.remove('animate');
  }
});

// Add event listener to service cards to animate on hover
serviceCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('animate');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('animate');
  });
});