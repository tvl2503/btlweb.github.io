"use strict";
import { insertStringElement, modelElement } from '../src/utils/element/utilsElement';

(function () {
    let isActive = false;
    const navMenu = document.getElementById("nav-menu")
    const navToggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close');


    const callback = (activeValue) => {
        const model = document.querySelector('#navigation--model');
        activeValue ? insertStringElement(document.body, modelElement('navigation--model')) : model.remove();

        const modelAfterInsert = document.querySelector('#navigation--model');
        if (modelAfterInsert) {
            modelAfterInsert.addEventListener('click', handleClick);
        }
    }
    const handleClick = () => {
        isActive = navMenu.classList.toggle('active');
        callback(isActive)
    }
    navToggle.addEventListener('click', handleClick);
    navClose.addEventListener('click', handleClick);

    const navLink = document.querySelectorAll('.nav__link');
    function linkAction() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('active');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
})();
//# sourceMappingURL=index.js.map