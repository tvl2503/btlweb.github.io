/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_utils_element_utilsElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/utils/element/utilsElement */ "./src/utils/element/utilsElement.ts");



(function () {
    let isActive = false;
    const navMenu = document.getElementById("nav-menu")
    const navToggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close');


    const callback = (activeValue) => {
        const model = document.querySelector('#navigation--model');
        activeValue ? (0,_src_utils_element_utilsElement__WEBPACK_IMPORTED_MODULE_0__.insertStringElement)(document.body, (0,_src_utils_element_utilsElement__WEBPACK_IMPORTED_MODULE_0__.modelElement)('navigation--model')) : model.remove();

        const modelAfterInsert = document.querySelector('#navigation--model');
        if (modelAfterInsert) {
            modelAfterInsert.addEventListener('click', handleClick);
        }
    }
    const handleClick = () => {
        isActive = navMenu.classList.toggle('active');
        callback(isActive)
    }
    navToggle.addEventListener('click', handleClick);
    navClose.addEventListener('click', handleClick);
})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/layout/header.ts":
/*!******************************!*\
  !*** ./src/layout/header.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHeader = void 0;
const utilsElement_1 = __webpack_require__(/*! ../utils/element/utilsElement */ "./src/utils/element/utilsElement.ts");
const getHeader = () => {
    const header = `
    <header class="header shadow-sm" id="header">
      <div class="container">
        <div class="d-grid align-items-center header__menu" id="header__menu">
          <div class="header__menu__mobile-toggle pointer" id="nav-toggle">
            <i class="bx bx-menu"></i>
          </div>
            <div class="header__menu__left" id="nav-menu">
                <div class="header__menu__left__close" id="nav-close">
                  <i class="fal fa-angle-left"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">Home</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">Shops</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">Products</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="header__menu__item header__menu__left__item">
                  <a href="#" class="nav__link">About Us</a>
                  <i class="fal fa-angle-down"></i>
                </div>
                <div class="text-center d-grid grid-col-1 gap-16 auth-options">
                  <p class="f-18 weight-600">My Account</p>
                  <a><button class="btn btn-black">Log in</button></a>
                  <a><button class="btn btn-outlined">Register</button></a>
                </div>
            </div>
          <a class="d-flex justify-center align-center h-100" href="/">
            <div class="header__logo">
              <img src="images/logo_dark.png" />
            </div>
          </a>
          <div class="header__menu__right">
            <div
              class="header__menu__item header__menu__right__item btn-search"
            >
              <i class="bx bx-search"></i>
            </div>

            <div
              class="header__menu__item header__menu__right__item user--option"
            >
              <a href="/"> <i class="bx bx-user"></i></a>
            </div>
            <div
              class="header__menu__item header__menu__right__item favourite--option"
            >
              <a href="/">
                <i class="bx bx-star"></i>
              </a>
            </div>
            <div class="header__menu__item header__menu__right__item shopping--bag">
                <i class="bx bx-shopping-bag"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div
      class="container d-flex justify-between align-center container--search"
    >
      <div class="d-flex justify-between align-center title--search">
        <p>Search our store</p>
        <div class="close--btn">
          <i class="far fa-times"></i>
        </div>
      </div>

      <div class="logo--search">
        <img src="images/logo_dark.png" />
      </div>
      <div class="input--search">
        <input type="text" placeholder="Search Products" />
        <i class="bx bx-search"></i>
      </div>
      <ul class="d-flex right--options">
        <li>
          <a href="/"> <i class="bx bx-user"></i></a>
        </li>
        <li>
          <a href="/">
            <i class="bx bx-star"></i>
          </a>
        </li>
        <li>
            <i class="bx bx-shopping-bag"></i>
        </li>
      </ul>
    </div>
    <div class="cart--user shadow-sm">
      <div class="d-flex justify-center align-center close--button pointer">
        <i class="f-24 fal fa-times"></i>
      </div>
      <h5 class="f-18 weight-500 pb-16">Shopping Cart</h5>
      <div class="d-grid grid-col-1 gap-16 overflow-scroll items">
        <div class="d-flex item--cart">
          <div class="image-cart pr-16">
            <img
              src="./images/static/17a_63ae1f60-59df-4061-b191-acb01aaa6ca4_360x.webp"
              alt=""
            />
          </div>
          <div class="content-cart">
            <a class="f-14" href="">Quilted Shoulder Bag</a>
            <p class="f-14 pb-10 price--item">$22.00</p>
            <div class="d-flex align-center">
              <ul class="d-grid grid-col-3 align-center text-center pointer button--quantity">
                <li>-</li>
                <li>50</li>
                <li>+</li>
              </ul>
              <span class="f-12 pl-12 remove-item">Remove</span>
            </div>
          </div>
        </div>
      </div>
      <div class="total--checkout">
        <div class="d-flex justify-between align-center f-14 pb-10">
          <p>Subtotal</p>
          <p>$66.00</p>
        </div>
        <button class="btn btn-black w-100">Check out</button>
      </div>
    </div>
    `;
    (0, utilsElement_1.insertStringElement)(document.getElementById("navigation"), header, "afterbegin");
};
exports.getHeader = getHeader;


