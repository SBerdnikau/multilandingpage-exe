//
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.closest(".panel-left-language").querySelector(".panel-left-language-list").classList
        .toggle('panel-left-language-list--active');

});


 // Initialize Swiper
// const muSwiper = new Swiper('.swiper-container', {
//     pagination: {
//         el: '.swiper-pagination-line',
//         type: 'progressbar'
//     },
// });


 const sefaultSwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
      pagination: {
          el: '.swiper-pagination-line',
          type: 'progressbar'
      },
   // clickable: true
   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 // autoplay: {
 //     delay: 5000,
 // },
  speed: 400,
  spaceBetween: 0
});
