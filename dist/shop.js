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

/***/ "./src/constants/path.ts":
/*!*******************************!*\
  !*** ./src/constants/path.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ROOT_PATH = void 0;
exports.ROOT_PATH = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;


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
const path_1 = __webpack_require__(/*! ../constants/path */ "./src/constants/path.ts");
const classList_1 = __webpack_require__(/*! ../utils/classList */ "./src/utils/classList.ts");
const utilsElement_1 = __webpack_require__(/*! ../utils/element/utilsElement */ "./src/utils/element/utilsElement.ts");
const query_1 = __webpack_require__(/*! ../utils/query */ "./src/utils/query.ts");
(function () {
    let firstScroll = 0;
    let currentScroll = 0;
    const deboundScrollHandler = () => {
        const header = (0, query_1.qs)('#header');
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
    const button = (0, query_1.qs)('.btn-search');
    const header = (0, query_1.qs)(".container--search");
    const input = (0, query_1.qs)("input", header);
    const toggleHeader = () => {
        const searchFieldIsOpen = (0, classList_1.classListToggleElement)(header, "reset--translate");
        const overlayElement = (0, utilsElement_1.modelElement)("overlay--search");
        if (searchFieldIsOpen) {
            (0, utilsElement_1.insertStringElement)(document.body, overlayElement, "afterbegin");
            const overlaySearch = (0, query_1.qs)("#overlay--search");
            overlaySearch === null || overlaySearch === void 0 ? void 0 : overlaySearch.addEventListener("click", toggleHeader);
        }
        else {
            input.value = '';
            const queryParams = new URLSearchParams(window.location.search);
            queryParams.delete('q');
            window.history.pushState({
                path: path_1.ROOT_PATH
            }, '', path_1.ROOT_PATH);
            const searchOverlay = (0, query_1.qs)("#overlay--search");
            searchOverlay === null || searchOverlay === void 0 ? void 0 : searchOverlay.remove();
        }
    };
    button === null || button === void 0 ? void 0 : button.addEventListener("click", toggleHeader);
    input === null || input === void 0 ? void 0 : input.addEventListener("input", (event) => __awaiter(this, void 0, void 0, function* () {
        const value = event.target.value;
        const { location, history } = window;
        const url = path_1.ROOT_PATH + '?q=' + value;
        history.pushState({
            path: url
        }, '', url);
    }));
})();
(function () {
    const bagShopping = (0, query_1.qs)('.shopping--bag');
    const cartUser = (0, query_1.qs)('.cart--user');
    const closeButton = (0, query_1.qs)('.close--button', cartUser);
    const createModel = (0, utilsElement_1.modelElement)('cart-model');
    const onHandleCart = () => {
        const model = (0, query_1.gid)('cart-model');
        const isActive = (0, classList_1.classListToggleElement)(cartUser, 'active-cart');
        if (isActive) {
            (0, utilsElement_1.insertStringElement)(document.body, createModel, 'afterbegin');
            const modelElement = (0, query_1.gid)('cart-model');
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
    const cartUser = (0, query_1.qs)('.cart--user');
    const headerCart = (0, query_1.qs)('h5', cartUser);
    const boxTotal = (0, query_1.qs)('.total--checkout', cartUser);
    const itemsCheckout = (0, query_1.qs)('.items', cartUser);
    const getBoundingHeader = headerCart === null || headerCart === void 0 ? void 0 : headerCart.getBoundingClientRect();
    const boxTotalBounding = boxTotal === null || boxTotal === void 0 ? void 0 : boxTotal.getBoundingClientRect();
    itemsCheckout.style.height = `calc(100vh - ${getBoundingHeader.height + boxTotalBounding.height}px)`;
})(document);


/***/ }),

/***/ "./src/ts/shop.ts":
/*!************************!*\
  !*** ./src/ts/shop.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const classList_1 = __webpack_require__(/*! ../utils/classList */ "./src/utils/classList.ts");
