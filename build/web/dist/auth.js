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

/***/ "./src/constants/type.ts":
/*!*******************************!*\
  !*** ./src/constants/type.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.REQUIRED = exports.PASSWORD = exports.EMAIL = void 0;
exports.EMAIL = 'email';
exports.PASSWORD = 'password';
exports.REQUIRED = 'required';


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

/***/ "./src/ts/login.ts":
/*!*************************!*\
  !*** ./src/ts/login.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const type_1 = __webpack_require__(/*! ../constants/type */ "./src/constants/type.ts");
const classList_1 = __webpack_require__(/*! ../utils/classList */ "./src/utils/classList.ts");
const utilsElement_1 = __webpack_require__(/*! ../utils/element/utilsElement */ "./src/utils/element/utilsElement.ts");
const validateInput_1 = __webpack_require__(/*! ../utils/validator/validateInput */ "./src/utils/validator/validateInput.ts");
const header_1 = __webpack_require__(/*! ../layout/header */ "./src/layout/header.ts");
(0, header_1.getHeader)();
const elements = [];
(function () {
    const input = document.querySelectorAll("input");
    const buttonSubmit = document.querySelector("button[type='submit']");
    buttonSubmit.disabled = true;
    const insertMessageCallback = (valueCallback, element, message, id) => {
        const { isTouched, isValid } = valueCallback;
        const messageBefore = document.getElementById(id);
        const indexElement = elements.findIndex((item) => item.element === element);
        elements[indexElement].isValid = isValid;
        if (isTouched && !isValid) {
            const parentElement = element.parentElement;
            element.classList.add("error--input");
            if (parentElement === null || parentElement === void 0 ? void 0 : parentElement.classList.contains("form-group")) {
                if (!messageBefore) {
                    (0, utilsElement_1.insertStringElement)(parentElement, `<p class="error--message" id=${id}>${message}</p>`, "afterend");
                }
            }
        }
        else {
            messageBefore === null || messageBefore === void 0 ? void 0 : messageBefore.remove();
            element.classList.remove("error--input");
        }
        const buttonIsValid = elements.every((value) => value.isValid);
        if (buttonIsValid) {
            buttonSubmit.disabled = false;
        }
    };
    input.forEach((item) => {
        const validate = item.getAttribute("data-validate");
        if (validate) {
            elements.push({
                element: item,
                type: validate,
                isValid: false,
            });
            let message;
            switch (validate) {
                case type_1.EMAIL:
                    message = "Email is not valid!";
                    break;
                case type_1.PASSWORD:
                    message =
                        "Password must have at least 8 character, one special character and one character";
                    break;
                case type_1.REQUIRED:
                default:
                    message = "Field must be required";
            }
            (0, validateInput_1.validateInput)(item, validate, (value) => {
                insertMessageCallback(value, item, message, `${validate}--input`);
            }, (value) => {
                insertMessageCallback(value, item, message, `${validate}--input`);
            });
        }
    });
    const inputPassword = [...input].filter((item) => item.type === type_1.PASSWORD);
    inputPassword.forEach((i) => {
        const parentElement = i.parentElement;
        if (parentElement) {
            const eye = parentElement === null || parentElement === void 0 ? void 0 : parentElement.querySelector("i");
            eye === null || eye === void 0 ? void 0 : eye.addEventListener("click", () => {
                const activeButton = (0, classList_1.classListToggleElement)(eye, "color-blue");
                activeButton
                    ? (0, classList_1.setAttributeElement)(i, "type", "text")
                    : (0, classList_1.setAttributeElement)(i, "type", "password");
            });
        }
    });
})();


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


/***/ }),

