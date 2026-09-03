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
    load('assets/6-core.js?v=20260904-0403','six-core');
    load('assets/chatbot-vibes.js?v=20260904-0403','chatbot-direct');
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else run();
})();