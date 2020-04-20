$(function () {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,

    });

    $('select').styler({});

   /* $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    })*/

});

document.addEventListener('click',e => {
    slideToggle(e);
});

function slideToggle(e) {
    const headerBtnMenu = e.target.closest('.header__btn-menu'),
        menu = document.querySelector('.menu ul');

    if (!headerBtnMenu) {
        return;
    }

    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

