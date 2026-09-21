(function(){
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveal = () => {
    document.querySelectorAll('.reveal,.stagger').forEach(el => {
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight * .88) el.classList.add('visible');
    });
  };
  if(!reduced && 'IntersectionObserver' in window){
    const io = new IntersectionObserver(entries => entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
    document.querySelectorAll('.reveal,.stagger').forEach(el=>io.observe(el));
  }else{document.querySelectorAll('.reveal,.stagger').forEach(el=>el.classList.add('visible'))}

  document.querySelectorAll('[data-count]').forEach(el=>{
    const target = Number(el.dataset.count); if(!Number.isFinite(target)) return;
    const suffix = el.dataset.suffix || ''; const decimals = Number(el.dataset.decimals || 0);
    const format = n => n.toLocaleString('en-US',{minimumFractionDigits:decimals,maximumFractionDigits:decimals}) + suffix;
    const run = () => {
      if(reduced){el.textContent=format(target);return}
      const start=performance.now(), duration=1100;
      const tick=now=>{const p=Math.min(1,(now-start)/duration), eased=1-Math.pow(1-p,3);el.textContent=format(target*eased);if(p<1)requestAnimationFrame(tick)};
      requestAnimationFrame(tick);
    };
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){run();io.disconnect()}},{threshold:.5});io.observe(el)}else run();
  });

  document.querySelectorAll('.bar-fill[data-width]').forEach(el=>{
    const run=()=>el.style.width=el.dataset.width+'%';
    if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){run();io.disconnect()}},{threshold:.4});io.observe(el)}else run();
  });

  const glow=document.querySelector('.pointer-glow');
  if(glow && !reduced){window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true})}

  const canvas=document.getElementById('dataCanvas');
  if(canvas && !reduced){
    const ctx=canvas.getContext('2d'); let pts=[]; let w=0,h=0;
    const resize=()=>{const d=Math.min(window.devicePixelRatio||1,2);w=canvas.clientWidth;h=canvas.clientHeight;canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);pts=Array.from({length:45},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.18,r:Math.random()*1.4+.4}))};
    const draw=()=>{ctx.clearRect(0,0,w,h);for(const p of pts){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(150,230,255,.65)';ctx.fill()}for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.hypot(dx,dy);if(d<120){ctx.strokeStyle=`rgba(100,210,255,${.09*(1-d/120)})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}requestAnimationFrame(draw)};
    resize();window.addEventListener('resize',resize,{passive:true});draw();
  }
  reveal(); window.addEventListener('scroll',reveal,{passive:true});
})();
