//
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.closest(".panel-left-language").querySelector(".panel-left-language-list").classList
        .toggle('panel-left-language-list--active');

});


 // Initialize Swiper
 const defaultSwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 autoplay: {
     delay: 5000,
     loop: true
 },
  speed: 400,
  spaceBetween: 0
});

const clientsSlider = new Swiper('.clients-slider', {
    navigation: {
        nextEl: '.clients-slider-prev',
        prevEl: '.clients-slider-next',
    },
    speed: 400,
    spaceBetween: 65,
    width: 148,

});