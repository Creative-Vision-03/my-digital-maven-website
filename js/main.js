(function(){
var S=[["images/analytics.jpg","Brand & Corporate Identity","Logos, brand guidelines, color palettes, stationery design, and typography systems.","Establish authority"],["images/designer-desk.jpg","Marketing Collateral","Company profiles, pitch decks, brochures, flyers, banners, and annual reports.","High impact print & web"],["images/online-meeting.jpg","Digital & Social Creatives","Ad banners, social post templates, infographics, email headers, and promotional kits.","Drive online engagement"],["images/remote-worker.jpg","Social Media Management","Full content calendars, community engagement, and brand messaging across Meta, LinkedIn, X, and Instagram.","Grow your audience"],["images/headset-agent.jpg","Paid Ads & Performance","Targeted PPC, Facebook/Instagram Ads, and Google Ads optimizing lead conversion.","Convert leads"],["images/review-meeting.jpg","SEO & Content Marketing","Search engine optimization, copywriting, and content marketing designed to generate organic traffic.","Organic traffic"]];
var P=[["Discovery","Deep-dive into brand goals, market landscape, and audience demographics."],["Strategy & Design","Developing custom visual concepts, campaign blueprints, and media plans."],["Execution","Deploying high-converting visual assets and launching targeted campaigns."],["Optimization","Continuous tracking, reporting, and refinement for maximum return on investment."]];
var SI=['search','pen','bolt','trend'];var IC=['pen','file','image','share','megaphone','trend'];
function card(x,i,n){return '<a class="card" href="#services" style="text-decoration:none"><div class="im"><img loading="lazy" src="'+x[0]+'" alt="'+x[1]+'">'+'</div><div class="tx"><span class="ib"><svg class="ic"><use href="#i-'+IC[i]+'"/></svg></span><h3>'+x[1]+'</h3><p>'+x[2]+'</p><span class="tag">'+x[3]+'</span></div></a>'}
var $=function(i){return document.getElementById(i)};
$('svc').innerHTML=S.map(function(x,i){return card(x,i,1)}).join('');
$('gd').innerHTML=S.slice(0,3).map(function(x,i){return card(x,i,1)}).join('');
$('dm').innerHTML=S.slice(3).map(function(x,i){return card(x,i+3,1)}).join('');
var st=P.map(function(x,i){return '<div class="st"><i><svg class="ic"><use href="#i-'+SI[i]+'"/></svg></i><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>'}).join('');$('stp').innerHTML=st;$('stp2').innerHTML=st;
var pages=['home','about','services','process','contact','terms'],lk=$('lk'),io=null,pill=document.querySelector('.pill'),mb=$('mb');
function setMenu(o){lk.classList.toggle('open',o);pill.classList.toggle('open',o);document.body.classList.toggle('menu-open',o);mb.innerHTML='<svg class="ic"><use href="#i-'+(o?'x':'menu')+'"/></svg>';mb.setAttribute('aria-expanded',o)}
if('IntersectionObserver' in window)io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;t.classList.add('v');io.unobserve(t);setTimeout(function(){t.classList.add('done')},1200)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
function animate(pg){
 var sel='.hero>*,.pg>*,.sec .w>*,.cta .w>*,.grid>*,.steps>*,.nums>*,.contact>*,.split>*';
 pg.querySelectorAll(sel).forEach(function(el){
  if(el.classList.contains('rv')||el.classList.contains('v'))return;
  var par=el.parentNode,idx=Array.prototype.indexOf.call(par.children,el),a='u';
  if(par.matches('.hero,.split,.pg,.contact'))a=idx%2?'r':'l';
  else if(par.matches('.grid,.steps,.nums'))a='z';
  el.classList.add('rv');el.dataset.a=a;el.style.setProperty('--d',(par.matches('.grid,.steps,.nums')?idx*.12:0)+'s');
  if(io)io.observe(el);else el.classList.add('v');
 });
}
function route(){var h=(location.hash||'#home').slice(1);if(pages.indexOf(h)<0)h='home';
 pages.forEach(function(p){$(p).classList.toggle('on',p===h)});
 document.querySelectorAll('.links a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+h)});
 setMenu(false);window.scrollTo(0,0);animate($(h))}
addEventListener('hashchange',route);route();
mb.addEventListener('click',function(){setMenu(!lk.classList.contains('open'))});addEventListener('resize',function(){if(innerWidth>=1024)setMenu(false)});
var up=$('up');function onS(){up.classList.toggle('show',scrollY>400);pill.classList.toggle('scrolled',scrollY>20)}addEventListener('scroll',onS,{passive:true});onS();
up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
$('f').addEventListener('submit',function(ev){ev.preventDefault();var g=function(i){return $(i).value};
 location.href='mailto:digitalmaven2209@gmail.com?subject='+encodeURIComponent('Enquiry: '+g('s'))+'&body='+encodeURIComponent(g('m')+'\n\n'+g('n')+' ('+g('e')+')')});
})();
