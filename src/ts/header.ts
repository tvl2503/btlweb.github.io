import { classListToggleElement } from "../utils/classList";
import {
  insertStringElement,
  modelElement,
} from "../utils/element/utilsElement";

(function () {
  let firstScroll = 0;
  let currentScroll = 0;
  const deboundScrollHandler = () => {
    const header = document?.querySelector("#header");
    const offset = window.scrollY;
    currentScroll = offset;
    if (currentScroll > firstScroll) {
      header?.classList.add("debound-scroll");
    } else {
      header?.classList.remove("debound-scroll");
    }
    firstScroll = currentScroll;
  };
  window.addEventListener("scroll", () => {
    requestAnimationFrame(deboundScrollHandler);
  });
})();

(function () {
  const button = document.querySelector(".btn-search");
  const header = document.querySelector(".container--search")!;
  const toggleHeader = () => {
    const searchFieldIsOpen = classListToggleElement(
      header,
      "reset--translate"
    );
    const overlayElement = modelElement("overlay--search");
    if (searchFieldIsOpen) {
      insertStringElement(document.body, overlayElement, "afterbegin");
      const overlaySearch = document?.querySelector("#overlay--search");
      overlaySearch?.addEventListener("click", toggleHeader);
    } else {
      const searchOverlay = document?.querySelector("#overlay--search");
      searchOverlay?.remove();
    }
  };
  button?.addEventListener("click", toggleHeader);

  const input = header?.querySelector("input");
  input?.addEventListener("input", async (event: Event) => {
    const { value } = <HTMLInputElement>event.target;
  });
})();

(function(){
  const bagShopping = document.querySelector('.shopping--bag');
  const cartUser = document.querySelector('.cart--user')!;
  const closeButton = cartUser.querySelector('.close--button');
  const createModel = modelElement('cart-model');
  const onHandleCart = () => {
    const model = document.getElementById('cart-model');
    const isActive = classListToggleElement(cartUser, 'active-cart');
    if (isActive) {
      insertStringElement(document.body, createModel, 'afterbegin');
      const modelElement = document.getElementById('cart-model');
      modelElement?.addEventListener('click', onHandleCart);
    } else {
      model?.remove();
    }
  }
  bagShopping?.addEventListener('click', onHandleCart);
  closeButton?.addEventListener('click', onHandleCart);
})();

(function(d){
  const cartUser = d.querySelector('.cart--user')!;
  const headerCart = cartUser?.querySelector('h5')!;
  const boxTotal = cartUser?.querySelector('.total--checkout')! as HTMLElement;
  const itemsCheckout = cartUser.querySelector('.items')! as HTMLElement;
  const getBoundingHeader = headerCart?.getBoundingClientRect();
  const boxTotalBounding = boxTotal?.getBoundingClientRect();

  itemsCheckout.style.height = `calc(100vh - ${getBoundingHeader.height + boxTotalBounding.height}px)`;
})(document);