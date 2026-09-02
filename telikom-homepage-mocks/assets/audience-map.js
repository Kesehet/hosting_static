(()=>{
  const loadSafety=()=>{
    if(document.querySelector('script[data-final-safety]')) return;
    const s=document.createElement('script');
    s.src='assets/final-safety.js';
    s.defer=true;
    s.dataset.finalSafety='1';
    document.body.appendChild(s);
  };
  const run=()=>{
    const title=document.title||'';
    const living=title.includes('Living Network');
    loadSafety();
    if(living){
      const panel=document.querySelector('.hero-panel');
      if(panel&&!panel.dataset.quickStart){
        panel.dataset.quickStart='1';
        panel.innerHTML=`<small>QUICK START</small><h3>What would you like to do?</h3><div class="signal"><div class="signal-icon">₭</div><div><b>Top Up & Buy Data</b><span>Everyday mobile actions</span></div><i class="led"></i></div><div class="signal"><div class="signal-icon">▦</div><div><b>Business Services</b><span>Enterprise, mining & government</span></div><i class="led"></i></div><div class="signal"><div class="signal-icon">✦</div><div><b>Starlink Enterprise</b><span>Remote-site connectivity</span></div><i class="led"></i></div><div class="signal"><div class="signal-icon">▱</div><div><b>Find a Store / Support</b><span>Self Care, stores & 1555</span></div><i class="led"></i></div>`;
      }
      return;
    }
    if(!document.querySelector('script[data-unique-sections]')){
      const s=document.createElement('script');
      s.src='assets/unique-sections.js';
      s.defer=true;
      s.dataset.uniqueSections='1';
      document.body.appendChild(s);
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();