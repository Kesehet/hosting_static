(()=>{
  'use strict';

  const current=document.currentScript;
  const base=current&&current.src?new URL('.',current.src).href:'assets/';

  const reloadOnce=()=>{
    const href=window.location.href;
    if(href.includes('_RELOADED')) return false;

    const marker=Math.random().toString(36).slice(2,10)+'_'+Date.now().toString(36)+'_RELOADED';

    // HTMLPreview keeps the raw GitHub URL after the FIRST "?".
    // Cache-bust that embedded URL, never location.search itself.
    if(window.location.hostname==='htmlpreview.github.io'){
      const prefix='https://htmlpreview.github.io/?';
      if(!href.startsWith(prefix)) return false;

      let inner=href.slice(prefix.length);
      if(!/^https?:\/\//i.test(inner)) return false;

      let hash='';
      const hashAt=inner.indexOf('#');
      if(hashAt!==-1){
        hash=inner.slice(hashAt);
        inner=inner.slice(0,hashAt);
      }

      const sep=inner.includes('?')?'&':'?';
      window.location.replace(prefix+inner+sep+'cb='+encodeURIComponent(marker)+hash);
      return true;
    }

    // Normal/raw pages: preserve existing query params and hash.
    const u=new URL(href);
    u.searchParams.set('cb',marker);
    window.location.replace(u.toString());
    return true;
  };

  if(reloadOnce()) return;

  const load=(file,key)=>{
    if(document.querySelector(`script[data-${key}]`)) return;
    const s=document.createElement('script');
    s.src=base+file+'?v='+Date.now()+'_'+Math.random().toString(36).slice(2,8);
    s.async=true;
    s.setAttribute(`data-${key}`,'1');
    document.body.appendChild(s);
  };

  const removeServiceCommand=()=>{
    if(!document.title.includes('Digital Self Service')) return;
    document.querySelectorAll('.ux-executive').forEach(el=>el.remove());
  };

  const run=()=>{
    const isDesign5=document.title.includes('Digital Self Service');

    // Design 5 already has its own dashboard. Prevent unique-sections.js from
    // injecting the old executive / "Service Command" module at all.
    if(isDesign5){
      document.body.dataset.uniqueSections='1';
      removeServiceCommand();
    }

    // Chatbot is intentionally independent from the optional enhancement core.
    load('chatbot-vibes.js','chatbot-direct');
    load('polish-core.js','polish-core');
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();