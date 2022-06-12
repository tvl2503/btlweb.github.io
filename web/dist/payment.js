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

/***/ "./src/ts/payment.ts":
/*!***************************!*\
  !*** ./src/ts/payment.ts ***!
  \***************************/
/***/ (() => {




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWIuaW8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL2NvbnN0YW50cy9wYXRoLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdHMvaGVhZGVyLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdHMvcGF5bWVudC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2NsYXNzTGlzdC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvcXVlcnkudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgaW5zZXJ0U3RyaW5nRWxlbWVudCwgbW9kZWxFbGVtZW50IH0gZnJvbSAnLi4vc3JjL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbWVudVwiKVxuICAgIGNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtdG9nZ2xlJylcbiAgICBjb25zdCBuYXZDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY2xvc2UnKTtcblxuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoYWN0aXZlVmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbi0tbW9kZWwnKTtcbiAgICAgICAgYWN0aXZlVmFsdWUgPyBpbnNlcnRTdHJpbmdFbGVtZW50KGRvY3VtZW50LmJvZHksIG1vZGVsRWxlbWVudCgnbmF2aWdhdGlvbi0tbW9kZWwnKSkgOiBtb2RlbC5yZW1vdmUoKTtcblxuICAgICAgICBjb25zdCBtb2RlbEFmdGVySW5zZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XG4gICAgICAgIGlmIChtb2RlbEFmdGVySW5zZXJ0KSB7XG4gICAgICAgICAgICBtb2RlbEFmdGVySW5zZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpc0FjdGl2ZSA9IG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGNhbGxiYWNrKGlzQWN0aXZlKVxuICAgIH1cbiAgICBuYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgbmF2Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ST09UX1BBVEggPSB2b2lkIDA7XHJcbmV4cG9ydHMuUk9PVF9QQVRIID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcGF0aFwiKTtcclxuY29uc3QgY2xhc3NMaXN0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2xhc3NMaXN0XCIpO1xyXG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcclxuY29uc3QgcXVlcnlfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9xdWVyeVwiKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBmaXJzdFNjcm9sbCA9IDA7XHJcbiAgICBsZXQgY3VycmVudFNjcm9sbCA9IDA7XHJcbiAgICBjb25zdCBkZWJvdW5kU2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoJyNoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICBjdXJyZW50U2Nyb2xsID0gb2Zmc2V0O1xyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gZmlyc3RTY3JvbGwpIHtcclxuICAgICAgICAgICAgaGVhZGVyID09PSBudWxsIHx8IGhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWJvdW5kLXNjcm9sbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZGVib3VuZC1zY3JvbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpcnN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRlYm91bmRTY3JvbGxIYW5kbGVyKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gKDAsIHF1ZXJ5XzEucXMpKCcuYnRuLXNlYXJjaCcpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gKDAsIHF1ZXJ5XzEucXMpKFwiLmNvbnRhaW5lci0tc2VhcmNoXCIpO1xyXG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcXVlcnlfMS5xcykoXCJpbnB1dFwiLCBoZWFkZXIpO1xyXG4gICAgY29uc3QgdG9nZ2xlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEZpZWxkSXNPcGVuID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGhlYWRlciwgXCJyZXNldC0tdHJhbnNsYXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgaWYgKHNlYXJjaEZpZWxkSXNPcGVuKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBvdmVybGF5RWxlbWVudCwgXCJhZnRlcmJlZ2luXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcclxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaCA9PT0gbnVsbCB8fCBvdmVybGF5U2VhcmNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvdmVybGF5U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVIZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ3EnKTtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGhfMS5ST09UX1BBVEhcclxuICAgICAgICAgICAgfSwgJycsIHBhdGhfMS5ST09UX1BBVEgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hPdmVybGF5ID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcclxuICAgICAgICAgICAgc2VhcmNoT3ZlcmxheSA9PT0gbnVsbCB8fCBzZWFyY2hPdmVybGF5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWFyY2hPdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBidXR0b24gPT09IG51bGwgfHwgYnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUhlYWRlcik7XHJcbiAgICBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHsgbG9jYXRpb24sIGhpc3RvcnkgfSA9IHdpbmRvdztcclxuICAgICAgICBjb25zdCB1cmwgPSBwYXRoXzEuUk9PVF9QQVRIICsgJz9xPScgKyB2YWx1ZTtcclxuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhdGg6IHVybFxyXG4gICAgICAgIH0sICcnLCB1cmwpO1xyXG4gICAgfSkpO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYmFnU2hvcHBpbmcgPSAoMCwgcXVlcnlfMS5xcykoJy5zaG9wcGluZy0tYmFnJyk7XHJcbiAgICBjb25zdCBjYXJ0VXNlciA9ICgwLCBxdWVyeV8xLnFzKSgnLmNhcnQtLXVzZXInKTtcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2xvc2UtLWJ1dHRvbicsIGNhcnRVc2VyKTtcclxuICAgIGNvbnN0IGNyZWF0ZU1vZGVsID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoJ2NhcnQtbW9kZWwnKTtcclxuICAgIGNvbnN0IG9uSGFuZGxlQ2FydCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShjYXJ0VXNlciwgJ2FjdGl2ZS1jYXJ0Jyk7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgJ2FmdGVyYmVnaW4nKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kZWxFbGVtZW50ID0gKDAsIHF1ZXJ5XzEuZ2lkKSgnY2FydC1tb2RlbCcpO1xyXG4gICAgICAgICAgICBtb2RlbEVsZW1lbnQgPT09IG51bGwgfHwgbW9kZWxFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkhhbmRsZUNhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBiYWdTaG9wcGluZyA9PT0gbnVsbCB8fCBiYWdTaG9wcGluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmFnU2hvcHBpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkhhbmRsZUNhcnQpO1xyXG4gICAgY2xvc2VCdXR0b24gPT09IG51bGwgfHwgY2xvc2VCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uIChkKSB7XHJcbiAgICBjb25zdCBjYXJ0VXNlciA9ICgwLCBxdWVyeV8xLnFzKSgnLmNhcnQtLXVzZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckNhcnQgPSAoMCwgcXVlcnlfMS5xcykoJ2g1JywgY2FydFVzZXIpO1xyXG4gICAgY29uc3QgYm94VG90YWwgPSAoMCwgcXVlcnlfMS5xcykoJy50b3RhbC0tY2hlY2tvdXQnLCBjYXJ0VXNlcik7XHJcbiAgICBjb25zdCBpdGVtc0NoZWNrb3V0ID0gKDAsIHF1ZXJ5XzEucXMpKCcuaXRlbXMnLCBjYXJ0VXNlcik7XHJcbiAgICBjb25zdCBnZXRCb3VuZGluZ0hlYWRlciA9IGhlYWRlckNhcnQgPT09IG51bGwgfHwgaGVhZGVyQ2FydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyQ2FydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGJveFRvdGFsQm91bmRpbmcgPSBib3hUb3RhbCA9PT0gbnVsbCB8fCBib3hUb3RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm94VG90YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xyXG59KShkb2N1bWVudCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBleHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSB2b2lkIDA7XHJcbmNvbnN0IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XHJcbn07XHJcbmV4cG9ydHMuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQ7XHJcbmNvbnN0IHNldEF0dHJpYnV0ZUVsZW1lbnQgPSAoZWxlbWVudCwgcXVlcnksIHZhbHVlKSA9PiB7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShxdWVyeS50b1N0cmluZygpLCB2YWx1ZS50b1N0cmluZygpKTtcclxufTtcclxuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gc2V0QXR0cmlidXRlRWxlbWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBleHBvcnRzLmluc2VydEVsZW1lbnQgPSB2b2lkIDA7XHJcbmNvbnN0IGluc2VydEVsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcclxuICAgIGVsZW1lbnRQYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uIHx8ICdiZWZvcmVlbmQnLCBlbGVtZW50SW5zZXJ0KTtcclxufTtcclxuZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gaW5zZXJ0RWxlbWVudDtcclxuY29uc3QgbW9kZWxFbGVtZW50ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGA8ZGl2IGNsYXNzPVwibW9kZWxcIiBpZD0ke2lkIHx8IFwibW9kZWxcIn0+PC9kaXY+YDtcclxuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcclxufTtcclxuZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBtb2RlbEVsZW1lbnQ7XHJcbmNvbnN0IGluc2VydFN0cmluZ0VsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiB8fCBcImJlZm9yZWVuZFwiLCBlbGVtZW50SW5zZXJ0KTtcclxufTtcclxuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gaW5zZXJ0U3RyaW5nRWxlbWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5naWQgPSBleHBvcnRzLnFzYSA9IGV4cG9ydHMucXMgPSB2b2lkIDA7XHJcbmNvbnN0IHFzID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIHRhcmdldE9iamVjdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufTtcclxuZXhwb3J0cy5xcyA9IHFzO1xyXG5jb25zdCBxc2EgPSAoc2VsZWN0b3IsIHRhcmdldE9iamVjdCA9IGRvY3VtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gdGFyZ2V0T2JqZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG59O1xyXG5leHBvcnRzLnFzYSA9IHFzYTtcclxuY29uc3QgZ2lkID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG59O1xyXG5leHBvcnRzLmdpZCA9IGdpZDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL3BheW1lbnQudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2hlYWRlci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=