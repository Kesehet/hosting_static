(() => {
  const onReady = () => {
    const title = document.title || '';
    const logoSrc = 'https://www.telikom.com.pg/assets/misc/TPNGLOGO.png';
    const imgPeople = 'https://www.fao.org/images/faoraplibraries/default-album/farmers-and-agripreneurs-actively-participate-in-a-hands-on-training-session-provided-by-the-eu-streit-png-programme.jpg?sfvrsn=4cc42070_1';
    const imgCommunity = 'https://blog.apnic.net/wp-content/uploads/2016/04/Goroka-EHP.jpg';
    const imgNetwork = 'https://mb.cision.com/Public/15029/2108514/94c87f17a0ea051a_org.jpg';
    const imgProfessionals = 'https://pngbusinessnews.b-cdn.net/uploads/article/image/3959/large_625349331_1329153339253229_7698291451399085164_n.jpg';
    const imgYouth = 'https://www.pnglng.com/media/PNG-LNG-Media/Media%20Release%20Images/Flying-labs_PNG-LNG-Article.png?ext=.png';

    const heroSets = {
      'Consumer Services Hub': [
        ['EVERYDAY TELIKOM','Connecting Papua New Guinea, every day.','Mobile, home internet, self-care and support brought together for customers across PNG.',imgPeople,'Explore Services','Check Coverage'],
        ['INTERNATIONAL CALLING','The world is your oyster.','New International Call Plans from K10 make it easier to stay connected beyond Papua New Guinea.',imgCommunity,'View Call Plans','Learn More'],
        ['HOME & BUSINESS','Reliable connectivity for home and enterprise.','From fixed broadband to business data and remote connectivity, Telikom supports the way PNG works and lives.',imgNetwork,'Explore Connectivity','Business Services']
      ],
      'Connected Nation': [
        ['NATIONAL INFRASTRUCTURE','A network built for a connected nation.','Telikom supports critical communications, businesses, communities and public services across Papua New Guinea.',imgNetwork,'View Network','Our Services'],
        ['REMOTE CONNECTIVITY','Connecting the unconnected.','VSAT and satellite services help extend communications to remote sites, islands and communities.',imgCommunity,'Explore VSAT','Coverage'],
        ['PUBLIC & ENTERPRISE','Trusted connectivity for organisations that matter.','Secure data, voice, hosting and business systems for enterprises, institutions and government operations.',imgProfessionals,'Enterprise Services','Contact Business']
      ],
      'Balanced Corporate': [
        ['PNG OWNED. PNG FOCUSED.','A trusted national telecommunications partner.','A polished, dependable digital experience for customers, businesses and institutions across Papua New Guinea.',imgProfessionals,'Discover Telikom','View Services'],
        ['BUSINESS & ENTERPRISE','Built for organisations with bigger responsibilities.','Business Data, fixed broadband, hosting, SIP Trunk and managed connectivity for modern organisations.',imgNetwork,'Business Portfolio','Talk to Telikom'],
        ['COMMUNITY & ACCESS','Technology that creates opportunity.','Local connectivity, digital skills and access helping communities participate in PNG’s digital future.',imgYouth,'Community Stories','Our Network']
      ],
      'National Connectivity': [
        ['PNG’S TRUSTED NETWORK','Together, wherever life takes you.','Reliable connectivity for homes, businesses and communities from the highlands to the islands.',imgCommunity,'Find a Service','Check Coverage'],
        ['SATELLITE & REMOTE','Reach beyond the terrestrial network.','Remote connectivity options for sites and communities where traditional infrastructure is difficult to reach.',imgNetwork,'Explore Satellite','Business Data'],
        ['LOCAL CAPABILITY','Built in Papua New Guinea, for Papua New Guinea.','Local people, local support and national infrastructure working together to keep the country connected.',imgProfessionals,'Why Telikom','Contact Us']
      ],
      'Digital Self Service': [
        ['DIGITAL SELF-SERVICE','Your Telikom services, in one place.','Top up, pay bills, buy data, check balances and get support from one clear digital workspace.',imgPeople,'Open Self Care','View Plans'],
        ['INTERNATIONAL CALLING','Call beyond PNG from K10.','Simple international calling options for customers connecting with family, friends and business contacts overseas.',imgCommunity,'View Call Plans','Top Up'],
        ['BUSINESS SERVICES','One provider for your organisation’s connectivity.','Business Data, VSAT, hosting, fixed broadband and voice services backed by local support.',imgNetwork,'Explore Business','Contact Support']
      ]
    };

    const style = document.createElement('style');
    style.textContent = `
      .org-slider{position:relative;overflow:hidden;background:#062f4d;color:#fff;min-height:560px;border-bottom:4px solid #0875c9}
      .org-slide{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .7s ease,visibility .7s;background-position:center;background-size:cover}
      .org-slide:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,31,50,.94) 0%,rgba(4,51,80,.80) 42%,rgba(3,42,67,.25) 72%,rgba(3,42,67,.08) 100%)}
      .org-slide.active{opacity:1;visibility:visible}
      .org-inner{position:relative;z-index:2;max-width:1320px;min-height:560px;margin:auto;padding:72px 28px 88px;display:flex;align-items:center}
      .org-copy{max-width:720px}.org-kicker{display:inline-flex;align-items:center;gap:8px;padding:7px 11px;border-radius:999px;background:rgba(255,255,255,.11);border:1px solid rgba(255,255,255,.22);font-size:12px!important;font-weight:800;letter-spacing:.08em}.org-kicker:before{content:'';width:7px;height:7px;border-radius:50%;background:#4bb6f0}
      .org-copy h1{font:800 clamp(44px,5.4vw,72px)/1.01 Manrope,Inter,sans-serif;letter-spacing:-2.4px;margin:18px 0 16px;color:#fff}.org-copy p{font-size:18px!important;line-height:1.65;color:#e4f0f6;max-width:660px;margin:0 0 28px}
      .org-actions{display:flex;gap:11px;flex-wrap:wrap}.org-actions a{display:inline-flex;align-items:center;gap:8px;padding:12px 18px;border-radius:6px;text-decoration:none;font-weight:800;font-size:14px!important}.org-actions a:first-child{background:#0a83d3;color:#fff}.org-actions a:last-child{background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.45)}.org-actions a:after{content:'→'}
      .org-controls{position:absolute;z-index:4;left:50%;bottom:24px;transform:translateX(-50%);width:min(1264px,calc(100% - 56px));display:flex;align-items:center;justify-content:space-between}.org-dots{display:flex;gap:7px}.org-dot{width:34px;height:4px;border:0;padding:0;border-radius:99px;background:rgba(255,255,255,.28);cursor:pointer;transition:.25s}.org-dot.active{background:#fff;width:54px}.org-arrows{display:flex;gap:7px}.org-arrow{width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.34);background:rgba(3,43,68,.38);color:#fff;font-size:18px;cursor:pointer;backdrop-filter:blur(8px)}
      .org-ribbon{background:#f5f8fa;border-bottom:1px solid #d9e3ea}.org-ribbon-inner{max-width:1320px;margin:auto;padding:13px 28px;display:grid;grid-template-columns:repeat(4,1fr);gap:0}.org-ribbon-item{padding:3px 18px;border-right:1px solid #dce5eb;color:#344f62;font-size:13px!important;font-weight:700}.org-ribbon-item:first-child{padding-left:0}.org-ribbon-item:last-child{border-right:0}.org-ribbon-item b{color:#0875c9;margin-right:6px}
      body.org-consumer .org-slider{border-radius:0 0 28px 28px}.org-consumer .org-slide:after{background:linear-gradient(90deg,rgba(2,40,63,.93),rgba(2,40,63,.69) 45%,rgba(2,40,63,.16) 78%)}
      body.org-network .org-slider{min-height:600px;background:#041f32}.org-network .org-slider:before{content:'';position:absolute;inset:0;z-index:3;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:46px 46px}.org-network .org-kicker{border-radius:3px}.org-network .org-actions a{border-radius:3px}.org-network .org-dot{border-radius:0}
      body.org-corporate .org-slider{min-height:520px;background:#fff;color:#102b43;border-bottom:1px solid #dbe5eb}.org-corporate .org-slide:after{background:linear-gradient(90deg,rgba(255,255,255,.97) 0%,rgba(255,255,255,.94) 42%,rgba(255,255,255,.42) 70%,rgba(255,255,255,.06))}.org-corporate .org-copy h1{color:#102b43}.org-corporate .org-copy p{color:#5d7180}.org-corporate .org-kicker{background:#edf3f7;color:#3f5668;border-color:#dce5eb}.org-corporate .org-actions a:last-child{color:#075f9f;border-color:#9fc9e5;background:#fff}.org-corporate .org-inner{min-height:520px}.org-corporate .org-dot{background:#b9c9d4}.org-corporate .org-dot.active{background:#0875c9}.org-corporate .org-arrow{background:#fff;color:#075f9f;border-color:#b8d4e5}
      body.org-human .org-slider{min-height:650px}.org-human .org-inner{min-height:650px;align-items:flex-end}.org-human .org-copy{max-width:760px;padding-bottom:34px}.org-human .org-slide:after{background:linear-gradient(0deg,rgba(2,36,58,.92) 0%,rgba(2,36,58,.42) 52%,rgba(2,36,58,.08) 83%)}.org-human .org-copy h1{font-size:clamp(46px,6vw,78px)}
      body.org-dashboard .org-slider{min-height:430px;border-radius:12px;margin:20px auto 0;width:min(1332px,calc(100% - 48px));box-shadow:0 18px 42px rgba(7,48,75,.14)}.org-dashboard .org-inner{min-height:430px;padding:52px 34px 76px}.org-dashboard .org-copy h1{font-size:clamp(38px,4.2vw,56px)}.org-dashboard .org-controls{width:calc(100% - 68px);bottom:20px}
      .ref-campaign{margin:0;background:linear-gradient(135deg,#0875c9 0%,#1599d4 55%,#063451 100%);color:#fff}.ref-campaign-inner{max-width:1320px;margin:auto;padding:42px 28px;display:grid;grid-template-columns:1.25fr .75fr;gap:30px;align-items:center}.ref-campaign h2{font:800 clamp(32px,4vw,52px)/1.02 Manrope;margin:8px 0 12px}.ref-campaign p{color:#e6f3fb;max-width:650px}.ref-campaign-price{justify-self:end;padding:22px;border-radius:12px;background:rgba(3,42,67,.7);border:1px solid rgba(255,255,255,.18)}.ref-campaign-price strong{display:block;font:800 52px Manrope}.ref-campaign-price a{display:inline-flex;margin-top:10px;padding:10px 14px;background:#fff;color:#075f9f;border-radius:6px;text-decoration:none;font-weight:800}
      .ref-selfcare{background:#0b8fca;color:#fff}.ref-selfcare-inner{max-width:1320px;margin:auto;padding:18px 28px;display:flex;justify-content:space-between;align-items:center;gap:20px}.ref-selfcare h3{margin:0;font:800 20px Manrope}.ref-selfcare p{margin:3px 0 0;color:#ddf3fc}.ref-selfcare a{background:#fff;color:#0875c9;padding:10px 14px;border-radius:6px;text-decoration:none;font-weight:800}
      .ref-service-band{padding:56px 28px;background:#fff}.ref-service-inner{max-width:1260px;margin:auto}.ref-service-head h2{font:800 31px Manrope;margin:0}.ref-service-head p{color:#667787}.ref-service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:20px}.ref-service-card{padding:22px;border:1px solid #d7e3eb;border-radius:10px;background:#fbfdff}.ref-service-card h3{font:800 20px Manrope;margin:18px 0 8px}.ref-service-icon{width:40px;height:40px;border-radius:8px;background:#e9f4fb;color:#0875c9;display:grid;place-items:center;font-weight:800}.ref-service-card p{color:#687b8b}.ref-service-card a{color:#0875c9;text-decoration:none;font-weight:800}
      .ref-trust{padding:54px 28px;background:linear-gradient(135deg,#0a2740,#123b60);color:#fff}.ref-trust-inner{max-width:1260px;margin:auto}.ref-trust-head{display:grid;grid-template-columns:.35fr .65fr;gap:34px;margin-bottom:24px}.ref-trust h2{font:800 37px Manrope;margin:0}.ref-trust-head p{color:#c9dbe8}.ref-trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.ref-trust-card{padding:17px;border:1px solid rgba(255,255,255,.14);border-radius:9px;background:rgba(255,255,255,.045)}.ref-trust-card b{display:block;margin:8px 0 5px}.ref-trust-card small{color:#c9dbe8!important}.ref-trust-card span{color:#78cdfb;font-weight:800}
      @media(max-width:900px){.org-ribbon-inner{grid-template-columns:1fr 1fr}.org-ribbon-item:nth-child(2){border-right:0}.ref-campaign-inner,.ref-trust-head{grid-template-columns:1fr}.ref-campaign-price{justify-self:start}.ref-service-grid,.ref-trust-grid{grid-template-columns:1fr 1fr}.ref-selfcare-inner{align-items:flex-start;flex-direction:column}}
      @media(max-width:600px){.org-slider,.org-inner{min-height:520px!important}.org-copy h1{font-size:42px!important}.org-copy p{font-size:16px!important}.org-ribbon-inner,.ref-service-grid,.ref-trust-grid{grid-template-columns:1fr}.org-ribbon-item{border-right:0;border-bottom:1px solid #dce5eb;padding:9px 0}.org-ribbon-item:last-child{border-bottom:0}.org-controls{width:calc(100% - 36px)}.org-dashboard .org-slider{width:calc(100% - 28px)}.ref-campaign-inner{padding:34px 18px}.ref-selfcare-inner{padding-left:18px;padding-right:18px}}
    `;
    document.head.appendChild(style);

    let setKey = Object.keys(heroSets).find(k => title.includes(k));
    const slides = setKey ? heroSets[setKey] : heroSets['Balanced Corporate'];
    const bodyClass = title.includes('Consumer Services Hub') ? 'org-consumer' : title.includes('Connected Nation') ? 'org-network' : title.includes('Balanced Corporate') ? 'org-corporate' : title.includes('National Connectivity') ? 'org-human' : 'org-dashboard';
    document.body.classList.add(bodyClass);

    const slider = `
      <section class="org-slider" aria-label="Telikom highlights">
        ${slides.map((s,i)=>`<article class="org-slide ${i===0?'active':''}" data-index="${i}" style="background-image:url('${s[3]}')"><div class="org-inner"><div class="org-copy"><span class="org-kicker">${s[0]}</span><h1>${s[1]}</h1><p>${s[2]}</p><div class="org-actions"><a href="#">${s[4]}</a><a href="#">${s[5]}</a></div></div></div></article>`).join('')}
        <div class="org-controls"><div class="org-dots">${slides.map((_,i)=>`<button class="org-dot ${i===0?'active':''}" aria-label="Show slide ${i+1}" data-slide="${i}"></button>`).join('')}</div><div class="org-arrows"><button class="org-arrow org-prev" aria-label="Previous slide">‹</button><button class="org-arrow org-next" aria-label="Next slide">›</button></div></div>
      </section>
      <div class="org-ribbon"><div class="org-ribbon-inner"><div class="org-ribbon-item"><b>100%</b> PNG owned</div><div class="org-ribbon-item"><b>1555</b> Customer Care</div><div class="org-ribbon-item"><b>4G</b> Mobile connectivity</div><div class="org-ribbon-item"><b>Self Care</b> Online account services</div></div></div>`;

    const nav = document.querySelector('nav');
    if (nav) nav.insertAdjacentHTML('afterend', slider);
    const oldHero = document.querySelector('.hero');
    if (oldHero) oldHero.style.display='none';
    if (title.includes('Digital Self Service')) {
      const oldHeroRow = document.querySelector('.heroRow');
      if (oldHeroRow) oldHeroRow.style.display='none';
    }

    const campaign = `<section class="ref-campaign"><div class="ref-campaign-inner"><div><small>INTERNATIONAL CALLING</small><h2>The world is your oyster.</h2><p>New International Call Plans make it easier to stay connected with family, friends and business contacts beyond Papua New Guinea.</p></div><div class="ref-campaign-price"><small>PLANS FROM</small><strong>K10</strong><b>21 countries</b><br><a href="#">View international plans</a></div></div></section>`;
    const selfCare = `<div class="ref-selfcare"><div class="ref-selfcare-inner"><div><h3>Telikom Self Care. Manage your credit online.</h3><p>Top up, check balances, manage bundles and stay in control online.</p></div><a href="#">Open Self Care</a></div></div>`;
    const serviceBand = `<section class="ref-service-band"><div class="ref-service-inner"><div class="ref-service-head"><h2>Services built around how PNG connects</h2><p>Clear pathways for households, organisations and national infrastructure.</p></div><div class="ref-service-grid"><article class="ref-service-card"><div class="ref-service-icon">⌂</div><h3>Fixed Broadband</h3><p>Reliable fixed connectivity for homes and organisations.</p><a href="#">Explore fixed broadband</a></article><article class="ref-service-card"><div class="ref-service-icon">▦</div><h3>Business Systems</h3><p>Digital systems and services supporting modern business operations.</p><a href="#">Explore business systems</a></article><article class="ref-service-card"><div class="ref-service-icon">⌁</div><h3>Business Data</h3><p>Dedicated communications services for enterprises across PNG.</p><a href="#">Explore business data</a></article></div></div></section>`;
    const trust = `<section class="ref-trust"><div class="ref-trust-inner"><div class="ref-trust-head"><h2>Why choose Telikom?</h2><p>A Papua New Guinean network built around local ownership, practical value, self-service and dependable connectivity.</p></div><div class="ref-trust-grid"><div class="ref-trust-card"><span>✓</span><b>100% PNG Owned</b><small>A national telecommunications company serving Papua New Guinea.</small></div><div class="ref-trust-card"><span>▣</span><b>No Hidden Fees</b><small>Clearer choices and easier control of voice and data usage.</small></div><div class="ref-trust-card"><span>▤</span><b>Bring Your Own Device</b><small>Use a compatible device with your Telikom SIM.</small></div><div class="ref-trust-card"><span>◉</span><b>Unlimited Calls & Text</b><small>Selected packages help keep people connected.</small></div><div class="ref-trust-card"><span>↗</span><b>Easy Online Self Care</b><small>Manage top-up, credit and services online.</small></div><div class="ref-trust-card"><span>4G</span><b>4G Connectivity</b><small>Mobile connectivity for work, communication and daily life.</small></div></div></div></section>`;
    const after=(el,html)=>el&&el.insertAdjacentHTML('afterend',html), before=(el,html)=>el&&el.insertAdjacentHTML('beforebegin',html);

    if(title.includes('Consumer Services Hub')){ const dock=document.querySelector('.dock'); after(dock,selfCare+campaign); before(document.querySelector('footer'),serviceBand); const sat=document.querySelector('.sat'); if(sat) after(sat,trust); }
    else if(title.includes('Connected Nation')){ const services=document.querySelector('.services')?.closest('section'); if(services) after(services,serviceBand); before(document.querySelector('footer'),trust); }
    else if(title.includes('Balanced Corporate')){ after(document.querySelector('.quick'),campaign); after(document.querySelector('.business'),serviceBand); before(document.querySelector('footer'),trust); }
    else if(title.includes('National Connectivity')){ after(document.querySelector('.dock'),selfCare); const planSec=[...document.querySelectorAll('section')].find(s=>s.textContent.includes('Gutpela Mobile Data')); if(planSec) after(planSec,campaign); before(document.querySelector('footer'),trust); }

    const deviceContainer=document.querySelector('.catalog,.devices');
    if(deviceContainer&&deviceContainer.children.length===4&&!title.includes('Digital Self Service')){
      const cls=deviceContainer.classList.contains('catalog')?'visual':'deviceVisual';
      [['RED-X GROOVE','RED-X smartphone'],['RED-X DASH-X','RED-X smartphone'],['RED-X PORO','Feature phone'],['RED-X Blitz','Feature phone']].forEach(([name,type])=>{const card=document.createElement('div');card.className='device ref-device-extra';card.innerHTML=`<div class="${cls}">${name}</div><small>${type}</small><h4>${name}</h4><b>Explore</b>`;deviceContainer.appendChild(card);});
    }

    const sliderEl=document.querySelector('.org-slider'), slideEls=[...document.querySelectorAll('.org-slide')], dots=[...document.querySelectorAll('.org-dot')];
    let current=0,timer;
    const show=i=>{current=(i+slideEls.length)%slideEls.length;slideEls.forEach((el,n)=>el.classList.toggle('active',n===current));dots.forEach((el,n)=>el.classList.toggle('active',n===current));};
    const play=()=>{clearInterval(timer);timer=setInterval(()=>show(current+1),6500)};
    document.querySelector('.org-prev')?.addEventListener('click',()=>{show(current-1);play()});
    document.querySelector('.org-next')?.addEventListener('click',()=>{show(current+1);play()});
    dots.forEach((d,i)=>d.addEventListener('click',()=>{show(i);play()}));
    sliderEl?.addEventListener('mouseenter',()=>clearInterval(timer));sliderEl?.addEventListener('mouseleave',play);play();

    document.querySelectorAll('img').forEach((img,i)=>{if(!img.alt)img.alt=i===0?'Telikom PNG':'Telikom content image';if(img.src!==logoSrc&&!img.closest('.hero')){img.loading='lazy';img.decoding='async'}else img.fetchPriority='high'});
    const revealTargets=[...document.querySelectorAll('section,.dock,.quick,.panel,.plan,.device,.story,.news,.biz,.svc,.tile,.metric,.solution,.tool,.ref-selfcare')];
    revealTargets.forEach((el,i)=>{if(el.classList.contains('org-slider'))return;el.classList.add('reveal');if(i%4)el.classList.add(`reveal-delay-${i%4}`)});
    if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.06});revealTargets.forEach(el=>io.observe(el))}else revealTargets.forEach(el=>el.classList.add('is-visible'));
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',onReady,{once:true});else onReady();
})();