import { ROOT_PATH } from "../constants/path";
import { classListToggleElement } from "../utils/classList";
import {
  insertStringElement,
  modelElement,
} from "../utils/element/utilsElement";
import { gid, qs } from "../utils/query";

(function () {
  let firstScroll = 0;
  let currentScroll = 0;
  const deboundScrollHandler = () => {
    const header = qs('#header');
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
  const button = qs('.btn-search');
  const header = qs(".container--search")!;
  const input = qs("input", header) as HTMLInputElement;
  const toggleHeader = () => {
    const searchFieldIsOpen = classListToggleElement(
      header,
      "reset--translate"
    );
    const overlayElement = modelElement("overlay--search");
    if (searchFieldIsOpen) {
      insertStringElement(document.body, overlayElement, "afterbegin");
      const overlaySearch = qs("#overlay--search");
      overlaySearch?.addEventListener("click", toggleHeader);
    } else {
      input.value = '';
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.delete('q');
      window.history.pushState({
        path: ROOT_PATH
      }, '', ROOT_PATH);
      const searchOverlay = qs("#overlay--search");
      searchOverlay?.remove();
    }
  };
  button?.addEventListener("click", toggleHeader);
  input?.addEventListener("input", async (event: Event) => {
    const value = (<HTMLInputElement>event.target).value;
    const { location, history } = window;

    const url = ROOT_PATH + '?q=' + value;
    history.pushState({
      path: url
    }, '', url);
  });
})();

(function(){
  const bagShopping = qs('.shopping--bag');
  const cartUser = qs('.cart--user')!;
  const closeButton = qs('.close--button', cartUser);
  const createModel = modelElement('cart-model');
  const onHandleCart = () => {
    const model = gid('cart-model');
    const isActive = classListToggleElement(cartUser, 'active-cart');
    if (isActive) {
      insertStringElement(document.body, createModel, 'afterbegin');
      const modelElement =  gid('cart-model');
      modelElement?.addEventListener('click', onHandleCart);
    } else {
      model?.remove();
    }
  }
  bagShopping?.addEventListener('click', onHandleCart);
  closeButton?.addEventListener('click', onHandleCart);
})();

(function(d){
  const cartUser = qs('.cart--user')!;
  const headerCart = qs('h5', cartUser)!;
  const boxTotal = qs('.total--checkout', cartUser)! as HTMLElement;
  const itemsCheckout = qs('.items', cartUser)! as HTMLElement;
  const getBoundingHeader = headerCart?.getBoundingClientRect();
  const boxTotalBounding = boxTotal?.getBoundingClientRect();

  itemsCheckout.style.height = `calc(100vh - ${getBoundingHeader.height + boxTotalBounding.height}px)`;
})(document);