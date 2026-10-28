const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open navigation':'Close navigation');navigation?.classList.toggle('is-open',!open)});
navigation?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('is-open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Open navigation')}));
document.querySelector('#year').textContent=new Date().getFullYear();
const targets=document.querySelectorAll('.section-heading,.about-grid,.objective,.interests,.experience-card,.leadership-item,.education-card,.project-feature,.project-secondary>div,.skills-grid,.contact>*');
targets.forEach(item=>item.classList.add('reveal'));
if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});targets.forEach(item=>observer.observe(item))}else targets.forEach(item=>item.classList.add('is-visible'));
