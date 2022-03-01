

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/* ========================Show menu=============*/
if(navToggle){
    navToggle.addEventListener('click', () => navMenu.classList.add('active'))
}
/* ========================Hidden menu=============*/
if(navClose){
    navClose.addEventListener('click', () => navMenu.classList.remove('active'))
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))