/***/ "./src/utils/validator/input.ts":
/*!**************************************!*\
  !*** ./src/utils/validator/input.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isPassword = exports.isEmail = exports.isRequired = void 0;
const trimString = (str) => {
    return str.trim();
};
const isRequired = (str) => {
    if (trimString(str).length === 0) {
        return false;
    }
    return true;
};
exports.isRequired = isRequired;
const isEmail = (str) => {
    if (!trimString(str).includes('@')) {
        return false;
    }
    return true;
};
exports.isEmail = isEmail;
const isPassword = (str) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    return regex.test(str);
};
exports.isPassword = isPassword;


/***/ }),

/***/ "./src/utils/validator/validateInput.ts":
/*!**********************************************!*\
  !*** ./src/utils/validator/validateInput.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateInput = void 0;
const type_1 = __webpack_require__(/*! ../../constants/type */ "./src/constants/type.ts");
const input_1 = __webpack_require__(/*! ./input */ "./src/utils/validator/input.ts");
const validateInput = (input, typeValidate, cbInputEvent, cbTouched) => {
    let isTouched = false;
    let isValid = false;
    input.oninput = () => {
        const value = input.value;
        switch (typeValidate) {
            case type_1.EMAIL:
                isValid = (0, input_1.isEmail)(value);
                break;
            case type_1.PASSWORD:
                isValid = (0, input_1.isPassword)(value);
                break;
            case type_1.REQUIRED:
            default:
                isValid = (0, input_1.isRequired)(value);
        }
        cbInputEvent({
            isValid,
            isTouched,
            type: 'input'
        });
    };
    input.onblur = () => {
        isTouched = true;
        cbTouched({
            isValid,
            isTouched,
            type: 'touched'
        });
    };
    return {
        isValid,
        isTouched,
    };
};
exports.validateInput = validateInput;


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
/******/ 	__webpack_require__("./src/ts/login.ts");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/ts/header.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBYTtBQUN5RTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvRkFBbUIsZ0JBQWdCLDZFQUFZO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7OztBQzFCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0IsR0FBRyxnQkFBZ0IsR0FBRyxhQUFhO0FBQ25ELGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsZ0JBQWdCOzs7Ozs7Ozs7OztBQ0xIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQix1QkFBdUIsbUJBQU8sQ0FBQywwRUFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7Ozs7Ozs7Ozs7QUMxSUo7QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixtQkFBTyxDQUFDLG9EQUFvQjtBQUNoRCx1QkFBdUIsbUJBQU8sQ0FBQywwRUFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELG1EQUFtRDtBQUNwRyxDQUFDOzs7Ozs7Ozs7OztBQ2xGWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsa0RBQW1CO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLG9EQUFvQjtBQUNoRCx1QkFBdUIsbUJBQU8sQ0FBQywwRUFBK0I7QUFDOUQsd0JBQXdCLG1CQUFPLENBQUMsZ0ZBQWtDO0FBQ2xFLGlCQUFpQixtQkFBTyxDQUFDLGdEQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJHQUEyRyxHQUFHLEdBQUcsUUFBUTtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELFNBQVM7QUFDeEUsYUFBYTtBQUNiLCtEQUErRCxTQUFTO0FBQ3hFLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7OztBQzdFWTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsR0FBRyw4QkFBOEI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7Ozs7Ozs7Ozs7QUNWZDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwyQkFBMkIsR0FBRyxvQkFBb0IsR0FBRyxxQkFBcUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7O0FDZmQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCLEdBQUcsZUFBZSxHQUFHLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseURBQXlELEdBQUc7QUFDNUQ7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7QUN4Qkw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCLGVBQWUsbUJBQU8sQ0FBQyxxREFBc0I7QUFDN0MsZ0JBQWdCLG1CQUFPLENBQUMsK0NBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7Ozs7VUN4Q3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy9jb25zdGFudHMvdHlwZS50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL2xheW91dC9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy90cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy90cy9sb2dpbi50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2NsYXNzTGlzdC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvdmFsaWRhdG9yL2lucHV0LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvdmFsaWRhdG9yL3ZhbGlkYXRlSW5wdXQudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgeyBpbnNlcnRTdHJpbmdFbGVtZW50LCBtb2RlbEVsZW1lbnQgfSBmcm9tICcuLi9zcmMvdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnQnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIilcclxuICAgIGNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtdG9nZ2xlJylcclxuICAgIGNvbnN0IG5hdkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jbG9zZScpO1xyXG5cclxuXHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChhY3RpdmVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XHJcbiAgICAgICAgYWN0aXZlVmFsdWUgPyBpbnNlcnRTdHJpbmdFbGVtZW50KGRvY3VtZW50LmJvZHksIG1vZGVsRWxlbWVudCgnbmF2aWdhdGlvbi0tbW9kZWwnKSkgOiBtb2RlbC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kZWxBZnRlckluc2VydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xyXG4gICAgICAgIGlmIChtb2RlbEFmdGVySW5zZXJ0KSB7XHJcbiAgICAgICAgICAgIG1vZGVsQWZ0ZXJJbnNlcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaXNBY3RpdmUgPSBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGNhbGxiYWNrKGlzQWN0aXZlKVxyXG4gICAgfVxyXG4gICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG4gICAgbmF2Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbn0pKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUkVRVUlSRUQgPSBleHBvcnRzLlBBU1NXT1JEID0gZXhwb3J0cy5FTUFJTCA9IHZvaWQgMDtcclxuZXhwb3J0cy5FTUFJTCA9ICdlbWFpbCc7XHJcbmV4cG9ydHMuUEFTU1dPUkQgPSAncGFzc3dvcmQnO1xyXG5leHBvcnRzLlJFUVVJUkVEID0gJ3JlcXVpcmVkJztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXRIZWFkZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHV0aWxzRWxlbWVudF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50XCIpO1xyXG5jb25zdCBnZXRIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBgXHJcbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyIHNoYWRvdy1zbVwiIGlkPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ncmlkIGFsaWduLWl0ZW1zLWNlbnRlciBoZWFkZXJfX21lbnVcIiBpZD1cImhlYWRlcl9fbWVudVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudV9fbW9iaWxlLXRvZ2dsZSBwb2ludGVyXCIgaWQ9XCJuYXYtdG9nZ2xlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtbWVudVwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19sZWZ0XCIgaWQ9XCJuYXYtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudV9fbGVmdF9fY2xvc2VcIiBpZD1cIm5hdi1jbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhbCBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fbGVmdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2X19saW5rXCI+SG9tZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWwgZmEtYW5nbGUtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudV9faXRlbSBoZWFkZXJfX21lbnVfX2xlZnRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdl9fbGlua1wiPlNob3BzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhbCBmYS1hbmdsZS1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fbGVmdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2X19saW5rXCI+UHJvZHVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFsIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19sZWZ0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZfX2xpbmtcIj5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWwgZmEtYW5nbGUtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGQtZ3JpZCBncmlkLWNvbC0xIGdhcC0xNiBhdXRoLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmLTE4IHdlaWdodC02MDBcIj5NeSBBY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1ibGFja1wiPkxvZyBpbjwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPGE+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZWRcIj5SZWdpc3RlcjwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBoLTEwMFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvX2RhcmsucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19yaWdodF9faXRlbSBidG4tc2VhcmNoXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtc2VhcmNoXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzcz1cImhlYWRlcl9fbWVudV9faXRlbSBoZWFkZXJfX21lbnVfX3JpZ2h0X19pdGVtIHVzZXItLW9wdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPiA8aSBjbGFzcz1cImJ4IGJ4LXVzZXJcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fcmlnaHRfX2l0ZW0gZmF2b3VyaXRlLS1vcHRpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtc3RhclwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fcmlnaHRfX2l0ZW0gc2hvcHBpbmctLWJhZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJieCBieC1zaG9wcGluZy1iYWdcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGNvbnRhaW5lci0tc2VhcmNoXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIHRpdGxlLS1zZWFyY2hcIj5cclxuICAgICAgICA8cD5TZWFyY2ggb3VyIHN0b3JlPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS0tYnRuXCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9nby0tc2VhcmNoXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9nb19kYXJrLnBuZ1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtLXNlYXJjaFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIFByb2R1Y3RzXCIgLz5cclxuICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4LXNlYXJjaFwiPjwvaT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImQtZmxleCByaWdodC0tb3B0aW9uc1wiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+IDxpIGNsYXNzPVwiYnggYngtdXNlclwiPjwvaT48L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4LXN0YXJcIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtc2hvcHBpbmctYmFnXCI+PC9pPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LS11c2VyIHNoYWRvdy1zbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlciBjbG9zZS0tYnV0dG9uIHBvaW50ZXJcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImYtMjQgZmFsIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGg1IGNsYXNzPVwiZi0xOCB3ZWlnaHQtNTAwIHBiLTE2XCI+U2hvcHBpbmcgQ2FydDwvaDU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWdyaWQgZ3JpZC1jb2wtMSBnYXAtMTYgb3ZlcmZsb3ctc2Nyb2xsIGl0ZW1zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBpdGVtLS1jYXJ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY2FydCBwci0xNlwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi9pbWFnZXMvc3RhdGljLzE3YV82M2FlMWY2MC01OWRmLTQwNjEtYjE5MS1hY2IwMWFhYTZjYTRfMzYweC53ZWJwXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZi0xNFwiIGhyZWY9XCJcIj5RdWlsdGVkIFNob3VsZGVyIEJhZzwvYT5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmLTE0IHBiLTEwIHByaWNlLS1pdGVtXCI+JDIyLjAwPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImQtZ3JpZCBncmlkLWNvbC0zIGFsaWduLWNlbnRlciB0ZXh0LWNlbnRlciBwb2ludGVyIGJ1dHRvbi0tcXVhbnRpdHlcIj5cclxuICAgICAgICAgICAgICAgIDxsaT4tPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT41MDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+KzwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImYtMTIgcGwtMTIgcmVtb3ZlLWl0ZW1cIj5SZW1vdmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG90YWwtLWNoZWNrb3V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGYtMTQgcGItMTBcIj5cclxuICAgICAgICAgIDxwPlN1YnRvdGFsPC9wPlxyXG4gICAgICAgICAgPHA+JDY2LjAwPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsYWNrIHctMTAwXCI+Q2hlY2sgb3V0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2aWdhdGlvblwiKSwgaGVhZGVyLCBcImFmdGVyYmVnaW5cIik7XHJcbn07XHJcbmV4cG9ydHMuZ2V0SGVhZGVyID0gZ2V0SGVhZGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGNsYXNzTGlzdF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2NsYXNzTGlzdFwiKTtcclxuY29uc3QgdXRpbHNFbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnRcIik7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZmlyc3RTY3JvbGwgPSAwO1xyXG4gICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAwO1xyXG4gICAgY29uc3QgZGVib3VuZFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVhZGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBvZmZzZXQ7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPiBmaXJzdFNjcm9sbCkge1xyXG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImRlYm91bmQtc2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyID09PSBudWxsIHx8IGhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWJvdW5kLXNjcm9sbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZGVib3VuZFNjcm9sbEhhbmRsZXIpO1xyXG4gICAgfSk7XHJcbn0pKCk7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zZWFyY2hcIik7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci0tc2VhcmNoXCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEZpZWxkSXNPcGVuID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGhlYWRlciwgXCJyZXNldC0tdHJhbnNsYXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgaWYgKHNlYXJjaEZpZWxkSXNPcGVuKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBvdmVybGF5RWxlbWVudCwgXCJhZnRlcmJlZ2luXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheS0tc2VhcmNoXCIpO1xyXG4gICAgICAgICAgICBvdmVybGF5U2VhcmNoID09PSBudWxsIHx8IG92ZXJsYXlTZWFyY2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IG92ZXJsYXlTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUhlYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hPdmVybGF5ID0gZG9jdW1lbnQgPT09IG51bGwgfHwgZG9jdW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheS0tc2VhcmNoXCIpO1xyXG4gICAgICAgICAgICBzZWFyY2hPdmVybGF5ID09PSBudWxsIHx8IHNlYXJjaE92ZXJsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaE92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGJ1dHRvbiA9PT0gbnVsbCB8fCBidXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcclxuICAgIGNvbnN0IGlucHV0ID0gaGVhZGVyID09PSBudWxsIHx8IGhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0ID09PSBudWxsIHx8IGlucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgfSkpO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYmFnU2hvcHBpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctLWJhZycpO1xyXG4gICAgY29uc3QgY2FydFVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC0tdXNlcicpO1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBjYXJ0VXNlci5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtLWJ1dHRvbicpO1xyXG4gICAgY29uc3QgY3JlYXRlTW9kZWwgPSAoMCwgdXRpbHNFbGVtZW50XzEubW9kZWxFbGVtZW50KSgnY2FydC1tb2RlbCcpO1xyXG4gICAgY29uc3Qgb25IYW5kbGVDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtbW9kZWwnKTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShjYXJ0VXNlciwgJ2FjdGl2ZS1jYXJ0Jyk7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgJ2FmdGVyYmVnaW4nKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kZWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtbW9kZWwnKTtcclxuICAgICAgICAgICAgbW9kZWxFbGVtZW50ID09PSBudWxsIHx8IG1vZGVsRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1vZGVsID09PSBudWxsIHx8IG1vZGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYmFnU2hvcHBpbmcgPT09IG51bGwgfHwgYmFnU2hvcHBpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJhZ1Nob3BwaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxuICAgIGNsb3NlQnV0dG9uID09PSBudWxsIHx8IGNsb3NlQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XHJcbn0pKCk7XHJcbihmdW5jdGlvbiAoZCkge1xyXG4gICAgY29uc3QgY2FydFVzZXIgPSBkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LS11c2VyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJDYXJ0ID0gY2FydFVzZXIgPT09IG51bGwgfHwgY2FydFVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcnRVc2VyLnF1ZXJ5U2VsZWN0b3IoJ2g1Jyk7XHJcbiAgICBjb25zdCBib3hUb3RhbCA9IGNhcnRVc2VyID09PSBudWxsIHx8IGNhcnRVc2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJ0VXNlci5xdWVyeVNlbGVjdG9yKCcudG90YWwtLWNoZWNrb3V0Jyk7XHJcbiAgICBjb25zdCBpdGVtc0NoZWNrb3V0ID0gY2FydFVzZXIucXVlcnlTZWxlY3RvcignLml0ZW1zJyk7XHJcbiAgICBjb25zdCBnZXRCb3VuZGluZ0hlYWRlciA9IGhlYWRlckNhcnQgPT09IG51bGwgfHwgaGVhZGVyQ2FydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyQ2FydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGJveFRvdGFsQm91bmRpbmcgPSBib3hUb3RhbCA9PT0gbnVsbCB8fCBib3hUb3RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm94VG90YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xyXG59KShkb2N1bWVudCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHR5cGVfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvdHlwZVwiKTtcclxuY29uc3QgY2xhc3NMaXN0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2xhc3NMaXN0XCIpO1xyXG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcclxuY29uc3QgdmFsaWRhdGVJbnB1dF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhbGlkYXRvci92YWxpZGF0ZUlucHV0XCIpO1xyXG5jb25zdCBoZWFkZXJfMSA9IHJlcXVpcmUoXCIuLi9sYXlvdXQvaGVhZGVyXCIpO1xyXG4oMCwgaGVhZGVyXzEuZ2V0SGVhZGVyKSgpO1xyXG5jb25zdCBlbGVtZW50cyA9IFtdO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpO1xyXG4gICAgYnV0dG9uU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGNvbnN0IGluc2VydE1lc3NhZ2VDYWxsYmFjayA9ICh2YWx1ZUNhbGxiYWNrLCBlbGVtZW50LCBtZXNzYWdlLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNUb3VjaGVkLCBpc1ZhbGlkIH0gPSB2YWx1ZUNhbGxiYWNrO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCZWZvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhFbGVtZW50ID0gZWxlbWVudHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmVsZW1lbnQgPT09IGVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnRzW2luZGV4RWxlbWVudF0uaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKGlzVG91Y2hlZCAmJiAhaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvci0taW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsIHx8IHBhcmVudEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS1ncm91cFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlQmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKHBhcmVudEVsZW1lbnQsIGA8cCBjbGFzcz1cImVycm9yLS1tZXNzYWdlXCIgaWQ9JHtpZH0+JHttZXNzYWdlfTwvcD5gLCBcImFmdGVyZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlQmVmb3JlID09PSBudWxsIHx8IG1lc3NhZ2VCZWZvcmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2VCZWZvcmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yLS1pbnB1dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnV0dG9uSXNWYWxpZCA9IGVsZW1lbnRzLmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUuaXNWYWxpZCk7XHJcbiAgICAgICAgaWYgKGJ1dHRvbklzVmFsaWQpIHtcclxuICAgICAgICAgICAgYnV0dG9uU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlucHV0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxpZGF0ZVwiKTtcclxuICAgICAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBpdGVtLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdmFsaWRhdGUsXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVfMS5FTUFJTDpcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFbWFpbCBpcyBub3QgdmFsaWQhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVfMS5QQVNTV09SRDpcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXIsIG9uZSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgb25lIGNoYXJhY3RlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlXzEuUkVRVUlSRUQ6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkZpZWxkIG11c3QgYmUgcmVxdWlyZWRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAoMCwgdmFsaWRhdGVJbnB1dF8xLnZhbGlkYXRlSW5wdXQpKGl0ZW0sIHZhbGlkYXRlLCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGluc2VydE1lc3NhZ2VDYWxsYmFjayh2YWx1ZSwgaXRlbSwgbWVzc2FnZSwgYCR7dmFsaWRhdGV9LS1pbnB1dGApO1xyXG4gICAgICAgICAgICB9LCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGluc2VydE1lc3NhZ2VDYWxsYmFjayh2YWx1ZSwgaXRlbSwgbWVzc2FnZSwgYCR7dmFsaWRhdGV9LS1pbnB1dGApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBbLi4uaW5wdXRdLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSB0eXBlXzEuUEFTU1dPUkQpO1xyXG4gICAgaW5wdXRQYXNzd29yZC5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGkucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBleWUgPSBwYXJlbnRFbGVtZW50ID09PSBudWxsIHx8IHBhcmVudEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlcIik7XHJcbiAgICAgICAgICAgIGV5ZSA9PT0gbnVsbCB8fCBleWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV5ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnV0dG9uID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGV5ZSwgXCJjb2xvci1ibHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoMCwgY2xhc3NMaXN0XzEuc2V0QXR0cmlidXRlRWxlbWVudCkoaSwgXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKDAsIGNsYXNzTGlzdF8xLnNldEF0dHJpYnV0ZUVsZW1lbnQpKGksIFwidHlwZVwiLCBcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gZXhwb3J0cy5jbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gdm9pZCAwO1xyXG5jb25zdCBjbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xyXG59O1xyXG5leHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSBjbGFzc0xpc3RUb2dnbGVFbGVtZW50O1xyXG5jb25zdCBzZXRBdHRyaWJ1dGVFbGVtZW50ID0gKGVsZW1lbnQsIHF1ZXJ5LCB2YWx1ZSkgPT4ge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocXVlcnkudG9TdHJpbmcoKSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbn07XHJcbmV4cG9ydHMuc2V0QXR0cmlidXRlRWxlbWVudCA9IHNldEF0dHJpYnV0ZUVsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGV4cG9ydHMubW9kZWxFbGVtZW50ID0gZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gdm9pZCAwO1xyXG5jb25zdCBpbnNlcnRFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiB8fCAnYmVmb3JlZW5kJywgZWxlbWVudEluc2VydCk7XHJcbn07XHJcbmV4cG9ydHMuaW5zZXJ0RWxlbWVudCA9IGluc2VydEVsZW1lbnQ7XHJcbmNvbnN0IG1vZGVsRWxlbWVudCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIm1vZGVsXCIgaWQ9JHtpZCB8fCBcIm1vZGVsXCJ9PjwvZGl2PmA7XHJcbiAgICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XHJcbn07XHJcbmV4cG9ydHMubW9kZWxFbGVtZW50ID0gbW9kZWxFbGVtZW50O1xyXG5jb25zdCBpbnNlcnRTdHJpbmdFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudFBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24gfHwgXCJiZWZvcmVlbmRcIiwgZWxlbWVudEluc2VydCk7XHJcbn07XHJcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGluc2VydFN0cmluZ0VsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaXNQYXNzd29yZCA9IGV4cG9ydHMuaXNFbWFpbCA9IGV4cG9ydHMuaXNSZXF1aXJlZCA9IHZvaWQgMDtcclxuY29uc3QgdHJpbVN0cmluZyA9IChzdHIpID0+IHtcclxuICAgIHJldHVybiBzdHIudHJpbSgpO1xyXG59O1xyXG5jb25zdCBpc1JlcXVpcmVkID0gKHN0cikgPT4ge1xyXG4gICAgaWYgKHRyaW1TdHJpbmcoc3RyKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuZXhwb3J0cy5pc1JlcXVpcmVkID0gaXNSZXF1aXJlZDtcclxuY29uc3QgaXNFbWFpbCA9IChzdHIpID0+IHtcclxuICAgIGlmICghdHJpbVN0cmluZyhzdHIpLmluY2x1ZGVzKCdAJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuZXhwb3J0cy5pc0VtYWlsID0gaXNFbWFpbDtcclxuY29uc3QgaXNQYXNzd29yZCA9IChzdHIpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gL14oPz0uKlxcZCkoPz0uKlshQCMkJV4mKl0pKD89LipbYS16XSkuezgsfSQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyKTtcclxufTtcclxuZXhwb3J0cy5pc1Bhc3N3b3JkID0gaXNQYXNzd29yZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy52YWxpZGF0ZUlucHV0ID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzL3R5cGVcIik7XHJcbmNvbnN0IGlucHV0XzEgPSByZXF1aXJlKFwiLi9pbnB1dFwiKTtcclxuY29uc3QgdmFsaWRhdGVJbnB1dCA9IChpbnB1dCwgdHlwZVZhbGlkYXRlLCBjYklucHV0RXZlbnQsIGNiVG91Y2hlZCkgPT4ge1xyXG4gICAgbGV0IGlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVWYWxpZGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVfMS5FTUFJTDpcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSAoMCwgaW5wdXRfMS5pc0VtYWlsKSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0eXBlXzEuUEFTU1dPUkQ6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gKDAsIGlucHV0XzEuaXNQYXNzd29yZCkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZV8xLlJFUVVJUkVEOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9ICgwLCBpbnB1dF8xLmlzUmVxdWlyZWQpKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2JJbnB1dEV2ZW50KHtcclxuICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgaXNUb3VjaGVkLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW5wdXQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaW5wdXQub25ibHVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlzVG91Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2JUb3VjaGVkKHtcclxuICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgaXNUb3VjaGVkLFxyXG4gICAgICAgICAgICB0eXBlOiAndG91Y2hlZCdcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgaXNUb3VjaGVkLFxyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy52YWxpZGF0ZUlucHV0ID0gdmFsaWRhdGVJbnB1dDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2xvZ2luLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90cy9oZWFkZXIudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9