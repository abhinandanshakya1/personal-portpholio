 // Header scroll effect
 window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('active');
  menuToggle.textContent = menu.classList.contains('active') ? '✕' : '☰';
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference or use the system preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

// If theme was saved, use that; otherwise use system preference
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
} else if (prefersDarkMode) {
  document.documentElement.setAttribute('data-theme', 'dark');
}

// Toggle theme on click
themeToggle.addEventListener('click', function () {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Add sparkling effect around the toggle
  const sparkle = document.createElement('div');
  sparkle.className = 'theme-sparkle';
  sparkle.style.position = 'absolute';
  sparkle.style.width = '100%';
  sparkle.style.height = '100%';
  sparkle.style.borderRadius = '50%';
  sparkle.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)';
  sparkle.style.transform = 'scale(1.5)';
  sparkle.style.opacity = '0';
  sparkle.style.transition = 'all 0.5s ease';
  sparkle.style.zIndex = '-1';

  themeToggle.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.opacity = '0.7';
  }, 10);

  setTimeout(() => {
    sparkle.style.opacity = '0';
    sparkle.style.transform = 'scale(2.5)';
  }, 300);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

//the projects script 

const buttons = document.querySelectorAll('.filter-buttons button');
const projects = document.querySelectorAll('.project-card');

function filterProjects(category) {
  buttons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter-buttons button[onclick*="${category}"]`).classList.add('active');

  projects.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}