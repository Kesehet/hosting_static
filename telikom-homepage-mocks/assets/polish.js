(() => {
  const onReady = () => {
    const logoSrc = 'https://www.telikom.com.pg/assets/misc/TPNGLOGO.png';
    document.querySelectorAll('img').forEach((img, i) => {
      if (!img.getAttribute('alt')) img.setAttribute('alt', i === 0 ? 'Telikom PNG' : 'Telikom content image');
      if (img.src !== logoSrc && !img.closest('.hero')) {
        img.loading = 'lazy';
        img.decoding = 'async';
      } else {
        img.fetchPriority = 'high';
      }
    });

    const revealTargets = [
      ...document.querySelectorAll('section, .dock, .quick, .panel, .plan, .device, .story, .news, .biz, .svc, .tile, .metric, .solution, .tool')
    ];
    revealTargets.forEach((el, i) => {
      el.classList.add('reveal');
      if (i % 4) el.classList.add(`reveal-delay-${i % 4}`);
    });

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
      revealTargets.forEach(el => io.observe(el));
    } else {
      revealTargets.forEach(el => el.classList.add('is-visible'));
    }

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady, {once:true});
  else onReady();
})();