/***/ }),

/***/ "./src/ts/header.ts":
/*!**************************!*\
  !*** ./src/ts/header.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const classList_1 = __webpack_require__(/*! ../utils/classList */ "./src/utils/classList.ts");
const utilsElement_1 = __webpack_require__(/*! ../utils/element/utilsElement */ "./src/utils/element/utilsElement.ts");
(function () {
    let firstScroll = 0;
    let currentScroll = 0;
    const deboundScrollHandler = () => {
        const header = document === null || document === void 0 ? void 0 : document.querySelector("#header");
        const offset = window.scrollY;
        currentScroll = offset;
        if (currentScroll > firstScroll) {
            header === null || header === void 0 ? void 0 : header.classList.add("debound-scroll");
        }
        else {
            header === null || header === void 0 ? void 0 : header.classList.remove("debound-scroll");
        }
        firstScroll = currentScroll;
    };
    window.addEventListener("scroll", () => {
        requestAnimationFrame(deboundScrollHandler);
    });
})();
(function () {
    const button = document.querySelector(".btn-search");
    const header = document.querySelector(".container--search");
    const toggleHeader = () => {
        const searchFieldIsOpen = (0, classList_1.classListToggleElement)(header, "reset--translate");
        const overlayElement = (0, utilsElement_1.modelElement)("overlay--search");
        if (searchFieldIsOpen) {
            (0, utilsElement_1.insertStringElement)(document.body, overlayElement, "afterbegin");
            const overlaySearch = document === null || document === void 0 ? void 0 : document.querySelector("#overlay--search");
            overlaySearch === null || overlaySearch === void 0 ? void 0 : overlaySearch.addEventListener("click", toggleHeader);
        }
        else {
            const searchOverlay = document === null || document === void 0 ? void 0 : document.querySelector("#overlay--search");
            searchOverlay === null || searchOverlay === void 0 ? void 0 : searchOverlay.remove();
        }
    };
    button === null || button === void 0 ? void 0 : button.addEventListener("click", toggleHeader);
    const input = header === null || header === void 0 ? void 0 : header.querySelector("input");
    input === null || input === void 0 ? void 0 : input.addEventListener("input", (event) => __awaiter(this, void 0, void 0, function* () {
        const { value } = event.target;
    }));
})();
(function () {
    const bagShopping = document.querySelector('.shopping--bag');
    const cartUser = document.querySelector('.cart--user');
    const closeButton = cartUser.querySelector('.close--button');
    const createModel = (0, utilsElement_1.modelElement)('cart-model');
    const onHandleCart = () => {
        const model = document.getElementById('cart-model');
        const isActive = (0, classList_1.classListToggleElement)(cartUser, 'active-cart');
        if (isActive) {
            (0, utilsElement_1.insertStringElement)(document.body, createModel, 'afterbegin');
            const modelElement = document.getElementById('cart-model');
            modelElement === null || modelElement === void 0 ? void 0 : modelElement.addEventListener('click', onHandleCart);
        }
        else {
            model === null || model === void 0 ? void 0 : model.remove();
        }
    };
    bagShopping === null || bagShopping === void 0 ? void 0 : bagShopping.addEventListener('click', onHandleCart);
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener('click', onHandleCart);
})();
(function (d) {
    const cartUser = d.querySelector('.cart--user');
    const headerCart = cartUser === null || cartUser === void 0 ? void 0 : cartUser.querySelector('h5');
    const boxTotal = cartUser === null || cartUser === void 0 ? void 0 : cartUser.querySelector('.total--checkout');
    const itemsCheckout = cartUser.querySelector('.items');
    const getBoundingHeader = headerCart === null || headerCart === void 0 ? void 0 : headerCart.getBoundingClientRect();
    const boxTotalBounding = boxTotal === null || boxTotal === void 0 ? void 0 : boxTotal.getBoundingClientRect();
    itemsCheckout.style.height = `calc(100vh - ${getBoundingHeader.height + boxTotalBounding.height}px)`;
})(document);


