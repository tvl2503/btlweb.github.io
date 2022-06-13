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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL2NvbnN0YW50cy9wYXRoLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvY29uc3RhbnRzL3R5cGUudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy90cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy90cy9sb2dpbi50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2NsYXNzTGlzdC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvcXVlcnkudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy92YWxpZGF0b3IvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy92YWxpZGF0b3IvdmFsaWRhdGVJbnB1dC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBpbnNlcnRTdHJpbmdFbGVtZW50LCBtb2RlbEVsZW1lbnQgfSBmcm9tICcuLi9zcmMvdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnQnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1tZW51XCIpXG4gICAgY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi10b2dnbGUnKVxuICAgIGNvbnN0IG5hdkNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi1jbG9zZScpO1xuXG5cbiAgICBjb25zdCBjYWxsYmFjayA9IChhY3RpdmVWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uLS1tb2RlbCcpO1xuICAgICAgICBhY3RpdmVWYWx1ZSA/IGluc2VydFN0cmluZ0VsZW1lbnQoZG9jdW1lbnQuYm9keSwgbW9kZWxFbGVtZW50KCduYXZpZ2F0aW9uLS1tb2RlbCcpKSA6IG1vZGVsLnJlbW92ZSgpO1xuXG4gICAgICAgIGNvbnN0IG1vZGVsQWZ0ZXJJbnNlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbi0tbW9kZWwnKTtcbiAgICAgICAgaWYgKG1vZGVsQWZ0ZXJJbnNlcnQpIHtcbiAgICAgICAgICAgIG1vZGVsQWZ0ZXJJbnNlcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlzQWN0aXZlID0gbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgY2FsbGJhY2soaXNBY3RpdmUpXG4gICAgfVxuICAgIG5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICBuYXZDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJPT1RfUEFUSCA9IHZvaWQgMDtcclxuZXhwb3J0cy5ST09UX1BBVEggPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fSR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVVBMT0FEX0tFWSA9IGV4cG9ydHMuUkVRVUlSRUQgPSBleHBvcnRzLlBBU1NXT1JEID0gZXhwb3J0cy5FTUFJTCA9IHZvaWQgMDtcclxuZXhwb3J0cy5FTUFJTCA9ICdlbWFpbCc7XHJcbmV4cG9ydHMuUEFTU1dPUkQgPSAncGFzc3dvcmQnO1xyXG5leHBvcnRzLlJFUVVJUkVEID0gJ3JlcXVpcmVkJztcclxuZXhwb3J0cy5VUExPQURfS0VZID0gJ2ZpbGVfdXBsb2FkJztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBwYXRoXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL3BhdGhcIik7XHJcbmNvbnN0IGNsYXNzTGlzdF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2NsYXNzTGlzdFwiKTtcclxuY29uc3QgdXRpbHNFbGVtZW50XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZWxlbWVudC91dGlsc0VsZW1lbnRcIik7XHJcbmNvbnN0IHF1ZXJ5XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvcXVlcnlcIik7XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZmlyc3RTY3JvbGwgPSAwO1xyXG4gICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAwO1xyXG4gICAgY29uc3QgZGVib3VuZFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gKDAsIHF1ZXJ5XzEucXMpKCcjaGVhZGVyJyk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICAgICAgY3VycmVudFNjcm9sbCA9IG9mZnNldDtcclxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGZpcnN0U2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGhlYWRlciA9PT0gbnVsbCB8fCBoZWFkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVib3VuZC1zY3JvbGxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRlYm91bmQtc2Nyb2xsXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkZWJvdW5kU2Nyb2xsSGFuZGxlcik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9ICgwLCBxdWVyeV8xLnFzKSgnLmJ0bi1zZWFyY2gnKTtcclxuICAgIGNvbnN0IGhlYWRlciA9ICgwLCBxdWVyeV8xLnFzKShcIi5jb250YWluZXItLXNlYXJjaFwiKTtcclxuICAgIGNvbnN0IGlucHV0ID0gKDAsIHF1ZXJ5XzEucXMpKFwiaW5wdXRcIiwgaGVhZGVyKTtcclxuICAgIGNvbnN0IHRvZ2dsZUhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWFyY2hGaWVsZElzT3BlbiA9ICgwLCBjbGFzc0xpc3RfMS5jbGFzc0xpc3RUb2dnbGVFbGVtZW50KShoZWFkZXIsIFwicmVzZXQtLXRyYW5zbGF0ZVwiKTtcclxuICAgICAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKFwib3ZlcmxheS0tc2VhcmNoXCIpO1xyXG4gICAgICAgIGlmIChzZWFyY2hGaWVsZElzT3Blbikge1xyXG4gICAgICAgICAgICAoMCwgdXRpbHNFbGVtZW50XzEuaW5zZXJ0U3RyaW5nRWxlbWVudCkoZG9jdW1lbnQuYm9keSwgb3ZlcmxheUVsZW1lbnQsIFwiYWZ0ZXJiZWdpblwiKTtcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheVNlYXJjaCA9ICgwLCBxdWVyeV8xLnFzKShcIiNvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2ggPT09IG51bGwgfHwgb3ZlcmxheVNlYXJjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3ZlcmxheVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXMuZGVsZXRlKCdxJyk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBwYXRoXzEuUk9PVF9QQVRIXHJcbiAgICAgICAgICAgIH0sICcnLCBwYXRoXzEuUk9PVF9QQVRIKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoT3ZlcmxheSA9ICgwLCBxdWVyeV8xLnFzKShcIiNvdmVybGF5LS1zZWFyY2hcIik7XHJcbiAgICAgICAgICAgIHNlYXJjaE92ZXJsYXkgPT09IG51bGwgfHwgc2VhcmNoT3ZlcmxheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VhcmNoT3ZlcmxheS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYnV0dG9uID09PSBudWxsIHx8IGJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVIZWFkZXIpO1xyXG4gICAgaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBjb25zdCB7IGxvY2F0aW9uLCBoaXN0b3J5IH0gPSB3aW5kb3c7XHJcbiAgICAgICAgY29uc3QgdXJsID0gcGF0aF8xLlJPT1RfUEFUSCArICc/cT0nICsgdmFsdWU7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xyXG4gICAgICAgICAgICBwYXRoOiB1cmxcclxuICAgICAgICB9LCAnJywgdXJsKTtcclxuICAgIH0pKTtcclxufSkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgdHlwZV8xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy90eXBlXCIpO1xyXG5jb25zdCBjbGFzc0xpc3RfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jbGFzc0xpc3RcIik7XHJcbmNvbnN0IHV0aWxzRWxlbWVudF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50XCIpO1xyXG5jb25zdCB2YWxpZGF0ZUlucHV0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmFsaWRhdG9yL3ZhbGlkYXRlSW5wdXRcIik7XHJcbmNvbnN0IGVsZW1lbnRzID0gW107XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IGJ1dHRvblN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT0nc3VibWl0J11cIik7XHJcbiAgICBidXR0b25TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgaW5zZXJ0TWVzc2FnZUNhbGxiYWNrID0gKHZhbHVlQ2FsbGJhY2ssIGVsZW1lbnQsIG1lc3NhZ2UsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpc1RvdWNoZWQsIGlzVmFsaWQgfSA9IHZhbHVlQ2FsbGJhY2s7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUJlZm9yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICBjb25zdCBpbmRleEVsZW1lbnQgPSBlbGVtZW50cy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZWxlbWVudCA9PT0gZWxlbWVudCk7XHJcbiAgICAgICAgZWxlbWVudHNbaW5kZXhFbGVtZW50XS5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICBpZiAoaXNUb3VjaGVkICYmICFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVycm9yLS1pbnB1dFwiKTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgPT09IG51bGwgfHwgcGFyZW50RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmb3JtLWdyb3VwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2VCZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAoMCwgdXRpbHNFbGVtZW50XzEuaW5zZXJ0U3RyaW5nRWxlbWVudCkocGFyZW50RWxlbWVudCwgYDxwIGNsYXNzPVwiZXJyb3ItLW1lc3NhZ2VcIiBpZD0ke2lkfT4ke21lc3NhZ2V9PC9wPmAsIFwiYWZ0ZXJlbmRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VCZWZvcmUgPT09IG51bGwgfHwgbWVzc2FnZUJlZm9yZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZUJlZm9yZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3ItLWlucHV0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXR0b25Jc1ZhbGlkID0gZWxlbWVudHMuZXZlcnkoKHZhbHVlKSA9PiB2YWx1ZS5pc1ZhbGlkKTtcclxuICAgICAgICBpZiAoYnV0dG9uSXNWYWxpZCkge1xyXG4gICAgICAgICAgICBidXR0b25TdWJtaXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaW5wdXQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbGlkYXRlXCIpO1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB2YWxpZGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodmFsaWRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZV8xLkVNQUlMOlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkVtYWlsIGlzIG5vdCB2YWxpZCFcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgdHlwZV8xLlBBU1NXT1JEOlxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlBhc3N3b3JkIG11c3QgaGF2ZSBhdCBsZWFzdCA4IGNoYXJhY3Rlciwgb25lIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBvbmUgY2hhcmFjdGVyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVfMS5SRVFVSVJFRDpcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRmllbGQgbXVzdCBiZSByZXF1aXJlZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICgwLCB2YWxpZGF0ZUlucHV0XzEudmFsaWRhdGVJbnB1dCkoaXRlbSwgdmFsaWRhdGUsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0TWVzc2FnZUNhbGxiYWNrKHZhbHVlLCBpdGVtLCBtZXNzYWdlLCBgJHt2YWxpZGF0ZX0tLWlucHV0YCk7XHJcbiAgICAgICAgICAgIH0sICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0TWVzc2FnZUNhbGxiYWNrKHZhbHVlLCBpdGVtLCBtZXNzYWdlLCBgJHt2YWxpZGF0ZX0tLWlucHV0YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IFsuLi5pbnB1dF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IHR5cGVfMS5QQVNTV09SRCk7XHJcbiAgICBpbnB1dFBhc3N3b3JkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gaS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV5ZSA9IHBhcmVudEVsZW1lbnQgPT09IG51bGwgfHwgcGFyZW50RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaVwiKTtcclxuICAgICAgICAgICAgZXllID09PSBudWxsIHx8IGV5ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXllLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhY3RpdmVCdXR0b24gPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoZXllLCBcImNvbG9yLWJsdWVcIik7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICA/ICgwLCBjbGFzc0xpc3RfMS5zZXRBdHRyaWJ1dGVFbGVtZW50KShpLCBcInR5cGVcIiwgXCJ0ZXh0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoMCwgY2xhc3NMaXN0XzEuc2V0QXR0cmlidXRlRWxlbWVudCkoaSwgXCJ0eXBlXCIsIFwicGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNldEF0dHJpYnV0ZUVsZW1lbnQgPSBleHBvcnRzLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSB2b2lkIDA7XHJcbmNvbnN0IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XHJcbn07XHJcbmV4cG9ydHMuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IGNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQ7XHJcbmNvbnN0IHNldEF0dHJpYnV0ZUVsZW1lbnQgPSAoZWxlbWVudCwgcXVlcnksIHZhbHVlKSA9PiB7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShxdWVyeS50b1N0cmluZygpLCB2YWx1ZS50b1N0cmluZygpKTtcclxufTtcclxuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gc2V0QXR0cmlidXRlRWxlbWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBleHBvcnRzLmluc2VydEVsZW1lbnQgPSB2b2lkIDA7XHJcbmNvbnN0IGluc2VydEVsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcclxuICAgIGVsZW1lbnRQYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KHBvc2l0aW9uIHx8ICdiZWZvcmVlbmQnLCBlbGVtZW50SW5zZXJ0KTtcclxufTtcclxuZXhwb3J0cy5pbnNlcnRFbGVtZW50ID0gaW5zZXJ0RWxlbWVudDtcclxuY29uc3QgbW9kZWxFbGVtZW50ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGA8ZGl2IGNsYXNzPVwibW9kZWxcIiBpZD0ke2lkIHx8IFwibW9kZWxcIn0+PC9kaXY+YDtcclxuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcclxufTtcclxuZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBtb2RlbEVsZW1lbnQ7XHJcbmNvbnN0IGluc2VydFN0cmluZ0VsZW1lbnQgPSAoZWxlbWVudFBhcmVudCwgZWxlbWVudEluc2VydCwgcG9zaXRpb24pID0+IHtcclxuICAgIHJldHVybiBlbGVtZW50UGFyZW50Lmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiB8fCBcImJlZm9yZWVuZFwiLCBlbGVtZW50SW5zZXJ0KTtcclxufTtcclxuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gaW5zZXJ0U3RyaW5nRWxlbWVudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5naWQgPSBleHBvcnRzLnFzYSA9IGV4cG9ydHMucXMgPSB2b2lkIDA7XHJcbmNvbnN0IHFzID0gKHNlbGVjdG9yLCB0YXJnZXRPYmplY3QgPSBkb2N1bWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIHRhcmdldE9iamVjdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxufTtcclxuZXhwb3J0cy5xcyA9IHFzO1xyXG5jb25zdCBxc2EgPSAoc2VsZWN0b3IsIHRhcmdldE9iamVjdCA9IGRvY3VtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gdGFyZ2V0T2JqZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG59O1xyXG5leHBvcnRzLnFzYSA9IHFzYTtcclxuY29uc3QgZ2lkID0gKGlkKSA9PiB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG59O1xyXG5leHBvcnRzLmdpZCA9IGdpZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc1Bhc3N3b3JkID0gZXhwb3J0cy5pc0VtYWlsID0gZXhwb3J0cy5pc1JlcXVpcmVkID0gdm9pZCAwO1xyXG5jb25zdCB0cmltU3RyaW5nID0gKHN0cikgPT4ge1xyXG4gICAgcmV0dXJuIHN0ci50cmltKCk7XHJcbn07XHJcbmNvbnN0IGlzUmVxdWlyZWQgPSAoc3RyKSA9PiB7XHJcbiAgICBpZiAodHJpbVN0cmluZyhzdHIpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5leHBvcnRzLmlzUmVxdWlyZWQgPSBpc1JlcXVpcmVkO1xyXG5jb25zdCBpc0VtYWlsID0gKHN0cikgPT4ge1xyXG4gICAgaWYgKCF0cmltU3RyaW5nKHN0cikuaW5jbHVkZXMoJ0AnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5leHBvcnRzLmlzRW1haWwgPSBpc0VtYWlsO1xyXG5jb25zdCBpc1Bhc3N3b3JkID0gKHN0cikgPT4ge1xyXG4gICAgY29uc3QgcmVnZXggPSAvXig/PS4qXFxkKSg/PS4qWyFAIyQlXiYqXSkoPz0uKlthLXpdKS57OCx9JC87XHJcbiAgICByZXR1cm4gcmVnZXgudGVzdChzdHIpO1xyXG59O1xyXG5leHBvcnRzLmlzUGFzc3dvcmQgPSBpc1Bhc3N3b3JkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnZhbGlkYXRlSW5wdXQgPSB2b2lkIDA7XHJcbmNvbnN0IHR5cGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdGFudHMvdHlwZVwiKTtcclxuY29uc3QgaW5wdXRfMSA9IHJlcXVpcmUoXCIuL2lucHV0XCIpO1xyXG5jb25zdCB2YWxpZGF0ZUlucHV0ID0gKGlucHV0LCB0eXBlVmFsaWRhdGUsIGNiSW5wdXRFdmVudCwgY2JUb3VjaGVkKSA9PiB7XHJcbiAgICBsZXQgaXNUb3VjaGVkID0gZmFsc2U7XHJcbiAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgaW5wdXQub25pbnB1dCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAodHlwZVZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdHlwZV8xLkVNQUlMOlxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9ICgwLCBpbnB1dF8xLmlzRW1haWwpKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHR5cGVfMS5QQVNTV09SRDpcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQgPSAoMCwgaW5wdXRfMS5pc1Bhc3N3b3JkKSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0eXBlXzEuUkVRVUlSRUQ6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gKDAsIGlucHV0XzEuaXNSZXF1aXJlZCkodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYklucHV0RXZlbnQoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICBpc1RvdWNoZWQsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbnB1dCdcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBpbnB1dC5vbmJsdXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaXNUb3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICBjYlRvdWNoZWQoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgICAgICBpc1RvdWNoZWQsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0b3VjaGVkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICBpc1RvdWNoZWQsXHJcbiAgICB9O1xyXG59O1xyXG5leHBvcnRzLnZhbGlkYXRlSW5wdXQgPSB2YWxpZGF0ZUlucHV0O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvbG9naW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2hlYWRlci50c1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=