const utilsElement_1 = __webpack_require__(/*! ../utils/element/utilsElement */ "./src/utils/element/utilsElement.ts");
const params_1 = __webpack_require__(/*! ../utils/params */ "./src/utils/params.ts");
const resize_1 = __importDefault(__webpack_require__(/*! ../utils/resize */ "./src/utils/resize.ts"));
const resizeScreenListener = new resize_1.default(991);
let isMobile = resizeScreenListener.isMobile;
// (function () {
//   const inputRange = document.getElementById("range") as HTMLInputElement;
//   const priceOutput = document.querySelector(".range--output")!;
//   // const lineMark = document.querySelector('.input--range span') as HTMLSpanElement;
//   priceOutput.textContent = `${inputRange.value}$ - ${inputRange.max}$`;
//   // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
//   const onChangeInput = (event: Event) => {
//     const value = (<HTMLInputElement>event.target).value;
//     priceOutput.textContent = `${value}$ - ${inputRange.max}$`;
//     // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
//   };
//   inputRange?.addEventListener("input", onChangeInput);
// })();
(function () {
    const list = [
        {
            value: "Default",
            query: "",
        },
        {
            value: "Best Selling",
            query: "best-selling",
        },
        {
            value: "Alphabetically, A-Z",
            query: "title-asc",
        },
        {
            value: "Alphabetically, Z-A",
            query: "title-desc",
        },
        {
            value: "Price",
            query: "price",
        },
    ];
    const btn = document.querySelector(".value--sort");
    const spanValue = btn.querySelector("span");
    const listGroup = document.querySelector(".choose--sort");
    const stringItem = list
        .map((item, index) => {
        var _a;
        if (item.value === ((_a = spanValue.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {
            return `<li data-value="${index}" class="activated">${item.value}</li>`;
        }
        return `<li data-value=${index}>${item.value}</li>`;
    })
        .join("");
    (0, utilsElement_1.insertStringElement)(listGroup, stringItem, "afterbegin");
    const handleClick = () => {
        (0, classList_1.classListToggleElement)(listGroup, "active");
    };
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", handleClick);
    const listGroupItem = listGroup.querySelectorAll("li");
    listGroupItem.forEach((item) => {
        item.onclick = () => {
            handleClick();
            spanValue.textContent = item.textContent;
            const findElement = list.find((_, index) => index === +item.getAttribute("data-value"));
            if (findElement) {
                findElement.query
                    ? (0, params_1.insertURLParams)("sort", findElement.query)
                    : (0, params_1.removeUrlParameter)("sort");
            }
            listGroupItem.forEach((listValue) => {
                listValue.classList.remove("activated");
            });
            item.classList.add("activated");
        };
    });
})();
(function () {
    let icons = ["two-line", "three-line", "four-line"];
    const listRender = document.querySelector(".list--style");
    const listItems = document.querySelector('.products--grid');
    const createElementString = icons.map((item, index) => `<li data-content="${index + 2} columns" data-render=${index + 2}><img src="../../images/icons/${item}.svg"/></li>`);
    (0, utilsElement_1.insertStringElement)(listRender, createElementString.join(""), "afterbegin");
    const li = listRender.querySelectorAll('li');
    const handleOnClick = (target) => {
        const cols = target.getAttribute('data-render');
        li.forEach(item => {
            item.classList.remove('active--button');
        });
        target.classList.add('active--button');
        listItems.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        // listItems.className = `pt-30 d-grid gap-16 products--grid grid-col-${cols}`
    };
    li.forEach(item => {
        item.addEventListener('click', event => handleOnClick(item));
    });
})();
(function () {
    const eyes = document.querySelectorAll('.open--layout');
    const modal = document.querySelector('.model--watch');
    const onHandleModel = () => {
        modal === null || modal === void 0 ? void 0 : modal.classList.toggle('model--watch-active');
    };
    eyes.forEach(element => {
        element.addEventListener('click', onHandleModel);
    });
    modal === null || modal === void 0 ? void 0 : modal.addEventListener('click', onHandleModel);
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

/***/ "./src/utils/params.ts":
/*!*****************************!*\
  !*** ./src/utils/params.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeUrlParameter = exports.insertURLParams = void 0;
function insertURLParams(key, value) {
    if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?" +
            searchParams.toString();
        window.history.pushState({ path: newurl }, "", newurl);
    }
}
exports.insertURLParams = insertURLParams;
// to remove the specific key
function removeUrlParameter(paramKey) {
    const url = window.location.href;
    var r = new URL(url);
    r.searchParams.delete(paramKey);
    const newUrl = r.href;
    window.history.pushState({ path: newUrl }, "", newUrl);
}
exports.removeUrlParameter = removeUrlParameter;


/***/ }),

/***/ "./src/utils/query.ts":
/*!****************************!*\
  !*** ./src/utils/query.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gid = exports.qsa = exports.qs = void 0;
const qs = (selector, targetObject = document) => {
    return targetObject.querySelector(selector);
};
exports.qs = qs;
const qsa = (selector, targetObject = document) => {
    return targetObject.querySelectorAll(selector);
};
exports.qsa = qsa;
const gid = (id) => {
    return document.getElementById(id);
};
exports.gid = gid;


/***/ }),

/***/ "./src/utils/resize.ts":
/*!*****************************!*\
  !*** ./src/utils/resize.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class DetectScreen {
    constructor(screenWidth) {
        this.screenWidth = screenWidth;
        this.isMobileScreen = window.innerWidth <= (this.screenWidth || 991);
    }
    ;
    get isMobile() {
        return this.isMobileScreen;
    }
    onHandleResize(callback) {
        this.isMobileScreen = window.innerWidth <= (this.screenWidth || 991);
        callback(this.isMobileScreen);
    }
    onResizeScreen(callback) {
        callback(this.isMobileScreen);
        window.addEventListener('resize', this.onHandleResize.bind(this, callback));
    }
}
exports["default"] = DetectScreen;


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/ts/shop.ts");
/******/ 	__webpack_require__("./src/ts/header.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBYTtBQUN5RTs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQixvRkFBbUIsZ0JBQWdCLDZFQUFZOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7O0FDMUJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixpQkFBaUIsTUFBTSx5QkFBeUIsSUFBSSxxQkFBcUIsRUFBRSx5QkFBeUI7Ozs7Ozs7Ozs7O0FDSHZGO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsa0RBQW1CO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLG9EQUFvQjtBQUNoRCx1QkFBdUIsbUJBQU8sQ0FBQywwRUFBK0I7QUFDOUQsZ0JBQWdCLG1CQUFPLENBQUMsNENBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsbURBQW1EO0FBQ3BHLENBQUM7Ozs7Ozs7Ozs7O0FDL0ZZO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLG1CQUFPLENBQUMsb0RBQW9CO0FBQ2hELHVCQUF1QixtQkFBTyxDQUFDLDBFQUErQjtBQUM5RCxpQkFBaUIsbUJBQU8sQ0FBQyw4Q0FBaUI7QUFDMUMsaUNBQWlDLG1CQUFPLENBQUMsOENBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxpQkFBaUIsTUFBTSxlQUFlO0FBQ3hFLGtDQUFrQyxtREFBbUQ7QUFDckY7QUFDQTtBQUNBLG9DQUFvQyxNQUFNLE1BQU0sZUFBZTtBQUMvRCxvQ0FBb0MsbURBQW1EO0FBQ3ZGO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLHNCQUFzQixXQUFXO0FBQzdFO0FBQ0EsaUNBQWlDLE1BQU0sR0FBRyxXQUFXO0FBQ3JELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixXQUFXLHVCQUF1QixVQUFVLGdDQUFnQyxLQUFLO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHdEQUF3RCxLQUFLO0FBQzdELGdGQUFnRixLQUFLO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDaEhZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOzs7Ozs7Ozs7OztBQ1ZkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLG9CQUFvQixHQUFHLHFCQUFxQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7Ozs7Ozs7Ozs7QUNmZDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEIsR0FBRyx1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0EsMEJBQTBCOzs7Ozs7Ozs7OztBQ3pCYjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXLEdBQUcsV0FBVyxHQUFHLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ2RFO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDcEJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy9jb25zdGFudHMvcGF0aC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL3Nob3AudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9jbGFzc0xpc3QudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3BhcmFtcy50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3F1ZXJ5LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvcmVzaXplLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGluc2VydFN0cmluZ0VsZW1lbnQsIG1vZGVsRWxlbWVudCB9IGZyb20gJy4uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIilcbiAgICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXRvZ2dsZScpXG4gICAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNsb3NlJyk7XG5cblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGFjdGl2ZVZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XG4gICAgICAgIGFjdGl2ZVZhbHVlID8gaW5zZXJ0U3RyaW5nRWxlbWVudChkb2N1bWVudC5ib2R5LCBtb2RlbEVsZW1lbnQoJ25hdmlnYXRpb24tLW1vZGVsJykpIDogbW9kZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgbW9kZWxBZnRlckluc2VydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xuICAgICAgICBpZiAobW9kZWxBZnRlckluc2VydCkge1xuICAgICAgICAgICAgbW9kZWxBZnRlckluc2VydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaXNBY3RpdmUgPSBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBjYWxsYmFjayhpc0FjdGl2ZSlcbiAgICB9XG4gICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ST09UX1BBVEggPSB2b2lkIDA7XG5leHBvcnRzLlJPT1RfUEFUSCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BhdGhcIik7XG5jb25zdCBjbGFzc0xpc3RfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jbGFzc0xpc3RcIik7XG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcbmNvbnN0IHF1ZXJ5XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvcXVlcnlcIik7XG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCBmaXJzdFNjcm9sbCA9IDA7XG4gICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAwO1xuICAgIGNvbnN0IGRlYm91bmRTY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoJyNoZWFkZXInKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBvZmZzZXQ7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gZmlyc3RTY3JvbGwpIHtcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVib3VuZC1zY3JvbGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlYm91bmQtc2Nyb2xsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZpcnN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRlYm91bmRTY3JvbGxIYW5kbGVyKTtcbiAgICB9KTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9ICgwLCBxdWVyeV8xLnFzKSgnLmJ0bi1zZWFyY2gnKTtcbiAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoXCIuY29udGFpbmVyLS1zZWFyY2hcIik7XG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcXVlcnlfMS5xcykoXCJpbnB1dFwiLCBoZWFkZXIpO1xuICAgIGNvbnN0IHRvZ2dsZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRmllbGRJc09wZW4gPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoaGVhZGVyLCBcInJlc2V0LS10cmFuc2xhdGVcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XG4gICAgICAgIGlmIChzZWFyY2hGaWVsZElzT3Blbikge1xuICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmJvZHksIG92ZXJsYXlFbGVtZW50LCBcImFmdGVyYmVnaW5cIik7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2ggPT09IG51bGwgfHwgb3ZlcmxheVNlYXJjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3ZlcmxheVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ3EnKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aF8xLlJPT1RfUEFUSFxuICAgICAgICAgICAgfSwgJycsIHBhdGhfMS5ST09UX1BBVEgpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoT3ZlcmxheSA9ICgwLCBxdWVyeV8xLnFzKShcIiNvdmVybGF5LS1zZWFyY2hcIik7XG4gICAgICAgICAgICBzZWFyY2hPdmVybGF5ID09PSBudWxsIHx8IHNlYXJjaE92ZXJsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaE92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGJ1dHRvbiA9PT0gbnVsbCB8fCBidXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcbiAgICBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgeyBsb2NhdGlvbiwgaGlzdG9yeSB9ID0gd2luZG93O1xuICAgICAgICBjb25zdCB1cmwgPSBwYXRoXzEuUk9PVF9QQVRIICsgJz9xPScgKyB2YWx1ZTtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgICAgcGF0aDogdXJsXG4gICAgICAgIH0sICcnLCB1cmwpO1xuICAgIH0pKTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJhZ1Nob3BwaW5nID0gKDAsIHF1ZXJ5XzEucXMpKCcuc2hvcHBpbmctLWJhZycpO1xuICAgIGNvbnN0IGNhcnRVc2VyID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2FydC0tdXNlcicpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2xvc2UtLWJ1dHRvbicsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBjcmVhdGVNb2RlbCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKCdjYXJ0LW1vZGVsJyk7XG4gICAgY29uc3Qgb25IYW5kbGVDYXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoY2FydFVzZXIsICdhY3RpdmUtY2FydCcpO1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgJ2FmdGVyYmVnaW4nKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRWxlbWVudCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcbiAgICAgICAgICAgIG1vZGVsRWxlbWVudCA9PT0gbnVsbCB8fCBtb2RlbEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGJhZ1Nob3BwaW5nID09PSBudWxsIHx8IGJhZ1Nob3BwaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiYWdTaG9wcGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XG4gICAgY2xvc2VCdXR0b24gPT09IG51bGwgfHwgY2xvc2VCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcbn0pKCk7XG4oZnVuY3Rpb24gKGQpIHtcbiAgICBjb25zdCBjYXJ0VXNlciA9ICgwLCBxdWVyeV8xLnFzKSgnLmNhcnQtLXVzZXInKTtcbiAgICBjb25zdCBoZWFkZXJDYXJ0ID0gKDAsIHF1ZXJ5XzEucXMpKCdoNScsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBib3hUb3RhbCA9ICgwLCBxdWVyeV8xLnFzKSgnLnRvdGFsLS1jaGVja291dCcsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBpdGVtc0NoZWNrb3V0ID0gKDAsIHF1ZXJ5XzEucXMpKCcuaXRlbXMnLCBjYXJ0VXNlcik7XG4gICAgY29uc3QgZ2V0Qm91bmRpbmdIZWFkZXIgPSBoZWFkZXJDYXJ0ID09PSBudWxsIHx8IGhlYWRlckNhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlckNhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm94VG90YWxCb3VuZGluZyA9IGJveFRvdGFsID09PSBudWxsIHx8IGJveFRvdGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBib3hUb3RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xufSkoZG9jdW1lbnQpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjbGFzc0xpc3RfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jbGFzc0xpc3RcIik7XG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcbmNvbnN0IHBhcmFtc18xID0gcmVxdWlyZShcIi4uL3V0aWxzL3BhcmFtc1wiKTtcbmNvbnN0IHJlc2l6ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9yZXNpemVcIikpO1xuY29uc3QgcmVzaXplU2NyZWVuTGlzdGVuZXIgPSBuZXcgcmVzaXplXzEuZGVmYXVsdCg5OTEpO1xubGV0IGlzTW9iaWxlID0gcmVzaXplU2NyZWVuTGlzdGVuZXIuaXNNb2JpbGU7XG4vLyAoZnVuY3Rpb24gKCkge1xuLy8gICBjb25zdCBpbnB1dFJhbmdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYW5nZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICBjb25zdCBwcmljZU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZ2UtLW91dHB1dFwiKSE7XG4vLyAgIC8vIGNvbnN0IGxpbmVNYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LS1yYW5nZSBzcGFuJykgYXMgSFRNTFNwYW5FbGVtZW50O1xuLy8gICBwcmljZU91dHB1dC50ZXh0Q29udGVudCA9IGAke2lucHV0UmFuZ2UudmFsdWV9JCAtICR7aW5wdXRSYW5nZS5tYXh9JGA7XG4vLyAgIC8vIGxpbmVNYXJrLnN0eWxlLndpZHRoID0gYCR7KCgraW5wdXRSYW5nZS52YWx1ZSAtIDEwKSAvICtpbnB1dFJhbmdlLm1heCkgKiAxMDB9JWA7XG4vLyAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4vLyAgICAgY29uc3QgdmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS52YWx1ZTtcbi8vICAgICBwcmljZU91dHB1dC50ZXh0Q29udGVudCA9IGAke3ZhbHVlfSQgLSAke2lucHV0UmFuZ2UubWF4fSRgO1xuLy8gICAgIC8vIGxpbmVNYXJrLnN0eWxlLndpZHRoID0gYCR7KCgraW5wdXRSYW5nZS52YWx1ZSAtIDEwKSAvICtpbnB1dFJhbmdlLm1heCkgKiAxMDB9JWA7XG4vLyAgIH07XG4vLyAgIGlucHV0UmFuZ2U/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbkNoYW5nZUlucHV0KTtcbi8vIH0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxpc3QgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcIkRlZmF1bHRcIixcbiAgICAgICAgICAgIHF1ZXJ5OiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJCZXN0IFNlbGxpbmdcIixcbiAgICAgICAgICAgIHF1ZXJ5OiBcImJlc3Qtc2VsbGluZ1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJBbHBoYWJldGljYWxseSwgQS1aXCIsXG4gICAgICAgICAgICBxdWVyeTogXCJ0aXRsZS1hc2NcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiQWxwaGFiZXRpY2FsbHksIFotQVwiLFxuICAgICAgICAgICAgcXVlcnk6IFwidGl0bGUtZGVzY1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJQcmljZVwiLFxuICAgICAgICAgICAgcXVlcnk6IFwicHJpY2VcIixcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmFsdWUtLXNvcnRcIik7XG4gICAgY29uc3Qgc3BhblZhbHVlID0gYnRuLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGxpc3RHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3NlLS1zb3J0XCIpO1xuICAgIGNvbnN0IHN0cmluZ0l0ZW0gPSBsaXN0XG4gICAgICAgIC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09ICgoX2EgPSBzcGFuVmFsdWUudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxsaSBkYXRhLXZhbHVlPVwiJHtpbmRleH1cIiBjbGFzcz1cImFjdGl2YXRlZFwiPiR7aXRlbS52YWx1ZX08L2xpPmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8bGkgZGF0YS12YWx1ZT0ke2luZGV4fT4ke2l0ZW0udmFsdWV9PC9saT5gO1xuICAgIH0pXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShsaXN0R3JvdXAsIHN0cmluZ0l0ZW0sIFwiYWZ0ZXJiZWdpblwiKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGxpc3RHcm91cCwgXCJhY3RpdmVcIik7XG4gICAgfTtcbiAgICBidG4gPT09IG51bGwgfHwgYnRuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgICBjb25zdCBsaXN0R3JvdXBJdGVtID0gbGlzdEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcbiAgICBsaXN0R3JvdXBJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKTtcbiAgICAgICAgICAgIHNwYW5WYWx1ZS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBmaW5kRWxlbWVudCA9IGxpc3QuZmluZCgoXywgaW5kZXgpID0+IGluZGV4ID09PSAraXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpKTtcbiAgICAgICAgICAgIGlmIChmaW5kRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGZpbmRFbGVtZW50LnF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgID8gKDAsIHBhcmFtc18xLmluc2VydFVSTFBhcmFtcykoXCJzb3J0XCIsIGZpbmRFbGVtZW50LnF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICA6ICgwLCBwYXJhbXNfMS5yZW1vdmVVcmxQYXJhbWV0ZXIpKFwic29ydFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpc3RHcm91cEl0ZW0uZm9yRWFjaCgobGlzdFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdFZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmF0ZWRcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2YXRlZFwiKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCBpY29ucyA9IFtcInR3by1saW5lXCIsIFwidGhyZWUtbGluZVwiLCBcImZvdXItbGluZVwiXTtcbiAgICBjb25zdCBsaXN0UmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LS1zdHlsZVwiKTtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMtLWdyaWQnKTtcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50U3RyaW5nID0gaWNvbnMubWFwKChpdGVtLCBpbmRleCkgPT4gYDxsaSBkYXRhLWNvbnRlbnQ9XCIke2luZGV4ICsgMn0gY29sdW1uc1wiIGRhdGEtcmVuZGVyPSR7aW5kZXggKyAyfT48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9pY29ucy8ke2l0ZW19LnN2Z1wiLz48L2xpPmApO1xuICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShsaXN0UmVuZGVyLCBjcmVhdGVFbGVtZW50U3RyaW5nLmpvaW4oXCJcIiksIFwiYWZ0ZXJiZWdpblwiKTtcbiAgICBjb25zdCBsaSA9IGxpc3RSZW5kZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKHRhcmdldCkgPT4ge1xuICAgICAgICBjb25zdCBjb2xzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yZW5kZXInKTtcbiAgICAgICAgbGkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLS1idXR0b24nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtLWJ1dHRvbicpO1xuICAgICAgICBsaXN0SXRlbXMuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjb2xzfSwgMWZyKWA7XG4gICAgICAgIC8vIGxpc3RJdGVtcy5jbGFzc05hbWUgPSBgcHQtMzAgZC1ncmlkIGdhcC0xNiBwcm9kdWN0cy0tZ3JpZCBncmlkLWNvbC0ke2NvbHN9YFxuICAgIH07XG4gICAgbGkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGhhbmRsZU9uQ2xpY2soaXRlbSkpO1xuICAgIH0pO1xufSkoKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZXllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLS1sYXlvdXQnKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlbC0td2F0Y2gnKTtcbiAgICBjb25zdCBvbkhhbmRsZU1vZGVsID0gKCkgPT4ge1xuICAgICAgICBtb2RhbCA9PT0gbnVsbCB8fCBtb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kZWwtLXdhdGNoLWFjdGl2ZScpO1xuICAgIH07XG4gICAgZXllcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVNb2RlbCk7XG4gICAgfSk7XG4gICAgbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVNb2RlbCk7XG59KSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBleHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSB2b2lkIDA7XG5jb25zdCBjbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbn07XG5leHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSBjbGFzc0xpc3RUb2dnbGVFbGVtZW50O1xuY29uc3Qgc2V0QXR0cmlidXRlRWxlbWVudCA9IChlbGVtZW50LCBxdWVyeSwgdmFsdWUpID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShxdWVyeS50b1N0cmluZygpLCB2YWx1ZS50b1N0cmluZygpKTtcbn07XG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBzZXRBdHRyaWJ1dGVFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluc2VydFN0cmluZ0VsZW1lbnQgPSBleHBvcnRzLm1vZGVsRWxlbWVudCA9IGV4cG9ydHMuaW5zZXJ0RWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IGluc2VydEVsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcbiAgICBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiB8fCAnYmVmb3JlZW5kJywgZWxlbWVudEluc2VydCk7XG59O1xuZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gaW5zZXJ0RWxlbWVudDtcbmNvbnN0IG1vZGVsRWxlbWVudCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gYDxkaXYgY2xhc3M9XCJtb2RlbFwiIGlkPSR7aWQgfHwgXCJtb2RlbFwifT48L2Rpdj5gO1xuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcbn07XG5leHBvcnRzLm1vZGVsRWxlbWVudCA9IG1vZGVsRWxlbWVudDtcbmNvbnN0IGluc2VydFN0cmluZ0VsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcbiAgICByZXR1cm4gZWxlbWVudFBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24gfHwgXCJiZWZvcmVlbmRcIiwgZWxlbWVudEluc2VydCk7XG59O1xuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gaW5zZXJ0U3RyaW5nRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW1vdmVVcmxQYXJhbWV0ZXIgPSBleHBvcnRzLmluc2VydFVSTFBhcmFtcyA9IHZvaWQgMDtcbmZ1bmN0aW9uIGluc2VydFVSTFBhcmFtcyhrZXksIHZhbHVlKSB7XG4gICAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgICAgICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgbGV0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArXG4gICAgICAgICAgICBcIi8vXCIgK1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICtcbiAgICAgICAgICAgIFwiP1wiICtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgXCJcIiwgbmV3dXJsKTtcbiAgICB9XG59XG5leHBvcnRzLmluc2VydFVSTFBhcmFtcyA9IGluc2VydFVSTFBhcmFtcztcbi8vIHRvIHJlbW92ZSB0aGUgc3BlY2lmaWMga2V5XG5mdW5jdGlvbiByZW1vdmVVcmxQYXJhbWV0ZXIocGFyYW1LZXkpIHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB2YXIgciA9IG5ldyBVUkwodXJsKTtcbiAgICByLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW1LZXkpO1xuICAgIGNvbnN0IG5ld1VybCA9IHIuaHJlZjtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXdVcmwgfSwgXCJcIiwgbmV3VXJsKTtcbn1cbmV4cG9ydHMucmVtb3ZlVXJsUGFyYW1ldGVyID0gcmVtb3ZlVXJsUGFyYW1ldGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdpZCA9IGV4cG9ydHMucXNhID0gZXhwb3J0cy5xcyA9IHZvaWQgMDtcbmNvbnN0IHFzID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xuICAgIHJldHVybiB0YXJnZXRPYmplY3QucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuZXhwb3J0cy5xcyA9IHFzO1xuY29uc3QgcXNhID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xuICAgIHJldHVybiB0YXJnZXRPYmplY3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59O1xuZXhwb3J0cy5xc2EgPSBxc2E7XG5jb25zdCBnaWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xufTtcbmV4cG9ydHMuZ2lkID0gZ2lkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBEZXRlY3RTY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKHNjcmVlbldpZHRoKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSBzY3JlZW5XaWR0aDtcbiAgICAgICAgdGhpcy5pc01vYmlsZVNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDw9ICh0aGlzLnNjcmVlbldpZHRoIHx8IDk5MSk7XG4gICAgfVxuICAgIDtcbiAgICBnZXQgaXNNb2JpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9iaWxlU2NyZWVuO1xuICAgIH1cbiAgICBvbkhhbmRsZVJlc2l6ZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmlzTW9iaWxlU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPD0gKHRoaXMuc2NyZWVuV2lkdGggfHwgOTkxKTtcbiAgICAgICAgY2FsbGJhY2sodGhpcy5pc01vYmlsZVNjcmVlbik7XG4gICAgfVxuICAgIG9uUmVzaXplU2NyZWVuKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKHRoaXMuaXNNb2JpbGVTY3JlZW4pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbkhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMsIGNhbGxiYWNrKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRGV0ZWN0U2NyZWVuO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90cy9zaG9wLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2hlYWRlci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=