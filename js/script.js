"use strict"

function mobileMenu() {
    const mobBtn = document.querySelector('.mobile-menu-btn'),
        menuWindow = document.querySelector('.mobile-menu');

    mobBtn.addEventListener('click', () => {
        mobBtn.classList.toggle('mobile-menu-btn--active');
        menuWindow.classList.toggle('mobile-menu--open');
    })
}

function phoneListToggle() {
    const phoneBtn = document.querySelector('.arrow');

    phoneBtn.addEventListener('click', () => {
        phoneBtn.classList.toggle('arrow--active');
        document.querySelector('.mobile-phone-list').classList.toggle('mobile-phone-list--active');
    })
}

function selectionFilms() {
    const btnArray = document.querySelectorAll('.selection__management-btns-item'),
        targetImg = document.querySelector('#right'),
        styleList = ['selection-1', 'selection-2', 'selection-3', 'selection-4', 'selection-5'];

    btnArray.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            styleList.forEach(item => {
                targetImg.classList.remove(item);
            })
            targetImg.classList.add(styleList[i]);

            selectionFilmsBtnStyleChange(item, btnArray, '_active-btn');
        })
    })
}

function selectionFilmsBtnStyleChange(newActiveBtn, btnArr, style){
    btnArr.forEach(btn=>{
        btn.classList.remove(style);
    })

    newActiveBtn.classList.add(style);
}


mobileMenu();
phoneListToggle();
selectionFilms();
