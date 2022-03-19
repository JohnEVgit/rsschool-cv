'use strict';

const navLinks = document.querySelectorAll('.js-cv-header__link');
const cvHeader = document.querySelector('.js-cv-header-toggle');

cvHeader.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

function toggleMenu() {
    document.querySelector('.js-cv-header').classList.toggle('cv-header--is-open');
}

function closeMenu() {
    document.querySelector('.js-cv-header').classList.remove('cv-header--is-open');
}
