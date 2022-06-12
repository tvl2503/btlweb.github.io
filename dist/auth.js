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

/***/ "./src/constants/type.ts":
/*!*******************************!*\
  !*** ./src/constants/type.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UPLOAD_KEY = exports.REQUIRED = exports.PASSWORD = exports.EMAIL = void 0;
exports.EMAIL = 'email';
exports.PASSWORD = 'password';
exports.REQUIRED = 'required';
exports.UPLOAD_KEY = 'file_upload';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOzs7Ozs7O1VDeENyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL2pzL2luZGV4LmpzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvY29uc3RhbnRzL3BhdGgudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy9jb25zdGFudHMvdHlwZS50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL2xvZ2luLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvY2xhc3NMaXN0LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9xdWVyeS50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3ZhbGlkYXRvci9pbnB1dC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3ZhbGlkYXRvci92YWxpZGF0ZUlucHV0LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGluc2VydFN0cmluZ0VsZW1lbnQsIG1vZGVsRWxlbWVudCB9IGZyb20gJy4uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIilcbiAgICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXRvZ2dsZScpXG4gICAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNsb3NlJyk7XG5cblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGFjdGl2ZVZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XG4gICAgICAgIGFjdGl2ZVZhbHVlID8gaW5zZXJ0U3RyaW5nRWxlbWVudChkb2N1bWVudC5ib2R5LCBtb2RlbEVsZW1lbnQoJ25hdmlnYXRpb24tLW1vZGVsJykpIDogbW9kZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgbW9kZWxBZnRlckluc2VydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xuICAgICAgICBpZiAobW9kZWxBZnRlckluc2VydCkge1xuICAgICAgICAgICAgbW9kZWxBZnRlckluc2VydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaXNBY3RpdmUgPSBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBjYWxsYmFjayhpc0FjdGl2ZSlcbiAgICB9XG4gICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ST09UX1BBVEggPSB2b2lkIDA7XG5leHBvcnRzLlJPT1RfUEFUSCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VUExPQURfS0VZID0gZXhwb3J0cy5SRVFVSVJFRCA9IGV4cG9ydHMuUEFTU1dPUkQgPSBleHBvcnRzLkVNQUlMID0gdm9pZCAwO1xuZXhwb3J0cy5FTUFJTCA9ICdlbWFpbCc7XG5leHBvcnRzLlBBU1NXT1JEID0gJ3Bhc3N3b3JkJztcbmV4cG9ydHMuUkVRVUlSRUQgPSAncmVxdWlyZWQnO1xuZXhwb3J0cy5VUExPQURfS0VZID0gJ2ZpbGVfdXBsb2FkJztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BhdGhcIik7XG5jb25zdCBjbGFzc0xpc3RfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jbGFzc0xpc3RcIik7XG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcbmNvbnN0IHF1ZXJ5XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvcXVlcnlcIik7XG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCBmaXJzdFNjcm9sbCA9IDA7XG4gICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAwO1xuICAgIGNvbnN0IGRlYm91bmRTY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoJyNoZWFkZXInKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIGN1cnJlbnRTY3JvbGwgPSBvZmZzZXQ7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gZmlyc3RTY3JvbGwpIHtcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVib3VuZC1zY3JvbGxcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlYm91bmQtc2Nyb2xsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZpcnN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRlYm91bmRTY3JvbGxIYW5kbGVyKTtcbiAgICB9KTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9ICgwLCBxdWVyeV8xLnFzKSgnLmJ0bi1zZWFyY2gnKTtcbiAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoXCIuY29udGFpbmVyLS1zZWFyY2hcIik7XG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcXVlcnlfMS5xcykoXCJpbnB1dFwiLCBoZWFkZXIpO1xuICAgIGNvbnN0IHRvZ2dsZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRmllbGRJc09wZW4gPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoaGVhZGVyLCBcInJlc2V0LS10cmFuc2xhdGVcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XG4gICAgICAgIGlmIChzZWFyY2hGaWVsZElzT3Blbikge1xuICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmJvZHksIG92ZXJsYXlFbGVtZW50LCBcImFmdGVyYmVnaW5cIik7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2ggPT09IG51bGwgfHwgb3ZlcmxheVNlYXJjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3ZlcmxheVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ3EnKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcGF0aDogcGF0aF8xLlJPT1RfUEFUSFxuICAgICAgICAgICAgfSwgJycsIHBhdGhfMS5ST09UX1BBVEgpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoT3ZlcmxheSA9ICgwLCBxdWVyeV8xLnFzKShcIiNvdmVybGF5LS1zZWFyY2hcIik7XG4gICAgICAgICAgICBzZWFyY2hPdmVybGF5ID09PSBudWxsIHx8IHNlYXJjaE92ZXJsYXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaE92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGJ1dHRvbiA9PT0gbnVsbCB8fCBidXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcbiAgICBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgeyBsb2NhdGlvbiwgaGlzdG9yeSB9ID0gd2luZG93O1xuICAgICAgICBjb25zdCB1cmwgPSBwYXRoXzEuUk9PVF9QQVRIICsgJz9xPScgKyB2YWx1ZTtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgICAgcGF0aDogdXJsXG4gICAgICAgIH0sICcnLCB1cmwpO1xuICAgIH0pKTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJhZ1Nob3BwaW5nID0gKDAsIHF1ZXJ5XzEucXMpKCcuc2hvcHBpbmctLWJhZycpO1xuICAgIGNvbnN0IGNhcnRVc2VyID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2FydC0tdXNlcicpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2xvc2UtLWJ1dHRvbicsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBjcmVhdGVNb2RlbCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKCdjYXJ0LW1vZGVsJyk7XG4gICAgY29uc3Qgb25IYW5kbGVDYXJ0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoY2FydFVzZXIsICdhY3RpdmUtY2FydCcpO1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgJ2FmdGVyYmVnaW4nKTtcbiAgICAgICAgICAgIGNvbnN0IG1vZGVsRWxlbWVudCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcbiAgICAgICAgICAgIG1vZGVsRWxlbWVudCA9PT0gbnVsbCB8fCBtb2RlbEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGJhZ1Nob3BwaW5nID09PSBudWxsIHx8IGJhZ1Nob3BwaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiYWdTaG9wcGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSGFuZGxlQ2FydCk7XG4gICAgY2xvc2VCdXR0b24gPT09IG51bGwgfHwgY2xvc2VCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcbn0pKCk7XG4oZnVuY3Rpb24gKGQpIHtcbiAgICBjb25zdCBjYXJ0VXNlciA9ICgwLCBxdWVyeV8xLnFzKSgnLmNhcnQtLXVzZXInKTtcbiAgICBjb25zdCBoZWFkZXJDYXJ0ID0gKDAsIHF1ZXJ5XzEucXMpKCdoNScsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBib3hUb3RhbCA9ICgwLCBxdWVyeV8xLnFzKSgnLnRvdGFsLS1jaGVja291dCcsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBpdGVtc0NoZWNrb3V0ID0gKDAsIHF1ZXJ5XzEucXMpKCcuaXRlbXMnLCBjYXJ0VXNlcik7XG4gICAgY29uc3QgZ2V0Qm91bmRpbmdIZWFkZXIgPSBoZWFkZXJDYXJ0ID09PSBudWxsIHx8IGhlYWRlckNhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlckNhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm94VG90YWxCb3VuZGluZyA9IGJveFRvdGFsID09PSBudWxsIHx8IGJveFRvdGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBib3hUb3RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xufSkoZG9jdW1lbnQpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0eXBlXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3R5cGVcIik7XG5jb25zdCBjbGFzc0xpc3RfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jbGFzc0xpc3RcIik7XG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcbmNvbnN0IHZhbGlkYXRlSW5wdXRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy92YWxpZGF0b3IvdmFsaWRhdGVJbnB1dFwiKTtcbmNvbnN0IGVsZW1lbnRzID0gW107XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuICAgIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT0nc3VibWl0J11cIik7XG4gICAgYnV0dG9uU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjb25zdCBpbnNlcnRNZXNzYWdlQ2FsbGJhY2sgPSAodmFsdWVDYWxsYmFjaywgZWxlbWVudCwgbWVzc2FnZSwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgeyBpc1RvdWNoZWQsIGlzVmFsaWQgfSA9IHZhbHVlQ2FsbGJhY2s7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCZWZvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIGNvbnN0IGluZGV4RWxlbWVudCA9IGVsZW1lbnRzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5lbGVtZW50ID09PSBlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudHNbaW5kZXhFbGVtZW50XS5pc1ZhbGlkID0gaXNWYWxpZDtcbiAgICAgICAgaWYgKGlzVG91Y2hlZCAmJiAhaXNWYWxpZCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yLS1pbnB1dFwiKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsIHx8IHBhcmVudEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS1ncm91cFwiKSkge1xuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZUJlZm9yZSkge1xuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNFbGVtZW50XzEuaW5zZXJ0U3RyaW5nRWxlbWVudCkocGFyZW50RWxlbWVudCwgYDxwIGNsYXNzPVwiZXJyb3ItLW1lc3NhZ2VcIiBpZD0ke2lkfT4ke21lc3NhZ2V9PC9wPmAsIFwiYWZ0ZXJlbmRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZUJlZm9yZSA9PT0gbnVsbCB8fCBtZXNzYWdlQmVmb3JlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXNzYWdlQmVmb3JlLnJlbW92ZSgpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3ItLWlucHV0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbklzVmFsaWQgPSBlbGVtZW50cy5ldmVyeSgodmFsdWUpID0+IHZhbHVlLmlzVmFsaWQpO1xuICAgICAgICBpZiAoYnV0dG9uSXNWYWxpZCkge1xuICAgICAgICAgICAgYnV0dG9uU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlucHV0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSBpdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsaWRhdGVcIik7XG4gICAgICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgICAgICAgZWxlbWVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogaXRlbSxcbiAgICAgICAgICAgICAgICB0eXBlOiB2YWxpZGF0ZSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlXzEuRU1BSUw6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVtYWlsIGlzIG5vdCB2YWxpZCFcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlXzEuUEFTU1dPUkQ6XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXIsIG9uZSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgb25lIGNoYXJhY3RlclwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVfMS5SRVFVSVJFRDpcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJGaWVsZCBtdXN0IGJlIHJlcXVpcmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoMCwgdmFsaWRhdGVJbnB1dF8xLnZhbGlkYXRlSW5wdXQpKGl0ZW0sIHZhbGlkYXRlLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRNZXNzYWdlQ2FsbGJhY2sodmFsdWUsIGl0ZW0sIG1lc3NhZ2UsIGAke3ZhbGlkYXRlfS0taW5wdXRgKTtcbiAgICAgICAgICAgIH0sICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydE1lc3NhZ2VDYWxsYmFjayh2YWx1ZSwgaXRlbSwgbWVzc2FnZSwgYCR7dmFsaWRhdGV9LS1pbnB1dGApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBpbnB1dFBhc3N3b3JkID0gWy4uLmlucHV0XS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gdHlwZV8xLlBBU1NXT1JEKTtcbiAgICBpbnB1dFBhc3N3b3JkLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGkucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV5ZSA9IHBhcmVudEVsZW1lbnQgPT09IG51bGwgfHwgcGFyZW50RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaVwiKTtcbiAgICAgICAgICAgIGV5ZSA9PT0gbnVsbCB8fCBleWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV5ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ1dHRvbiA9ICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShleWUsIFwiY29sb3ItYmx1ZVwiKTtcbiAgICAgICAgICAgICAgICBhY3RpdmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgPyAoMCwgY2xhc3NMaXN0XzEuc2V0QXR0cmlidXRlRWxlbWVudCkoaSwgXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgICAgICAgICAgICAgICAgICA6ICgwLCBjbGFzc0xpc3RfMS5zZXRBdHRyaWJ1dGVFbGVtZW50KShpLCBcInR5cGVcIiwgXCJwYXNzd29yZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBleHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSB2b2lkIDA7XG5jb25zdCBjbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbn07XG5leHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSBjbGFzc0xpc3RUb2dnbGVFbGVtZW50O1xuY29uc3Qgc2V0QXR0cmlidXRlRWxlbWVudCA9IChlbGVtZW50LCBxdWVyeSwgdmFsdWUpID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShxdWVyeS50b1N0cmluZygpLCB2YWx1ZS50b1N0cmluZygpKTtcbn07XG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBzZXRBdHRyaWJ1dGVFbGVtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluc2VydFN0cmluZ0VsZW1lbnQgPSBleHBvcnRzLm1vZGVsRWxlbWVudCA9IGV4cG9ydHMuaW5zZXJ0RWxlbWVudCA9IHZvaWQgMDtcbmNvbnN0IGluc2VydEVsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcbiAgICBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiB8fCAnYmVmb3JlZW5kJywgZWxlbWVudEluc2VydCk7XG59O1xuZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gaW5zZXJ0RWxlbWVudDtcbmNvbnN0IG1vZGVsRWxlbWVudCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gYDxkaXYgY2xhc3M9XCJtb2RlbFwiIGlkPSR7aWQgfHwgXCJtb2RlbFwifT48L2Rpdj5gO1xuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcbn07XG5leHBvcnRzLm1vZGVsRWxlbWVudCA9IG1vZGVsRWxlbWVudDtcbmNvbnN0IGluc2VydFN0cmluZ0VsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcbiAgICByZXR1cm4gZWxlbWVudFBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24gfHwgXCJiZWZvcmVlbmRcIiwgZWxlbWVudEluc2VydCk7XG59O1xuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gaW5zZXJ0U3RyaW5nRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5naWQgPSBleHBvcnRzLnFzYSA9IGV4cG9ydHMucXMgPSB2b2lkIDA7XG5jb25zdCBxcyA9IChzZWxlY3RvciwgdGFyZ2V0T2JqZWN0ID0gZG9jdW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGFyZ2V0T2JqZWN0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufTtcbmV4cG9ydHMucXMgPSBxcztcbmNvbnN0IHFzYSA9IChzZWxlY3RvciwgdGFyZ2V0T2JqZWN0ID0gZG9jdW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGFyZ2V0T2JqZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xufTtcbmV4cG9ydHMucXNhID0gcXNhO1xuY29uc3QgZ2lkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbn07XG5leHBvcnRzLmdpZCA9IGdpZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1Bhc3N3b3JkID0gZXhwb3J0cy5pc0VtYWlsID0gZXhwb3J0cy5pc1JlcXVpcmVkID0gdm9pZCAwO1xuY29uc3QgdHJpbVN0cmluZyA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKTtcbn07XG5jb25zdCBpc1JlcXVpcmVkID0gKHN0cikgPT4ge1xuICAgIGlmICh0cmltU3RyaW5nKHN0cikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuZXhwb3J0cy5pc1JlcXVpcmVkID0gaXNSZXF1aXJlZDtcbmNvbnN0IGlzRW1haWwgPSAoc3RyKSA9PiB7XG4gICAgaWYgKCF0cmltU3RyaW5nKHN0cikuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbmV4cG9ydHMuaXNFbWFpbCA9IGlzRW1haWw7XG5jb25zdCBpc1Bhc3N3b3JkID0gKHN0cikgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gL14oPz0uKlxcZCkoPz0uKlshQCMkJV4mKl0pKD89LipbYS16XSkuezgsfSQvO1xuICAgIHJldHVybiByZWdleC50ZXN0KHN0cik7XG59O1xuZXhwb3J0cy5pc1Bhc3N3b3JkID0gaXNQYXNzd29yZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52YWxpZGF0ZUlucHV0ID0gdm9pZCAwO1xuY29uc3QgdHlwZV8xID0gcmVxdWlyZShcIi4uLy4uL2NvbnN0YW50cy90eXBlXCIpO1xuY29uc3QgaW5wdXRfMSA9IHJlcXVpcmUoXCIuL2lucHV0XCIpO1xuY29uc3QgdmFsaWRhdGVJbnB1dCA9IChpbnB1dCwgdHlwZVZhbGlkYXRlLCBjYklucHV0RXZlbnQsIGNiVG91Y2hlZCkgPT4ge1xuICAgIGxldCBpc1RvdWNoZWQgPSBmYWxzZTtcbiAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZVZhbGlkYXRlKSB7XG4gICAgICAgICAgICBjYXNlIHR5cGVfMS5FTUFJTDpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gKDAsIGlucHV0XzEuaXNFbWFpbCkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0eXBlXzEuUEFTU1dPUkQ6XG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9ICgwLCBpbnB1dF8xLmlzUGFzc3dvcmQpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdHlwZV8xLlJFUVVJUkVEOlxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gKDAsIGlucHV0XzEuaXNSZXF1aXJlZCkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNiSW5wdXRFdmVudCh7XG4gICAgICAgICAgICBpc1ZhbGlkLFxuICAgICAgICAgICAgaXNUb3VjaGVkLFxuICAgICAgICAgICAgdHlwZTogJ2lucHV0J1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlucHV0Lm9uYmx1ciA9ICgpID0+IHtcbiAgICAgICAgaXNUb3VjaGVkID0gdHJ1ZTtcbiAgICAgICAgY2JUb3VjaGVkKHtcbiAgICAgICAgICAgIGlzVmFsaWQsXG4gICAgICAgICAgICBpc1RvdWNoZWQsXG4gICAgICAgICAgICB0eXBlOiAndG91Y2hlZCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpc1ZhbGlkLFxuICAgICAgICBpc1RvdWNoZWQsXG4gICAgfTtcbn07XG5leHBvcnRzLnZhbGlkYXRlSW5wdXQgPSB2YWxpZGF0ZUlucHV0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2xvZ2luLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90cy9oZWFkZXIudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9