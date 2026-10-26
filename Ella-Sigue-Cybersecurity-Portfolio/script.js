(() => {
  const searchInput = document.querySelector('#project-search');
  const chips = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.project-card')];
  const resultsCount = document.querySelector('#results-count');
  const noResults = document.querySelector('#no-results');
  const grid = document.querySelector('#project-grid');
  let activeFilter = 'all';

  function filterCards() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let shown = 0;
    cards.forEach((card) => {
      const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
      const searchMatch = !query || `${card.dataset.search || ''} ${card.innerText || ''}`.toLowerCase().includes(query);
      const visible = categoryMatch && searchMatch;
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    resultsCount.textContent = `Showing ${shown} of ${cards.length} projects`;
    noResults.hidden = shown !== 0;
    grid.hidden = shown === 0;
  }

  chips.forEach((chip) => chip.addEventListener('click', () => {
    activeFilter = chip.dataset.filter || 'all';
    chips.forEach((item) => {
      const selected = item === chip;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    filterCards();
  }));
  searchInput?.addEventListener('input', filterCards);

  document.querySelectorAll('.case-toggle').forEach((button) => button.addEventListener('click', () => {
    const detail = document.getElementById(button.getAttribute('aria-controls'));
    if (!detail) return;
    const willOpen = detail.hidden;
    detail.hidden = !willOpen;
    button.setAttribute('aria-expanded', String(willOpen));
    button.querySelector('span').textContent = willOpen ? '−' : '＋';
    button.firstChild.textContent = willOpen ? 'Close case study ' : 'Read case study ';
  }));

  const menuToggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#primary-nav');
  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  }));

  const copyButton = document.querySelector('#copy-email');
  const copyStatus = document.querySelector('#copy-status');
  copyButton?.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'Email address copied.';
    } catch {
      const temp = document.createElement('textarea');
      temp.value = email;
      temp.setAttribute('readonly', '');
      temp.style.position = 'absolute';
      temp.style.left = '-9999px';
      document.body.appendChild(temp);
      temp.select();
      const copied = document.execCommand('copy');
      temp.remove();
      copyStatus.textContent = copied ? 'Email address copied.' : `Email: ${email}`;
    }
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  filterCards();
})();
