const projects={
 vspace210:{title:'VSPACE — 210',category:'WEBSITE / 01',description:'차세대 모빌리티 브랜드의 기술적 이미지와 제품 비주얼을 중심으로 구성한 웹사이트 프로젝트입니다.',role:'Web Design · Publishing',assets:['vspace-210.png'],url:'https://vspaceaero.com/'},
 kaiser:{title:'KAISERMOTORS',category:'WEBSITE / 02',description:'자동차 브랜드의 강렬한 이미지와 명확한 콘텐츠 위계를 고려한 웹사이트 작업입니다.',role:'Web Design · Publishing',assets:['kaisermotors.png'],url:'https://kaisermotors.co.kr/'},
 bplan:{title:'BPLAN',category:'WEBSITE / 03',description:'브랜드 아이덴티티와 타이포그래피를 중심으로 시각적 인상을 구축한 웹사이트 프로젝트입니다.',role:'Web Design · Publishing',assets:['bplan.png'],url:'https://bplan2026.mycafe24.com/'},
 vspace:{title:'VSPACE COMPANY',category:'WEBSITE / 04',description:'미래 모빌리티 기업의 제품과 방향성을 시각적으로 전달하는 기업 웹사이트 프로젝트입니다.',role:'Corporate Website · Publishing',assets:['vspacecompany.png'],url:'https://vspacecompany.com/'},
 indonesia:{title:'INDONESIA BUSINESS CENTER',category:'WEBSITE / 05',description:'비즈니스 센터의 정체성과 정보 전달을 고려한 웹사이트 제작 사례입니다.',role:'Corporate Website · Publishing',assets:['indonesia_business_center.png'],url:'https://indonesia.or.kr/'},
 jina:{title:'JINA SKIN LAB',category:'SOCIAL DESIGN / 18',description:'스킨케어 브랜드를 위한 에디토리얼 스타일의 카드뉴스 디자인 샘플입니다.\n 타이포그래피와 이미지 구성의 대비를 활용해 프리미엄 브랜드 무드를 표현했습니다.',role:'Editorial Design · Card News',assets:['sample_cover.png','sample_review.png'],sample:true},
 nfuture:{title:'NFUTURE',category:'DETAIL PAGE / 15',description:'제품의 기능과 특장점을 정보 구조에 맞게 배치한 상세페이지 디자인입니다.\n 아래에서 긴 상세페이지 전체를 스크롤하여 확인할 수 있습니다.',role:'Product Detail · Commerce',assets:['nfuture_detail.png'],long:true},
 wsb:{title:'WSB KOREA',category:'DETAIL PAGE / 16',description:'제품 이미지를 중심으로 전달력을 강화한 커머스 상세페이지 디자인입니다.\n 아래에서 긴 상세페이지 전체를 스크롤하여 확인할 수 있습니다.',role:'Product Detail · Commerce',assets:['WSB_detail.png'],long:true},
 electric:{title:'ELECTRICBOY',category:'DETAIL PAGE / 17',description:'제품의 핵심 특징을 단계적으로 보여 주는 커머스 상세페이지 디자인입니다.\n 아래에서 긴 상세페이지 전체를 스크롤하여 확인할 수 있습니다.',role:'Product Detail · Commerce',assets:['electricboy_detail.png'],long:true}
};
const modal=document.getElementById('caseModal');const modalContent=document.getElementById('modalContent');const modalPanel=modal.querySelector('.modal-panel');let lastFocus=null;let closeTimer;
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function openCase(key){const p=projects[key];if(!p)return;clearTimeout(closeTimer);lastFocus=document.activeElement;const gallery=p.assets.map((asset,i)=>`<figure><img src="assets/${encodeURIComponent(asset)}" alt="${escapeHTML(p.title)} ${p.assets.length>1?i+1+'번째 ':''}작업 이미지" loading="${i===0?'eager':'lazy'}"></figure>`).join('');modalContent.innerHTML=`<article class="modal-body"><p class="modal-eyebrow">${escapeHTML(p.category)} / SELECTED WORK</p><h2 id="modalTitle">${escapeHTML(p.title)}</h2><p class="modal-summary">${escapeHTML(p.description)}</p><div class="modal-facts"><div><span>PROJECT TYPE</span><strong>${escapeHTML(p.category.split(' /')[0])}</strong></div><div><span>WORK SCOPE</span><strong>${escapeHTML(p.role)}</strong></div></div><div class="modal-gallery ${p.assets.length>1?'duo':''} ${p.long?'full-detail':''}">${gallery}</div>${p.url?`<div class="modal-links"><a href="${p.url}" target="_blank" rel="noopener noreferrer">VISIT LIVE WEBSITE <span>↗</span></a></div><p class="modal-note">※ 이 프로젝트는 제작 완료 당시의 작업을 소개합니다. 실제 운영 사이트는 이후 관리 및 업데이트 과정에서 디자인과 콘텐츠가 변경되었을 수 있습니다.</p>`:''}${p.sample?'<p class="modal-note">※ 개인 포트폴리오용으로 제작한 비상업적 디자인 샘플입니다.</p>':''}</article>`;modal.setAttribute('aria-hidden','false');modal.classList.add('open');document.body.classList.add('lock');modalPanel.scrollTop=0;modal.querySelector('.modal-close').focus({preventScroll:true});}
function closeCase(){if(!modal.classList.contains('open'))return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('lock');closeTimer=setTimeout(()=>{modalContent.innerHTML=''},460);if(lastFocus&&document.contains(lastFocus))lastFocus.focus({preventScroll:true});}
document.querySelectorAll('[data-project]').forEach(card=>card.addEventListener('click',()=>openCase(card.dataset.project)));modal.querySelector('.modal-close').addEventListener('click',closeCase);modal.querySelector('[data-close]').addEventListener('click',closeCase);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCase();if(e.key==='Tab'&&modal.classList.contains('open')){const focusables=[...modal.querySelectorAll('button,a[href]')].filter(x=>x.offsetParent!==null);if(!focusables.length)return;const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});

