(()=>{
  'use strict';

  const current=document.currentScript;
  const base=current&&current.src?new URL('.',current.src).href:'assets/';

  const reloadOnce=()=>{
    const href=window.location.href;
    if(href.includes('_RELOADED')) return false;
    const marker=Math.random().toString(36).slice(2,12)+'_'+Date.now().toString(36)+'_RELOADED';

    if(window.location.hostname==='htmlpreview.github.io'){
      const prefix=window.location.origin+window.location.pathname+'?';
      if(!href.startsWith(prefix)) return false;
      let inner=href.slice(prefix.length);
      if(!/^https?:\/\//i.test(inner)) return false;
      let hash='';
      const hashAt=inner.indexOf('#');
      if(hashAt!==-1){hash=inner.slice(hashAt);inner=inner.slice(0,hashAt);}
      const sep=inner.includes('?')?'&':'?';
      window.location.replace(prefix+inner+sep+marker+hash);
      return true;
    }

    const u=new URL(href);
    const hash=u.hash;
    u.hash='';
    const sep=u.search?'&':'?';
    window.location.replace(u.toString()+sep+marker+hash);
    return true;
  };

  if(reloadOnce()) return;

  const load=(file,key)=>{
    if(document.querySelector(`script[data-${key}]`)) return;
    const s=document.createElement('script');
    s.src=base+file+'?v='+Date.now()+'_'+Math.random().toString(36).slice(2,8);
    s.async=false;
    s.setAttribute(`data-${key}`,'1');
    document.body.appendChild(s);
  };

  const run=()=>{
    load('6-core.js','six-core');
    load('chatbot-vibes.js','chatbot-direct');
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();