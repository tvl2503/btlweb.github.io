import Swiper, { Navigation, Pagination } from "swiper";
import { insertStringElement } from "../utils/element/utilsElement";
import { classListToggleElement } from "../utils/classList";

new Swiper(".swiper--container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Pagination],
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  speed: 750,
});

new Swiper(".swiper--collection", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  modules: [Pagination, Navigation],
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
  breakpoints: {
    200: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  speed: 500,
});

// fake from api

(() => {
  let options = ["Best Sellers", "New Arrivals", "On Trend"];
  let defaultValue = "Best Sellers";
  const textSelect = document?.querySelector(".text--select");

  textSelect!.textContent = defaultValue;

  const listOptions = document?.getElementById("list--options");
  const button = document?.querySelector(".content--select");
  const createList = options.map((item, index) => {
    return `<li data-index=${index}>${item}</li>`;
  });
  const joinStringList = createList.join("");
  insertStringElement(listOptions!, joinStringList, "afterbegin");
  const handleListItem = () => {
    classListToggleElement(listOptions!, "show");
  };
  button?.addEventListener("click", handleListItem);

  const listItems = document?.querySelectorAll("li[data-index]");
  if (listItems?.length > 0) {
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        textSelect!.textContent = item.textContent;
      });
    });
  }
})();
