// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,

  breakpoints: {
    780: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

//Аккордеон для мобильной навигаци
import { accordion } from "./modules/accordion.js";

// Вызов функции после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  accordion();
});
