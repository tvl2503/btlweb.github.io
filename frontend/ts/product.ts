import Swiper, { Navigation } from "swiper";
import { qs } from "../utils/query";
import { useState } from "../utils/state";

(function () {
  const swiperProduct = new Swiper(".swiper-list", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    pagination: true,
    modules: [Navigation]
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
    modules: [Navigation]
  });
})();


(function(){
  const [quantity, setQuantity] = useState<number>(1);
  const btnDecrement = qs('#jsSub');
  const btnIncrement = qs('#jsPlus');
  const quantityProduct = qs('#jsNum');

  const quantityIsValid = () => {
    return quantity() > 1;
  }
  const setTextContent = () => {
    quantityProduct!.textContent = quantity().toString();
  }
  const onIncrement = () => {
    setQuantity(quantity() + 1);
    setTextContent();
  }

  const onDecrement = () => {
    if (!quantityIsValid()) {
      return;
    }
    setQuantity(quantity() - 1);
    setTextContent();
  }

  btnDecrement?.addEventListener('click', onDecrement);

  btnIncrement?.addEventListener('click', onIncrement);
})();