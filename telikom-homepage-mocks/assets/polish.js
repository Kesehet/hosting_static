(() => {
  const onReady = () => {
    const title = document.title || '';
    const logoSrc = 'https://www.telikom.com.pg/assets/misc/TPNGLOGO.png';

    const variant = title.includes('Consumer Services Hub') ? 'consumer' :
      title.includes('Connected Nation') ? 'nation' :
      title.includes('Balanced Corporate') ? 'corporate' :
      title.includes('National Connectivity') ? 'human' : 'executive';

    const style = document.createElement('style');
    style.textContent = `
      :root{--inst-blue:#0875c9;--inst-navy:#062f4d;--inst-deep:#031f34;--inst-ink:#102b43;--inst-line:#d8e4ec;--inst-sky:#eaf5fd;--inst-ease:cubic-bezier(.22,.61,.36,1)}
      .institutional-hero{position:relative;overflow:hidden;color:#fff;background:#062f4d;border-bottom:1px solid rgba(255,255,255,.08)}
      .institutional-hero .inst-slide{display:none;min-height:570px;position:relative;isolation:isolate}
      .institutional-hero .inst-slide.active{display:block;animation:instFade .55s var(--inst-ease)}
      .institutional-hero .inst-bg{position:absolute;inset:0;z-index:-2;background-size:cover;background-position:center;transform:scale(1.01)}
      .institutional-hero .inst-bg:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,32,52,.96) 0%,rgba(3,47,76,.85) 43%,rgba(3,47,76,.28) 72%,rgba(3,47,76,.14) 100%)}
      .institutional-hero.nation .inst-bg:after{background:linear-gradient(90deg,rgba(1,29,48,.98),rgba(3,47,76,.88) 47%,rgba(8,117,201,.26))}
      .institutional-hero.corporate .inst-bg:after{background:linear-gradient(90deg,rgba(4,42,67,.95),rgba(6,66,103,.78) 52%,rgba(6,66,103,.2))}
      .institutional-hero.human .inst-bg:after{background:linear-gradient(90deg,rgba(4,38,62,.9),rgba(4,38,62,.58) 52%,rgba(4,38,62,.16))}
      .institutional-hero.executive .inst-bg:after{background:linear-gradient(90deg,rgba(3,31,52,.98),rgba(5,55,88,.92) 54%,rgba(8,117,201,.24))}
      .institutional-hero:before{content:'';position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:44px 44px;opacity:.6}
      .inst-wrap{max-width:1360px;margin:auto;padding:72px 32px 92px;display:grid;grid-template-columns:minmax(0,1.2fr) minmax(360px,.8fr);gap:48px;align-items:end;min-height:570px;position:relative;z-index:2}
      .inst-copy{max-width:760px}.inst-kicker{display:inline-flex;align-items:center;gap:9px;padding:8px 12px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.08);backdrop-filter:blur(8px);font-size:12px!important;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.inst-kicker:before{content:'';width:7px;height:7px;border-radius:50%;background:#53c2ff;box-shadow:0 0 0 5px rgba(83,194,255,.12)}
      .inst-copy h1{font:800 clamp(48px,5.8vw,76px)/.98 Manrope,Inter,sans-serif;letter-spacing:-2.6px;margin:20px 0 18px;max-width:850px}.inst-copy p{font-size:18px!important;line-height:1.7;max-width:700px;color:#d9ebf5;margin:0 0 28px}.inst-actions{display:flex;gap:12px;flex-wrap:wrap}.inst-actions a{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:12px 19px;border-radius:8px;text-decoration:none;font-weight:800;font-size:14px!important;background:#0b87d8;color:#fff;border:1px solid #2fa7f0;box-shadow:0 10px 28px rgba(1,28,46,.24)}.inst-actions a.alt{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.35);backdrop-filter:blur(10px)}
      .inst-proof{align-self:end;background:rgba(3,39,63,.78);border:1px solid rgba(255,255,255,.16);border-radius:16px;padding:24px;box-shadow:0 24px 60px rgba(0,0,0,.22);backdrop-filter:blur(14px)}.inst-proof .proof-label{font-size:11px!important;letter-spacing:.09em;text-transform:uppercase;color:#9edbff;font-weight:800}.inst-proof h3{font:800 23px Manrope;margin:8px 0 16px}.inst-proof-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.inst-proof-grid div{padding:13px;border-radius:9px;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.1)}.inst-proof-grid b{display:block;font-size:14px!important}.inst-proof-grid small{color:#bdd5e4!important;font-size:12px!important}
      .inst-controls{position:absolute;z-index:5;left:50%;transform:translateX(-50%);bottom:24px;display:flex;align-items:center;gap:12px}.inst-dots{display:flex;gap:7px}.inst-dots button{width:28px;height:4px;padding:0;border:0;border-radius:999px;background:rgba(255,255,255,.38);cursor:pointer;transition:.25s}.inst-dots button.active{width:48px;background:#fff}.inst-arrow{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.28);background:rgba(3,38,61,.55);color:#fff;display:grid;place-items:center;cursor:pointer;font-size:18px;backdrop-filter:blur(8px)}
      @keyframes instFade{from{opacity:.3;transform:scale(1.005)}to{opacity:1;transform:none}}

      .national-proof-strip{background:#fff;border-bottom:1px solid var(--inst-line);box-shadow:0 10px 28px rgba(7,46,73,.05)}.national-proof-inner{max-width:1360px;margin:auto;padding:0 32px;display:grid;grid-template-columns:repeat(5,1fr)}.national-proof-item{padding:18px 16px;border-right:1px solid #e9eff3;display:flex;gap:12px;align-items:center}.national-proof-item:first-child{border-left:1px solid #e9eff3}.national-proof-icon{width:37px;height:37px;border-radius:10px;background:#eaf5fd;color:#0875c9;display:grid;place-items:center;font-weight:900}.national-proof-item b{display:block;font-size:14px!important;color:#15344a}.national-proof-item small{display:block;color:#6d8090!important;font-size:12px!important;margin-top:2px}

      .institutional-section{padding:72px 28px}.institutional-inner{max-width:1260px;margin:auto}.institutional-heading{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:26px}.institutional-heading h2{font:800 34px Manrope;margin:0;letter-spacing:-.8px}.institutional-heading p{margin:7px 0 0;color:#667b8b;max-width:720px}.institutional-heading .eyebrow{font-size:11px!important;text-transform:uppercase;letter-spacing:.1em;color:#0875c9;font-weight:800}.institutional-link{color:#0875c9;text-decoration:none;font-weight:800;font-size:14px!important}

      .national-role{background:linear-gradient(180deg,#f7fafc,#eef4f7)}.role-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:18px}.role-lead{min-height:430px;border-radius:18px;overflow:hidden;position:relative;background:linear-gradient(90deg,rgba(3,39,63,.94),rgba(3,39,63,.5)),url('https://mb.cision.com/Public/15029/2108514/94c87f17a0ea051a_org.jpg') center/cover;padding:38px;color:#fff;display:flex;align-items:flex-end}.role-lead h3{font:800 34px/1.12 Manrope;margin:9px 0 12px;max-width:620px}.role-lead p{color:#d8e9f3;max-width:600px}.role-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}.role-card{background:#fff;border:1px solid #d8e4ec;border-radius:14px;padding:22px;position:relative;overflow:hidden;min-height:204px;box-shadow:0 10px 26px rgba(8,44,68,.05)}.role-card:before{content:'';position:absolute;right:-36px;top:-42px;width:110px;height:110px;border-radius:50%;background:rgba(8,117,201,.08)}.role-card span{width:39px;height:39px;border-radius:10px;display:grid;place-items:center;background:#eaf5fd;color:#0875c9;font-weight:900}.role-card h4{font:800 18px Manrope;margin:24px 0 8px}.role-card p{margin:0;color:#6b7e8d;font-size:14px!important;line-height:1.55}

      .infrastructure-band{background:#062f4d;color:#fff;position:relative;overflow:hidden}.infrastructure-band:before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 20%,rgba(18,139,214,.2),transparent 32%),linear-gradient(115deg,rgba(255,255,255,.02),transparent 46%)}.infra-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:22px;position:relative}.infra-intro{padding-right:20px}.infra-intro h2{font:800 38px/1.08 Manrope;margin:8px 0 14px}.infra-intro p{color:#c9dce8;line-height:1.65}.infra-points{display:grid;grid-template-columns:1fr 1fr;gap:12px}.infra-point{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.045);border-radius:13px;padding:20px;min-height:145px}.infra-point b{display:block;font-size:16px!important;margin-bottom:7px}.infra-point small{color:#bfd4e2!important}.infra-point .num{display:block;font:800 26px Manrope;color:#6fd0ff;margin-bottom:12px}

      .public-service{background:#fff}.public-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.public-card{border:1px solid #d9e4eb;border-radius:14px;padding:24px;background:linear-gradient(180deg,#fff,#f8fbfd);min-height:250px;box-shadow:0 12px 30px rgba(9,45,72,.05);position:relative;overflow:hidden}.public-card:after{content:'';position:absolute;left:0;bottom:0;height:4px;width:0;background:#0875c9;transition:.28s}.public-card:hover:after{width:100%}.public-card .pc-icon{width:43px;height:43px;border-radius:11px;background:#eaf5fd;color:#0875c9;display:grid;place-items:center;font-weight:900}.public-card h3{font:800 20px Manrope;margin:28px 0 8px}.public-card p{color:#6a7e8e;font-size:14px!important;line-height:1.6}.public-card ul{margin:18px 0 0;padding:0;list-style:none}.public-card li{font-size:13px!important;padding:7px 0;border-top:1px solid #e8eef2;color:#365168}

      .trust-panel{background:linear-gradient(135deg,#0b2740,#0b3d60);color:#fff;position:relative;overflow:hidden}.trust-panel:before{content:'';position:absolute;inset:0;background-image:linear-gradient(30deg,rgba(255,255,255,.026) 12%,transparent 12.5%,transparent 87%,rgba(255,255,255,.026) 87.5%),linear-gradient(150deg,rgba(255,255,255,.018) 12%,transparent 12.5%,transparent 87%,rgba(255,255,255,.018) 87.5%);background-size:96px 164px}.trust-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;position:relative}.trust-item{padding:20px 16px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.04);min-height:155px}.trust-item span{display:grid;place-items:center;width:32px;height:32px;border-radius:9px;background:rgba(57,174,239,.13);color:#78cdf8;font-weight:900;margin-bottom:18px}.trust-item b{display:block;font-size:14px!important}.trust-item small{display:block;color:#bed2df!important;margin-top:6px;font-size:12px!important}

      .ref-campaign{margin:0;background:linear-gradient(135deg,#0875c9 0%,#1599d4 55%,#063451 100%);color:#fff;overflow:hidden;position:relative}.ref-campaign-inner{max-width:1320px;margin:auto;padding:46px 28px;display:grid;grid-template-columns:1.25fr .75fr;gap:30px;align-items:center}.ref-campaign h2{font:800 clamp(34px,4.2vw,56px)/1.02 Manrope;margin:10px 0 12px}.ref-campaign p{max-width:650px;color:#e7f5fd}.ref-campaign-price{justify-self:end;padding:24px;border-radius:16px;background:rgba(3,42,67,.7);border:1px solid rgba(255,255,255,.18)}.ref-campaign-price strong{display:block;font:800 56px Manrope}.ref-campaign-price a{display:inline-flex;margin-top:12px;background:#fff;color:#075f9f;padding:10px 14px;border-radius:7px;text-decoration:none;font-weight:800}.ref-campaign-meta{display:flex;gap:8px;flex-wrap:wrap}.ref-campaign-meta span{padding:7px 10px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.07)}
      .ref-selfcare{background:#0d93cf;color:#fff}.ref-selfcare-inner{max-width:1320px;margin:auto;padding:20px 28px;display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center}.ref-selfcare h3{margin:0 0 4px}.ref-selfcare p{margin:0;color:#def5ff}.ref-selfcare a{background:#fff;color:#0875c9;text-decoration:none;font-weight:800;padding:10px 15px;border-radius:7px}

      .reveal{opacity:0;transform:translateY(18px);transition:opacity .7s var(--inst-ease),transform .7s var(--inst-ease)}.reveal.is-visible{opacity:1;transform:none}
      @media(max-width:1050px){.inst-wrap{grid-template-columns:1fr;align-items:center}.inst-proof{max-width:600px}.national-proof-inner{grid-template-columns:repeat(3,1fr)}.role-grid,.infra-grid{grid-template-columns:1fr}.trust-grid{grid-template-columns:repeat(3,1fr)}.public-grid{grid-template-columns:1fr 1fr}}
      @media(max-width:720px){.inst-wrap{padding:56px 20px 84px}.institutional-hero .inst-slide{min-height:640px}.inst-copy h1{font-size:44px}.inst-copy p{font-size:16px!important}.national-proof-inner{grid-template-columns:1fr 1fr;padding:0 16px}.national-proof-item{border-left:0!important}.role-cards,.infra-points,.public-grid,.trust-grid{grid-template-columns:1fr}.institutional-section{padding:54px 18px}.ref-campaign-inner,.ref-selfcare-inner{grid-template-columns:1fr}.ref-campaign-price{justify-self:start}.institutional-heading{align-items:start;flex-direction:column}}
      @media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.reveal{opacity:1!important;transform:none!important}}
    `;
    document.head.appendChild(style);

    // remove any hand-authored trailing arrows where shared CSS already provides one
    document.querySelectorAll('.view,.institutional-link').forEach(a => {
      a.textContent = a.textContent.replace(/\s*[→›»]+\s*$/,'').trim();
    });

    // Hide the original first impression so each concept gets a stronger presentation-grade opening.
    const oldHero = document.querySelector('.hero');
    if (oldHero) oldHero.style.display = 'none';
    if (variant === 'executive') {
      const oldHeroRow = document.querySelector('.heroRow');
      if (oldHeroRow) oldHeroRow.style.display = 'none';
    }

    const imagery = {
      community: 'https://www.fao.org/images/faoraplibraries/default-album/farmers-and-agripreneurs-actively-participate-in-a-hands-on-training-session-provided-by-the-eu-streit-png-programme.jpg?sfvrsn=4cc42070_1',
      infrastructure: 'https://mb.cision.com/Public/15029/2108514/94c87f17a0ea051a_org.jpg',
      local: 'https://blog.apnic.net/wp-content/uploads/2016/04/Goroka-EHP.jpg',
      youth: 'https://www.pnglng.com/media/PNG-LNG-Media/Media%20Release%20Images/Flying-labs_PNG-LNG-Article.png?ext=.png'
    };

    const slideSets = {
      consumer: [
        ['A national network for everyday PNG.','Mobile, home internet, Self Care and support brought together in one trusted Telikom experience.','Explore Mobile Plans','Open Self Care',imagery.community,'PERSONAL • HOME • BUSINESS'],
        ['Built to connect people, businesses and communities.','From daily mobile data to fixed broadband and remote connectivity, Telikom supports how Papua New Guinea communicates.','Explore Services','Check Coverage',imagery.infrastructure,'NATIONAL CONNECTIVITY'],
        ['More than a mobile plan. A connection to what matters.','Simple digital services, local support and practical connectivity for life, work and opportunity across PNG.','View Offers','Find Support',imagery.local,'100% PNG OWNED']
      ],
      nation: [
        ['Connecting Papua New Guinea at national scale.','A telecommunications network serving people, enterprise and public institutions across a uniquely demanding geography.','Explore Network Services','Business Solutions',imagery.infrastructure,'NATIONAL INFRASTRUCTURE'],
        ['Critical connectivity for organisations that cannot stand still.','Business data, fixed broadband, voice, hosting and satellite services designed for operational continuity.','Enterprise Services','Talk to Telikom Business',imagery.local,'BUSINESS & GOVERNMENT'],
        ['Extending access beyond the easy-to-reach.','Remote and satellite connectivity helps link communities, field operations and essential services across PNG.','Explore VSAT','See Coverage',imagery.community,'REMOTE CONNECTIVITY']
      ],
      corporate: [
        ['Confidence built on local capability.','A modern Telikom experience that balances customer convenience, business capability and national telecommunications responsibility.','Explore Services','About Telikom',imagery.community,'ESTABLISHED • LOCAL • TRUSTED'],
        ['Digital services with the strength of a national operator.','Mobile, fixed, enterprise and satellite capabilities presented through one clear, dependable customer experience.','View Portfolio','Open Self Care',imagery.infrastructure,'ONE TELIKOM'],
        ['Connectivity that supports PNG progress.','Helping homes, organisations and communities participate in the country’s digital future.','Discover Connectivity','Media Centre',imagery.youth,'CONNECTING PNG']
      ],
      human: [
        ['Every connection has a human story.','Telikom connects families, students, businesses and communities across Papua New Guinea.','Explore Personal Services','Community Stories',imagery.community,'PEOPLE FIRST'],
        ['From the Highlands to the islands.','A network designed around the realities of PNG geography, local communities and everyday communication.','Check Coverage','Remote Connectivity',imagery.local,'ACROSS PAPUA NEW GUINEA'],
        ['Local capability. National purpose.','Technology matters most when it improves access, opportunity and connection for people.','Our Story','Explore Services',imagery.youth,'PNG OWNED']
      ],
      executive: [
        ['Telikom services, organised around the customer.','A digital-first gateway to plans, payments, service management, business solutions and support.','Open Self Care','View Services',imagery.infrastructure,'DIGITAL SERVICE PLATFORM'],
        ['Enterprise capability with national reach.','Business data, fixed connectivity, voice, systems and satellite services for organisations across PNG.','Business Portfolio','Talk to Telikom',imagery.local,'ENTERPRISE & GOVERNMENT'],
        ['A trusted national operator, ready for the next chapter.','Bringing together local ownership, modern digital access and communications infrastructure in one confident experience.','Explore Telikom','View Network',imagery.community,'100% PNG OWNED']
      ]
    };

    const slides = slideSets[variant];
    const hero = document.createElement('section');
    hero.className = `institutional-hero ${variant}`;
    hero.innerHTML = slides.map((s,i)=>`<div class="inst-slide ${i===0?'active':''}" data-slide="${i}"><div class="inst-bg" style="background-image:url('${s[4]}')"></div><div class="inst-wrap"><div class="inst-copy"><span class="inst-kicker">${s[5]}</span><h1>${s[0]}</h1><p>${s[1]}</p><div class="inst-actions"><a href="#">${s[2]} →</a><a class="alt" href="#">${s[3]}</a></div></div><aside class="inst-proof"><span class="proof-label">Telikom at a glance</span><h3>Local strength. National responsibility.</h3><div class="inst-proof-grid"><div><b>100% PNG Owned</b><small>Locally owned telecommunications company</small></div><div><b>Customer Care 1555</b><small>Direct access to Telikom support</small></div><div><b>Mobile & Fixed</b><small>Everyday and organisational connectivity</small></div><div><b>Satellite Services</b><small>Connectivity for remote locations</small></div></div></aside></div></div>`).join('') + `<div class="inst-controls"><button class="inst-arrow prev" aria-label="Previous slide">‹</button><div class="inst-dots">${slides.map((_,i)=>`<button class="${i===0?'active':''}" data-go="${i}" aria-label="Slide ${i+1}"></button>`).join('')}</div><button class="inst-arrow next" aria-label="Next slide">›</button></div>`;

    const nav = document.querySelector('nav,.nav');
    if (nav) nav.insertAdjacentElement('afterend', hero); else document.body.insertAdjacentElement('afterbegin', hero);

    let current = 0, timer;
    const heroSlides = [...hero.querySelectorAll('.inst-slide')];
    const dots = [...hero.querySelectorAll('.inst-dots button')];
    const show = idx => { current=(idx+heroSlides.length)%heroSlides.length; heroSlides.forEach((el,i)=>el.classList.toggle('active',i===current)); dots.forEach((el,i)=>el.classList.toggle('active',i===current)); };
    const autoplay = () => { clearInterval(timer); timer=setInterval(()=>show(current+1),6500); };
    hero.querySelector('.next').addEventListener('click',()=>{show(current+1);autoplay()});
    hero.querySelector('.prev').addEventListener('click',()=>{show(current-1);autoplay()});
    dots.forEach(d=>d.addEventListener('click',()=>{show(+d.dataset.go);autoplay()}));
    hero.addEventListener('mouseenter',()=>clearInterval(timer)); hero.addEventListener('mouseleave',autoplay); autoplay();

    const proofStrip = `<div class="national-proof-strip"><div class="national-proof-inner"><div class="national-proof-item"><span class="national-proof-icon">PNG</span><div><b>100% PNG Owned</b><small>National telecommunications company</small></div></div><div class="national-proof-item"><span class="national-proof-icon">4G</span><div><b>Mobile Connectivity</b><small>Everyday digital access</small></div></div><div class="national-proof-item"><span class="national-proof-icon">⌂</span><div><b>Fixed Broadband</b><small>Home & organisation services</small></div></div><div class="national-proof-item"><span class="national-proof-icon">◌</span><div><b>Remote Connectivity</b><small>VSAT / satellite capability</small></div></div><div class="national-proof-item"><span class="national-proof-icon">1555</span><div><b>Local Support</b><small>Customer Care access</small></div></div></div></div>`;
    hero.insertAdjacentHTML('afterend', proofStrip);

    const roleSection = `<section class="institutional-section national-role"><div class="institutional-inner"><div class="institutional-heading"><div><span class="eyebrow">TELIKOM’S NATIONAL ROLE</span><h2>Connectivity for people, business and public services</h2><p>A stronger institutional presentation of the areas a national telecommunications operator is expected to support.</p></div><a class="institutional-link" href="#">Explore Telikom</a></div><div class="role-grid"><article class="role-lead"><div><span class="inst-kicker">NATIONAL CONNECTIVITY</span><h3>Infrastructure that enables everyday life and essential operations.</h3><p>Telikom brings together mobile, fixed, business and remote connectivity for customers and organisations across Papua New Guinea.</p></div></article><div class="role-cards"><article class="role-card"><span>01</span><h4>People & Households</h4><p>Mobile data, home internet, Self Care, support and everyday digital access.</p></article><article class="role-card"><span>02</span><h4>Business & Enterprise</h4><p>Business data, systems, hosting, voice and managed communications.</p></article><article class="role-card"><span>03</span><h4>Government & Public Services</h4><p>Reliable communications pathways for institutions and operational teams.</p></article><article class="role-card"><span>04</span><h4>Remote Communities</h4><p>Satellite and remote-connectivity options for difficult-to-reach locations.</p></article></div></div></div></section>`;

    const infraSection = `<section class="institutional-section infrastructure-band"><div class="institutional-inner infra-grid"><div class="infra-intro"><span class="inst-kicker">NETWORK CAPABILITY</span><h2>A telecommunications portfolio designed for PNG realities.</h2><p>Different customers need different forms of connectivity. The site now makes that breadth visible rather than presenting Telikom like a small consumer-only brand.</p><a class="inst-actions" href="#" style="text-decoration:none;margin-top:22px"><span style="display:inline-flex;padding:11px 15px;border:1px solid rgba(255,255,255,.28);border-radius:8px;color:#fff;font-weight:800">Explore network services →</span></a></div><div class="infra-points"><div class="infra-point"><span class="num">01</span><b>Mobile & 4G</b><small>Consumer and organisational mobile connectivity.</small></div><div class="infra-point"><span class="num">02</span><b>Fixed Broadband</b><small>Home and business fixed connectivity services.</small></div><div class="infra-point"><span class="num">03</span><b>Business Data & Systems</b><small>Connectivity and digital services for organisations.</small></div><div class="infra-point"><span class="num">04</span><b>VSAT & Satellite</b><small>Remote connectivity for sites and communities.</small></div></div></div></section>`;

    const publicSection = `<section class="institutional-section public-service"><div class="institutional-inner"><div class="institutional-heading"><div><span class="eyebrow">SERVICE PORTFOLIO</span><h2>Built for more than one type of customer</h2><p>Clear service groupings help Telikom look like the broad national operator it is, not a small agency-built brochure site.</p></div></div><div class="public-grid"><article class="public-card"><div class="pc-icon">P</div><h3>Personal & Home</h3><p>Everyday connectivity and account services for individuals and households.</p><ul><li>Gutpela Mobile Data</li><li>Home Internet & Special Passes</li><li>Top Up, Self Care & Support</li></ul></article><article class="public-card"><div class="pc-icon">B</div><h3>Business & Enterprise</h3><p>Operational communications and infrastructure for organisations of different sizes.</p><ul><li>Business Data & Fixed Broadband</li><li>Business Systems & Hosting</li><li>Voice, SIP Trunk & CUG / PUG</li></ul></article><article class="public-card"><div class="pc-icon">N</div><h3>National & Remote Connectivity</h3><p>Connectivity options designed for PNG’s geography and hard-to-reach locations.</p><ul><li>VSAT / Kacific</li><li>Remote-site connectivity</li><li>Community & infrastructure use cases</li></ul></article></div></div></section>`;

    const trustSection = `<section class="institutional-section trust-panel"><div class="institutional-inner"><div class="institutional-heading" style="position:relative"><div><span class="eyebrow" style="color:#7ed0fb">WHY TELIKOM</span><h2>Trust built through local ownership and practical service</h2></div></div><div class="trust-grid"><div class="trust-item"><span>✓</span><b>100% PNG Owned</b><small>Locally rooted and nationally focused.</small></div><div class="trust-item"><span>▣</span><b>No Hidden Fees</b><small>Clearer offers and straightforward service choices.</small></div><div class="trust-item"><span>▤</span><b>Bring Your Own Device</b><small>Use compatible devices with Telikom services.</small></div><div class="trust-item"><span>◉</span><b>Calls & Text</b><small>Selected plans support everyday communication needs.</small></div><div class="trust-item"><span>↗</span><b>Online Self Care</b><small>Manage account activity through digital channels.</small></div><div class="trust-item"><span>4G</span><b>Modern Connectivity</b><small>Mobile services supporting work and daily life.</small></div></div></div></section>`;

    // Place richer institutional modules in slightly different orders to preserve concept distinction.
    const firstContent = document.querySelector('.dock,.quick,.workspace main,.workspace,.section');
    if (variant === 'consumer') {
      const dock = document.querySelector('.dock'); if (dock) dock.insertAdjacentHTML('afterend', publicSection);
      const sat = document.querySelector('.sat'); if (sat) sat.insertAdjacentHTML('beforebegin', infraSection);
      const footer = document.querySelector('footer'); if (footer) footer.insertAdjacentHTML('beforebegin', trustSection);
    } else if (variant === 'nation') {
      hero.nextElementSibling?.insertAdjacentHTML('afterend', infraSection + roleSection);
      const footer = document.querySelector('footer'); if (footer) footer.insertAdjacentHTML('beforebegin', trustSection);
    } else if (variant === 'corporate') {
      const quick = document.querySelector('.quick'); if (quick) quick.insertAdjacentHTML('afterend', roleSection);
      const business = document.querySelector('.business'); if (business) business.insertAdjacentHTML('afterend', infraSection);
      const footer = document.querySelector('footer'); if (footer) footer.insertAdjacentHTML('beforebegin', trustSection);
    } else if (variant === 'human') {
      hero.nextElementSibling?.insertAdjacentHTML('afterend', roleSection);
      const footer = document.querySelector('footer'); if (footer) footer.insertAdjacentHTML('beforebegin', publicSection + trustSection);
    } else {
      const workspace = document.querySelector('.workspace'); if (workspace) workspace.insertAdjacentHTML('beforebegin', infraSection);
      const footer = document.querySelector('footer'); if (footer) footer.insertAdjacentHTML('beforebegin', publicSection + trustSection);
    }

    // International calling and self-care campaign content from the current Telikom reference.
    const campaign = `<section class="ref-campaign"><div class="ref-campaign-inner"><div><span class="inst-kicker">INTERNATIONAL CALLING</span><h2>The world is your oyster.</h2><p>New International Call Plans make it easier to stay connected beyond Papua New Guinea.</p><div class="ref-campaign-meta"><span>Plans from K10</span><span>21 countries</span><span>International calling</span></div></div><div class="ref-campaign-price"><small>PLANS FROM</small><strong>K10</strong><b>Connect beyond PNG</b><a href="#">View international plans →</a></div></div></section>`;
    const selfCare = `<div class="ref-selfcare"><div class="ref-selfcare-inner"><div><h3>Telikom Self Care. Manage your credit online.</h3><p>Top up, check balances, manage bundles and stay in control from one convenient account experience.</p></div><a href="#">Open Self Care →</a></div></div>`;
    if (variant === 'consumer') { const dock=document.querySelector('.dock'); if(dock) dock.insertAdjacentHTML('beforebegin',campaign+selfCare); }
    if (variant === 'corporate') { const quick=document.querySelector('.quick'); if(quick) quick.insertAdjacentHTML('beforebegin',campaign); }
    if (variant === 'human') { const dock=document.querySelector('.dock'); if(dock) dock.insertAdjacentHTML('beforebegin',selfCare); }

    // Expand small product catalogues with the additional RED-X models from the reference site.
    const deviceContainer = document.querySelector('.catalog,.devices');
    if (deviceContainer && deviceContainer.children.length === 4 && variant !== 'executive') {
      const cls = deviceContainer.classList.contains('catalog') ? 'visual' : 'deviceVisual';
      [['RED-X GROOVE','RED-X smartphone'],['RED-X DASH-X','RED-X smartphone'],['RED-X PORO','Feature phone'],['RED-X Blitz','Feature phone']].forEach(([name,type])=>{
        const card=document.createElement('div'); card.className='device'; card.innerHTML=`<div class="${cls}">${name}</div><small>${type}</small><h4>${name}</h4><b>Explore</b>`; deviceContainer.appendChild(card);
      });
    }

    // Performance and accessibility polish.
    document.querySelectorAll('img').forEach((img,i)=>{
      if (!img.alt) img.alt = i===0 ? 'Telikom PNG' : 'Telikom content image';
      if (img.src !== logoSrc && !img.closest('.institutional-hero')) { img.loading='lazy'; img.decoding='async'; }
      else img.fetchPriority='high';
    });

    const revealTargets=[...document.querySelectorAll('section,.dock,.quick,.panel,.plan,.device,.story,.news,.biz,.svc,.tile,.metric,.solution,.tool,.role-card,.infra-point,.public-card,.trust-item')];
    revealTargets.forEach(el=>el.classList.add('reveal'));
    if ('IntersectionObserver' in window) {
      const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{rootMargin:'0px 0px -7% 0px',threshold:.04});
      revealTargets.forEach(el=>io.observe(el));
    } else revealTargets.forEach(el=>el.classList.add('is-visible'));

    document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
      const id=a.getAttribute('href'); if(!id||id==='#') return; const target=document.querySelector(id); if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}
    }));
  };
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',onReady,{once:true}); else onReady();
})();