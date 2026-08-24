(() => {
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const nav = [
    ['Home','index.html'],['Experience','career.html'],['Education','education.html'],
    ['Publications','publications.html'],['Development','prof-dev.html'],['Reflections','career-reflections.html'],
    ['References','references.html'],['Interests','interests.html'],['Contact','contact.html']
  ];
  const header = document.querySelector('[data-site-header]');
  if(header){
    const links=nav.map(([n,h])=>`<a href="${h}" class="${file===h?'active':''}">${n}</a>`).join('');
    const projActive=['github-projects.html','cv-projects.html','nlp-projects.html','software-web-projects.html'].includes(file);
    header.innerHTML=`<header class="site-header"><div class="nav-shell">
      <a class="brand" href="index.html"><img src="assets/images/my-e-portfolio-logo.jpg" alt="Mohsen Ghazel digital portfolio"><span class="brand-text">Mohsen Ghazel</span></a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">Menu</button>
      <nav class="global-nav" aria-label="Global navigation">${links.slice(0,links.indexOf('<a href="publications.html"')).trim()}
      <details class="project-menu"><summary class="${projActive?'active':''}">Projects ▾</summary><div class="project-pop"><a href="github-projects.html">Projects overview</a><a href="cv-projects.html">Computer Vision</a><a href="nlp-projects.html">NLP / RAG / LLM</a><a href="software-web-projects.html">Software & Web Development</a></div></details>
      ${links.substring(links.indexOf('<a href="publications.html"'))}</nav></div></header>`;
    const btn=header.querySelector('.nav-toggle'), menu=header.querySelector('.global-nav');
    btn?.addEventListener('click',()=>{const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
  }
  const footer=document.querySelector('[data-site-footer]');
  if(footer) footer.innerHTML=`<footer class="site-footer"><div class="footer-inner"><span>© 2026 Mohsen Ghazel · Digital Professional Portfolio</span><span>Computer Vision · Machine Learning · Applied AI · Software Engineering</span></div></footer>`;
  const toc=document.querySelector('[data-page-toc]');
  if(toc){
    const heads=[...document.querySelectorAll('[data-toc]')];
    heads.forEach((h,i)=>{if(!h.id) h.id='section-'+(i+1)});
    toc.innerHTML=`<div class="toc-title">On this page</div><ul class="toc-list">${heads.map(h=>`<li><a href="#${h.id}">${h.textContent.trim()}</a></li>`).join('')}</ul>`;
    const anchors=[...toc.querySelectorAll('a')];
    const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){anchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}})},{rootMargin:'-20% 0px -65% 0px'});
    heads.forEach(h=>obs.observe(h));
  }
  const top=document.querySelector('.back-top');
  addEventListener('scroll',()=>top?.classList.toggle('show',scrollY>650),{passive:true});
})();