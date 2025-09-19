// Sticky header shadow on scroll
const header = document.getElementById('site-header');
const onScroll = () => {
  if (window.scrollY > 6) header.style.boxShadow = '0 6px 22px rgba(2,6,23,.06)';
  else header.style.boxShadow = 'none';
};
window.addEventListener('scroll', onScroll); onScroll();

// Smooth anchor scroll (native behavior + offset fix for old browsers if needed)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      // close drawer if open
      drawer.classList.remove('open');
    }
  });
});

// Search dropdown toggle
const searchBtn = document.getElementById('searchBtn');
const searchDropdown = document.getElementById('searchDropdown');
const searchGo = document.getElementById('searchGo');
searchBtn.addEventListener('click', ()=>{
  searchDropdown.classList.toggle('open');
  const input = document.getElementById('searchInput');
  if (searchDropdown.classList.contains('open')) input?.focus();
});
document.addEventListener('click', (e)=>{
  if (!searchDropdown.contains(e.target) && e.target !== searchBtn){
    searchDropdown.classList.remove('open');
  }
});
searchGo.addEventListener('click', ()=>{
  const q = (document.getElementById('searchInput').value || '').trim();
  if (q) window.find ? window.find(q) : alert(`Search: ${q}`);
});

// Mobile drawer
const drawer = document.getElementById('drawer');
const menuToggle = document.getElementById('menuToggle');
const drawerClose = document.getElementById('drawerClose');
menuToggle.addEventListener('click', ()=> drawer.classList.add('open'));
drawerClose.addEventListener('click', ()=> drawer.classList.remove('open'));
drawer.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> drawer.classList.remove('open')));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
const vids = document.querySelectorAll('video[autoplay]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.play();
      else e.target.pause();
    });
  }, { threshold: 0.5 });

  vids.forEach(v => {
    v.muted = true;            // 자동재생을 위해 보장
    v.playsInline = true;      // iOS 전체화면 방지
    io.observe(v);
  });