const menuButton=document.getElementById('menuButton'),nav=document.getElementById('nav');function closeMenu(){menuButton.classList.remove('active');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','메뉴 열기');nav.classList.remove('open')}menuButton.addEventListener('click',()=>{const opening=!nav.classList.contains('open');nav.classList.toggle('open',opening);menuButton.classList.toggle('active',opening);menuButton.setAttribute('aria-expanded',String(opening));menuButton.setAttribute('aria-label',opening?'메뉴 닫기':'메뉴 열기')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
const progress=document.getElementById('progress');let ticking=false;function updateProgress(){const scrollable=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollable>0?scrollY/scrollable*100:0)+'%';ticking=false}addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateProgress);ticking=true}},{passive:true});addEventListener('resize',updateProgress);updateProgress();
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{rootMargin:'0px 0px -35px 0px',threshold:.08});document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%3)*65+'ms';observer.observe(el)})}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));


const prefersReducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=window.matchMedia('(pointer: fine)').matches;
if(finePointer&&!prefersReducedMotion){
 const ring=document.getElementById('cursorRing');
 const dot=document.getElementById('cursorDot');
 const label=document.getElementById('cursorLabel');
 document.body.classList.add('cursor-enabled');
 const move=e=>{
  const point=`translate3d(${e.clientX}px,${e.clientY}px,0) translate(-50%,-50%)`;
  ring.style.transform=point;
  dot.style.transform=point;
  if(!document.querySelector('.hero-v8-arrow:hover, .modal-close:hover')){ring.classList.add('show');dot.classList.add('show');}else{ring.classList.remove('show','active');dot.classList.remove('show');label.textContent='';}
 };
 window.addEventListener('pointermove',move,{passive:true});
 document.addEventListener('mouseleave',()=>{ring.classList.remove('show','active');dot.classList.remove('show')});
 document.querySelectorAll('a,button,[data-project]').forEach(el=>{
  const defaultLabel=el.matches('[data-project]')?'VIEW':el.matches('.filter')?'SORT':el.matches('.modal-close')?'CLOSE':el.matches('.archive-links a')?'OPEN':el.matches('[href^="mailto:"]')?'MAIL':'GO';
  el.addEventListener('pointerenter',()=>{if(el.matches('.hero-v8-arrow, .modal-close')){ring.classList.remove('show','active');dot.classList.remove('show');label.textContent='';return;}if(el.matches('.topbar .nav a')){ring.classList.remove('active');label.textContent='';return;}ring.classList.add('active');label.textContent=el.dataset.cursor||defaultLabel});
  el.addEventListener('pointerleave',()=>{ring.classList.remove('active');label.textContent='';if(el.matches('.hero-v8-arrow, .modal-close')){ring.classList.add('show');dot.classList.add('show');}});
 });
}


