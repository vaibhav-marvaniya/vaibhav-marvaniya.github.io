
'use strict';
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#primary-navigation');
  if (toggle && menu) {
    const close = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      menu.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      menu.classList.toggle('is-open', open);
    });
    menu.addEventListener('click', event => {
      if (event.target.closest('a')) close();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') close();
    });
    document.addEventListener('click', event => {
      if (!menu.contains(event.target) &&
          !toggle.contains(event.target)) close();
    });
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const search = document.getElementById('project-search');
  if (search) {
    const cards = Array.from(document.querySelectorAll('.gallery-card'));
    const counter = document.getElementById('search-count');
    const empty = document.querySelector('.no-results');

    const update = () => {
      const q = search.value.trim().toLocaleLowerCase();
      let count = 0;
      cards.forEach(card => {
        const match = card.dataset.search.includes(q);
        card.hidden = !match;
        if (match) count++;
      });
      counter.textContent = `${count} result${count === 1 ? '' : 's'}`;
      if (empty) empty.hidden = count !== 0;
    };

    search.addEventListener('input', update);
    search.addEventListener('change', () => {
      // Track result count, not the visitor's typed text.
      if (typeof window.portfolioEvent === 'function') {
        window.portfolioEvent('project_search', {
          result_count: Number(counter.textContent.split(' ')[0])
        });
      }
    });
  }
})();
