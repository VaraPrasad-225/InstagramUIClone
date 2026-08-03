/* ==========================================================================
   INSTAGRAM UI CLONE - THEME ENGINE (DARK / LIGHT MODE)
   ========================================================================== */

(function () {
  'use strict';

  const THEME_KEY = 'instagram_ui_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    } else if (savedTheme === 'dark') {
      document.body.classList.remove('light-theme');
    } else if (!prefersDark) {
      // Default to dark mode unless user prefers light explicitly
      document.body.classList.remove('light-theme');
    }

    updateThemeIcons();
  }

  function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, newTheme);

    updateThemeIcons();

    if (window.showToast) {
      window.showToast(`Switched to ${newTheme.toUpperCase()} mode`);
    }
  }

  function updateThemeIcons() {
    const themeBtns = document.querySelectorAll('.theme-toggle-btn');
    const isLight = document.body.classList.contains('light-theme');

    themeBtns.forEach((btn) => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (isLight) {
          icon.className = 'fa-solid fa-sun';
        } else {
          icon.className = 'fa-solid fa-moon';
        }
      }
      const label = btn.querySelector('.nav-item-label');
      if (label) {
        label.textContent = isLight ? 'Light Mode' : 'Dark Mode';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });
  });

  window.toggleTheme = toggleTheme;
})();