// Rotate the abstract asterisk relative to scroll; movement is restrained and passive.
(()=>{
 const mark=document.getElementById('heroSpin');
 if(!mark||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 let scheduled=false;
 function rotate(){const degrees=window.scrollY*0.12;mark.style.setProperty('--mark-angle',`${degrees}deg`);scheduled=false;}
 window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(rotate)}},{passive:true});rotate();
})();
// On pale or lime surfaces use an ink cursor; retain lime over charcoal and photographs.
(()=>{
 if(!document.body.classList.contains('cursor-enabled'))return;
 const selectors=['.hero-v8','.portfolio-groups','.about','.contact','.modal-panel','.showcase-hover','.showcase-strip','.topbar','.process','.expertise'];
 window.addEventListener('pointermove',e=>{
   const elements=document.elementsFromPoint(e.clientX,e.clientY);
   const surface=elements.map(el=>el.closest?.(selectors.join(','))).find(Boolean);
   const isLime=!!surface?.matches('.hero-v8,.contact');
   const overImage=elements.some(el=>el.matches?.('.showcase-image img, .modal-gallery img, .social-images-inner img'));
   const isLight=!overImage&&!!surface?.matches('.portfolio-groups,.about,.modal-panel,.showcase-hover');
   document.body.classList.toggle('cursor-on-lime',isLime);
   document.body.classList.toggle('cursor-on-light',!isLime&&isLight);
 },{passive:true});
})();


// Mobile detail-page carousel: one complete project per swipe.
(()=>{
 const slider=document.getElementById('detailCarousel');
 const controls=document.querySelector('.detail-mobile-controls');
 if(!slider||!controls)return;
 const items=[...slider.querySelectorAll('.showcase-card')];
 const prev=controls.querySelector('.detail-prev');
 const next=controls.querySelector('.detail-next');
 const counter=controls.querySelector('.detail-current');
 let active=0;
 function update(){
  const width=slider.clientWidth||1;
  active=Math.min(items.length-1,Math.max(0,Math.round(slider.scrollLeft/width)));
  counter.textContent=String(active+1).padStart(2,'0')+' / '+String(items.length).padStart(2,'0');
  prev.disabled=active===0;next.disabled=active===items.length-1;
 }
 const go=delta=>{const target=Math.min(items.length-1,Math.max(0,active+delta));items[target].scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest',inline:'start'});active=target;update()};
 prev.addEventListener('click',()=>go(-1));next.addEventListener('click',()=>go(1));
 slider.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});
 window.addEventListener('resize',update,{passive:true});update();
})();


/* v18: smooth, layout-stable in-page navigation with sticky header compensation. */
(()=>{
 const header=document.querySelector('.topbar');
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
 let frame=0;
 const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
function targetTop(target){
  if(target.id === 'top') return 0;

  const offset = header
    ? header.getBoundingClientRect().height
    : 0;

  return Math.max(
    0,
    Math.min(
      document.documentElement.scrollHeight - innerHeight,
      window.scrollY + target.getBoundingClientRect().top - offset
    )
  );
}
 function goTo(id){
  const target=document.getElementById(id);if(!target)return;
  cancelAnimationFrame(frame);
  if(reduce.matches){window.scrollTo({top:targetTop(target),behavior:'instant'});return;}
  const from=window.scrollY;
  const distance=Math.abs(targetTop(target)-from);
  const duration=Math.min(850,Math.max(430,distance*.38));
  const start=performance.now();
  function step(now){
   const t=Math.min(1,(now-start)/duration);
   /* Recompute absolute destination each frame in case fonts or content settle. */
   const destination=targetTop(target);
   const absoluteTarget=window.scrollY+destination-window.scrollY;
   const position=from+(absoluteTarget-from)*ease(t);
   window.scrollTo({top:position,behavior:'instant'});
   if(t<1){frame=requestAnimationFrame(step);}else{
    window.scrollTo({top:targetTop(target),behavior:'instant'});
   }
  }
  frame=requestAnimationFrame(step);
 }
 document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',event=>{
   const id=decodeURIComponent(link.hash.slice(1));
   if(!id||!document.getElementById(id))return;
   event.preventDefault();
   if(typeof closeMenu==='function')closeMenu();
   history.replaceState(null,'',`#${encodeURIComponent(id)}`);
   requestAnimationFrame(()=>goTo(id));
  });
 });
})();
