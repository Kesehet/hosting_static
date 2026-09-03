(()=>{
  const load=(src,key)=>{
    if(document.querySelector(`script[data-${key}]`)) return;
    const s=document.createElement('script');
    s.src=src;
    s.async=false;
    s.setAttribute(`data-${key}`,'1');
    document.body.appendChild(s);
  };
  const run=()=>{
    load('assets/polish-core.js?v=20260904-0403','polish-core');
    load('assets/chatbot-vibes.js?v=20260904-0403','chatbot-direct');
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();