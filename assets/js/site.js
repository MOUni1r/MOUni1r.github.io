(function(){
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const line=$('.scroll-line span');
 function scrollProgress(){if(!line)return;const h=document.documentElement.scrollHeight-innerHeight;line.style.width=(h>0?(scrollY/h)*100:0)+'%'}
 addEventListener('scroll',scrollProgress,{passive:true});scrollProgress();
 const glow=$('.cursor-glow');
 addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
 $$('.reveal,.stagger').forEach(el=>io.observe(el));
 const hero=document.querySelector('[data-hero-visual]');
 if(hero){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.style.transform=`rotateY(${x*1.6}deg) rotateX(${-y*1.6}deg)`});hero.addEventListener('pointerleave',()=>hero.style.transform='')}
 $$('.nav-cta,.btn').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.02}px,${(e.clientY-r.top-r.height/2)*.02}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
 const menu=$('.menu-btn'),links=$('.nav-links'); if(menu&&links){menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open'))});links.addEventListener('click',()=>links.classList.remove('open'))}
 $$('[data-count]').forEach(el=>{const target=+el.dataset.count;const obs=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;let n=0;const step=Math.max(1,Math.ceil(target/25));const t=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n;if(n>=target)clearInterval(t)},45);obs.disconnect()},{threshold:.8});obs.observe(el)});
})();
