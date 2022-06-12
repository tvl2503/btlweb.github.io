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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOzs7Ozs7O1VDeENyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL2pzL2luZGV4LmpzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvY29uc3RhbnRzL3BhdGgudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy9jb25zdGFudHMvdHlwZS50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3RzL2xvZ2luLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvY2xhc3NMaXN0LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9xdWVyeS50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3ZhbGlkYXRvci9pbnB1dC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3ZhbGlkYXRvci92YWxpZGF0ZUlucHV0LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGluc2VydFN0cmluZ0VsZW1lbnQsIG1vZGVsRWxlbWVudCB9IGZyb20gJy4uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LW1lbnVcIilcbiAgICBjb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LXRvZ2dsZScpXG4gICAgY29uc3QgbmF2Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWNsb3NlJyk7XG5cblxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGFjdGl2ZVZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XG4gICAgICAgIGFjdGl2ZVZhbHVlID8gaW5zZXJ0U3RyaW5nRWxlbWVudChkb2N1bWVudC5ib2R5LCBtb2RlbEVsZW1lbnQoJ25hdmlnYXRpb24tLW1vZGVsJykpIDogbW9kZWwucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgbW9kZWxBZnRlckluc2VydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xuICAgICAgICBpZiAobW9kZWxBZnRlckluc2VydCkge1xuICAgICAgICAgICAgbW9kZWxBZnRlckluc2VydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgaXNBY3RpdmUgPSBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBjYWxsYmFjayhpc0FjdGl2ZSlcbiAgICB9XG4gICAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgIG5hdkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUk9PVF9QQVRIID0gdm9pZCAwO1xyXG5leHBvcnRzLlJPT1RfUEFUSCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5VUExPQURfS0VZID0gZXhwb3J0cy5SRVFVSVJFRCA9IGV4cG9ydHMuUEFTU1dPUkQgPSBleHBvcnRzLkVNQUlMID0gdm9pZCAwO1xyXG5leHBvcnRzLkVNQUlMID0gJ2VtYWlsJztcclxuZXhwb3J0cy5QQVNTV09SRCA9ICdwYXNzd29yZCc7XHJcbmV4cG9ydHMuUkVRVUlSRUQgPSAncmVxdWlyZWQnO1xyXG5leHBvcnRzLlVQTE9BRF9LRVkgPSAnZmlsZV91cGxvYWQnO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcGF0aFwiKTtcclxuY29uc3QgY2xhc3NMaXN0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2xhc3NMaXN0XCIpO1xyXG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcclxuY29uc3QgcXVlcnlfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9xdWVyeVwiKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBmaXJzdFNjcm9sbCA9IDA7XHJcbiAgICBsZXQgY3VycmVudFNjcm9sbCA9IDA7XHJcbiAgICBjb25zdCBkZWJvdW5kU2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoJyNoZWFkZXInKTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgICAgICBjdXJyZW50U2Nyb2xsID0gb2Zmc2V0O1xyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gZmlyc3RTY3JvbGwpIHtcclxuICAgICAgICAgICAgaGVhZGVyID09PSBudWxsIHx8IGhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWJvdW5kLXNjcm9sbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZGVib3VuZC1zY3JvbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpcnN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRlYm91bmRTY3JvbGxIYW5kbGVyKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gKDAsIHF1ZXJ5XzEucXMpKCcuYnRuLXNlYXJjaCcpO1xyXG4gICAgY29uc3QgaGVhZGVyID0gKDAsIHF1ZXJ5XzEucXMpKFwiLmNvbnRhaW5lci0tc2VhcmNoXCIpO1xyXG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcXVlcnlfMS5xcykoXCJpbnB1dFwiLCBoZWFkZXIpO1xyXG4gICAgY29uc3QgdG9nZ2xlSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEZpZWxkSXNPcGVuID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGhlYWRlciwgXCJyZXNldC0tdHJhbnNsYXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgaWYgKHNlYXJjaEZpZWxkSXNPcGVuKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBvdmVybGF5RWxlbWVudCwgXCJhZnRlcmJlZ2luXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcclxuICAgICAgICAgICAgb3ZlcmxheVNlYXJjaCA9PT0gbnVsbCB8fCBvdmVybGF5U2VhcmNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvdmVybGF5U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVIZWFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtcy5kZWxldGUoJ3EnKTtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGhfMS5ST09UX1BBVEhcclxuICAgICAgICAgICAgfSwgJycsIHBhdGhfMS5ST09UX1BBVEgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hPdmVybGF5ID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcclxuICAgICAgICAgICAgc2VhcmNoT3ZlcmxheSA9PT0gbnVsbCB8fCBzZWFyY2hPdmVybGF5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWFyY2hPdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBidXR0b24gPT09IG51bGwgfHwgYnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUhlYWRlcik7XHJcbiAgICBpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHsgbG9jYXRpb24sIGhpc3RvcnkgfSA9IHdpbmRvdztcclxuICAgICAgICBjb25zdCB1cmwgPSBwYXRoXzEuUk9PVF9QQVRIICsgJz9xPScgKyB2YWx1ZTtcclxuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7XHJcbiAgICAgICAgICAgIHBhdGg6IHVybFxyXG4gICAgICAgIH0sICcnLCB1cmwpO1xyXG4gICAgfSkpO1xyXG59KSgpO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYmFnU2hvcHBpbmcgPSAoMCwgcXVlcnlfMS5xcykoJy5zaG9wcGluZy0tYmFnJyk7XHJcbiAgICBjb25zdCBjYXJ0VXNlciA9ICgwLCBxdWVyeV8xLnFzKSgnLmNhcnQtLXVzZXInKTtcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gKDAsIHF1ZXJ5XzEucXMpKCcuY2xvc2UtLWJ1dHRvbicsIGNhcnRVc2VyKTtcclxuICAgIGNvbnN0IGNyZWF0ZU1vZGVsID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoJ2NhcnQtbW9kZWwnKTtcclxuICAgIGNvbnN0IG9uSGFuZGxlQ2FydCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9ICgwLCBxdWVyeV8xLmdpZCkoJ2NhcnQtbW9kZWwnKTtcclxuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShjYXJ0VXNlciwgJ2FjdGl2ZS1jYXJ0Jyk7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgJ2FmdGVyYmVnaW4nKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kZWxFbGVtZW50ID0gKDAsIHF1ZXJ5XzEuZ2lkKSgnY2FydC1tb2RlbCcpO1xyXG4gICAgICAgICAgICBtb2RlbEVsZW1lbnQgPT09IG51bGwgfHwgbW9kZWxFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkhhbmRsZUNhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbW9kZWwgPT09IG51bGwgfHwgbW9kZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBiYWdTaG9wcGluZyA9PT0gbnVsbCB8fCBiYWdTaG9wcGluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYmFnU2hvcHBpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkhhbmRsZUNhcnQpO1xyXG4gICAgY2xvc2VCdXR0b24gPT09IG51bGwgfHwgY2xvc2VCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25IYW5kbGVDYXJ0KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uIChkKSB7XHJcbiAgICBjb25zdCBjYXJ0VXNlciA9ICgwLCBxdWVyeV8xLnFzKSgnLmNhcnQtLXVzZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckNhcnQgPSAoMCwgcXVlcnlfMS5xcykoJ2g1JywgY2FydFVzZXIpO1xyXG4gICAgY29uc3QgYm94VG90YWwgPSAoMCwgcXVlcnlfMS5xcykoJy50b3RhbC0tY2hlY2tvdXQnLCBjYXJ0VXNlcik7XHJcbiAgICBjb25zdCBpdGVtc0NoZWNrb3V0ID0gKDAsIHF1ZXJ5XzEucXMpKCcuaXRlbXMnLCBjYXJ0VXNlcik7XHJcbiAgICBjb25zdCBnZXRCb3VuZGluZ0hlYWRlciA9IGhlYWRlckNhcnQgPT09IG51bGwgfHwgaGVhZGVyQ2FydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyQ2FydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGJveFRvdGFsQm91bmRpbmcgPSBib3hUb3RhbCA9PT0gbnVsbCB8fCBib3hUb3RhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm94VG90YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xyXG59KShkb2N1bWVudCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHR5cGVfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvdHlwZVwiKTtcclxuY29uc3QgY2xhc3NMaXN0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvY2xhc3NMaXN0XCIpO1xyXG5jb25zdCB1dGlsc0VsZW1lbnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudFwiKTtcclxuY29uc3QgdmFsaWRhdGVJbnB1dF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZhbGlkYXRvci92YWxpZGF0ZUlucHV0XCIpO1xyXG5jb25zdCBlbGVtZW50cyA9IFtdO1xyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBidXR0b25TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpO1xyXG4gICAgYnV0dG9uU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGNvbnN0IGluc2VydE1lc3NhZ2VDYWxsYmFjayA9ICh2YWx1ZUNhbGxiYWNrLCBlbGVtZW50LCBtZXNzYWdlLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaXNUb3VjaGVkLCBpc1ZhbGlkIH0gPSB2YWx1ZUNhbGxiYWNrO1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VCZWZvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhFbGVtZW50ID0gZWxlbWVudHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmVsZW1lbnQgPT09IGVsZW1lbnQpO1xyXG4gICAgICAgIGVsZW1lbnRzW2luZGV4RWxlbWVudF0uaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKGlzVG91Y2hlZCAmJiAhaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlcnJvci0taW5wdXRcIik7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRFbGVtZW50ID09PSBudWxsIHx8IHBhcmVudEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS1ncm91cFwiKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlQmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKHBhcmVudEVsZW1lbnQsIGA8cCBjbGFzcz1cImVycm9yLS1tZXNzYWdlXCIgaWQ9JHtpZH0+JHttZXNzYWdlfTwvcD5gLCBcImFmdGVyZW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlQmVmb3JlID09PSBudWxsIHx8IG1lc3NhZ2VCZWZvcmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2VCZWZvcmUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yLS1pbnB1dFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnV0dG9uSXNWYWxpZCA9IGVsZW1lbnRzLmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUuaXNWYWxpZCk7XHJcbiAgICAgICAgaWYgKGJ1dHRvbklzVmFsaWQpIHtcclxuICAgICAgICAgICAgYnV0dG9uU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGlucHV0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxpZGF0ZVwiKTtcclxuICAgICAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBpdGVtLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdmFsaWRhdGUsXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVfMS5FTUFJTDpcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFbWFpbCBpcyBub3QgdmFsaWQhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVfMS5QQVNTV09SRDpcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJQYXNzd29yZCBtdXN0IGhhdmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXIsIG9uZSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgb25lIGNoYXJhY3RlclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlXzEuUkVRVUlSRUQ6XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkZpZWxkIG11c3QgYmUgcmVxdWlyZWRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAoMCwgdmFsaWRhdGVJbnB1dF8xLnZhbGlkYXRlSW5wdXQpKGl0ZW0sIHZhbGlkYXRlLCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGluc2VydE1lc3NhZ2VDYWxsYmFjayh2YWx1ZSwgaXRlbSwgbWVzc2FnZSwgYCR7dmFsaWRhdGV9LS1pbnB1dGApO1xyXG4gICAgICAgICAgICB9LCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGluc2VydE1lc3NhZ2VDYWxsYmFjayh2YWx1ZSwgaXRlbSwgbWVzc2FnZSwgYCR7dmFsaWRhdGV9LS1pbnB1dGApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBbLi4uaW5wdXRdLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSB0eXBlXzEuUEFTU1dPUkQpO1xyXG4gICAgaW5wdXRQYXNzd29yZC5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGkucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBleWUgPSBwYXJlbnRFbGVtZW50ID09PSBudWxsIHx8IHBhcmVudEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImlcIik7XHJcbiAgICAgICAgICAgIGV5ZSA9PT0gbnVsbCB8fCBleWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV5ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlQnV0dG9uID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGV5ZSwgXCJjb2xvci1ibHVlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoMCwgY2xhc3NMaXN0XzEuc2V0QXR0cmlidXRlRWxlbWVudCkoaSwgXCJ0eXBlXCIsIFwidGV4dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKDAsIGNsYXNzTGlzdF8xLnNldEF0dHJpYnV0ZUVsZW1lbnQpKGksIFwidHlwZVwiLCBcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gZXhwb3J0cy5jbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gdm9pZCAwO1xyXG5jb25zdCBjbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xyXG59O1xyXG5leHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSBjbGFzc0xpc3RUb2dnbGVFbGVtZW50O1xyXG5jb25zdCBzZXRBdHRyaWJ1dGVFbGVtZW50ID0gKGVsZW1lbnQsIHF1ZXJ5LCB2YWx1ZSkgPT4ge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocXVlcnkudG9TdHJpbmcoKSwgdmFsdWUudG9TdHJpbmcoKSk7XHJcbn07XHJcbmV4cG9ydHMuc2V0QXR0cmlidXRlRWxlbWVudCA9IHNldEF0dHJpYnV0ZUVsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGV4cG9ydHMubW9kZWxFbGVtZW50ID0gZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gdm9pZCAwO1xyXG5jb25zdCBpbnNlcnRFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50RWxlbWVudChwb3NpdGlvbiB8fCAnYmVmb3JlZW5kJywgZWxlbWVudEluc2VydCk7XHJcbn07XHJcbmV4cG9ydHMuaW5zZXJ0RWxlbWVudCA9IGluc2VydEVsZW1lbnQ7XHJcbmNvbnN0IG1vZGVsRWxlbWVudCA9IChpZCkgPT4ge1xyXG4gICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBgPGRpdiBjbGFzcz1cIm1vZGVsXCIgaWQ9JHtpZCB8fCBcIm1vZGVsXCJ9PjwvZGl2PmA7XHJcbiAgICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XHJcbn07XHJcbmV4cG9ydHMubW9kZWxFbGVtZW50ID0gbW9kZWxFbGVtZW50O1xyXG5jb25zdCBpbnNlcnRTdHJpbmdFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudFBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwocG9zaXRpb24gfHwgXCJiZWZvcmVlbmRcIiwgZWxlbWVudEluc2VydCk7XHJcbn07XHJcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGluc2VydFN0cmluZ0VsZW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2lkID0gZXhwb3J0cy5xc2EgPSBleHBvcnRzLnFzID0gdm9pZCAwO1xyXG5jb25zdCBxcyA9IChzZWxlY3RvciwgdGFyZ2V0T2JqZWN0ID0gZG9jdW1lbnQpID0+IHtcclxuICAgIHJldHVybiB0YXJnZXRPYmplY3QucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbn07XHJcbmV4cG9ydHMucXMgPSBxcztcclxuY29uc3QgcXNhID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIHRhcmdldE9iamVjdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxufTtcclxuZXhwb3J0cy5xc2EgPSBxc2E7XHJcbmNvbnN0IGdpZCA9IChpZCkgPT4ge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxufTtcclxuZXhwb3J0cy5naWQgPSBnaWQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaXNQYXNzd29yZCA9IGV4cG9ydHMuaXNFbWFpbCA9IGV4cG9ydHMuaXNSZXF1aXJlZCA9IHZvaWQgMDtcclxuY29uc3QgdHJpbVN0cmluZyA9IChzdHIpID0+IHtcclxuICAgIHJldHVybiBzdHIudHJpbSgpO1xyXG59O1xyXG5jb25zdCBpc1JlcXVpcmVkID0gKHN0cikgPT4ge1xyXG4gICAgaWYgKHRyaW1TdHJpbmcoc3RyKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuZXhwb3J0cy5pc1JlcXVpcmVkID0gaXNSZXF1aXJlZDtcclxuY29uc3QgaXNFbWFpbCA9IChzdHIpID0+IHtcclxuICAgIGlmICghdHJpbVN0cmluZyhzdHIpLmluY2x1ZGVzKCdAJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcclxuZXhwb3J0cy5pc0VtYWlsID0gaXNFbWFpbDtcclxuY29uc3QgaXNQYXNzd29yZCA9IChzdHIpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gL14oPz0uKlxcZCkoPz0uKlshQCMkJV4mKl0pKD89LipbYS16XSkuezgsfSQvO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyKTtcclxufTtcclxuZXhwb3J0cy5pc1Bhc3N3b3JkID0gaXNQYXNzd29yZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy52YWxpZGF0ZUlucHV0ID0gdm9pZCAwO1xyXG5jb25zdCB0eXBlXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzL3R5cGVcIik7XHJcbmNvbnN0IGlucHV0XzEgPSByZXF1aXJlKFwiLi9pbnB1dFwiKTtcclxuY29uc3QgdmFsaWRhdGVJbnB1dCA9IChpbnB1dCwgdHlwZVZhbGlkYXRlLCBjYklucHV0RXZlbnQsIGNiVG91Y2hlZCkgPT4ge1xyXG4gICAgbGV0IGlzVG91Y2hlZCA9IGZhbHNlO1xyXG4gICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVWYWxpZGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVfMS5FTUFJTDpcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSAoMCwgaW5wdXRfMS5pc0VtYWlsKSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0eXBlXzEuUEFTU1dPUkQ6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gKDAsIGlucHV0XzEuaXNQYXNzd29yZCkodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZV8xLlJFUVVJUkVEOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9ICgwLCBpbnB1dF8xLmlzUmVxdWlyZWQpKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2JJbnB1dEV2ZW50KHtcclxuICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgaXNUb3VjaGVkLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW5wdXQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgaW5wdXQub25ibHVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlzVG91Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2JUb3VjaGVkKHtcclxuICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgaXNUb3VjaGVkLFxyXG4gICAgICAgICAgICB0eXBlOiAndG91Y2hlZCdcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgaXNUb3VjaGVkLFxyXG4gICAgfTtcclxufTtcclxuZXhwb3J0cy52YWxpZGF0ZUlucHV0ID0gdmFsaWRhdGVJbnB1dDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2xvZ2luLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90cy9oZWFkZXIudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9