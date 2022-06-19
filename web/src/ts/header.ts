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

