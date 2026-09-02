(() => {
  const onReady = () => {
    const logoSrc = 'https://www.telikom.com.pg/assets/misc/TPNGLOGO.png';
    const title = document.title || '';

    const style = document.createElement('style');
    style.textContent = `
      .ref-campaign{margin:0;background:linear-gradient(135deg,#0875c9 0%,#1599d4 55%,#063451 100%);color:#fff;overflow:hidden;position:relative}
      .ref-campaign:before{content:'';position:absolute;width:430px;height:430px;border:1px solid rgba(255,255,255,.12);border-radius:50%;right:-110px;top:-170px;box-shadow:0 0 0 50px rgba(255,255,255,.035),0 0 0 100px rgba(255,255,255,.02)}
      .ref-campaign-inner{max-width:1320px;margin:auto;padding:48px 28px;display:grid;grid-template-columns:1.25fr .75fr;gap:30px;align-items:center;position:relative;z-index:1}
      .ref-campaign .ref-kicker{font-size:12px!important;font-weight:800;letter-spacing:.08em;text-transform:uppercase;opacity:.9}
      .ref-campaign h2{font:800 clamp(34px,4.6vw,58px)/1.02 Manrope,Inter,sans-serif;margin:10px 0 12px;letter-spacing:-1.8px;max-width:720px}
      .ref-campaign p{max-width:650px;color:#e7f5fd;margin:0 0 20px;font-size:16px!important}
      .ref-campaign-meta{display:flex;gap:12px;flex-wrap:wrap}.ref-campaign-meta span{padding:8px 11px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);border-radius:999px;font-size:13px!important;font-weight:700}
      .ref-campaign-price{justify-self:end;width:min(310px,100%);padding:25px;border-radius:18px;background:rgba(3,42,67,.72);border:1px solid rgba(255,255,255,.18);box-shadow:0 20px 45px rgba(2,31,49,.2);backdrop-filter:blur(10px)}
      .ref-campaign-price small{color:#bfe8ff!important}.ref-campaign-price strong{display:block;font:800 58px/1 Manrope;margin:6px 0}.ref-campaign-price b{display:block;font-size:18px;margin-bottom:14px}.ref-campaign-price a{display:inline-flex;padding:11px 15px;border-radius:8px;background:#fff;color:#075f9f;text-decoration:none;font-weight:800}
      .ref-selfcare{background:#0c94cf;color:white}.ref-selfcare-inner{max-width:1320px;margin:auto;padding:22px 28px;display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center}.ref-selfcare h3{margin:0 0 5px;font:800 20px Manrope}.ref-selfcare p{margin:0;color:#def5ff;font-size:14px!important}.ref-selfcare a{background:#fff;color:#0875c9;text-decoration:none;font-weight:800;padding:11px 16px;border-radius:8px}
      .ref-service-band{padding:62px 28px;background:#fff}.ref-service-inner{max-width:1260px;margin:auto}.ref-service-head{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:22px}.ref-service-head h2{font:800 31px Manrope;margin:0}.ref-service-head p{margin:5px 0 0;color:#667787}.ref-service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.ref-service-card{position:relative;overflow:hidden;min-height:230px;border:1px solid #d7e3eb;border-radius:14px;padding:22px;background:linear-gradient(180deg,#fff,#f8fbfd);box-shadow:0 12px 30px rgba(9,45,72,.06);transition:.28s cubic-bezier(.22,.61,.36,1)}.ref-service-card:hover{transform:translateY(-4px);box-shadow:0 18px 38px rgba(9,45,72,.12)}.ref-service-card:before{content:'';position:absolute;right:-40px;top:-45px;width:130px;height:130px;border-radius:50%;background:rgba(8,117,201,.08)}.ref-service-icon{width:42px;height:42px;border-radius:11px;background:#e9f4fb;color:#0875c9;display:grid;place-items:center;font-weight:800;margin-bottom:28px}.ref-service-card h3{font:800 20px Manrope;margin:0 0 8px}.ref-service-card p{color:#687b8b;margin:0 0 18px;font-size:14px!important}.ref-service-card a{color:#0875c9;text-decoration:none;font-weight:800;font-size:14px!important}
      .ref-trust{padding:58px 28px;background:linear-gradient(135deg,#0a2740,#123b60);color:white;position:relative;overflow:hidden}.ref-trust:before{content:'';position:absolute;inset:0;background-image:linear-gradient(30deg,rgba(255,255,255,.035) 12%,transparent 12.5%,transparent 87%,rgba(255,255,255,.035) 87.5%,rgba(255,255,255,.035)),linear-gradient(150deg,rgba(255,255,255,.025) 12%,transparent 12.5%,transparent 87%,rgba(255,255,255,.025) 87.5%,rgba(255,255,255,.025));background-size:90px 160px;opacity:.7}.ref-trust-inner{max-width:1260px;margin:auto;position:relative}.ref-trust-head{display:grid;grid-template-columns:.35fr .65fr;gap:35px;margin-bottom:28px}.ref-trust h2{font:800 38px/1.05 Manrope;margin:0}.ref-trust-head p{margin:0;color:#c9dbe8;max-width:720px}.ref-trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.ref-trust-card{padding:18px;border:1px solid rgba(255,255,255,.14);border-radius:12px;background:rgba(255,255,255,.045)}.ref-trust-card b{display:block;font-size:16px;margin-bottom:6px}.ref-trust-card small{color:#c9dbe8!important}.ref-trust-card span{display:inline-grid;place-items:center;width:32px;height:32px;border-radius:9px;background:rgba(47,174,244,.13);color:#79ccfa;margin-bottom:12px;font-weight:800}
      .ref-device-extra{margin-top:12px}.ref-device-extra .visual,.ref-device-extra .deviceVisual{background:radial-gradient(circle at 65% 18%,rgba(72,174,236,.18),transparent 34%),linear-gradient(145deg,#eef6fb,#e4edf3)!important}
      .ref-dashboard-campaign{display:grid;grid-template-columns:1fr auto;gap:18px;align-items:center;padding:20px;border-radius:10px;background:linear-gradient(135deg,#0875c9,#064a73);color:#fff;box-shadow:0 14px 32px rgba(4,48,78,.16)}.ref-dashboard-campaign h3{font:800 24px Manrope;margin:4px 0}.ref-dashboard-campaign p{margin:0;color:#d8effc}.ref-dashboard-campaign .ref-call-price{font:800 34px Manrope;text-align:right}.ref-dashboard-campaign .ref-call-price small{display:block;color:#c7e8fa!important;font:600 12px Inter}
      @media(max-width:900px){.ref-campaign-inner,.ref-trust-head{grid-template-columns:1fr}.ref-campaign-price{justify-self:start}.ref-service-grid,.ref-trust-grid{grid-template-columns:1fr 1fr}.ref-selfcare-inner{grid-template-columns:1fr}.ref-dashboard-campaign{grid-template-columns:1fr}.ref-dashboard-campaign .ref-call-price{text-align:left}}
      @media(max-width:600px){.ref-service-grid,.ref-trust-grid{grid-template-columns:1fr}.ref-campaign-inner,.ref-service-band,.ref-trust{padding-left:18px;padding-right:18px}.ref-campaign h2{font-size:38px}.ref-campaign-price strong{font-size:46px}}
    `;
    document.head.appendChild(style);

    const campaign = `
      <section class="ref-campaign reveal">
        <div class="ref-campaign-inner">
          <div>
            <span class="ref-kicker">International calling</span>
            <h2>The world is your oyster.</h2>
            <p>New International Call Plans make it easier to stay in touch beyond Papua New Guinea, with simple calling options for customers who need to reach family, friends and business contacts overseas.</p>
            <div class="ref-campaign-meta"><span>Plans from K10</span><span>21 countries</span><span>Simple international calling</span></div>
          </div>
          <div class="ref-campaign-price"><small>PLANS FROM</small><strong>K10</strong><b>Connect beyond PNG</b><a href="#">View international plans →</a></div>
        </div>
      </section>`;

    const selfCare = `
      <div class="ref-selfcare reveal"><div class="ref-selfcare-inner"><div><h3>Telikom Self Care. Manage your credit online.</h3><p>Top up, check balances, manage bundles and stay in control from one convenient account experience.</p></div><a href="#">Open Self Care →</a></div></div>`;

    const serviceBand = `
      <section class="ref-service-band reveal"><div class="ref-service-inner"><div class="ref-service-head"><div><h2>Services built around how PNG connects</h2><p>Clear pathways for homes, organisations and national infrastructure.</p></div></div><div class="ref-service-grid">
        <article class="ref-service-card"><div class="ref-service-icon">⌂</div><h3>Fixed Broadband</h3><p>Reliable fixed connectivity for homes and organisations that need consistent everyday internet access.</p><a href="#">Explore fixed broadband →</a></article>
        <article class="ref-service-card"><div class="ref-service-icon">▦</div><h3>Business Systems</h3><p>Systems and services designed to support business operations, communications and digital workflows.</p><a href="#">Explore business systems →</a></article>
        <article class="ref-service-card"><div class="ref-service-icon">⌁</div><h3>Business Data</h3><p>Dedicated communications services for enterprises operating across Papua New Guinea.</p><a href="#">Explore business data →</a></article>
      </div></div></section>`;

    const trust = `
      <section class="ref-trust reveal"><div class="ref-trust-inner"><div class="ref-trust-head"><h2>Why choose Telikom?</h2><p>A Papua New Guinean network built around local ownership, practical value, self-service and dependable mobile connectivity.</p></div><div class="ref-trust-grid">
        <div class="ref-trust-card"><span>✓</span><b>100% PNG Owned</b><small>A national telecommunications company serving Papua New Guinea.</small></div>
        <div class="ref-trust-card"><span>▣</span><b>No Hidden Fees or Excess Data Charges</b><small>Clearer choices and easier control of voice and data usage.</small></div>
        <div class="ref-trust-card"><span>▤</span><b>Bring Your Own Device</b><small>Use a compatible device with your Telikom SIM.</small></div>
        <div class="ref-trust-card"><span>◉</span><b>Unlimited Calls & Text</b><small>Selected packages are designed to keep people connected with family and friends.</small></div>
        <div class="ref-trust-card"><span>↗</span><b>Easy Online Self Care</b><small>Manage top-up, credit and services from one online account experience.</small></div>
        <div class="ref-trust-card"><span>4G</span><b>4G Connectivity</b><small>Mobile connectivity for communication, work and everyday digital access.</small></div>
      </div></div></section>`;

    const dashboardCampaign = `
      <div class="ref-dashboard-campaign reveal"><div><small>INTERNATIONAL CALLING</small><h3>The world is your oyster.</h3><p>New International Call Plans for customers reaching overseas contacts.</p></div><div class="ref-call-price">K10<small>plans from • 21 countries</small></div></div>`;

    const insertAfter = (el, html) => { if (el) el.insertAdjacentHTML('afterend', html); };
    const insertBefore = (el, html) => { if (el) el.insertAdjacentHTML('beforebegin', html); };

    if (title.includes('Consumer Services Hub')) {
      const dock = document.querySelector('.dock');
      insertAfter(dock || document.querySelector('.hero'), campaign + selfCare);
      const sat = document.querySelector('.sat');
      if (sat) insertAfter(sat, trust);
      const footer = document.querySelector('footer');
      if (footer) insertBefore(footer, serviceBand);
    } else if (title.includes('Connected Nation')) {
      const services = document.querySelector('.services')?.closest('section');
      if (services) insertAfter(services, serviceBand);
      const footer = document.querySelector('footer');
      if (footer) insertBefore(footer, trust);
    } else if (title.includes('Balanced Corporate')) {
      const quick = document.querySelector('.quick');
      insertAfter(quick || document.querySelector('.hero'), campaign);
      const business = document.querySelector('.business');
      if (business) insertAfter(business, serviceBand);
      const footer = document.querySelector('footer');
      if (footer) insertBefore(footer, trust);
    } else if (title.includes('National Connectivity')) {
      const dock = document.querySelector('.dock');
      insertAfter(dock || document.querySelector('.hero'), selfCare);
      const plans = [...document.querySelectorAll('section')].find(s => s.textContent.includes('Gutpela Mobile Data'));
      if (plans) insertAfter(plans, campaign);
      const footer = document.querySelector('footer');
      if (footer) insertBefore(footer, trust);
    } else if (title.includes('Digital Self Service')) {
      const main = document.querySelector('.main');
      if (main) main.insertAdjacentHTML('afterbegin', dashboardCampaign);
    }

    const deviceContainer = document.querySelector('.catalog, .devices');
    if (deviceContainer && deviceContainer.children.length === 4 && !title.includes('Digital Self Service')) {
      const typeClass = deviceContainer.classList.contains('catalog') ? 'visual' : 'deviceVisual';
      const extras = [
        ['RED-X GROOVE','RED-X smartphone'],['RED-X DASH-X','RED-X smartphone'],['RED-X PORO','Feature phone'],['RED-X Blitz','Feature phone']
      ];
      extras.forEach(([name, type]) => {
        const card = document.createElement('div');
        card.className = 'device ref-device-extra';
        card.innerHTML = `<div class="${typeClass}">${name}</div><small>${type}</small><h4>${name}</h4><b>Explore</b>`;
        deviceContainer.appendChild(card);
      });
    }

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
      ...document.querySelectorAll('section, .dock, .quick, .panel, .plan, .device, .story, .news, .biz, .svc, .tile, .metric, .solution, .tool, .ref-selfcare, .ref-dashboard-campaign')
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