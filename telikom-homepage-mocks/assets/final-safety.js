(()=>{
  'use strict';
  if(window.__telikomFinalSafety) return;
  window.__telikomFinalSafety=true;

  const css=document.createElement('style');
  css.textContent=`
    html,body{max-width:100%;overflow-x:hidden}
    img,video,canvas,svg{max-width:100%}
    img{height:auto}
    .w,.wrap,.inst-wrap,.fresh-nav-inner,.ap-inner,.cp-inner,.cg-inner,.glance-wrap{min-width:0}
    .inst-wrap>*,.fresh-nav-grid>*,.ap-grid>*,.cp-grid>*,.cg-grid>*,.tri>*,.mid>*,.two>*,.plans>*,.devices>*,.serviceGrid>*,.catalog>*,.metrics>*,.contact>*,.gateway-grid>*{min-width:0}
    h1,h2,h3,h4,p,a,b,strong,small,span,li,td,th{overflow-wrap:break-word}
    table{max-width:100%}
    .tableWrap,.table-wrap,.comparison,.plan-table{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}
    .institutional-hero,.hero{isolation:isolate}
    .inst-copy h1{word-break:normal}

    /* Keep photography visible. Earlier blue overlays were overpowering the images. */
    .institutional-hero .inst-bg{filter:saturate(.92) brightness(1.08)!important}
    .institutional-hero .inst-bg:after{background:linear-gradient(90deg,rgba(8,18,27,.76) 0%,rgba(9,28,40,.48) 43%,rgba(7,21,30,.12) 76%,rgba(0,0,0,.03) 100%)!important}
    .institutional-hero.consumer .inst-bg:after{background:linear-gradient(90deg,rgba(18,24,29,.72),rgba(21,34,43,.38) 48%,rgba(0,0,0,.05) 82%)!important}
    .institutional-hero.nation .inst-bg:after{background:linear-gradient(90deg,rgba(11,24,31,.78),rgba(28,42,47,.48) 49%,rgba(10,18,22,.08) 82%)!important}
    .institutional-hero.corporate .inst-bg:after{background:linear-gradient(90deg,rgba(24,29,33,.68),rgba(37,45,49,.34) 52%,rgba(0,0,0,.03) 84%)!important}
    .institutional-hero.human .inst-bg:after{background:linear-gradient(90deg,rgba(10,25,31,.65),rgba(20,35,39,.25) 54%,rgba(0,0,0,.02) 86%)!important}
    .institutional-hero.executive .inst-bg:after{background:linear-gradient(90deg,rgba(8,21,29,.78),rgba(16,35,43,.43) 52%,rgba(0,0,0,.05) 84%)!important}

    /* Design 2: break the blue-on-blue rhythm with a warm institutional slate section. */
    body[data-unique-variant='nation'] .ux-nation{background:#eef0ed!important;color:#18313f!important;border-top:1px solid #d8ddd9;border-bottom:1px solid #d8ddd9}
    body[data-unique-variant='nation'] .ux-nation .ux-kicker{color:#536e63!important}
    body[data-unique-variant='nation'] .ux-nation .ux-copy{color:#617078!important}
    body[data-unique-variant='nation'] .ux-ledger{border-top-color:#cbd3ce!important}
    body[data-unique-variant='nation'] .ux-ledger-row{border-bottom-color:#cbd3ce!important}
    body[data-unique-variant='nation'] .ux-ledger-num{color:#4d7668!important}
    body[data-unique-variant='nation'] .ux-ledger-row h3{color:#18313f!important}
    body[data-unique-variant='nation'] .ux-ledger-row p{color:#64747b!important}
    body[data-unique-variant='nation'] .ux-ledger-row a{color:#18313f!important;border-color:#aebbb4!important;background:#fff!important}
    body[data-unique-variant='nation'] .ux-nation-note{background:#f8f8f5!important;color:#566970!important;border-left-color:#6b8f82!important}

    /* Footer brand mark must remain the real logo, exactly as used in the header. */
    footer img[src*='TPNGLOGO'],.footer img[src*='TPNGLOGO'],.foot img[src*='TPNGLOGO']{filter:none!important;opacity:1!important;background:#fff!important;padding:7px 10px!important;border-radius:8px!important;object-fit:contain!important;max-width:190px!important;height:auto!important;max-height:58px!important}

    @media(max-width:1100px){
      .inst-wrap{grid-template-columns:1fr!important}
      .inst-proof,.inst-consumer-promo,.inst-network-console,.inst-corporate-mark,.inst-exec-status{justify-self:start!important;max-width:min(620px,100%)!important;width:100%}
    }
    @media(max-width:760px){
      .fresh-nav-grid,.ap-grid,.cp-grid,.cg-grid,.national-proof-inner,.ge-grid,.gn-grid,.gco-grid,.gh-shell{grid-template-columns:1fr!important}
      .gc-shell{grid-template-columns:1fr!important}
      .gc-intro,.gn-main,.gco-intro,.gh-story,.cp-card.hero-card{grid-column:auto!important}
      .inst-copy h1{font-size:clamp(38px,11vw,50px)!important;letter-spacing:-1.5px!important}
      .inst-wrap{padding-left:18px!important;padding-right:18px!important}
    }
  `;
  document.head.appendChild(css);

  const fallback='https://blog.apnic.net/wp-content/uploads/2016/04/Goroka-EHP.jpg';
  const protectImages=()=>document.querySelectorAll('img').forEach(img=>{
    if(img.dataset.safeImage) return;
    img.dataset.safeImage='1';
    const isLogo=/TPNGLOGO|telikom/i.test(img.src||'')||/telikom/i.test(img.alt||'');
    if(isLogo) return;
    img.addEventListener('error',()=>{
      if(img.dataset.fallbackTried) return;
      img.dataset.fallbackTried='1';
      img.src=fallback;
    },{once:true});
  });
  protectImages();

  const removeDoubleArrows=()=>{
    document.querySelectorAll('a').forEach(a=>{
      if(a.children.length) return;
      const t=a.textContent||'';
      const cleaned=t.replace(/(?:\s*[→➜➝↗]){2,}\s*$/,' →').replace(/\s+→\s+→\s*$/,' →');
      if(cleaned!==t) a.textContent=cleaned;
    });
  };
  removeDoubleArrows();

  const sanitizeFakeStatus=()=>{
    document.querySelectorAll('.inst-network-console i,.gn-track i').forEach(el=>{
      el.removeAttribute('style');
      el.style.width='100%';
      el.style.opacity='.55';
    });
    document.querySelectorAll('.gn-status').forEach(el=>el.textContent='Service portfolio overview');
  };
  sanitizeFakeStatus();

  const observer=new MutationObserver(()=>{
    protectImages();
    sanitizeFakeStatus();
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});

  addEventListener('error',e=>{
    if(e.target && (e.target.tagName==='IMG'||e.target.tagName==='SCRIPT'||e.target.tagName==='LINK')){
      console.warn('Optional Telikom mock asset did not load:',e.target.src||e.target.href||'asset');
    }
  },true);
})();