/***/ }),

/***/ "./src/ts/payment.ts":
/*!***************************!*\
  !*** ./src/ts/payment.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __webpack_require__(/*! ../layout/header */ "./src/layout/header.ts");
(0, header_1.getHeader)();


/***/ }),

/***/ "./src/utils/classList.ts":
/*!********************************!*\
  !*** ./src/utils/classList.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setAttributeElement = exports.classListToggleElement = void 0;
const classListToggleElement = (element, className) => {
    return element.classList.toggle(className);
};
exports.classListToggleElement = classListToggleElement;
const setAttributeElement = (element, query, value) => {
    element.setAttribute(query.toString(), value.toString());
};
exports.setAttributeElement = setAttributeElement;


/***/ }),

/***/ "./src/utils/element/utilsElement.ts":
/*!*******************************************!*\
  !*** ./src/utils/element/utilsElement.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.insertStringElement = exports.modelElement = exports.insertElement = void 0;
const insertElement = (elementParent, elementInsert, position) => {
    elementParent.insertAdjacentElement(position || 'beforeend', elementInsert);
};
exports.insertElement = insertElement;
const modelElement = (id) => {
    const overlayElement = `<div class="model" id=${id || "model"}></div>`;
    return overlayElement;
};
exports.modelElement = modelElement;
const insertStringElement = (elementParent, elementInsert, position) => {
    return elementParent.insertAdjacentHTML(position || "beforeend", elementInsert);
};
exports.insertStringElement = insertStringElement;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/ts/payment.ts");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/ts/header.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOzs7Ozs7Ozs7OztBQ1ZkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLG9CQUFvQixHQUFHLHFCQUFxQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7Ozs7OztVQ2YzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL2pzL2luZGV4LmpzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvbGF5b3V0L2hlYWRlci50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL3BheW1lbnQudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9jbGFzc0xpc3QudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCB7IGluc2VydFN0cmluZ0VsZW1lbnQsIG1vZGVsRWxlbWVudCB9IGZyb20gJy4uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbWVudVwiKVxyXG4gICAgY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi10b2dnbGUnKVxyXG4gICAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNsb3NlJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGFjdGl2ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbi0tbW9kZWwnKTtcclxuICAgICAgICBhY3RpdmVWYWx1ZSA/IGluc2VydFN0cmluZ0VsZW1lbnQoZG9jdW1lbnQuYm9keSwgbW9kZWxFbGVtZW50KCduYXZpZ2F0aW9uLS1tb2RlbCcpKSA6IG1vZGVsLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlbEFmdGVySW5zZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XHJcbiAgICAgICAgaWYgKG1vZGVsQWZ0ZXJJbnNlcnQpIHtcclxuICAgICAgICAgICAgbW9kZWxBZnRlckluc2VydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpc0FjdGl2ZSA9IG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgY2FsbGJhY2soaXNBY3RpdmUpXHJcbiAgICB9XHJcbiAgICBuYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbiAgICBuYXZDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcclxufSkoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRIZWFkZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHV0aWxzRWxlbWVudF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50XCIpO1xyXG5jb25zdCBnZXRIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBgXHJcbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyIHNoYWRvdy1zbVwiIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ncmlkIGFsaWduLWl0ZW1zLWNlbnRlciBoZWFkZXJfX21lbnVcIiBpZD1cImhlYWRlcl9fbWVudVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudV9fbW9iaWxlLXRvZ2dsZSBwb2ludGVyXCIgaWQ9XCJuYXYtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtbWVudVwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19sZWZ0XCIgaWQ9XCJuYXYtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudV9fbGVmdF9fY2xvc2VcIiBpZD1cIm5hdi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhbCBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fbGVmdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2X19saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWwgZmEtYW5nbGUtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudV9faXRlbSBoZWFkZXJfX21lbnVfX2xlZnRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdl9fbGlua1wiPlNob3BzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhbCBmYS1hbmdsZS1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fbGVmdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2X19saW5rXCI+UHJvZHVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFsIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19sZWZ0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZfX2xpbmtcIj5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWwgZmEtYW5nbGUtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGQtZ3JpZCBncmlkLWNvbC0xIGdhcC0xNiBhdXRoLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLTE4IHdlaWdodC02MDBcIj5NeSBBY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibGFja1wiPkxvZyBpbjwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGE+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZWRcIj5SZWdpc3RlcjwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBoLTEwMFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvX2RhcmsucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19yaWdodF9faXRlbSBidG4tc2VhcmNoXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzcz1cImhlYWRlcl9fbWVudV9faXRlbSBoZWFkZXJfX21lbnVfX3JpZ2h0X19pdGVtIHVzZXItLW9wdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPiA8aSBjbGFzcz1cImJ4IGJ4LXVzZXJcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fcmlnaHRfX2l0ZW0gZmF2b3VyaXRlLS1vcHRpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fcmlnaHRfX2l0ZW0gc2hvcHBpbmctLWJhZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJieCBieC1zaG9wcGluZy1iYWdcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGNvbnRhaW5lci0tc2VhcmNoXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIHRpdGxlLS1zZWFyY2hcIj5cclxuICAgICAgICA8cD5TZWFyY2ggb3VyIHN0b3JlPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS0tYnRuXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9nby0tc2VhcmNoXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nb19kYXJrLnBuZ1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtLXNlYXJjaFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFByb2R1Y3RzXCIgLz5cclxuICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4LXNlYXJjaFwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImQtZmxleCByaWdodC0tb3B0aW9uc1wiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+IDxpIGNsYXNzPVwiYnggYngtdXNlclwiPjwvaT48L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4LXN0YXJcIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtc2hvcHBpbmctYmFnXCI+PC9pPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LS11c2VyIHNoYWRvdy1zbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBjbG9zZS0tYnV0dG9uIHBvaW50ZXJcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImYtMjQgZmFsIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGg1IGNsYXNzPVwiZi0xOCB3ZWlnaHQtNTAwIHBiLTE2XCI+U2hvcHBpbmcgQ2FydDwvaDU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWdyaWQgZ3JpZC1jb2wtMSBnYXAtMTYgb3ZlcmZsb3ctc2Nyb2xsIGl0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBpdGVtLS1jYXJ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY2FydCBwci0xNlwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvc3RhdGljLzE3YV82M2FlMWY2MC01OWRmLTQwNjEtYjE5MS1hY2IwMWFhYTZjYTRfMzYweC53ZWJwXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZi0xNFwiIGhyZWY9XCJcIj5RdWlsdGVkIFNob3VsZGVyIEJhZzwvYT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmLTE0IHBiLTEwIHByaWNlLS1pdGVtXCI+JDIyLjAwPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImQtZ3JpZCBncmlkLWNvbC0zIGFsaWduLWNlbnRlciB0ZXh0LWNlbnRlciBwb2ludGVyIGJ1dHRvbi0tcXVhbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgIDxsaT4tPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT41MDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+KzwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImYtMTIgcGwtMTIgcmVtb3ZlLWl0ZW1cIj5SZW1vdmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG90YWwtLWNoZWNrb3V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGYtMTQgcGItMTBcIj5cclxuICAgICAgICAgIDxwPlN1YnRvdGFsPC9wPlxyXG4gICAgICAgICAgPHA+JDY2LjAwPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsYWNrIHctMTAwXCI+Q2hlY2sgb3V0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvblwiKSwgaGVhZGVyLCBcImFmdGVyYmVnaW5cIik7XHJcbn07XHJcbmV4cG9ydHMuZ2V0SGVhZGVyID0gZ2V0SGVhZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNsYXNzTGlzdF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2NsYXNzTGlzdFwiKTtcclxuY29uc3QgdXRpbHNFbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnRcIik7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZmlyc3RTY3JvbGwgPSAwO1xyXG4gICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAwO1xyXG4gICAgY29uc3QgZGVib3VuZFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBvZmZzZXQ7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiBmaXJzdFNjcm9sbCkge1xyXG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImRlYm91bmQtc2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyID09PSBudWxsIHx8IGhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWJvdW5kLXNjcm9sbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZGVib3VuZFNjcm9sbEhhbmRsZXIpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zZWFyY2hcIik7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci0tc2VhcmNoXCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEZpZWxkSXNPcGVuID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGhlYWRlciwgXCJyZXNldC0tdHJhbnNsYXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgaWYgKHNlYXJjaEZpZWxkSXNPcGVuKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBvdmVybGF5RWxlbWVudCwgXCJhZnRlcmJlZ2luXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheS0tc2VhcmNoXCIpO1xyXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoID09PSBudWxsIHx8IG92ZXJsYXlTZWFyY2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IG92ZXJsYXlTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUhlYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hPdmVybGF5ID0gZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheS0tc2VhcmNoXCIpO1xyXG4gICAgICAgICAgICBzZWFyY2hPdmVybGF5ID09PSBudWxsIHx8IHNlYXJjaE92ZXJsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaE92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGJ1dHRvbiA9PT0gbnVsbCB8fCBidXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcclxuICAgIGNvbnN0IGlucHV0ID0gaGVhZGVyID09PSBudWxsIHx8IGhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgfSkpO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYmFnU2hvcHBpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctLWJhZycpO1xyXG4gICAgY29uc3QgY2FydFVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC0tdXNlcicpO1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjYXJ0VXNlci5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgY3JlYXRlTW9kZWwgPSAoMCwgdXRpbHNFbGVtZW50XzEubW9kZWxFbGVtZW50KSgnY2FydC1tb2RlbCcpO1xyXG4gICAgY29uc3Qgb25IYW5kbGVDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtbW9kZWwnKTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShjYXJ0VXNlciwgJ2FjdGl2ZS1jYXJ0Jyk7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgJ2FmdGVyYmVnaW4nKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kZWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtbW9kZWwnKTtcclxuICAgICAgICAgICAgbW9kZWxFbGVtZW50ID09PSBudWxsIHx8IG1vZGVsRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1vZGVsID09PSBudWxsIHx8IG1vZGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYmFnU2hvcHBpbmcgPT09IG51bGwgfHwgYmFnU2hvcHBpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJhZ1Nob3BwaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxuICAgIGNsb3NlQnV0dG9uID09PSBudWxsIHx8IGNsb3NlQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XHJcbn0pKCk7XHJcbihmdW5jdGlvbiAoZCkge1xyXG4gICAgY29uc3QgY2FydFVzZXIgPSBkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LS11c2VyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJDYXJ0ID0gY2FydFVzZXIgPT09IG51bGwgfHwgY2FydFVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcnRVc2VyLnF1ZXJ5U2VsZWN0b3IoJ2g1Jyk7XHJcbiAgICBjb25zdCBib3hUb3RhbCA9IGNhcnRVc2VyID09PSBudWxsIHx8IGNhcnRVc2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJ0VXNlci5xdWVyeVNlbGVjdG9yKCcudG90YWwtLWNoZWNrb3V0Jyk7XHJcbiAgICBjb25zdCBpdGVtc0NoZWNrb3V0ID0gY2FydFVzZXIucXVlcnlTZWxlY3RvcignLml0ZW1zJyk7XHJcbiAgICBjb25zdCBnZXRCb3VuZGluZ0hlYWRlciA9IGhlYWRlckNhcnQgPT09IG51bGwgfHwgaGVhZGVyQ2FydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyQ2FydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGJveFRvdGFsQm91bmRpbmcgPSBib3hUb3RhbCA9PT0gbnVsbCB8fCBib3hUb3RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm94VG90YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xyXG59KShkb2N1bWVudCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGhlYWRlcl8xID0gcmVxdWlyZShcIi4uL2xheW91dC9oZWFkZXJcIik7XHJcbigwLCBoZWFkZXJfMS5nZXRIZWFkZXIpKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2V0QXR0cmlidXRlRWxlbWVudCA9IGV4cG9ydHMuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IHZvaWQgMDtcclxuY29uc3QgY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcclxufTtcclxuZXhwb3J0cy5jbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gY2xhc3NMaXN0VG9nZ2xlRWxlbWVudDtcclxuY29uc3Qgc2V0QXR0cmlidXRlRWxlbWVudCA9IChlbGVtZW50LCBxdWVyeSwgdmFsdWUpID0+IHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHF1ZXJ5LnRvU3RyaW5nKCksIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG59O1xyXG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBzZXRBdHRyaWJ1dGVFbGVtZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmluc2VydFN0cmluZ0VsZW1lbnQgPSBleHBvcnRzLm1vZGVsRWxlbWVudCA9IGV4cG9ydHMuaW5zZXJ0RWxlbWVudCA9IHZvaWQgMDtcclxuY29uc3QgaW5zZXJ0RWxlbWVudCA9IChlbGVtZW50UGFyZW50LCBlbGVtZW50SW5zZXJ0LCBwb3NpdGlvbikgPT4ge1xyXG4gICAgZWxlbWVudFBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQocG9zaXRpb24gfHwgJ2JlZm9yZWVuZCcsIGVsZW1lbnRJbnNlcnQpO1xyXG59O1xyXG5leHBvcnRzLmluc2VydEVsZW1lbnQgPSBpbnNlcnRFbGVtZW50O1xyXG5jb25zdCBtb2RlbEVsZW1lbnQgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gYDxkaXYgY2xhc3M9XCJtb2RlbFwiIGlkPSR7aWQgfHwgXCJtb2RlbFwifT48L2Rpdj5gO1xyXG4gICAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xyXG59O1xyXG5leHBvcnRzLm1vZGVsRWxlbWVudCA9IG1vZGVsRWxlbWVudDtcclxuY29uc3QgaW5zZXJ0U3RyaW5nRWxlbWVudCA9IChlbGVtZW50UGFyZW50LCBlbGVtZW50SW5zZXJ0LCBwb3NpdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnRQYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uIHx8IFwiYmVmb3JlZW5kXCIsIGVsZW1lbnRJbnNlcnQpO1xyXG59O1xyXG5leHBvcnRzLmluc2VydFN0cmluZ0VsZW1lbnQgPSBpbnNlcnRTdHJpbmdFbGVtZW50O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvcGF5bWVudC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvaGVhZGVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==