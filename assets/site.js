'use strict';
(() => {
  document.documentElement.classList.add('has-js');
  const THEMES = ['editor','runtime','blueprint','hybrid'];
  const SHORT_LABELS = {
    editor: 'Editor', runtime: 'C# Runtime', blueprint: 'Blueprint', hybrid: 'Hybrid'
  };
  const select = document.getElementById('theme-select');
  const themeControl = window.portfolioTheme;
  let theme = document.documentElement.dataset.theme;
  if (!THEMES.includes(theme)) theme = 'hybrid';
  document.documentElement.dataset.theme = theme;
  if (select) {
    const autoOption = select.querySelector('option[value="auto"]');
    const syncPicker = () => {
      const current = document.documentElement.dataset.theme;
      if (autoOption) autoOption.textContent = `Auto · ${SHORT_LABELS[current] || 'Hybrid'}`;
      select.value = themeControl?.mode === 'manual' ? current : 'auto';
      select.title = themeControl?.mode === 'manual'
        ? 'Manual theme: this choice is remembered on future visits. Select Auto to rotate themes again.'
        : 'Automatic theme rotation is enabled for each new browsing session.';
    };
    syncPicker();
    select.addEventListener('change', () => {
      if (select.value === 'auto') {
        themeControl?.useAuto();
        syncPicker();
        return;
      }
      if (!THEMES.includes(select.value)) return;
      if (themeControl) themeControl.setManual(select.value);
      else document.documentElement.dataset.theme = select.value;
      if (typeof window.portfolioEvent === 'function') {
        window.portfolioEvent('theme_change', { theme_name: select.value });
      }
      // Reveal freshly activated theme-specific hero content.
      document.querySelectorAll('.hero-mode .reveal').forEach(el => el.classList.add('is-visible'));
      syncPicker();
    });
  }
  const navButton = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navButton && nav) {
    const close = () => { nav.classList.remove('is-open'); navButton.setAttribute('aria-expanded','false');navButton.setAttribute('aria-label','Open navigation');};
    navButton.addEventListener('click',() => {
      const open = navButton.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open',open);navButton.setAttribute('aria-expanded',String(open));navButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    });
    document.addEventListener('keydown', e => {if(e.key==='Escape')close();});
    document.addEventListener('click',e => {if(!nav.contains(e.target) && !navButton.contains(e.target)) close();});
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click',close));
  }
  const year = document.getElementById('current-year');
  if(year)year.textContent=String(new Date().getFullYear());
  const search=document.getElementById('project-search');
  if(search){
    const cards=Array.from(document.querySelectorAll('.gallery-card'));
    const counter=document.getElementById('search-count');
    const empty=document.querySelector('.no-results');
    const update=() => {
      let count=0,q=search.value.trim().toLocaleLowerCase();
      cards.forEach(card => {const found=(card.dataset.search||'').includes(q);card.hidden=!found;if(found)count++;});
      if(counter)counter.textContent=`${count} result${count===1?'':'s'}`;
      if(empty)empty.hidden=count!==0;
    };
    search.addEventListener('input',update);
    search.addEventListener('change',()=>{
      if(typeof window.portfolioEvent==='function')window.portfolioEvent('project_search',{result_count:Number(counter?.textContent.split(' ')[0]||0)});
    });
  }
  const editorData={
    hyper:{name:'Hyper Hostess',icon:'icons/hyper-hostess.png',body:'Independently developed the original version. The subsequently updated released title reached 10M+ public downloads.'},
    nut:{name:'Nut Sort – Color Match',icon:'icons/nut-sort.png',body:'Published mobile Unity puzzle project, with gameplay engineering and production involvement.'},
    screw:{name:'Color Screw Unscrew and Match',icon:'icons/color-screw.png',body:'Unity/C# development and release support for a publicly listed mobile game.'},
    merge:{name:'Merge Glow – Fashion Design',icon:'icons/merge-glow.png',body:'Previous-studio published project featuring production Unity development.'}
  };
  document.querySelectorAll('[data-editor-game]').forEach(button => button.addEventListener('click', () => {
    const data=editorData[button.dataset.editorGame]; if(!data)return;
    document.querySelectorAll('[data-editor-game]').forEach(el=>el.classList.toggle('selected',el===button));
    const image=document.getElementById('scene-icon-main');const title=document.getElementById('inspector-title');const body=document.getElementById('inspector-body');
    if(image){image.src=data.icon;image.alt=`${data.name} game icon`;}
    if(title)title.textContent=data.name;if(body)body.textContent=data.body;
    const status=document.getElementById('editor-status-text');if(status)status.textContent=`Selected ${data.name}`;
  }));
  const playButton=document.querySelector('.play-mode');
  if(playButton){playButton.addEventListener('click',()=>{
    const active=playButton.getAttribute('aria-pressed')==='true';
    playButton.setAttribute('aria-pressed',String(!active));
    playButton.classList.toggle('is-playing',!active);
    document.querySelector('.editor-shell')?.classList.toggle('is-playing',!active);
    playButton.innerHTML=active?'▶ <span>PLAY</span>':'■ <span>STOP</span>';
    const status=document.getElementById('editor-status-text');
    if(status)status.textContent=active?'Editor preview stopped':'Simulated Play Mode running — HTML preview';
  });}
  const consoleEl=document.getElementById('demo-console');
  const runButton=document.getElementById('build-demo');
  // No real compilation happens. Simulated lines are clearly labeled in the UI.
  if(runButton && consoleEl){runButton.addEventListener('click',()=>{
    const lines=['> Initializing illustrative build...', '> Checking example C# components...', '> Preparing mobile-ready experience...', '✓ Demo complete — no compilation executed.'];
    consoleEl.replaceChildren();
    lines.forEach((line,i)=>{
      const node=document.createElement('div');node.textContent=line;if(i===lines.length-1)node.className='console-ok';consoleEl.appendChild(node);
    });
    if(typeof window.portfolioEvent==='function')window.portfolioEvent('interactive_demo',{ demo_name:'csharp_build_simulation' });
  });}
  const revealItems=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
    },{rootMargin:'0px 0px -15px 0px',threshold:.07});
    revealItems.forEach(item=>observer.observe(item));
  } else revealItems.forEach(item=>item.classList.add('is-visible'));
})();
