(()=>{
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const nav=$('.nav'),menu=$('.menu-btn');
if(menu&&nav)menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const revealEls=$$('.reveal,.stagger');
if(!reduced&&'IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12});revealEls.forEach(el=>io.observe(el))}else revealEls.forEach(el=>el.classList.add('visible'));
const progress=$('.scroll-line span');
const updateProgress=()=>{const h=document.documentElement,max=h.scrollHeight-innerHeight;if(progress)progress.style.width=(max>0?(scrollY/max)*100:0)+'%'};
addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const glow=$('.cursor-glow');
if(glow&&!reduced)addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});
$$('[data-count]').forEach(el=>{const target=Number(el.dataset.count);if(!Number.isFinite(target))return;const run=()=>{if(el.dataset.done)return;el.dataset.done='1';if(reduced){el.textContent=target.toLocaleString('en-US');return}const start=performance.now();const tick=t=>{const p=Math.min(1,(t-start)/850),ease=1-Math.pow(1-p,3);el.textContent=Math.round(target*ease).toLocaleString('en-US');if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)};if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){run();io.disconnect()}},{threshold:.6});io.observe(el)}else run()});
if(!reduced){
 const hero=$('[data-hero-visual]');
 if(hero){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.style.transform=`perspective(1300px) rotateX(${(-y*1.8).toFixed(2)}deg) rotateY(${(x*2.2).toFixed(2)}deg)`},{passive:true});hero.addEventListener('pointerleave',()=>hero.style.transform='')}
 $$('[data-tilt],.project-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateX(${(-y*1.25).toFixed(2)}deg) rotateY(${(x*1.25).toFixed(2)}deg) translateY(-5px)`},{passive:true});card.addEventListener('pointerleave',()=>card.style.transform='')});
 $$('.btn.primary,.nav-cta').forEach(btn=>{btn.addEventListener('pointermove',e=>{const r=btn.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;btn.style.transform=`translate(${(x*3).toFixed(1)}px,${(y*3).toFixed(1)}px)`});btn.addEventListener('pointerleave',()=>btn.style.transform='')});
}
const sections=$$('section[id]'),links=$$('.case-nav a,.nav-links a');
if(sections.length&&links.length&&'IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{const href=link.getAttribute('href');link.classList.toggle('active',href===`#${entry.target.id}`)})}}),{rootMargin:'-25% 0px -60%'});sections.forEach(section=>io.observe(section))}
})();
