const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');

burger.addEventListener('click', () => {
  menu.classList.add('open');
  menu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('open');
  menu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
});

menu.addEventListener('click', (e) => {
  if (e.target === menu) {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});