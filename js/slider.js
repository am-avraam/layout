const dumy = document.querySelector('.dumy-card');
const slider = document.querySelector(".slider-container");

if (window.innerWidth < 768) {
   dumy.remove();
} 

let mySwiper;

function mobileSlider() {
   if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
      mySwiper = new Swiper (slider, {
         slidesPerView: 1.25,
         spaceBetween: 16,
         // slidesPerGroup: 2,
         loop: true,
         slideClass: 'card',
         pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
                     }
   });
   slider.dataset.mobile = "true";
   }

   if (window.innerWidth > 768) {
      slider.dataset.mobile = "false";
   if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy()
   }
      
   }
}

mobileSlider()

window.addEventListener("resize", () => {
   mobileSlider();
});


// const mySwiper = new Swiper (slider, {
//    slidesPerView: 1.25,
//    spaceBetween: 16,
//    //  slidesPerGroup: 2,
//    pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//     },
    
//   });