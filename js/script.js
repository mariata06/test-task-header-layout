const burger = document.querySelector('.mobile-menu__burger');
const mobMenu = document.querySelector('.navigation');

burger.addEventListener('click', () => {
    mobMenu.classList.toggle('show');
    burger.classList.toggle('hide');
})