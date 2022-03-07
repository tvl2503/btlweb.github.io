import { classListToggleElement } from "../utils/classList";
import {
  insertStringElement,
  modelElement,
} from "../utils/element/utilsElement";

let firstScroll = 0;
let currentScroll = 0;
(function () {
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
  window.addEventListener("scroll", deboundScrollHandler);
})();

(function(){
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
