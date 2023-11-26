import Swiper from "swiper";
// import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

var swiper = new Swiper(".mySwiper", {
  // loop: true,

  slidesPerView: 4,
  // centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
export default swiper;
// const swiper = new Swiper('.mySwiper', {
//   direction: 'horizontal',
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });
