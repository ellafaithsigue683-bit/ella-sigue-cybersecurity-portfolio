(() => {

  // Accessible control for the decorative hero background video.
  const heroVideo = document.querySelector('.hero-video');
  const heroMotionToggle = document.querySelector('#hero-motion-toggle');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const compactViewportQuery = window.matchMedia('(max-width: 700px)');

  if (heroVideo && heroMotionToggle) {
    const syncHeroMotion = (allowPlayback = true) => {
      const useStaticBackground = reducedMotionQuery.matches || compactViewportQuery.matches;
      heroMotionToggle.hidden = useStaticBackground;

      if (useStaticBackground) {
        heroVideo.pause();
        heroVideo.removeAttribute('autoplay');
      } else {
        heroVideo.setAttribute('autoplay', '');
        if (allowPlayback && heroVideo.paused) {
          const playRequest = heroVideo.play();
          if (playRequest && typeof playRequest.catch === 'function') {
            playRequest.catch(() => {
              heroMotionToggle.textContent = 'Background motion unavailable';
              heroMotionToggle.disabled = true;
            });
          }
        }
      }

      if (!heroMotionToggle.disabled) {
        heroMotionToggle.textContent = heroVideo.paused ? 'Play background motion' : 'Pause background motion';
      }
      heroMotionToggle.setAttribute('aria-pressed', String(heroVideo.paused));
    };

    heroMotionToggle.addEventListener('click', async () => {
      if (heroVideo.paused) {
        try {
          heroVideo.setAttribute('autoplay', '');
          await heroVideo.play();
          heroMotionToggle.disabled = false;
        } catch {
          heroMotionToggle.textContent = 'Background motion unavailable';
          heroMotionToggle.disabled = true;
          return;
        }
      } else {
        heroVideo.pause();
      }
      syncHeroMotion(false);
    });

    heroVideo.addEventListener('playing', () => syncHeroMotion(false));
    heroVideo.addEventListener('pause', () => syncHeroMotion(false));
    reducedMotionQuery.addEventListener?.('change', () => syncHeroMotion(true));
    compactViewportQuery.addEventListener?.('change', () => syncHeroMotion(true));
    syncHeroMotion(true);
  }

  const searchInput = document.querySelector('#project-search');
  const chips = [...document.querySelectorAll('.filter-chip')];
  const cards = [...document.querySelectorAll('.project-card[data-category]')];
  const resultsCount = document.querySelector('#results-count');
  const noResults = document.querySelector('#no-results');
  const operationsGrid = document.querySelector('#operations-grid');
  const labsGrid = document.querySelector('#labs-grid');
  let activeFilter = 'all';

  function filterCards() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let shown = 0;
    let operationsShown = 0;
    let labsShown = 0;
    cards.forEach((card) => {
      const categoryMatch = activeFilter === 'all' || card.dataset.category === activeFilter;
      const searchText = `${card.dataset.search || ''} ${card.innerText || ''}`.toLowerCase();
      const searchMatch = !query || searchText.includes(query);
      const visible = categoryMatch && searchMatch;
      card.hidden = !visible;
      if (visible) {
        shown += 1;
        if (card.closest('#operations-grid')) operationsShown += 1;
        if (card.closest('#labs-grid')) labsShown += 1;
      }
    });
    if (resultsCount) resultsCount.textContent = `Showing ${shown} ${shown === 1 ? 'entry' : 'entries'}`;
    if (noResults) noResults.hidden = shown !== 0;
    if (operationsGrid) operationsGrid.hidden = operationsShown === 0;
    if (labsGrid) labsGrid.hidden = labsShown === 0;
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
    const label = button.querySelector('.toggle-symbol');
    if (label) label.textContent = willOpen ? '−' : '＋';
    const textNode = [...button.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) textNode.textContent = willOpen ? ' Close case study ' : ' Read case study ';
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
      if (copyStatus) copyStatus.textContent = 'Email address copied.';
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
      if (copyStatus) copyStatus.textContent = copied ? 'Email address copied.' : `Email: ${email}`;
    }
  });

  // Keyboard-accessible full-size viewer for the Splunk dashboard evidence.
  const dashboardImages = document.querySelectorAll('img[src*="splunk-botsv2-security-overview.png"]');
  if (dashboardImages.length && typeof HTMLDialogElement !== 'undefined') {
    const dashboardDialog = document.createElement('dialog');
    dashboardDialog.className = 'dashboard-lightbox';
    dashboardDialog.setAttribute('aria-label', 'Enlarged Splunk BOTS v2 dashboard');
    dashboardDialog.innerHTML = `
      <div class="dashboard-lightbox-panel">
        <button class="dashboard-lightbox-close" type="button" aria-label="Close enlarged dashboard">
          <span>Close</span><span aria-hidden="true">&times;</span>
        </button>
        <img alt="" />
      </div>`;
    document.body.appendChild(dashboardDialog);
    const dashboardDialogImage = dashboardDialog.querySelector('img');
    const dashboardCloseButton = dashboardDialog.querySelector('.dashboard-lightbox-close');
    let dashboardLastTrigger = null;

    const openDashboardImage = (image) => {
      dashboardLastTrigger = image;
      dashboardDialogImage.src = image.currentSrc || image.src;
      dashboardDialogImage.alt = image.alt || 'Full-size Splunk BOTS v2 dashboard screenshot';
      dashboardDialog.showModal();
      dashboardCloseButton.focus();
    };

    dashboardImages.forEach((image) => {
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-haspopup', 'dialog');
      image.setAttribute('aria-label', 'Enlarge Splunk BOTS v2 dashboard image');
      image.addEventListener('click', () => openDashboardImage(image));
      image.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openDashboardImage(image);
        }
      });
    });

    dashboardCloseButton.addEventListener('click', () => dashboardDialog.close());
    dashboardDialog.addEventListener('click', (event) => {
      if (event.target === dashboardDialog) dashboardDialog.close();
    });
    dashboardDialog.addEventListener('close', () => dashboardLastTrigger?.focus());
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  filterCards();
})();
