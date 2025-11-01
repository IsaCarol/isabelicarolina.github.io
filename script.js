// script.js
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('theme-switcher');
  const body = document.body;
  const yearEl = document.getElementById('year');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // Atualiza ano no footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Ícones
  const sunIcon = '<i class="fas fa-sun" aria-hidden="true"></i>';
  const moonIcon = '<i class="fas fa-moon" aria-hidden="true"></i>';

  // Carrega preferência: primeiro localStorage, se não houver tenta prefers-color-scheme
  const stored = localStorage.getItem('theme');
  if (stored) {
    if (stored === 'light') {
      body.classList.add('light-mode');
      switcher.innerHTML = moonIcon;
    } else {
      body.classList.remove('light-mode');
      switcher.innerHTML = sunIcon;
    }
  } else {
    // sem preferência salva -> usa media query
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) {
      body.classList.add('light-mode');
      switcher.innerHTML = moonIcon;
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-mode');
      switcher.innerHTML = sunIcon;
      localStorage.setItem('theme', 'dark');
    }
  }

  // Toggle tema
  if (switcher) {
    switcher.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        switcher.innerHTML = moonIcon;
      } else {
        localStorage.setItem('theme', 'dark');
        switcher.innerHTML = sunIcon;
      }
    });
  }

  // Menu mobile
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // fechar ao clicar em link (UX)
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }
});
