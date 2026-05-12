// Lightweight scroll-reveal + small flourishes.
(() => {
  const targets = [
    '.section__head',
    '.pi__portrait',
    '.pi__body',
    '.theme',
    '.pub',
    '.repo',
    '.method',
    '.people__pi',
    '.people__open',
    '.contact__col',
    '.research__lede',
    '.pubs__lede',
    '.code__lede',
  ];
  const els = document.querySelectorAll(targets.join(','));
  els.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 30, 250)}ms`;
  });

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );
  els.forEach((el) => io.observe(el));

  // Subtle parallax-ish drift on the hero curve when scrolling.
  const heroSvg = document.querySelector('.hero__figure svg');
  if (heroSvg && window.matchMedia('(min-width: 1000px)').matches) {
    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = Math.min(window.scrollY * 0.04, 24);
          heroSvg.style.transform = `translateY(${y}px)`;
          ticking = false;
        });
      },
      { passive: true }
    );
  }
})();
