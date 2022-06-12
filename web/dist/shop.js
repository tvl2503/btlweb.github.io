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
//(function () {
//    const inputRange = document.getElementById("range");
//    const priceOutput = document.querySelector(".range--output");
//    // const lineMark = document.querySelector('.input--range span') as HTMLSpanElement;
//    priceOutput.textContent = `${inputRange.value}$ - ${inputRange.max}$`;
//    // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
//    const onChangeInput = (event) => {
//        const value = event.target.value;
//        priceOutput.textContent = `${value}$ - ${inputRange.max}$`;
//        // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
//    };
//    inputRange === null || inputRange === void 0 ? void 0 : inputRange.addEventListener("input", onChangeInput);
//})();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBYTtBQUN5RTs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNCQUFzQixvRkFBbUIsZ0JBQWdCLDZFQUFZOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7O0FDMUJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixpQkFBaUIsTUFBTSx5QkFBeUIsSUFBSSxxQkFBcUIsRUFBRSx5QkFBeUI7Ozs7Ozs7Ozs7O0FDSHZGO0FBQ2I7QUFDQSw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsa0RBQW1CO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLG9EQUFvQjtBQUNoRCx1QkFBdUIsbUJBQU8sQ0FBQywwRUFBK0I7QUFDOUQsZ0JBQWdCLG1CQUFPLENBQUMsNENBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvQkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsbURBQW1EO0FBQ3BHLENBQUM7Ozs7Ozs7Ozs7O0FDL0ZZO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CLG1CQUFPLENBQUMsb0RBQW9CO0FBQ2hELHVCQUF1QixtQkFBTyxDQUFDLDBFQUErQjtBQUM5RCxpQkFBaUIsbUJBQU8sQ0FBQyw4Q0FBaUI7QUFDMUMsaUNBQWlDLG1CQUFPLENBQUMsOENBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUIsTUFBTSxlQUFlO0FBQ3ZFLGlDQUFpQyxtREFBbUQ7QUFDcEY7QUFDQTtBQUNBLHFDQUFxQyxNQUFNLE1BQU0sZUFBZTtBQUNoRSxxQ0FBcUMsbURBQW1EO0FBQ3hGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxNQUFNLHNCQUFzQixXQUFXO0FBQzdFO0FBQ0EsaUNBQWlDLE1BQU0sR0FBRyxXQUFXO0FBQ3JELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixXQUFXLHVCQUF1QixVQUFVLGdDQUFnQyxLQUFLO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHdEQUF3RCxLQUFLO0FBQzdELGdGQUFnRixLQUFLO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDaEhZO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOzs7Ozs7Ozs7OztBQ1ZkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDJCQUEyQixHQUFHLG9CQUFvQixHQUFHLHFCQUFxQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7Ozs7Ozs7Ozs7QUNmZDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCwwQkFBMEIsR0FBRyx1QkFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0EsMEJBQTBCOzs7Ozs7Ozs7OztBQ3pCYjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXLEdBQUcsV0FBVyxHQUFHLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ2RFO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDcEJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy9jb25zdGFudHMvcGF0aC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL3Nob3AudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9jbGFzc0xpc3QudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3BhcmFtcy50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3F1ZXJ5LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvcmVzaXplLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGluc2VydFN0cmluZ0VsZW1lbnQsIG1vZGVsRWxlbWVudCB9IGZyb20gJy4uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIilcbiAgICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXRvZ2dsZScpXG4gICAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNsb3NlJyk7XG5cblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGFjdGl2ZVZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XG4gICAgICAgIGFjdGl2ZVZhbHVlID8gaW5zZXJ0U3RyaW5nRWxlbWVudChkb2N1bWVudC5ib2R5LCBtb2RlbEVsZW1lbnQoJ25hdmlnYXRpb24tLW1vZGVsJykpIDogbW9kZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgbW9kZWxBZnRlckluc2VydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xuICAgICAgICBpZiAobW9kZWxBZnRlckluc2VydCkge1xuICAgICAgICAgICAgbW9kZWxBZnRlckluc2VydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaXNBY3RpdmUgPSBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBjYWxsYmFjayhpc0FjdGl2ZSlcbiAgICB9XG4gICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUk9PVF9QQVRIID0gdm9pZCAwO1xyXG5leHBvcnRzLlJPT1RfUEFUSCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BhdGhcIik7XHJcbmNvbnN0IGNsYXNzTGlzdF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2NsYXNzTGlzdFwiKTtcclxuY29uc3QgdXRpbHNFbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnRcIik7XHJcbmNvbnN0IHF1ZXJ5XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvcXVlcnlcIik7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZmlyc3RTY3JvbGwgPSAwO1xyXG4gICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAwO1xyXG4gICAgY29uc3QgZGVib3VuZFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gKDAsIHF1ZXJ5XzEucXMpKCcjaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgY3VycmVudFNjcm9sbCA9IG9mZnNldDtcclxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGZpcnN0U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVib3VuZC1zY3JvbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlYm91bmQtc2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkZWJvdW5kU2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9ICgwLCBxdWVyeV8xLnFzKSgnLmJ0bi1zZWFyY2gnKTtcclxuICAgIGNvbnN0IGhlYWRlciA9ICgwLCBxdWVyeV8xLnFzKShcIi5jb250YWluZXItLXNlYXJjaFwiKTtcclxuICAgIGNvbnN0IGlucHV0ID0gKDAsIHF1ZXJ5XzEucXMpKFwiaW5wdXRcIiwgaGVhZGVyKTtcclxuICAgIGNvbnN0IHRvZ2dsZUhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWFyY2hGaWVsZElzT3BlbiA9ICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShoZWFkZXIsIFwicmVzZXQtLXRyYW5zbGF0ZVwiKTtcclxuICAgICAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKFwib3ZlcmxheS0tc2VhcmNoXCIpO1xyXG4gICAgICAgIGlmIChzZWFyY2hGaWVsZElzT3Blbikge1xyXG4gICAgICAgICAgICAoMCwgdXRpbHNFbGVtZW50XzEuaW5zZXJ0U3RyaW5nRWxlbWVudCkoZG9jdW1lbnQuYm9keSwgb3ZlcmxheUVsZW1lbnQsIFwiYWZ0ZXJiZWdpblwiKTtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheVNlYXJjaCA9ICgwLCBxdWVyeV8xLnFzKShcIiNvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2ggPT09IG51bGwgfHwgb3ZlcmxheVNlYXJjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3ZlcmxheVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXMuZGVsZXRlKCdxJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoXzEuUk9PVF9QQVRIXHJcbiAgICAgICAgICAgIH0sICcnLCBwYXRoXzEuUk9PVF9QQVRIKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoT3ZlcmxheSA9ICgwLCBxdWVyeV8xLnFzKShcIiNvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgICAgIHNlYXJjaE92ZXJsYXkgPT09IG51bGwgfHwgc2VhcmNoT3ZlcmxheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VhcmNoT3ZlcmxheS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVIZWFkZXIpO1xyXG4gICAgaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCB7IGxvY2F0aW9uLCBoaXN0b3J5IH0gPSB3aW5kb3c7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcGF0aF8xLlJPT1RfUEFUSCArICc/cT0nICsgdmFsdWU7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xyXG4gICAgICAgICAgICBwYXRoOiB1cmxcclxuICAgICAgICB9LCAnJywgdXJsKTtcclxuICAgIH0pKTtcclxufSkoKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJhZ1Nob3BwaW5nID0gKDAsIHF1ZXJ5XzEucXMpKCcuc2hvcHBpbmctLWJhZycpO1xyXG4gICAgY29uc3QgY2FydFVzZXIgPSAoMCwgcXVlcnlfMS5xcykoJy5jYXJ0LS11c2VyJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9ICgwLCBxdWVyeV8xLnFzKSgnLmNsb3NlLS1idXR0b24nLCBjYXJ0VXNlcik7XHJcbiAgICBjb25zdCBjcmVhdGVNb2RlbCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKCdjYXJ0LW1vZGVsJyk7XHJcbiAgICBjb25zdCBvbkhhbmRsZUNhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSAoMCwgcXVlcnlfMS5naWQpKCdjYXJ0LW1vZGVsJyk7XHJcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoY2FydFVzZXIsICdhY3RpdmUtY2FydCcpO1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAoMCwgdXRpbHNFbGVtZW50XzEuaW5zZXJ0U3RyaW5nRWxlbWVudCkoZG9jdW1lbnQuYm9keSwgY3JlYXRlTW9kZWwsICdhZnRlcmJlZ2luJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRWxlbWVudCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcclxuICAgICAgICAgICAgbW9kZWxFbGVtZW50ID09PSBudWxsIHx8IG1vZGVsRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1vZGVsID09PSBudWxsIHx8IG1vZGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYmFnU2hvcHBpbmcgPT09IG51bGwgfHwgYmFnU2hvcHBpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJhZ1Nob3BwaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxuICAgIGNsb3NlQnV0dG9uID09PSBudWxsIHx8IGNsb3NlQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XHJcbn0pKCk7XHJcbihmdW5jdGlvbiAoZCkge1xyXG4gICAgY29uc3QgY2FydFVzZXIgPSAoMCwgcXVlcnlfMS5xcykoJy5jYXJ0LS11c2VyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJDYXJ0ID0gKDAsIHF1ZXJ5XzEucXMpKCdoNScsIGNhcnRVc2VyKTtcclxuICAgIGNvbnN0IGJveFRvdGFsID0gKDAsIHF1ZXJ5XzEucXMpKCcudG90YWwtLWNoZWNrb3V0JywgY2FydFVzZXIpO1xyXG4gICAgY29uc3QgaXRlbXNDaGVja291dCA9ICgwLCBxdWVyeV8xLnFzKSgnLml0ZW1zJywgY2FydFVzZXIpO1xyXG4gICAgY29uc3QgZ2V0Qm91bmRpbmdIZWFkZXIgPSBoZWFkZXJDYXJ0ID09PSBudWxsIHx8IGhlYWRlckNhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlckNhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBib3hUb3RhbEJvdW5kaW5nID0gYm94VG90YWwgPT09IG51bGwgfHwgYm94VG90YWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJveFRvdGFsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaXRlbXNDaGVja291dC5zdHlsZS5oZWlnaHQgPSBgY2FsYygxMDB2aCAtICR7Z2V0Qm91bmRpbmdIZWFkZXIuaGVpZ2h0ICsgYm94VG90YWxCb3VuZGluZy5oZWlnaHR9cHgpYDtcclxufSkoZG9jdW1lbnQpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjbGFzc0xpc3RfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jbGFzc0xpc3RcIik7XHJcbmNvbnN0IHV0aWxzRWxlbWVudF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50XCIpO1xyXG5jb25zdCBwYXJhbXNfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9wYXJhbXNcIik7XHJcbmNvbnN0IHJlc2l6ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9yZXNpemVcIikpO1xyXG5jb25zdCByZXNpemVTY3JlZW5MaXN0ZW5lciA9IG5ldyByZXNpemVfMS5kZWZhdWx0KDk5MSk7XHJcbmxldCBpc01vYmlsZSA9IHJlc2l6ZVNjcmVlbkxpc3RlbmVyLmlzTW9iaWxlO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZ2VcIik7XHJcbiAgICBjb25zdCBwcmljZU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZ2UtLW91dHB1dFwiKTtcclxuICAgIC8vIGNvbnN0IGxpbmVNYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LS1yYW5nZSBzcGFuJykgYXMgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgcHJpY2VPdXRwdXQudGV4dENvbnRlbnQgPSBgJHtpbnB1dFJhbmdlLnZhbHVlfSQgLSAke2lucHV0UmFuZ2UubWF4fSRgO1xyXG4gICAgLy8gbGluZU1hcmsuc3R5bGUud2lkdGggPSBgJHsoKCtpbnB1dFJhbmdlLnZhbHVlIC0gMTApIC8gK2lucHV0UmFuZ2UubWF4KSAqIDEwMH0lYDtcclxuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBwcmljZU91dHB1dC50ZXh0Q29udGVudCA9IGAke3ZhbHVlfSQgLSAke2lucHV0UmFuZ2UubWF4fSRgO1xyXG4gICAgICAgIC8vIGxpbmVNYXJrLnN0eWxlLndpZHRoID0gYCR7KCgraW5wdXRSYW5nZS52YWx1ZSAtIDEwKSAvICtpbnB1dFJhbmdlLm1heCkgKiAxMDB9JWA7XHJcbiAgICB9O1xyXG4gICAgaW5wdXRSYW5nZSA9PT0gbnVsbCB8fCBpbnB1dFJhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBvbkNoYW5nZUlucHV0KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJEZWZhdWx0XCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJCZXN0IFNlbGxpbmdcIixcclxuICAgICAgICAgICAgcXVlcnk6IFwiYmVzdC1zZWxsaW5nXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFscGhhYmV0aWNhbGx5LCBBLVpcIixcclxuICAgICAgICAgICAgcXVlcnk6IFwidGl0bGUtYXNjXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBcIkFscGhhYmV0aWNhbGx5LCBaLUFcIixcclxuICAgICAgICAgICAgcXVlcnk6IFwidGl0bGUtZGVzY1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJQcmljZVwiLFxyXG4gICAgICAgICAgICBxdWVyeTogXCJwcmljZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52YWx1ZS0tc29ydFwiKTtcclxuICAgIGNvbnN0IHNwYW5WYWx1ZSA9IGJ0bi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcclxuICAgIGNvbnN0IGxpc3RHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hvb3NlLS1zb3J0XCIpO1xyXG4gICAgY29uc3Qgc3RyaW5nSXRlbSA9IGxpc3RcclxuICAgICAgICAubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gKChfYSA9IHNwYW5WYWx1ZS50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRyaW0oKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8bGkgZGF0YS12YWx1ZT1cIiR7aW5kZXh9XCIgY2xhc3M9XCJhY3RpdmF0ZWRcIj4ke2l0ZW0udmFsdWV9PC9saT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYDxsaSBkYXRhLXZhbHVlPSR7aW5kZXh9PiR7aXRlbS52YWx1ZX08L2xpPmA7XHJcbiAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiXCIpO1xyXG4gICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGxpc3RHcm91cCwgc3RyaW5nSXRlbSwgXCJhZnRlcmJlZ2luXCIpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGxpc3RHcm91cCwgXCJhY3RpdmVcIik7XHJcbiAgICB9O1xyXG4gICAgYnRuID09PSBudWxsIHx8IGJ0biA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XHJcbiAgICBjb25zdCBsaXN0R3JvdXBJdGVtID0gbGlzdEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcclxuICAgIGxpc3RHcm91cEl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlQ2xpY2soKTtcclxuICAgICAgICAgICAgc3BhblZhbHVlLnRleHRDb250ZW50ID0gaXRlbS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgY29uc3QgZmluZEVsZW1lbnQgPSBsaXN0LmZpbmQoKF8sIGluZGV4KSA9PiBpbmRleCA9PT0gK2l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSk7XHJcbiAgICAgICAgICAgIGlmIChmaW5kRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZmluZEVsZW1lbnQucXVlcnlcclxuICAgICAgICAgICAgICAgICAgICA/ICgwLCBwYXJhbXNfMS5pbnNlcnRVUkxQYXJhbXMpKFwic29ydFwiLCBmaW5kRWxlbWVudC5xdWVyeSlcclxuICAgICAgICAgICAgICAgICAgICA6ICgwLCBwYXJhbXNfMS5yZW1vdmVVcmxQYXJhbWV0ZXIpKFwic29ydFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXN0R3JvdXBJdGVtLmZvckVhY2goKGxpc3RWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdFZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmF0ZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmF0ZWRcIik7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGljb25zID0gW1widHdvLWxpbmVcIiwgXCJ0aHJlZS1saW5lXCIsIFwiZm91ci1saW5lXCJdO1xyXG4gICAgY29uc3QgbGlzdFJlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC0tc3R5bGVcIik7XHJcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMtLWdyaWQnKTtcclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRTdHJpbmcgPSBpY29ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiBgPGxpIGRhdGEtY29udGVudD1cIiR7aW5kZXggKyAyfSBjb2x1bW5zXCIgZGF0YS1yZW5kZXI9JHtpbmRleCArIDJ9PjxpbWcgc3JjPVwiLi4vLi4vaW1hZ2VzL2ljb25zLyR7aXRlbX0uc3ZnXCIvPjwvbGk+YCk7XHJcbiAgICAoMCwgdXRpbHNFbGVtZW50XzEuaW5zZXJ0U3RyaW5nRWxlbWVudCkobGlzdFJlbmRlciwgY3JlYXRlRWxlbWVudFN0cmluZy5qb2luKFwiXCIpLCBcImFmdGVyYmVnaW5cIik7XHJcbiAgICBjb25zdCBsaSA9IGxpc3RSZW5kZXIucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICAgIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29scyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVuZGVyJyk7XHJcbiAgICAgICAgbGkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtLWJ1dHRvbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtLWJ1dHRvbicpO1xyXG4gICAgICAgIGxpc3RJdGVtcy5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NvbHN9LCAxZnIpYDtcclxuICAgICAgICAvLyBsaXN0SXRlbXMuY2xhc3NOYW1lID0gYHB0LTMwIGQtZ3JpZCBnYXAtMTYgcHJvZHVjdHMtLWdyaWQgZ3JpZC1jb2wtJHtjb2xzfWBcclxuICAgIH07XHJcbiAgICBsaS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBoYW5kbGVPbkNsaWNrKGl0ZW0pKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZXllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLS1sYXlvdXQnKTtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGVsLS13YXRjaCcpO1xyXG4gICAgY29uc3Qgb25IYW5kbGVNb2RlbCA9ICgpID0+IHtcclxuICAgICAgICBtb2RhbCA9PT0gbnVsbCB8fCBtb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kZWwtLXdhdGNoLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuICAgIGV5ZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVNb2RlbCk7XHJcbiAgICB9KTtcclxuICAgIG1vZGFsID09PSBudWxsIHx8IG1vZGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlTW9kZWwpO1xyXG59KSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBleHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSB2b2lkIDA7XHJcbmNvbnN0IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XHJcbn07XHJcbmV4cG9ydHMuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQ7XHJcbmNvbnN0IHNldEF0dHJpYnV0ZUVsZW1lbnQgPSAoZWxlbWVudCwgcXVlcnksIHZhbHVlKSA9PiB7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShxdWVyeS50b1N0cmluZygpLCB2YWx1ZS50b1N0cmluZygpKTtcclxufTtcclxuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gc2V0QXR0cmlidXRlRWxlbWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBleHBvcnRzLmluc2VydEVsZW1lbnQgPSB2b2lkIDA7XHJcbmNvbnN0IGluc2VydEVsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcclxuICAgIGVsZW1lbnRQYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uIHx8ICdiZWZvcmVlbmQnLCBlbGVtZW50SW5zZXJ0KTtcclxufTtcclxuZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gaW5zZXJ0RWxlbWVudDtcclxuY29uc3QgbW9kZWxFbGVtZW50ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGA8ZGl2IGNsYXNzPVwibW9kZWxcIiBpZD0ke2lkIHx8IFwibW9kZWxcIn0+PC9kaXY+YDtcclxuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcclxufTtcclxuZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBtb2RlbEVsZW1lbnQ7XHJcbmNvbnN0IGluc2VydFN0cmluZ0VsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiB8fCBcImJlZm9yZWVuZFwiLCBlbGVtZW50SW5zZXJ0KTtcclxufTtcclxuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gaW5zZXJ0U3RyaW5nRWxlbWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZW1vdmVVcmxQYXJhbWV0ZXIgPSBleHBvcnRzLmluc2VydFVSTFBhcmFtcyA9IHZvaWQgMDtcclxuZnVuY3Rpb24gaW5zZXJ0VVJMUGFyYW1zKGtleSwgdmFsdWUpIHtcclxuICAgIGlmICh3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcclxuICAgICAgICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBzZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgK1xyXG4gICAgICAgICAgICBcIi8vXCIgK1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaG9zdCArXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArXHJcbiAgICAgICAgICAgIFwiP1wiICtcclxuICAgICAgICAgICAgc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogbmV3dXJsIH0sIFwiXCIsIG5ld3VybCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5pbnNlcnRVUkxQYXJhbXMgPSBpbnNlcnRVUkxQYXJhbXM7XHJcbi8vIHRvIHJlbW92ZSB0aGUgc3BlY2lmaWMga2V5XHJcbmZ1bmN0aW9uIHJlbW92ZVVybFBhcmFtZXRlcihwYXJhbUtleSkge1xyXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB2YXIgciA9IG5ldyBVUkwodXJsKTtcclxuICAgIHIuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbUtleSk7XHJcbiAgICBjb25zdCBuZXdVcmwgPSByLmhyZWY7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXdVcmwgfSwgXCJcIiwgbmV3VXJsKTtcclxufVxyXG5leHBvcnRzLnJlbW92ZVVybFBhcmFtZXRlciA9IHJlbW92ZVVybFBhcmFtZXRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5naWQgPSBleHBvcnRzLnFzYSA9IGV4cG9ydHMucXMgPSB2b2lkIDA7XHJcbmNvbnN0IHFzID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIHRhcmdldE9iamVjdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufTtcclxuZXhwb3J0cy5xcyA9IHFzO1xyXG5jb25zdCBxc2EgPSAoc2VsZWN0b3IsIHRhcmdldE9iamVjdCA9IGRvY3VtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gdGFyZ2V0T2JqZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG59O1xyXG5leHBvcnRzLnFzYSA9IHFzYTtcclxuY29uc3QgZ2lkID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG59O1xyXG5leHBvcnRzLmdpZCA9IGdpZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgRGV0ZWN0U2NyZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjcmVlbldpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IHNjcmVlbldpZHRoO1xyXG4gICAgICAgIHRoaXMuaXNNb2JpbGVTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8PSAodGhpcy5zY3JlZW5XaWR0aCB8fCA5OTEpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgZ2V0IGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9iaWxlU2NyZWVuO1xyXG4gICAgfVxyXG4gICAgb25IYW5kbGVSZXNpemUoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmlzTW9iaWxlU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPD0gKHRoaXMuc2NyZWVuV2lkdGggfHwgOTkxKTtcclxuICAgICAgICBjYWxsYmFjayh0aGlzLmlzTW9iaWxlU2NyZWVuKTtcclxuICAgIH1cclxuICAgIG9uUmVzaXplU2NyZWVuKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sodGhpcy5pc01vYmlsZVNjcmVlbik7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25IYW5kbGVSZXNpemUuYmluZCh0aGlzLCBjYWxsYmFjaykpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IERldGVjdFNjcmVlbjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90cy9zaG9wLnRzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2hlYWRlci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=