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

/***/ "./src/ts/search.ts":
/*!**************************!*\
  !*** ./src/ts/search.ts ***!
  \**************************/
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
/******/ 	__webpack_require__("./src/ts/search.ts");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/ts/header.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yi5pby8uL2pzL2luZGV4LmpzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvY29uc3RhbnRzL3BhdGgudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy90cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy90cy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9jbGFzc0xpc3QudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3F1ZXJ5LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGluc2VydFN0cmluZ0VsZW1lbnQsIG1vZGVsRWxlbWVudCB9IGZyb20gJy4uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIilcbiAgICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXRvZ2dsZScpXG4gICAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNsb3NlJyk7XG5cblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGFjdGl2ZVZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XG4gICAgICAgIGFjdGl2ZVZhbHVlID8gaW5zZXJ0U3RyaW5nRWxlbWVudChkb2N1bWVudC5ib2R5LCBtb2RlbEVsZW1lbnQoJ25hdmlnYXRpb24tLW1vZGVsJykpIDogbW9kZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgbW9kZWxBZnRlckluc2VydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xuICAgICAgICBpZiAobW9kZWxBZnRlckluc2VydCkge1xuICAgICAgICAgICAgbW9kZWxBZnRlckluc2VydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaXNBY3RpdmUgPSBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBjYWxsYmFjayhpc0FjdGl2ZSlcbiAgICB9XG4gICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ST09UX1BBVEggPSB2b2lkIDA7XG5leHBvcnRzLlJPT1RfUEFUSCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BhdGhcIik7XG5jb25zdCBjbGFzc0xpc3RfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jbGFzc0xpc3RcIik7XG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcbmNvbnN0IHF1ZXJ5XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvcXVlcnlcIik7XG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCBmaXJzdFNjcm9sbCA9IDA7XG4gICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAwO1xuICAgIGNvbnN0IGRlYm91bmRTY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoJyNoZWFkZXInKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBvZmZzZXQ7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gZmlyc3RTY3JvbGwpIHtcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVib3VuZC1zY3JvbGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlYm91bmQtc2Nyb2xsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZpcnN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRlYm91bmRTY3JvbGxIYW5kbGVyKTtcbiAgICB9KTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9ICgwLCBxdWVyeV8xLnFzKSgnLmJ0bi1zZWFyY2gnKTtcbiAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoXCIuY29udGFpbmVyLS1zZWFyY2hcIik7XG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcXVlcnlfMS5xcykoXCJpbnB1dFwiLCBoZWFkZXIpO1xuICAgIGNvbnN0IHRvZ2dsZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRmllbGRJc09wZW4gPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoaGVhZGVyLCBcInJlc2V0LS10cmFuc2xhdGVcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XG4gICAgICAgIGlmIChzZWFyY2hGaWVsZElzT3Blbikge1xuICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmJvZHksIG92ZXJsYXlFbGVtZW50LCBcImFmdGVyYmVnaW5cIik7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2ggPT09IG51bGwgfHwgb3ZlcmxheVNlYXJjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3ZlcmxheVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ3EnKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aF8xLlJPT1RfUEFUSFxuICAgICAgICAgICAgfSwgJycsIHBhdGhfMS5ST09UX1BBVEgpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoT3ZlcmxheSA9ICgwLCBxdWVyeV8xLnFzKShcIiNvdmVybGF5LS1zZWFyY2hcIik7XG4gICAgICAgICAgICBzZWFyY2hPdmVybGF5ID09PSBudWxsIHx8IHNlYXJjaE92ZXJsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaE92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGJ1dHRvbiA9PT0gbnVsbCB8fCBidXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcbiAgICBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgeyBsb2NhdGlvbiwgaGlzdG9yeSB9ID0gd2luZG93O1xuICAgICAgICBjb25zdCB1cmwgPSBwYXRoXzEuUk9PVF9QQVRIICsgJz9xPScgKyB2YWx1ZTtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgICAgcGF0aDogdXJsXG4gICAgICAgIH0sICcnLCB1cmwpO1xuICAgIH0pKTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJhZ1Nob3BwaW5nID0gKDAsIHF1ZXJ5XzEucXMpKCcuc2hvcHBpbmctLWJhZycpO1xuICAgIGNvbnN0IGNhcnRVc2VyID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2FydC0tdXNlcicpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2xvc2UtLWJ1dHRvbicsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBjcmVhdGVNb2RlbCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKCdjYXJ0LW1vZGVsJyk7XG4gICAgY29uc3Qgb25IYW5kbGVDYXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoY2FydFVzZXIsICdhY3RpdmUtY2FydCcpO1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgJ2FmdGVyYmVnaW4nKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRWxlbWVudCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcbiAgICAgICAgICAgIG1vZGVsRWxlbWVudCA9PT0gbnVsbCB8fCBtb2RlbEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGJhZ1Nob3BwaW5nID09PSBudWxsIHx8IGJhZ1Nob3BwaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiYWdTaG9wcGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XG4gICAgY2xvc2VCdXR0b24gPT09IG51bGwgfHwgY2xvc2VCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcbn0pKCk7XG4oZnVuY3Rpb24gKGQpIHtcbiAgICBjb25zdCBjYXJ0VXNlciA9ICgwLCBxdWVyeV8xLnFzKSgnLmNhcnQtLXVzZXInKTtcbiAgICBjb25zdCBoZWFkZXJDYXJ0ID0gKDAsIHF1ZXJ5XzEucXMpKCdoNScsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBib3hUb3RhbCA9ICgwLCBxdWVyeV8xLnFzKSgnLnRvdGFsLS1jaGVja291dCcsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBpdGVtc0NoZWNrb3V0ID0gKDAsIHF1ZXJ5XzEucXMpKCcuaXRlbXMnLCBjYXJ0VXNlcik7XG4gICAgY29uc3QgZ2V0Qm91bmRpbmdIZWFkZXIgPSBoZWFkZXJDYXJ0ID09PSBudWxsIHx8IGhlYWRlckNhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlckNhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm94VG90YWxCb3VuZGluZyA9IGJveFRvdGFsID09PSBudWxsIHx8IGJveFRvdGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBib3hUb3RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xufSkoZG9jdW1lbnQpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0QXR0cmlidXRlRWxlbWVudCA9IGV4cG9ydHMuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xufTtcbmV4cG9ydHMuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQ7XG5jb25zdCBzZXRBdHRyaWJ1dGVFbGVtZW50ID0gKGVsZW1lbnQsIHF1ZXJ5LCB2YWx1ZSkgPT4ge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHF1ZXJ5LnRvU3RyaW5nKCksIHZhbHVlLnRvU3RyaW5nKCkpO1xufTtcbmV4cG9ydHMuc2V0QXR0cmlidXRlRWxlbWVudCA9IHNldEF0dHJpYnV0ZUVsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGV4cG9ydHMubW9kZWxFbGVtZW50ID0gZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gdm9pZCAwO1xuY29uc3QgaW5zZXJ0RWxlbWVudCA9IChlbGVtZW50UGFyZW50LCBlbGVtZW50SW5zZXJ0LCBwb3NpdGlvbikgPT4ge1xuICAgIGVsZW1lbnRQYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uIHx8ICdiZWZvcmVlbmQnLCBlbGVtZW50SW5zZXJ0KTtcbn07XG5leHBvcnRzLmluc2VydEVsZW1lbnQgPSBpbnNlcnRFbGVtZW50O1xuY29uc3QgbW9kZWxFbGVtZW50ID0gKGlkKSA9PiB7XG4gICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIm1vZGVsXCIgaWQ9JHtpZCB8fCBcIm1vZGVsXCJ9PjwvZGl2PmA7XG4gICAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xufTtcbmV4cG9ydHMubW9kZWxFbGVtZW50ID0gbW9kZWxFbGVtZW50O1xuY29uc3QgaW5zZXJ0U3RyaW5nRWxlbWVudCA9IChlbGVtZW50UGFyZW50LCBlbGVtZW50SW5zZXJ0LCBwb3NpdGlvbikgPT4ge1xuICAgIHJldHVybiBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiB8fCBcImJlZm9yZWVuZFwiLCBlbGVtZW50SW5zZXJ0KTtcbn07XG5leHBvcnRzLmluc2VydFN0cmluZ0VsZW1lbnQgPSBpbnNlcnRTdHJpbmdFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdpZCA9IGV4cG9ydHMucXNhID0gZXhwb3J0cy5xcyA9IHZvaWQgMDtcbmNvbnN0IHFzID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xuICAgIHJldHVybiB0YXJnZXRPYmplY3QucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59O1xuZXhwb3J0cy5xcyA9IHFzO1xuY29uc3QgcXNhID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xuICAgIHJldHVybiB0YXJnZXRPYmplY3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG59O1xuZXhwb3J0cy5xc2EgPSBxc2E7XG5jb25zdCBnaWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xufTtcbmV4cG9ydHMuZ2lkID0gZ2lkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL3NlYXJjaC50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvaGVhZGVyLnRzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==