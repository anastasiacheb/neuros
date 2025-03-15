let accordion = document.querySelectorAll('.js-acc');
let accIcon = document.querySelectorAll('.js-acc__icon');
let accText = document.querySelectorAll('.js-acc__text');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    accIcon[i].classList.toggle('rotate-180');

    if (accText[i].style.maxHeight) {
      accText[i].style.maxHeight = null;
      accordion[i].classList.add('border-light-200');
      accordion[i].classList.remove('border-light-800');
      accordion[i].classList.add('dark:border-dark-200');
      accordion[i].classList.remove('dark:border-dark-800');
    } else {
      accText[i].style.maxHeight = accText[i].scrollHeight + 'px';
      accordion[i].classList.remove('border-light-200');
      accordion[i].classList.add('border-light-800');
      accordion[i].classList.remove('dark:border-dark-200');
      accordion[i].classList.add('dark:border-dark-800');
    }
  });
}
