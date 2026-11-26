// @ts-nocheck
"use client";
// All interactive behavior of the page: rope day/night switch, scroll reveals, tools banner,
// count-up numbers, savings calculator, workflow simulator, services accordion, lightbox,
// booking calendar, pointer effects. It works on the markup rendered by the section components.
import { useEffect } from "react";
import { site, booking } from "@/data/site";
import { TOOLS } from "@/data/tools";
import { ROW_A, ROW_B, STEPS, STEP_ICONS, SERVICES, EMAILS, PIPE, WORDS } from "@/data/content";

const CONFIG = {
  toEmail: site.email,
  hours: booking.hours,
  workdays: booking.workdays,
  leadHours: booking.leadHours,
  monthsAhead: booking.monthsAhead,
};

export default function Effects() {
  useEffect(() => {
    if (window.__pfStarted) return; // React dev mode runs effects twice; start only once
    window.__pfStarted = true;
    const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const esc = s => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    $('#y').textContent = new Date().getFullYear();
    function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2200)}

    /* ---------- day / night mode ---------- */
    const root=document.documentElement, themeBtn=$('#theme');
    function labelTheme(){const d=root.dataset.theme==='dark';themeBtn.setAttribute('aria-label',d?'Pull the cord to switch to day mode':'Pull the cord to switch to night mode');$('#tc').content=d?'#0d1714':'#fff9ef'}
    function applyTheme(t){root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}labelTheme()}
    labelTheme();
    const rope=$('#rope'),ropeIn=$('#ropeIn');
    function flip(){
      const next=root.dataset.theme==='dark'?'light':'dark';
      const r=themeBtn.getBoundingClientRect(), x=r.left+r.width/2, y=r.top+r.height/2;
      ropeIn.classList.remove('swing');void ropeIn.offsetWidth;ropeIn.classList.add('swing');
      if(document.startViewTransition&&!reduce){
        const end=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
        const vt=document.startViewTransition(()=>applyTheme(next));
        vt.ready.then(()=>root.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${end}px at ${x}px ${y}px)`]},{duration:650,easing:'cubic-bezier(.4,0,.2,1)',pseudoElement:'::view-transition-new(root)'})).catch(()=>{});
      }else{root.classList.add('fade');applyTheme(next);setTimeout(()=>root.classList.remove('fade'),500)}
    }
    /* drag the knob down to pull; a click or Enter/Space also works */
    let drag=null,pulled=false;
    themeBtn.addEventListener('pointerdown',e=>{drag={y:e.clientY,d:0};pulled=false;rope.classList.remove('spring');themeBtn.setPointerCapture(e.pointerId)});
    themeBtn.addEventListener('pointermove',e=>{if(!drag)return;drag.d=Math.max(0,Math.min(38,e.clientY-drag.y));rope.style.setProperty('--pull',drag.d+'px')});
    function release(){if(!drag)return;const d=drag.d;drag=null;rope.classList.add('spring');rope.style.setProperty('--pull','0px');if(d>12){pulled=true;flip()}}
    themeBtn.addEventListener('pointerup',release);
    themeBtn.addEventListener('pointercancel',release);
    themeBtn.addEventListener('click',()=>{if(pulled){pulled=false;return}rope.classList.add('spring');rope.style.setProperty('--pull','14px');setTimeout(()=>rope.style.setProperty('--pull','0px'),120);flip()});
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{let s;try{s=localStorage.getItem('theme')}catch(_){}if(!s)applyTheme(e.matches?'dark':'light')});

    /* ---------- reveal on scroll ---------- */
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    function observeReveals(){$$('.reveal:not(.in)').forEach(el=>io.observe(el))}

    /* ---------- header: progress, shadow, active link, back to top ---------- */
    const hdr=$('#hdr'),bar=$('#bar'),up=$('#up');
    function onScroll(){const h=root;const max=h.scrollHeight-h.clientHeight;bar.style.width=(max>0?h.scrollTop/max*100:0)+'%';hdr.classList.toggle('scrolled',h.scrollTop>10);up.classList.toggle('on',h.scrollTop>900)}
    addEventListener('scroll',onScroll,{passive:true});onScroll();
    up.onclick=()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'});
    const navLinks=$$('nav ul a[href^="#"]:not(.btn)');
    const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
    ['about','tools','numbers','services','work'].forEach(id=>so.observe($('#'+id)));

    /* ---------- hero ---------- */
    const words=WORDS;let wi=0;const rot=$('#rot');
    if(!reduce)setInterval(()=>{rot.classList.add('out');setTimeout(()=>{wi=(wi+1)%words.length;rot.textContent=words[wi];rot.classList.remove('out')},350)},2600);
    const colorOf=t=>t.color==='ink'?'var(--ink)':t.color;
    const tool=n=>TOOLS.find(t=>t.name===n);
    $$('.chip-f').forEach(c=>{const t=tool(c.dataset.tool);if(!t)return;c.style.setProperty('--c',colorOf(t));c.innerHTML=`<span class="ci">${t.svg}</span>${esc(t.name)}`});

    /* ---------- tools banner ---------- */
    function tile(t,hidden){
      const c=t.color==='ink'?'var(--ink)':t.color;
      const ic=t.svg?`<span class="ic">${t.svg}</span>`:`<span class="ic mono">${esc(t.name[0])}</span>`;
      return `<div class="tile" style="--c:${c}"${hidden?' aria-hidden="true"':''}>${ic}<div><b>${esc(t.name)}</b><span class="d">${esc(t.desc)}</span></div></div>`;
    }
    function fillTrack(el,names){const list=names.map(tool).filter(Boolean);const once=list.map(t=>tile(t,false)).join('');const dup=list.map(t=>tile(t,true)).join('');el.innerHTML=once+dup+dup+dup;}
    fillTrack($('#trackA'),ROW_A);fillTrack($('#trackB'),ROW_B);

    /* ---------- count-up numbers ---------- */
    const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);
      const el=e.target,to=+el.dataset.to,pre=el.dataset.prefix||'',suf=el.dataset.suffix||'';
      if(reduce){el.textContent=pre+to+suf;return}
      const t0=performance.now(),D=1400;(function f(t){const p=Math.min(1,(t-t0)/D),v=Math.round(to*(1-Math.pow(1-p,3)));el.textContent=pre+v+suf;if(p<1)requestAnimationFrame(f)})(t0);
    }),{threshold:.6});
    $$('.count').forEach(c=>cio.observe(c));

    /* ---------- savings calculator ---------- */
    const nf=n=>Math.round(n).toLocaleString('en-US');
    const tween=(el,to,fmt)=>{const from=+el.dataset.v||0;el.dataset.v=to;if(reduce){el.textContent=fmt(to);return}const t0=performance.now();(function f(t){const p=Math.min(1,(t-t0)/450),v=from+(to-from)*(1-Math.pow(1-p,3));el.textContent=fmt(v);if(p<1)requestAnimationFrame(f)})(t0)};
    function calc(){
      const h=+$('#cHrs').value, s=+$('#cShare').value, rate=Math.max(0,+$('#cRate').value||0), cur=$('#cCur').value;
      $('#oHrs').textContent=h+' h';$('#oShare').textContent=s+'%';
      const week=h*s/100, year=week*50, days=year/8, val=year*rate;
      tween($('#rWeek'),week,v=>(Math.round(v*10)/10).toString());
      tween($('#rYear'),year,v=>nf(v));
      tween($('#rDays'),days,v=>nf(v));
      tween($('#rVal'),val,v=>cur+nf(v));
      $('#bAfter').style.width=(100-s)+'%';
    }
    ['cHrs','cShare','cRate','cCur'].forEach(id=>$('#'+id).addEventListener('input',calc));calc();

    /* ---------- how it flows ---------- */
    $('#nodes').innerHTML=STEPS.map((s,i)=>`<button class="node" type="button" data-i="${i}"><div class="c"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${STEP_ICONS[i]}</svg></div><small>Step ${i+1}</small><b>${s[0]}</b></button>`).join('');
    const nodes=$$('.node'),fdesc=$('#fdesc'),fill=$('#fill');let fi=0,paused=false;
    function setFlow(i){fi=i;nodes.forEach((n,k)=>{n.classList.toggle('on',k===i);n.classList.toggle('done',k<i)});fill.style.width=(i/(nodes.length-1)*100)+'%';fdesc.innerHTML=`<p>${esc(STEPS[i][1])}</p>`}
    nodes.forEach((n,i)=>n.onclick=()=>{paused=true;setFlow(i)});
    const fl=$('#flow');fl.addEventListener('mouseenter',()=>paused=true);fl.addEventListener('mouseleave',()=>paused=false);
    setFlow(0);if(!reduce)setInterval(()=>{if(!paused)setFlow((fi+1)%nodes.length)},3200);

    /* ---------- email workflow simulator ---------- */
    const PIPE=[["✉","Gmail Trigger"],["🧠","AI Categorizer (Ollama)"],["🔀","Reply, Draft or Nothing"],["🏷","Label"],["✍","Generate Draft"],["👤","Human Review"]];
    $('#pipe').innerHTML=PIPE.map((p,i)=>`<div class="pn" data-i="${i}" data-n="${i+1}"><i>${p[0]}</i>${p[1]}</div>`+(i<PIPE.length-1?'<span class="arrow" aria-hidden="true">›</span>':'')).join('');
    $('#emails').innerHTML=EMAILS.map((m,i)=>`<button class="em" type="button" data-i="${i}"><b>${esc(m.subj)}</b><span>From ${esc(m.from)}</span></button>`).join('');
    let simRun=0,typeT;
    function runSim(i){
      const m=EMAILS[i],id=++simRun;clearTimeout(typeT);
      $$('.em').forEach((b,k)=>b.classList.toggle('on',k===i));
      const pn=$$('.pn'),ar=$$('.arrow');pn.forEach(n=>n.classList.remove('lit','skip'));ar.forEach(a=>a.classList.remove('lit'));pn[3].lastChild.textContent='Label';
      const out=$('#simOut');out.innerHTML='<p>Reading the email…</p>';
      const steps=m.flag?[0,1,2,3,4,5]:[0,1,2,3];
      steps.forEach((s,k)=>setTimeout(()=>{if(id!==simRun)return;pn[s].classList.add('lit');if(ar[s-1])ar[s-1].classList.add('lit');
        if(s===1)out.innerHTML='<p>The local AI model is categorizing the message…</p>';
        if(s===3)pn[3].lastChild.textContent=m.label;
      },reduce?0:k*520));
      if(!m.flag)[4,5].forEach(s=>pn[s].classList.add('skip'));
      setTimeout(()=>{if(id!==simRun)return;
        out.innerHTML=`<span class="tagc">${esc(m.cat)} → ${esc(m.label)}</span><p>${esc(m.why)}</p>`+(m.flag?'<div class="draftbox" id="db"></div>':'<p><b>Result:</b> no draft, no notification, nothing to do.</p>');
        if(m.flag){const box=$('#db');let n=0;(function type(){if(id!==simRun)return;box.textContent=m.draft.slice(0,n);if(n<m.draft.length){n+=reduce?m.draft.length:2;typeT=setTimeout(type,18)}else{box.classList.add('done');box.insertAdjacentHTML('afterend','<p><b>Flagged for human review.</b> The draft waits in Gmail until I approve it.</p>')}})()}
      },reduce?0:steps.length*520+150);
    }
    $$('.em').forEach(b=>b.onclick=()=>runSim(+b.dataset.i));

    /* ---------- services accordion ---------- */
    $('#acc').innerHTML=SERVICES.map((s,i)=>`<div class="ai${i===0?' open':''}"><button class="ah" type="button" aria-expanded="${i===0}" aria-controls="svc${i}"><span class="n">${String(i+1).padStart(2,'0')}</span><h3>${esc(s[0])}</h3><span class="pm" aria-hidden="true"></span></button><div class="ab" id="svc${i}" role="region" aria-label="${esc(s[0])}"><div><p>${esc(s[1])}</p><div class="tags">${s[2].map(t=>`<i>${esc(t)}</i>`).join('')}</div></div></div></div>`).join('');
    $$('.ai').forEach(it=>$('.ah',it).onclick=()=>{const o=it.classList.contains('open');$$('.ai').forEach(x=>{x.classList.remove('open');$('.ah',x).setAttribute('aria-expanded','false')});if(!o){it.classList.add('open');$('.ah',it).setAttribute('aria-expanded','true')}});

    /* ---------- lightbox ---------- */
    const lb=$('#lb');
    $$('.shot').forEach(b=>b.onclick=()=>{const im=$('img',b);$('#lbimg').src=im.src;$('#lbimg').alt=im.alt;$('#lbcap').textContent=b.dataset.cap;lb.showModal()});
    $('#lbx').onclick=()=>lb.close();
    lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});

    /* ---------- copy email ---------- */
    $('#copy').onclick=async()=>{try{await navigator.clipboard.writeText('dcifebrero@gmail.com');toast('Email copied ✓')}catch(e){toast('dcifebrero@gmail.com')}};

    /* ---------- pointer effects ---------- */
    if(fine&&!reduce){
      const hero=$('#hero'),glow=$('.glow');
      hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect();glow.style.setProperty('--mx',(e.clientX-r.left)+'px');glow.style.setProperty('--my',(e.clientY-r.top)+'px')});
      $$('[data-tilt]').forEach(el=>{const t=el.classList.contains('stage')?8:3;
        el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transition='transform .1s';el.style.transform=`perspective(800px) rotateY(${x*t}deg) rotateX(${-y*t}deg)`});
        el.addEventListener('mouseleave',()=>{el.style.transition='transform .6s cubic-bezier(.2,.7,.2,1)';el.style.transform=''})});
      $$('.mag').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.28}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
    }

    /* ---------- booking calendar ---------- */
    const MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const OFF=booking.utcOffset, now=new Date(), phNow=new Date(now.getTime()+OFF*3600e3);
    let vY=phNow.getUTCFullYear(), vM=phNow.getUTCMonth(); const sY=vY,sM=vM; let sel=null,selH=null;
    const ts=(y,m,d,h)=>Date.UTC(y,m,d,h-OFF,0);
    const free=(y,m,d)=>CONFIG.hours.filter(h=>ts(y,m,d,h)>=now.getTime()+CONFIG.leadHours*3600e3);
    const fmtH=h=>(((h+11)%12)+1)+':00 '+(h>=12?'PM':'AM');
    const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||'your timezone';
    $('#tz').textContent='Times shown in Philippine Time (GMT+8). Your timezone: '+tz+'.';
    function renderCal(){
      $('#cmonth').textContent=MONTHS[vM]+' '+vY;
      const first=new Date(Date.UTC(vY,vM,1)).getUTCDay(),dim=new Date(Date.UTC(vY,vM+1,0)).getUTCDate(),box=$('#days');box.innerHTML='';
      for(let i=0;i<first;i++)box.appendChild(document.createElement('span'));
      for(let d=1;d<=dim;d++){const b=document.createElement('button');b.type='button';b.className='day';b.textContent=d;
        const dow=new Date(Date.UTC(vY,vM,d)).getUTCDay();b.disabled=!(CONFIG.workdays.includes(dow)&&free(vY,vM,d).length);
        if(sel&&sel.y===vY&&sel.m===vM&&sel.d===d)b.classList.add('sel');
        b.onclick=()=>{sel={y:vY,m:vM,d};selH=null;renderCal();renderSlots();$('#form').hidden=true};box.appendChild(b)}
      const diff=(vY-sY)*12+(vM-sM);$('#cprev').disabled=diff<=0;$('#cnext').disabled=diff>=CONFIG.monthsAhead;
    }
    $('#cprev').onclick=()=>{vM--;if(vM<0){vM=11;vY--}renderCal()};
    $('#cnext').onclick=()=>{vM++;if(vM>11){vM=0;vY++}renderCal()};
    const dayLabel=()=>new Date(Date.UTC(sel.y,sel.m,sel.d)).toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',timeZone:'UTC'});
    const localLabel=()=>new Date(ts(sel.y,sel.m,sel.d,selH)).toLocaleString([],{weekday:'short',month:'short',day:'numeric',hour:'numeric',minute:'2-digit',timeZoneName:'short'});
    function renderSlots(){
      const box=$('#slots');box.innerHTML='';
      if(!sel){$('#st').textContent='Select a date';box.innerHTML='<p class="hintp">Available times appear here.</p>';return}
      $('#st').textContent=dayLabel();
      free(sel.y,sel.m,sel.d).forEach((h,i)=>{const b=document.createElement('button');b.type='button';b.className='slot'+(selH===h?' sel':'');b.style.animationDelay=(i*.04)+'s';b.textContent=fmtH(h);b.onclick=()=>{selH=h;renderSlots();showForm()};box.appendChild(b)});
    }
    function showForm(){$('#form').hidden=false;$('#chosen').textContent=dayLabel()+', '+fmtH(selH)+' PHT · your time: '+localLabel();$('#msg').textContent='';$('#msg').className='msg'}
    $('#form').addEventListener('submit',async e=>{
      e.preventDefault();const f=e.target,msg=$('#msg'),btn=$('#send');if(f.botcheck.checked)return;
      const when=dayLabel()+', '+fmtH(selH)+' (Philippine Time)';
      const info={name:f.name.value.trim(),email:f.email.value.trim(),note:f.note.value.trim(),local:localLabel()};
      const body=`Discovery call request\n\nName: ${info.name}\nEmail: ${info.email}\nRequested time: ${when}\nVisitor's local time: ${info.local} (${tz})\n\nMessage:\n${info.note||'(none)'}`;
      btn.disabled=true;btn.textContent='Sending…';msg.textContent='';
      try{
        const r=await fetch('/api/book',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:info.name,email:info.email,note:info.note,when,local:info.local,tz,website:''})});
        if(r.status===501){location.href='mailto:'+CONFIG.toEmail+'?subject='+encodeURIComponent('Call request: '+when)+'&body='+encodeURIComponent(body);btn.disabled=false;btn.textContent='Request this time';return}
        if(!r.ok)throw 0;
        msg.textContent='Thanks, '+info.name.split(' ')[0]+'! Your request was sent. I will reply to '+info.email+' to confirm.';msg.className='msg ok';f.reset();btn.textContent='Sent ✓';toast('Request sent ✓');
      }catch(err){msg.textContent='Something went wrong. Please email me at '+CONFIG.toEmail+'.';msg.className='msg err';btn.disabled=false;btn.textContent='Request this time'}
    });
    renderCal();renderSlots();
    observeReveals();
  }, []);
  return null;
}
