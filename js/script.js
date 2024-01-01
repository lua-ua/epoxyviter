// SLIDER
new Swiper('.production__slider', {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    pagination: {
        el: '.swiper-pagination',
        

        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' +
                ' із ' +
                '<span class="' + totalClass + '"></span>';
        },
    },
});


// POP-UP
const btnHowByHeader = document.querySelector('.header__btn-black'),
    btnHowBySidebar = document.querySelector('.sidebar__btn-black'),
    popUp = document.querySelector('.pop-up'),
    closePopUp = document.querySelector('.close'),
    body = document.body;

btnHowByHeader.addEventListener('click', () => {
    popUp.classList.add('visible');
    // body.classList.add('hidden');
});

btnHowBySidebar.addEventListener('click', () => {
    popUp.classList.add('visible');
    // body.classList.add('hidden');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('visible');
    // body.classList.remove('hidden');
});
    

// SIDEBAR
const btnBurgerMenu = document.querySelector('.btn-burger-menu'),
    btnBurgerMenuLine = document.querySelector('.btn-burger-menu__line'),
    sidebarHide = document.querySelector('.sidebar__hide'),
    sidebarContent = document.querySelector('.sidebar-content');

btnBurgerMenu.addEventListener('click', () => {
    btnBurgerMenuLine.classList.toggle('hidden');
    btnBurgerMenuLine.classList.toggle('rotate');
    sidebarHide.classList.toggle('visible');
    sidebarContent.classList.toggle('visible');
    body.classList.toggle('scroll-none');
});