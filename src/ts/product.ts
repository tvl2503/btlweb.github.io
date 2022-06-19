import Swiper, { Navigation } from "swiper";
import { gid, qs } from "../utils/query";
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
  const btnSub = gid('jsSub');
  const btnIncrement = gid('jsPlus');
  const input = gid('jsNum') as HTMLInputElement;

  const setValueInput = () => {
    input.value = quantity().toString();
  }

  setValueInput();

  const onDecrement = () => {
    const q = quantity();
    if (q === 1) {
      return;
    }
    setQuantity(q - 1);
    setValueInput();
  }

  const onIncrement = () => {
    setQuantity(quantity() + 1);
    setValueInput();
  }

  btnSub?.addEventListener('click', onDecrement);

  btnIncrement?.addEventListener('click', onIncrement)
})();