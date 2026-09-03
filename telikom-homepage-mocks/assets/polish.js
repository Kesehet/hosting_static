(()=>{
  'use strict';

  const current=document.currentScript;
  const base=current&&current.src?new URL('.',current.src).href:'assets/';
  const here=new URL(window.location.href);

  // HTMLPreview/raw GitHub can aggressively cache assets. Reload once with a
  // unique marker so every preview request gets a fresh document URL.
  if(!here.search.includes('_RELOADED')){
    here.search='?'+Math.random().toString(36).slice(2,12)+'_'+Date.now().toString(36)+'_RELOADED';
    window.location.replace(here.toString());
    return;
  }

  const load=(file,key)=>{
    if(document.querySelector(`script[data-${key}]`)) return;
    const s=document.createElement('script');
    s.src=base+file+'?v='+Date.now()+'_'+Math.random().toString(36).slice(2,8);
    s.async=false;
    s.setAttribute(`data-${key}`,'1');
    document.body.appendChild(s);
  };

  const removeServiceCommand=()=>{
    if(!document.title.includes('Digital Self Service')) return;
    document.querySelectorAll('.ux-executive').forEach(el=>el.remove());
  };

  const run=()=>{
    removeServiceCommand();
    if(document.title.includes('Digital Self Service')){
      const observer=new MutationObserver(removeServiceCommand);
      observer.observe(document.body,{childList:true,subtree:true});
      setTimeout(()=>observer.disconnect(),5000);
    }
    load('polish-core.js','polish-core');
    load('chatbot-vibes.js','chatbot-direct');
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();