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

/***/ "./src/ts/shop.ts":
/*!************************!*\
  !*** ./src/ts/shop.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const header_1 = __webpack_require__(/*! ../layout/header */ "./src/layout/header.ts");
const classList_1 = __webpack_require__(/*! ../utils/classList */ "./src/utils/classList.ts");
const utilsElement_1 = __webpack_require__(/*! ../utils/element/utilsElement */ "./src/utils/element/utilsElement.ts");
const params_1 = __webpack_require__(/*! ../utils/params */ "./src/utils/params.ts");
const resize_1 = __importDefault(__webpack_require__(/*! ../utils/resize */ "./src/utils/resize.ts"));
(0, header_1.getHeader)();
const resizeScreenListener = new resize_1.default(991);
let isMobile = resizeScreenListener.isMobile;
(function () {
    const inputRange = document.getElementById("range");
    const priceOutput = document.querySelector(".range--output");
    // const lineMark = document.querySelector('.input--range span') as HTMLSpanElement;
    priceOutput.textContent = `${inputRange.value}$ - ${inputRange.max}$`;
    // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
    const onChangeInput = (event) => {
        const value = event.target.value;
        priceOutput.textContent = `${value}$ - ${inputRange.max}$`;
        // lineMark.style.width = `${((+inputRange.value - 10) / +inputRange.max) * 100}%`;
    };
    inputRange === null || inputRange === void 0 ? void 0 : inputRange.addEventListener("input", onChangeInput);
})();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJCLEdBQUcsOEJBQThCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7O0FDVmQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsMkJBQTJCLEdBQUcsb0JBQW9CLEdBQUcscUJBQXFCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9EQUFvRCxjQUFjO0FBQ2xFO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOzs7Ozs7Ozs7OztBQ2ZkO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDBCQUEwQixHQUFHLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGNBQWM7QUFDN0M7QUFDQSwwQkFBMEI7Ozs7Ozs7Ozs7O0FDekJiO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlOzs7Ozs7O1VDcEJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy9sYXlvdXQvaGVhZGVyLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdHMvaGVhZGVyLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdHMvc2hvcC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2NsYXNzTGlzdC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvcGFyYW1zLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvcmVzaXplLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHsgaW5zZXJ0U3RyaW5nRWxlbWVudCwgbW9kZWxFbGVtZW50IH0gZnJvbSAnLi4vc3JjL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1tZW51XCIpXHJcbiAgICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXRvZ2dsZScpXHJcbiAgICBjb25zdCBuYXZDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY2xvc2UnKTtcclxuXHJcblxyXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoYWN0aXZlVmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xyXG4gICAgICAgIGFjdGl2ZVZhbHVlID8gaW5zZXJ0U3RyaW5nRWxlbWVudChkb2N1bWVudC5ib2R5LCBtb2RlbEVsZW1lbnQoJ25hdmlnYXRpb24tLW1vZGVsJykpIDogbW9kZWwucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGVsQWZ0ZXJJbnNlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbi0tbW9kZWwnKTtcclxuICAgICAgICBpZiAobW9kZWxBZnRlckluc2VydCkge1xyXG4gICAgICAgICAgICBtb2RlbEFmdGVySW5zZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQWN0aXZlID0gbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICBjYWxsYmFjayhpc0FjdGl2ZSlcclxuICAgIH1cclxuICAgIG5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcclxuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG59KSgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldEhlYWRlciA9IHZvaWQgMDtcclxuY29uc3QgdXRpbHNFbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnRcIik7XHJcbmNvbnN0IGdldEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGBcclxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXIgc2hhZG93LXNtXCIgaWQ9XCJoZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWdyaWQgYWxpZ24taXRlbXMtY2VudGVyIGhlYWRlcl9fbWVudVwiIGlkPVwiaGVhZGVyX19tZW51XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19tb2JpbGUtdG9nZ2xlIHBvaW50ZXJcIiBpZD1cIm5hdi10b2dnbGVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJieCBieC1tZW51XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2xlZnRcIiBpZD1cIm5hdi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19sZWZ0X19jbG9zZVwiIGlkPVwibmF2LWNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFsIGZhLWFuZ2xlLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19sZWZ0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZfX2xpbmtcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhbCBmYS1hbmdsZS1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fbGVmdF9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmF2X19saW5rXCI+U2hvcHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFsIGZhLWFuZ2xlLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19sZWZ0X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZfX2xpbmtcIj5Qcm9kdWN0czwvYT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWwgZmEtYW5nbGUtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbWVudV9faXRlbSBoZWFkZXJfX21lbnVfX2xlZnRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdl9fbGlua1wiPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhbCBmYS1hbmdsZS1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgZC1ncmlkIGdyaWQtY29sLTEgZ2FwLTE2IGF1dGgtb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImYtMTggd2VpZ2h0LTYwMFwiPk15IEFjY291bnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWJsYWNrXCI+TG9nIGluPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YT48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lZFwiPlJlZ2lzdGVyPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGgtMTAwXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2xvZ29fZGFyay5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnVfX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzcz1cImhlYWRlcl9fbWVudV9faXRlbSBoZWFkZXJfX21lbnVfX3JpZ2h0X19pdGVtIGJ0bi1zZWFyY2hcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJieCBieC1zZWFyY2hcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaGVhZGVyX19tZW51X19pdGVtIGhlYWRlcl9fbWVudV9fcmlnaHRfX2l0ZW0gdXNlci0tb3B0aW9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+IDxpIGNsYXNzPVwiYnggYngtdXNlclwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19yaWdodF9faXRlbSBmYXZvdXJpdGUtLW9wdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJieCBieC1zdGFyXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX21lbnVfX2l0ZW0gaGVhZGVyX19tZW51X19yaWdodF9faXRlbSBzaG9wcGluZy0tYmFnXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJ4IGJ4LXNob3BwaW5nLWJhZ1wiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgY29udGFpbmVyLS1zZWFyY2hcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgdGl0bGUtLXNlYXJjaFwiPlxyXG4gICAgICAgIDxwPlNlYXJjaCBvdXIgc3RvcmU8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLS1idG5cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvLS1zZWFyY2hcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvX2RhcmsucG5nXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC0tc2VhcmNoXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggUHJvZHVjdHNcIiAvPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiYnggYngtc2VhcmNoXCI+PC9pPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiZC1mbGV4IHJpZ2h0LS1vcHRpb25zXCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj4gPGkgY2xhc3M9XCJieCBieC11c2VyXCI+PC9pPjwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYnggYngtc3RhclwiPjwvaT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJieCBieC1zaG9wcGluZy1iYWdcIj48L2k+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcnQtLXVzZXIgc2hhZG93LXNtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyIGNsb3NlLS1idXR0b24gcG9pbnRlclwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZi0yNCBmYWwgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDUgY2xhc3M9XCJmLTE4IHdlaWdodC01MDAgcGItMTZcIj5TaG9wcGluZyBDYXJ0PC9oNT5cclxuICAgICAgPGRpdiBjbGFzcz1cImQtZ3JpZCBncmlkLWNvbC0xIGdhcC0xNiBvdmVyZmxvdy1zY3JvbGwgaXRlbXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGl0ZW0tLWNhcnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jYXJ0IHByLTE2XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy9zdGF0aWMvMTdhXzYzYWUxZjYwLTU5ZGYtNDA2MS1iMTkxLWFjYjAxYWFhNmNhNF8zNjB4LndlYnBcIlxyXG4gICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNhcnRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJmLTE0XCIgaHJlZj1cIlwiPlF1aWx0ZWQgU2hvdWxkZXIgQmFnPC9hPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImYtMTQgcGItMTAgcHJpY2UtLWl0ZW1cIj4kMjIuMDA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24tY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZC1ncmlkIGdyaWQtY29sLTMgYWxpZ24tY2VudGVyIHRleHQtY2VudGVyIHBvaW50ZXIgYnV0dG9uLS1xdWFudGl0eVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPi08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjUwPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT4rPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZi0xMiBwbC0xMiByZW1vdmUtaXRlbVwiPlJlbW92ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC0tY2hlY2tvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgZi0xNCBwYi0xMFwiPlxyXG4gICAgICAgICAgPHA+U3VidG90YWw8L3A+XHJcbiAgICAgICAgICA8cD4kNjYuMDA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYmxhY2sgdy0xMDBcIj5DaGVjayBvdXQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgICAoMCwgdXRpbHNFbGVtZW50XzEuaW5zZXJ0U3RyaW5nRWxlbWVudCkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZpZ2F0aW9uXCIpLCBoZWFkZXIsIFwiYWZ0ZXJiZWdpblwiKTtcclxufTtcclxuZXhwb3J0cy5nZXRIZWFkZXIgPSBnZXRIZWFkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgY2xhc3NMaXN0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2xhc3NMaXN0XCIpO1xyXG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBmaXJzdFNjcm9sbCA9IDA7XHJcbiAgICBsZXQgY3VycmVudFNjcm9sbCA9IDA7XHJcbiAgICBjb25zdCBkZWJvdW5kU2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZWFkZXJcIik7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgY3VycmVudFNjcm9sbCA9IG9mZnNldDtcclxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGZpcnN0U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVib3VuZC1zY3JvbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlYm91bmQtc2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkZWJvdW5kU2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNlYXJjaFwiKTtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLS1zZWFyY2hcIik7XHJcbiAgICBjb25zdCB0b2dnbGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRmllbGRJc09wZW4gPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoaGVhZGVyLCBcInJlc2V0LS10cmFuc2xhdGVcIik7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSAoMCwgdXRpbHNFbGVtZW50XzEubW9kZWxFbGVtZW50KShcIm92ZXJsYXktLXNlYXJjaFwiKTtcclxuICAgICAgICBpZiAoc2VhcmNoRmllbGRJc09wZW4pIHtcclxuICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmJvZHksIG92ZXJsYXlFbGVtZW50LCBcImFmdGVyYmVnaW5cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlTZWFyY2ggPSBkb2N1bWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2ggPT09IG51bGwgfHwgb3ZlcmxheVNlYXJjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3ZlcmxheVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaE92ZXJsYXkgPSBkb2N1bWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgICAgIHNlYXJjaE92ZXJsYXkgPT09IG51bGwgfHwgc2VhcmNoT3ZlcmxheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VhcmNoT3ZlcmxheS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVIZWFkZXIpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICB9KSk7XHJcbn0pKCk7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBiYWdTaG9wcGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wcGluZy0tYmFnJyk7XHJcbiAgICBjb25zdCBjYXJ0VXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LS11c2VyJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNhcnRVc2VyLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS0tYnV0dG9uJyk7XHJcbiAgICBjb25zdCBjcmVhdGVNb2RlbCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKCdjYXJ0LW1vZGVsJyk7XHJcbiAgICBjb25zdCBvbkhhbmRsZUNhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1tb2RlbCcpO1xyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGNhcnRVc2VyLCAnYWN0aXZlLWNhcnQnKTtcclxuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmJvZHksIGNyZWF0ZU1vZGVsLCAnYWZ0ZXJiZWdpbicpO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1tb2RlbCcpO1xyXG4gICAgICAgICAgICBtb2RlbEVsZW1lbnQgPT09IG51bGwgfHwgbW9kZWxFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkhhbmRsZUNhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBiYWdTaG9wcGluZyA9PT0gbnVsbCB8fCBiYWdTaG9wcGluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmFnU2hvcHBpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkhhbmRsZUNhcnQpO1xyXG4gICAgY2xvc2VCdXR0b24gPT09IG51bGwgfHwgY2xvc2VCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uIChkKSB7XHJcbiAgICBjb25zdCBjYXJ0VXNlciA9IGQucXVlcnlTZWxlY3RvcignLmNhcnQtLXVzZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckNhcnQgPSBjYXJ0VXNlciA9PT0gbnVsbCB8fCBjYXJ0VXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FydFVzZXIucXVlcnlTZWxlY3RvcignaDUnKTtcclxuICAgIGNvbnN0IGJveFRvdGFsID0gY2FydFVzZXIgPT09IG51bGwgfHwgY2FydFVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcnRVc2VyLnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC0tY2hlY2tvdXQnKTtcclxuICAgIGNvbnN0IGl0ZW1zQ2hlY2tvdXQgPSBjYXJ0VXNlci5xdWVyeVNlbGVjdG9yKCcuaXRlbXMnKTtcclxuICAgIGNvbnN0IGdldEJvdW5kaW5nSGVhZGVyID0gaGVhZGVyQ2FydCA9PT0gbnVsbCB8fCBoZWFkZXJDYXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXJDYXJ0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgYm94VG90YWxCb3VuZGluZyA9IGJveFRvdGFsID09PSBudWxsIHx8IGJveFRvdGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBib3hUb3RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGl0ZW1zQ2hlY2tvdXQuc3R5bGUuaGVpZ2h0ID0gYGNhbGMoMTAwdmggLSAke2dldEJvdW5kaW5nSGVhZGVyLmhlaWdodCArIGJveFRvdGFsQm91bmRpbmcuaGVpZ2h0fXB4KWA7XHJcbn0pKGRvY3VtZW50KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaGVhZGVyXzEgPSByZXF1aXJlKFwiLi4vbGF5b3V0L2hlYWRlclwiKTtcclxuY29uc3QgY2xhc3NMaXN0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2xhc3NMaXN0XCIpO1xyXG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcclxuY29uc3QgcGFyYW1zXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvcGFyYW1zXCIpO1xyXG5jb25zdCByZXNpemVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvcmVzaXplXCIpKTtcclxuKDAsIGhlYWRlcl8xLmdldEhlYWRlcikoKTtcclxuY29uc3QgcmVzaXplU2NyZWVuTGlzdGVuZXIgPSBuZXcgcmVzaXplXzEuZGVmYXVsdCg5OTEpO1xyXG5sZXQgaXNNb2JpbGUgPSByZXNpemVTY3JlZW5MaXN0ZW5lci5pc01vYmlsZTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0UmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhbmdlXCIpO1xyXG4gICAgY29uc3QgcHJpY2VPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmdlLS1vdXRwdXRcIik7XHJcbiAgICAvLyBjb25zdCBsaW5lTWFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC0tcmFuZ2Ugc3BhbicpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIHByaWNlT3V0cHV0LnRleHRDb250ZW50ID0gYCR7aW5wdXRSYW5nZS52YWx1ZX0kIC0gJHtpbnB1dFJhbmdlLm1heH0kYDtcclxuICAgIC8vIGxpbmVNYXJrLnN0eWxlLndpZHRoID0gYCR7KCgraW5wdXRSYW5nZS52YWx1ZSAtIDEwKSAvICtpbnB1dFJhbmdlLm1heCkgKiAxMDB9JWA7XHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgcHJpY2VPdXRwdXQudGV4dENvbnRlbnQgPSBgJHt2YWx1ZX0kIC0gJHtpbnB1dFJhbmdlLm1heH0kYDtcclxuICAgICAgICAvLyBsaW5lTWFyay5zdHlsZS53aWR0aCA9IGAkeygoK2lucHV0UmFuZ2UudmFsdWUgLSAxMCkgLyAraW5wdXRSYW5nZS5tYXgpICogMTAwfSVgO1xyXG4gICAgfTtcclxuICAgIGlucHV0UmFuZ2UgPT09IG51bGwgfHwgaW5wdXRSYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRSYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgb25DaGFuZ2VJbnB1dCk7XHJcbn0pKCk7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiRGVmYXVsdFwiLFxyXG4gICAgICAgICAgICBxdWVyeTogXCJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiQmVzdCBTZWxsaW5nXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBcImJlc3Qtc2VsbGluZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJBbHBoYWJldGljYWxseSwgQS1aXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBcInRpdGxlLWFzY1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJBbHBoYWJldGljYWxseSwgWi1BXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBcInRpdGxlLWRlc2NcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6IFwiUHJpY2VcIixcclxuICAgICAgICAgICAgcXVlcnk6IFwicHJpY2VcIixcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmFsdWUtLXNvcnRcIik7XHJcbiAgICBjb25zdCBzcGFuVmFsdWUgPSBidG4ucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XHJcbiAgICBjb25zdCBsaXN0R3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNob29zZS0tc29ydFwiKTtcclxuICAgIGNvbnN0IHN0cmluZ0l0ZW0gPSBsaXN0XHJcbiAgICAgICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09ICgoX2EgPSBzcGFuVmFsdWUudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50cmltKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGRhdGEtdmFsdWU9XCIke2luZGV4fVwiIGNsYXNzPVwiYWN0aXZhdGVkXCI+JHtpdGVtLnZhbHVlfTwvbGk+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGA8bGkgZGF0YS12YWx1ZT0ke2luZGV4fT4ke2l0ZW0udmFsdWV9PC9saT5gO1xyXG4gICAgfSlcclxuICAgICAgICAuam9pbihcIlwiKTtcclxuICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShsaXN0R3JvdXAsIHN0cmluZ0l0ZW0sIFwiYWZ0ZXJiZWdpblwiKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShsaXN0R3JvdXAsIFwiYWN0aXZlXCIpO1xyXG4gICAgfTtcclxuICAgIGJ0biA9PT0gbnVsbCB8fCBidG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xyXG4gICAgY29uc3QgbGlzdEdyb3VwSXRlbSA9IGxpc3RHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcbiAgICBsaXN0R3JvdXBJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrKCk7XHJcbiAgICAgICAgICAgIHNwYW5WYWx1ZS50ZXh0Q29udGVudCA9IGl0ZW0udGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmRFbGVtZW50ID0gbGlzdC5maW5kKChfLCBpbmRleCkgPT4gaW5kZXggPT09ICtpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIikpO1xyXG4gICAgICAgICAgICBpZiAoZmluZEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGZpbmRFbGVtZW50LnF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgPyAoMCwgcGFyYW1zXzEuaW5zZXJ0VVJMUGFyYW1zKShcInNvcnRcIiwgZmluZEVsZW1lbnQucXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoMCwgcGFyYW1zXzEucmVtb3ZlVXJsUGFyYW1ldGVyKShcInNvcnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlzdEdyb3VwSXRlbS5mb3JFYWNoKChsaXN0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpc3RWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZhdGVkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZhdGVkXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBpY29ucyA9IFtcInR3by1saW5lXCIsIFwidGhyZWUtbGluZVwiLCBcImZvdXItbGluZVwiXTtcclxuICAgIGNvbnN0IGxpc3RSZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtLXN0eWxlXCIpO1xyXG4gICAgY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzLS1ncmlkJyk7XHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50U3RyaW5nID0gaWNvbnMubWFwKChpdGVtLCBpbmRleCkgPT4gYDxsaSBkYXRhLWNvbnRlbnQ9XCIke2luZGV4ICsgMn0gY29sdW1uc1wiIGRhdGEtcmVuZGVyPSR7aW5kZXggKyAyfT48aW1nIHNyYz1cIi4uLy4uL2ltYWdlcy9pY29ucy8ke2l0ZW19LnN2Z1wiLz48L2xpPmApO1xyXG4gICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGxpc3RSZW5kZXIsIGNyZWF0ZUVsZW1lbnRTdHJpbmcuam9pbihcIlwiKSwgXCJhZnRlcmJlZ2luXCIpO1xyXG4gICAgY29uc3QgbGkgPSBsaXN0UmVuZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbHMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbmRlcicpO1xyXG4gICAgICAgIGxpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLS1idXR0b24nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLS1idXR0b24nKTtcclxuICAgICAgICBsaXN0SXRlbXMuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjb2xzfSwgMWZyKWA7XHJcbiAgICAgICAgLy8gbGlzdEl0ZW1zLmNsYXNzTmFtZSA9IGBwdC0zMCBkLWdyaWQgZ2FwLTE2IHByb2R1Y3RzLS1ncmlkIGdyaWQtY29sLSR7Y29sc31gXHJcbiAgICB9O1xyXG4gICAgbGkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gaGFuZGxlT25DbGljayhpdGVtKSk7XHJcbiAgICB9KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGV5ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3Blbi0tbGF5b3V0Jyk7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RlbC0td2F0Y2gnKTtcclxuICAgIGNvbnN0IG9uSGFuZGxlTW9kZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ21vZGVsLS13YXRjaC1hY3RpdmUnKTtcclxuICAgIH07XHJcbiAgICBleWVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlTW9kZWwpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbCA9PT0gbnVsbCB8fCBtb2RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkhhbmRsZU1vZGVsKTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gZXhwb3J0cy5jbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gdm9pZCAwO1xyXG5jb25zdCBjbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xyXG59O1xyXG5leHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSBjbGFzc0xpc3RUb2dnbGVFbGVtZW50O1xyXG5jb25zdCBzZXRBdHRyaWJ1dGVFbGVtZW50ID0gKGVsZW1lbnQsIHF1ZXJ5LCB2YWx1ZSkgPT4ge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocXVlcnkudG9TdHJpbmcoKSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbn07XHJcbmV4cG9ydHMuc2V0QXR0cmlidXRlRWxlbWVudCA9IHNldEF0dHJpYnV0ZUVsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGV4cG9ydHMubW9kZWxFbGVtZW50ID0gZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gdm9pZCAwO1xyXG5jb25zdCBpbnNlcnRFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiB8fCAnYmVmb3JlZW5kJywgZWxlbWVudEluc2VydCk7XHJcbn07XHJcbmV4cG9ydHMuaW5zZXJ0RWxlbWVudCA9IGluc2VydEVsZW1lbnQ7XHJcbmNvbnN0IG1vZGVsRWxlbWVudCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIm1vZGVsXCIgaWQ9JHtpZCB8fCBcIm1vZGVsXCJ9PjwvZGl2PmA7XHJcbiAgICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XHJcbn07XHJcbmV4cG9ydHMubW9kZWxFbGVtZW50ID0gbW9kZWxFbGVtZW50O1xyXG5jb25zdCBpbnNlcnRTdHJpbmdFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudFBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24gfHwgXCJiZWZvcmVlbmRcIiwgZWxlbWVudEluc2VydCk7XHJcbn07XHJcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGluc2VydFN0cmluZ0VsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmVtb3ZlVXJsUGFyYW1ldGVyID0gZXhwb3J0cy5pbnNlcnRVUkxQYXJhbXMgPSB2b2lkIDA7XHJcbmZ1bmN0aW9uIGluc2VydFVSTFBhcmFtcyhrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAod2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XHJcbiAgICAgICAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICBsZXQgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICtcclxuICAgICAgICAgICAgXCIvL1wiICtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgK1xyXG4gICAgICAgICAgICBcIj9cIiArXHJcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IG5ld3VybCB9LCBcIlwiLCBuZXd1cmwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuaW5zZXJ0VVJMUGFyYW1zID0gaW5zZXJ0VVJMUGFyYW1zO1xyXG4vLyB0byByZW1vdmUgdGhlIHNwZWNpZmljIGtleVxyXG5mdW5jdGlvbiByZW1vdmVVcmxQYXJhbWV0ZXIocGFyYW1LZXkpIHtcclxuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgdmFyIHIgPSBuZXcgVVJMKHVybCk7XHJcbiAgICByLnNlYXJjaFBhcmFtcy5kZWxldGUocGFyYW1LZXkpO1xyXG4gICAgY29uc3QgbmV3VXJsID0gci5ocmVmO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogbmV3VXJsIH0sIFwiXCIsIG5ld1VybCk7XHJcbn1cclxuZXhwb3J0cy5yZW1vdmVVcmxQYXJhbWV0ZXIgPSByZW1vdmVVcmxQYXJhbWV0ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIERldGVjdFNjcmVlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY3JlZW5XaWR0aCkge1xyXG4gICAgICAgIHRoaXMuc2NyZWVuV2lkdGggPSBzY3JlZW5XaWR0aDtcclxuICAgICAgICB0aGlzLmlzTW9iaWxlU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPD0gKHRoaXMuc2NyZWVuV2lkdGggfHwgOTkxKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGdldCBpc01vYmlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc01vYmlsZVNjcmVlbjtcclxuICAgIH1cclxuICAgIG9uSGFuZGxlUmVzaXplKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZVNjcmVlbiA9IHdpbmRvdy5pbm5lcldpZHRoIDw9ICh0aGlzLnNjcmVlbldpZHRoIHx8IDk5MSk7XHJcbiAgICAgICAgY2FsbGJhY2sodGhpcy5pc01vYmlsZVNjcmVlbik7XHJcbiAgICB9XHJcbiAgICBvblJlc2l6ZVNjcmVlbihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuaXNNb2JpbGVTY3JlZW4pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uSGFuZGxlUmVzaXplLmJpbmQodGhpcywgY2FsbGJhY2spKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBEZXRlY3RTY3JlZW47XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvc2hvcC50c1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90cy9oZWFkZXIudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9