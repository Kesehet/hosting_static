(() => {
  const run = () => {
    const title = document.title || '';
    const variant = title.includes('Consumer Services Hub') ? 'consumer' :
      title.includes('Connected Nation') ? 'nation' :
      title.includes('Balanced Corporate') ? 'corporate' :
      title.includes('National Connectivity') ? 'human' : 'executive';

    const existing = document.querySelector('.national-proof-strip');
    if (!existing || existing.dataset.variantGlance === '1') return;

    const style = document.createElement('style');
    style.textContent = `
      .national-proof-strip{box-shadow:none!important;border:0!important}
      .glance-wrap{max-width:1360px;margin:auto;padding:0 32px}
      .glance-eyebrow{font-size:11px!important;letter-spacing:.1em;text-transform:uppercase;font-weight:800;color:#0875c9}
      .glance-title{font:800 26px Manrope,Inter,sans-serif;letter-spacing:-.5px;color:#102b43;margin:5px 0 0}
      .glance-muted{color:#687c8b;font-size:13px!important}

      /* 01 — Consumer: polished service ribbon */
      .glance-consumer{background:#fff;padding:20px 0 24px;border-bottom:1px solid #e4edf3}
      .glance-consumer .gc-shell{display:grid;grid-template-columns:1.35fr repeat(5,1fr);border:1px solid #dce7ee;border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 15px 40px rgba(5,48,78,.07)}
      .glance-consumer .gc-intro{padding:22px 24px;background:linear-gradient(135deg,#062f4d,#0a5f91);color:#fff}
      .glance-consumer .gc-intro .glance-eyebrow{color:#8ed8ff}.glance-consumer .gc-intro h3{font:800 21px Manrope;margin:5px 0 5px}.glance-consumer .gc-intro p{margin:0;color:#cfe5f2;font-size:13px!important;line-height:1.5}
      .glance-consumer .gc-item{padding:19px 16px;border-left:1px solid #e6edf2;display:flex;gap:11px;align-items:center;min-width:0}
      .glance-consumer .gc-icon{width:38px;height:38px;border-radius:10px;background:#eaf5fd;color:#0875c9;display:grid;place-items:center;font-weight:900;flex:0 0 auto}
      .glance-consumer .gc-item b{display:block;font-size:13px!important;color:#17364b}.glance-consumer .gc-item small{display:block;font-size:11px!important;color:#718493;margin-top:2px}

      /* 02 — Nation: operational network console */
      .glance-nation{background:#052b46;padding:30px 0;color:#fff;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
      .glance-nation .gn-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:16px}.glance-nation .glance-eyebrow{color:#7ed2ff}.glance-nation .glance-title{color:#fff}
      .glance-nation .gn-status{display:inline-flex;align-items:center;gap:8px;font-size:12px!important;color:#bde4f7}.glance-nation .gn-status:before{content:'';width:8px;height:8px;border-radius:50%;background:#32b8ff;box-shadow:0 0 0 5px rgba(50,184,255,.12)}
      .glance-nation .gn-grid{display:grid;grid-template-columns:1.35fr repeat(4,1fr);gap:9px}
      .glance-nation .gn-main,.glance-nation .gn-card{border:1px solid rgba(255,255,255,.13);background:rgba(255,255,255,.055);border-radius:8px;padding:18px}
      .glance-nation .gn-main{background:linear-gradient(145deg,rgba(8,117,201,.22),rgba(255,255,255,.04));display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:center}
      .glance-nation .gn-main strong{font:800 38px Manrope;color:#fff}.glance-nation .gn-main span{display:block;color:#c6e0ed;font-size:12px!important;line-height:1.45}
      .glance-nation .gn-card b{font-size:14px!important}.glance-nation .gn-card small{display:block;color:#b9d4e2!important;font-size:11px!important;margin:5px 0 13px}.glance-nation .gn-track{height:4px;border-radius:99px;background:rgba(255,255,255,.12);overflow:hidden}.glance-nation .gn-track i{display:block;height:100%;background:#2ab1ff;border-radius:99px}

      /* 03 — Corporate: restrained editorial trust statement */
      .glance-corporate{background:#f7f9fb;padding:34px 0;border-block:1px solid #e3e9ee}
      .glance-corporate .gco-grid{display:grid;grid-template-columns:1.1fr .7fr .7fr 1.25fr;gap:0;border-top:1px solid #cfdbe3;border-bottom:1px solid #cfdbe3}
      .glance-corporate .gco-intro{padding:24px 28px 24px 0}.glance-corporate .gco-stat{padding:23px 26px;border-left:1px solid #d7e0e7}.glance-corporate .gco-stat strong{display:block;font:800 34px Manrope;color:#0875c9;letter-spacing:-1px}.glance-corporate .gco-stat span{font-size:12px!important;color:#526b7d;font-weight:700}
      .glance-corporate .gco-promise{padding:23px 0 23px 28px;border-left:1px solid #d7e0e7}.glance-corporate .gco-promise b{display:block;font:800 16px Manrope;margin-bottom:6px;color:#17364b}.glance-corporate .gco-promise p{font-size:12px!important;line-height:1.55;color:#6b7f8e;margin:0}

      /* 04 — Human: people-first impact mosaic */
      .glance-human{padding:28px 0;background:#fff}
      .glance-human .gh-shell{display:grid;grid-template-columns:1.4fr .8fr .8fr .8fr;min-height:210px;border-radius:18px;overflow:hidden;box-shadow:0 16px 46px rgba(7,44,70,.10)}
      .glance-human .gh-story{padding:28px;color:#fff;background:linear-gradient(90deg,rgba(3,38,61,.88),rgba(3,38,61,.43)),url('https://blog.apnic.net/wp-content/uploads/2016/04/Goroka-EHP.jpg') center/cover;display:flex;flex-direction:column;justify-content:flex-end}
      .glance-human .gh-story .glance-eyebrow{color:#8ed8ff}.glance-human .gh-story h3{font:800 26px Manrope;margin:6px 0 5px}.glance-human .gh-story p{margin:0;color:#e2eff6;font-size:13px!important;max-width:520px;line-height:1.55}
      .glance-human .gh-impact{padding:25px 20px;background:#f6fafc;border-left:1px solid #e0e9ef;display:flex;flex-direction:column;justify-content:center}.glance-human .gh-impact span{font-size:25px;line-height:1;margin-bottom:15px}.glance-human .gh-impact b{font:800 15px Manrope;color:#14344a}.glance-human .gh-impact small{font-size:11px!important;color:#6d8290;margin-top:6px;line-height:1.5}

      /* 05 — Executive: compact KPI command deck */
      .glance-executive{background:transparent;padding:12px 0 22px}
      .glance-executive .ge-shell{border:1px solid #d8e4ec;background:#fff;border-radius:10px;padding:14px;box-shadow:0 8px 24px rgba(6,42,66,.055)}
      .glance-executive .ge-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.glance-executive .ge-top b{font:800 16px Manrope;color:#17364b}.glance-executive .ge-live{font-size:11px!important;color:#0875c9;font-weight:800;background:#eaf5fd;padding:6px 9px;border-radius:999px}
      .glance-executive .ge-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.glance-executive .ge-kpi{padding:13px;border:1px solid #e0e8ed;border-radius:8px;background:#fbfcfd;position:relative;overflow:hidden}.glance-executive .ge-kpi:before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:#0875c9}.glance-executive .ge-kpi small{display:block;font-size:10px!important;color:#7a8c98;text-transform:uppercase;letter-spacing:.06em}.glance-executive .ge-kpi b{display:block;font:800 15px Manrope;color:#18384e;margin-top:4px}.glance-executive .ge-spark{display:flex;align-items:end;gap:2px;height:18px;margin-top:9px}.glance-executive .ge-spark i{width:5px;background:#b9dbef;border-radius:2px 2px 0 0}.glance-executive .ge-spark i:nth-child(3n){background:#0875c9}

      @media(max-width:1000px){.glance-consumer .gc-shell{grid-template-columns:1fr 1fr 1fr}.glance-consumer .gc-intro{grid-column:span 3}.glance-nation .gn-grid{grid-template-columns:1fr 1fr}.glance-nation .gn-main{grid-column:span 2}.glance-corporate .gco-grid{grid-template-columns:1fr 1fr}.glance-corporate .gco-intro{grid-column:span 2;padding-left:0}.glance-human .gh-shell{grid-template-columns:1fr 1fr}.glance-human .gh-story{grid-column:span 2;min-height:220px}.glance-executive .ge-grid{grid-template-columns:1fr 1fr 1fr}}
      @media(max-width:620px){.glance-wrap{padding:0 18px}.glance-consumer .gc-shell,.glance-nation .gn-grid,.glance-corporate .gco-grid,.glance-human .gh-shell,.glance-executive .ge-grid{grid-template-columns:1fr}.glance-consumer .gc-intro,.glance-nation .gn-main,.glance-corporate .gco-intro,.glance-human .gh-story{grid-column:auto}.glance-consumer .gc-item{border-left:0;border-top:1px solid #e6edf2}.glance-human .gh-impact{border-left:0;border-top:1px solid #e0e9ef}}
    `;
    document.head.appendChild(style);

    const markup = {
      consumer: `<div class="glance-consumer"><div class="glance-wrap"><div class="gc-shell"><div class="gc-intro"><span class="glance-eyebrow">Telikom at a glance</span><h3>Everything customers use most.</h3><p>A fast service ribbon focused on everyday actions and access.</p></div>${[
        ['↗','Top Up','Recharge quickly'],['◫','Buy Data','Mobile bundles'],['⌂','Home','Fixed services'],['◎','Coverage','Check network'],['?','Support','Call 1555']
      ].map(x=>`<div class="gc-item"><span class="gc-icon">${x[0]}</span><div><b>${x[1]}</b><small>${x[2]}</small></div></div>`).join('')}</div></div></div>`,

      nation: `<div class="glance-nation"><div class="glance-wrap"><div class="gn-head"><div><span class="glance-eyebrow">National network overview</span><h3 class="glance-title">Infrastructure at a glance</h3></div><span class="gn-status">Network services operational</span></div><div class="gn-grid"><div class="gn-main"><strong>PNG</strong><span><b>National telecommunications capability</b><br>Mobile, fixed, enterprise and remote connectivity.</span></div>${[
        ['Mobile + Fixed','Core access networks','78%'],['Business Data','Enterprise connectivity','86%'],['VSAT + Starlink','Remote connectivity','68%'],['Updates','Public & network notices','92%']
      ].map(x=>`<div class="gn-card"><b>${x[0]}</b><small>${x[1]}</small><div class="gn-track"><i style="width:${x[2]}"></i></div></div>`).join('')}</div></div></div>`,

      corporate: `<div class="glance-corporate"><div class="glance-wrap"><div class="gco-grid"><div class="gco-intro"><span class="glance-eyebrow">Corporate snapshot</span><h3 class="glance-title">A trusted PNG operator.</h3><p class="glance-muted">A restrained executive summary rather than another row of service tiles.</p></div><div class="gco-stat"><strong>100%</strong><span>PNG owned</span></div><div class="gco-stat"><strong>1555</strong><span>Customer care</span></div><div class="gco-promise"><b>One Telikom portfolio</b><p>Personal, business, fixed, mobile, devices, satellite, stores, media and support presented through one clear national service gateway.</p></div></div></div></div>`,

      human: `<div class="glance-human"><div class="glance-wrap"><div class="gh-shell"><div class="gh-story"><span class="glance-eyebrow">People first</span><h3>Connectivity that reaches communities.</h3><p>Telikom’s role is larger than plans and devices — it connects homes, organisations and remote communities across Papua New Guinea.</p></div>${[
        ['⌂','Homes','Affordable Home Data, U-TOKMoa and fixed connectivity.'],['◉','Communities','Mobile access, support and local service pathways.'],['✦','Remote PNG','VSAT and satellite connectivity for difficult locations.']
      ].map(x=>`<div class="gh-impact"><span>${x[0]}</span><b>${x[1]}</b><small>${x[2]}</small></div>`).join('')}</div></div></div>`,

      executive: `<div class="glance-executive"><div class="glance-wrap"><div class="ge-shell"><div class="ge-top"><b>Service command deck</b><span class="ge-live">LIVE OVERVIEW</span></div><div class="ge-grid">${[
        ['Access','Self Care'],['Customer','1555'],['Portfolio','Personal + Business'],['Remote','VSAT / Satellite'],['Updates','News + Notices']
      ].map((x,n)=>`<div class="ge-kpi"><small>${x[0]}</small><b>${x[1]}</b><div class="ge-spark">${[7,12,9,15,11,17].map((h,i)=>`<i style="height:${h + ((n+i)%3)*2}px"></i>`).join('')}</div></div>`).join('')}</div></div></div></div>`
    };

    existing.dataset.variantGlance = '1';
    existing.innerHTML = markup[variant];
    existing.classList.add(`glance-${variant}-host`);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, {once:true}); else run();
})();
