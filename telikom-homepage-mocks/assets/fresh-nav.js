(() => {
  const ready = () => {
    const style = document.createElement('style');
    style.textContent = `
      .fresh-nav-hub{padding:64px 28px;background:#fff;border-top:1px solid #edf2f5;border-bottom:1px solid #e5edf3}
      .fresh-nav-inner{max-width:1260px;margin:auto}
      .fresh-nav-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:26px}
      .fresh-nav-head small{display:block;font-size:11px!important;letter-spacing:.1em;text-transform:uppercase;color:#0875c9;font-weight:800;margin-bottom:7px}
      .fresh-nav-head h2{font:800 34px Manrope,Inter,sans-serif;letter-spacing:-.9px;margin:0;color:#102b43}
      .fresh-nav-head p{max-width:650px;margin:8px 0 0;color:#667b8a}
      .fresh-nav-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
      .fresh-nav-card{min-height:210px;padding:22px;border:1px solid #d7e3eb;border-radius:14px;background:linear-gradient(180deg,#fff,#f8fbfd);position:relative;overflow:hidden;text-decoration:none;color:#102b43;box-shadow:0 10px 26px rgba(8,44,68,.055);transition:.28s cubic-bezier(.22,.61,.36,1)}
      .fresh-nav-card:hover{transform:translateY(-4px);box-shadow:0 18px 38px rgba(8,44,68,.12);border-color:#a8d2eb}
      .fresh-nav-card:after{content:'→';position:absolute;right:18px;bottom:17px;color:#0875c9;font-weight:900;transition:transform .2s}
      .fresh-nav-card:hover:after{transform:translateX(4px)}
      .fresh-nav-icon{width:42px;height:42px;border-radius:11px;background:#e9f4fb;color:#0875c9;display:grid;place-items:center;font-weight:900;margin-bottom:28px}
      .fresh-nav-card h3{font:800 19px Manrope,Inter,sans-serif;margin:0 0 8px;letter-spacing:-.3px}
      .fresh-nav-card p{font-size:14px!important;line-height:1.55;color:#687c8b;margin:0 0 30px}
      .fresh-nav-card.featured{background:linear-gradient(145deg,#073552,#0a4d77);border-color:#0d5e8e;color:#fff}
      .fresh-nav-card.featured p{color:#c9dfed}.fresh-nav-card.featured .fresh-nav-icon{background:rgba(255,255,255,.1);color:#7fd2ff}.fresh-nav-card.featured:after{color:#fff}
      .fresh-subnav{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}.fresh-subnav a{font-size:13px!important;text-decoration:none;color:#1d4d6d;background:#f1f7fb;border:1px solid #d8e7f0;padding:8px 11px;border-radius:999px;font-weight:700}
      @media(max-width:980px){.fresh-nav-grid{grid-template-columns:1fr 1fr}}
      @media(max-width:620px){.fresh-nav-hub{padding:50px 18px}.fresh-nav-grid{grid-template-columns:1fr}.fresh-nav-head{display:block}}
    `;
    document.head.appendChild(style);

    const hub = `
      <section class="fresh-nav-hub">
        <div class="fresh-nav-inner">
          <div class="fresh-nav-head">
            <div><small>Find your way quickly</small><h2>Explore Telikom services</h2><p>Clear entry points to the pages customers, organisations and communities are most likely to need.</p></div>
          </div>
          <div class="fresh-nav-grid">
            <a class="fresh-nav-card" href="#"><span class="fresh-nav-icon">◉</span><h3>Personal Services</h3><p>Mobile plans, Gutpela data, SIM services, roaming, top up and everyday account tools.</p></a>
            <a class="fresh-nav-card featured" href="#business"><span class="fresh-nav-icon">▦</span><h3>Business Services</h3><p>Business data, systems, fixed broadband, voice, managed mobility and enterprise connectivity.</p></a>
            <a class="fresh-nav-card" href="#"><span class="fresh-nav-icon">▤</span><h3>Products & Devices</h3><p>Smartphones, RED-X devices, MiFi, routers and other Telikom equipment.</p></a>
            <a class="fresh-nav-card featured" href="#"><span class="fresh-nav-icon">✦</span><h3>Starlink Broadband</h3><p>A prominent route for customers looking for newer satellite broadband and remote connectivity options.</p></a>
            <a class="fresh-nav-card" href="#"><span class="fresh-nav-icon">⌂</span><h3>Home Internet</h3><p>Fixed broadband, home data, entertainment and household connectivity options.</p></a>
            <a class="fresh-nav-card" href="#plans"><span class="fresh-nav-icon">⌁</span><h3>Mobile & Data</h3><p>Gutpela mobile data, bundles, balance tools and mobile service information.</p></a>
            <a class="fresh-nav-card" href="#"><span class="fresh-nav-icon">◎</span><h3>Coverage & Network</h3><p>Check service availability and understand Telikom's mobile, fixed and satellite footprint.</p></a>
            <a class="fresh-nav-card" href="#"><span class="fresh-nav-icon">?</span><h3>Support & Self Care</h3><p>Customer care, FAQs, account management, bill payment, store locations and assistance.</p></a>
          </div>
          <div class="fresh-subnav"><a href="#">Promotions</a><a href="#">News & Media</a><a href="#">Wholesale</a><a href="#">Government & Public Sector</a><a href="#">Store Locations</a><a href="#">Contact Us</a></div>
        </div>
      </section>`;

    const anchor = document.querySelector('.national-proof-strip, .dock, .quick');
    if (anchor && !document.querySelector('.fresh-nav-hub')) anchor.insertAdjacentHTML('afterend', hub);

    const links = document.querySelector('.nav .links, nav .links');
    if (links) {
      const existing = [...links.querySelectorAll('a')];
      const utility = existing.filter(a => /self care|top up|contact|login/i.test(a.textContent));
      links.innerHTML = '';
      ['Personal','Business','Products','Starlink','Coverage','Support'].forEach(label => {
        const a = document.createElement('a'); a.href='#'; a.textContent=label; links.appendChild(a);
      });
      utility.forEach(a => links.appendChild(a));
    }
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ready,{once:true}); else ready();
})();
