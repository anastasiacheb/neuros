let navMenu = document.querySelector('.js-nav__menu');
let navBurger = document.querySelector('.js-nav__burger');
let navClose = document.querySelector('.js-nav__close');
let body = document.querySelector('body');

navBurger.addEventListener('click', () => {
  navMenu.classList.toggle('nav_active');
  navClose.classList.toggle('opacity-0');
  body.classList.toggle('body_active');
});
