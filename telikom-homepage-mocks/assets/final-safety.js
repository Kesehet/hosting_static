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