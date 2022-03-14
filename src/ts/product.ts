import Swiper from "swiper";
import { getHeader } from "../layout/header";

getHeader();

(function () {
  const swiperProduct = new Swiper(".swiper-list", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    pagination: true,
  });
  const swiperList = new Swiper(".swiper-main", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    loop: true,
    thumbs: {
      swiper: swiperProduct,
    },
  });
})();
