(()=>{
  'use strict';

  // Emergency-compatible fallback for HTMLPreview. This file is intentionally
  // self-contained: no imports, no dependent scripts, no stylesheet reliance.
  const old=document.getElementById('telikom-inline-chat-fallback');
  if(old) old.remove();

  const title=document.title||'';
  const cls=[...document.body.classList].find(c=>/^d[1-6]$/.test(c));
  const n=cls?cls.slice(1):title.includes('Consumer Services Hub')?'1':title.includes('Connected Nation')?'2':title.includes('Balanced Corporate')?'3':title.includes('National Connectivity')?'4':title.includes('Digital Self Service')?'5':title.includes('Living Network')?'6':'1';

  const cfg={
    1:{name:'Telikom Help',hello:'Hello 👋 Need help?',icon:'💬',bg:'#0875c9',fg:'#ffffff',radius:'50%'},
    2:{name:'Telikom Service Desk',hello:'Service Desk available',icon:'T',bg:'#173d56',fg:'#ffffff',radius:'4px'},
    3:{name:'Telikom Assistant',hello:'How may we direct you?',icon:'↗',bg:'#ffffff',fg:'#103b58',radius:'10px',border:'#103b58'},
    4:{name:'Ask Telikom',hello:'Hello from Telikom PNG 👋',icon:'✦',bg:'#0875c9',fg:'#ffffff',radius:'50% 50% 50% 18px'},
    5:{name:'Quick Help',hello:'What would you like to do?',icon:'⌁',bg:'#0875c9',fg:'#ffffff',radius:'10px'},
    6:{name:'TELIKOM // ASSIST',hello:'Connection ready.',icon:'◉',bg:'#061620',fg:'#6ed6ff',radius:'50%',border:'#6ed6ff'}
  }[n];

  const root=document.createElement('div');
  root.id='telikom-inline-chat-fallback';
  root.setAttribute('data-design',n);
  root.style.cssText='position:fixed!important;right:18px!important;bottom:18px!important;z-index:2147483647!important;font-family:Arial,Helvetica,sans-serif!important;display:block!important;visibility:visible!important;opacity:1!important;pointer-events:auto!important;';

  const panel=document.createElement('div');
  panel.style.cssText='display:none;width:min(340px,calc(100vw - 24px));margin:0 0 10px auto;background:#fff;color:#173247;border:1px solid #cfdde6;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.28);overflow:hidden;';
  panel.innerHTML='<div style="padding:14px 16px;background:#063451;color:#fff;font-weight:800">'+cfg.name+'</div><div style="padding:14px"><div class="tk-msg" style="padding:11px 12px;background:#eef5f9;border-radius:8px;line-height:1.45;font-size:13px;margin-bottom:9px"><b>'+cfg.hello+'</b><br>Choose a quick action below.</div><div style="display:grid;gap:6px"><button type="button" data-a="Plans / Data" style="padding:10px;border:1px solid #d5e1e8;background:#fff;text-align:left;font-weight:700;cursor:pointer">Plans / Data</button><button type="button" data-a="Self Care / Payments" style="padding:10px;border:1px solid #d5e1e8;background:#fff;text-align:left;font-weight:700;cursor:pointer">Self Care / Payments</button><button type="button" data-a="Support" style="padding:10px;border:1px solid #d5e1e8;background:#fff;text-align:left;font-weight:700;cursor:pointer">Support</button></div></div>';

  const peek=document.createElement('div');
  peek.textContent=cfg.hello;
  peek.style.cssText='position:absolute;right:70px;bottom:4px;white-space:nowrap;max-width:230px;overflow:hidden;text-overflow:ellipsis;background:#fff;color:#173247;border:1px solid #d5e1e8;border-radius:9px;padding:9px 11px;box-shadow:0 10px 30px rgba(0,0,0,.16);font-size:12px;';

  const launch=document.createElement('button');
  launch.type='button';
  launch.setAttribute('aria-label','Open '+cfg.name);
  launch.textContent=cfg.icon;
  launch.style.cssText='display:grid!important;place-items:center!important;margin-left:auto!important;width:60px!important;height:60px!important;border:'+(cfg.border?'2px solid '+cfg.border:'0')+'!important;border-radius:'+cfg.radius+'!important;background:'+cfg.bg+'!important;color:'+cfg.fg+'!important;font-size:22px!important;font-weight:900!important;cursor:pointer!important;box-shadow:0 14px 36px rgba(0,0,0,.3)!important;visibility:visible!important;opacity:1!important;';

  let open=false;
  launch.addEventListener('click',()=>{
    open=!open;
    panel.style.display=open?'block':'none';
    peek.style.display=open?'none':'block';
  });

  panel.querySelectorAll('button[data-a]').forEach(btn=>btn.addEventListener('click',()=>{
    panel.querySelector('.tk-msg').innerHTML='<b>'+btn.getAttribute('data-a')+'</b><br>This mock would route you to the relevant Telikom service.';
  }));

  root.appendChild(panel);
  root.appendChild(peek);
  root.appendChild(launch);
  document.body.appendChild(root);

  // Mobile: keep it compact and never full-screen.
  if(window.matchMedia && window.matchMedia('(max-width:640px)').matches){
    root.style.right='10px';root.style.bottom='10px';peek.style.display='none';
  }
})();