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
  
  /***/ "./src/ts/checkout.ts":
  /*!****************************!*\
    !*** ./src/ts/checkout.ts ***!
    \****************************/
  /***/ ((__unused_webpack_module, exports, __webpack_require__) => {
  
  
  Object.defineProperty(exports, "__esModule", ({ value: true }));
  const query_1 = __webpack_require__(/*! ../utils/query */ "./src/utils/query.ts");
  const state_1 = __webpack_require__(/*! ../utils/state */ "./src/utils/state.ts");
  const string_1 = __webpack_require__(/*! ../utils/string */ "./src/utils/string.ts");
  const input_1 = __webpack_require__(/*! ../utils/validator/input */ "./src/utils/validator/input.ts");
  const OR = 'or';
  const AND = 'and';
  const INFO = 'infoUser';
  const USERNAME = 'username';
  const ADDRESS = 'address';
  const onChangeInput = (element, onGetValue, callbackTouched) => {
      const onChange = (event) => {
          const { value } = event.target;
          if (onGetValue) {
              onGetValue(value);
          }
      };
      const onTouch = (_) => {
          if (callbackTouched) {
              callbackTouched();
          }
      };
      element === null || element === void 0 ? void 0 : element.addEventListener('blur', onTouch);
      element === null || element === void 0 ? void 0 : element.addEventListener('input', onChange);
  };
  (function () {
      const [info, setInfo] = (0, state_1.useState)({
          [INFO]: '',
          validate: [input_1.isEmail, input_1.isMobilePhone],
          operator: OR,
          isTouched: false
      });
      const [usernameUser, setUserNameUser] = (0, state_1.useState)({
          [USERNAME]: '',
          validate: [input_1.isRequired],
          isTouched: false
      });
      const [addressUser, setAddressUser] = (0, state_1.useState)({
          validate: [input_1.isRequired],
          [ADDRESS]: '',
          isTouched: false
      });
      const button = (0, query_1.qs)('.submit-checkout');
      const infoUser = (0, query_1.gid)('info-user');
      const username = (0, query_1.gid)('username');
      const address = (0, query_1.gid)('address');
      const checkValidity = (object, value) => {
          const operator = object === null || object === void 0 ? void 0 : object.operator;
          const validate = object === null || object === void 0 ? void 0 : object.validate;
          if (!validate) {
              return true;
          }
          if (operator === OR) {
              return validate === null || validate === void 0 ? void 0 : validate.some(func => func(object[value]));
          }
          return validate === null || validate === void 0 ? void 0 : validate.every(func => func(object[value]));
      };
      const formIsValid = () => {
          const isValidInfo = checkValidity(info(), INFO);
          const isValidUserName = checkValidity(usernameUser(), USERNAME);
          const isValidAddress = checkValidity(addressUser(), ADDRESS);
          return isValidInfo && isValidUserName && isValidAddress;
      };
      const updateStatus = () => {
          const isValid = formIsValid();
          button.disabled = !isValid;
      };
      updateStatus();
      onChangeInput(infoUser, (value) => {
          setInfo(Object.assign(Object.assign({}, info()), { [INFO]: value }));
          updateStatus();
      }, () => {
          setInfo(Object.assign(Object.assign({}, info()), { isTouched: true }));
      });
      onChangeInput(username, (value) => {
          setUserNameUser(Object.assign(Object.assign({}, usernameUser()), { [USERNAME]: value }));
          updateStatus();
      }, () => {
          setUserNameUser(Object.assign(Object.assign({}, usernameUser()), { isTouched: true }));
      });
      onChangeInput(address, (value) => {
          setAddressUser(Object.assign(Object.assign({}, addressUser()), { [ADDRESS]: value }));
          updateStatus();
      }, () => {
          setAddressUser(Object.assign(Object.assign({}, addressUser()), { isTouched: true }));
      });
  })();
  (function () {
      const priceProducts = (0, query_1.qsa)('.item-right');
      const subTotal = (0, query_1.qs)('.subtotal');
      const totalPrice = (0, query_1.qs)('.total-price');
      const mergeNode = [...priceProducts, subTotal, totalPrice];
      mergeNode.forEach(node => {
          if (node) {
              const price = +(node.textContent || 0);
              node.textContent = (0, string_1.toCurrency)(price);
          }
      });
  })();
  
  
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
          const header = (0, query_1.qs)("#header");
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
      const button = (0, query_1.qs)(".btn-search");
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
              input.value = "";
              const queryParams = new URLSearchParams(window.location.search);
              queryParams.delete("q");
              window.history.pushState({
                  path: path_1.ROOT_PATH,
              }, "", path_1.ROOT_PATH);
              const searchOverlay = (0, query_1.qs)("#overlay--search");
              searchOverlay === null || searchOverlay === void 0 ? void 0 : searchOverlay.remove();
          }
      };
      button === null || button === void 0 ? void 0 : button.addEventListener("click", toggleHeader);
      input === null || input === void 0 ? void 0 : input.addEventListener("input", (event) => __awaiter(this, void 0, void 0, function* () {
          const value = event.target.value;
          const { location, history } = window;
          const url = path_1.ROOT_PATH + "?q=" + value;
          history.pushState({
              path: url,
          }, "", url);
      }));
  })();
  (function () {
      const bagShopping = (0, query_1.qs)(".shopping--bag");
      const cartUser = (0, query_1.qs)(".cart--user");
      const closeButton = (0, query_1.qs)(".close--button", cartUser);
      const createModel = (0, utilsElement_1.modelElement)("cart-model");
      const onHandleCart = () => {
          const model = (0, query_1.gid)("cart-model");
          const isActive = (0, classList_1.classListToggleElement)(cartUser, "active-cart");
          if (isActive) {
              (0, utilsElement_1.insertStringElement)(document.body, createModel, "afterbegin");
              const modelElement = (0, query_1.gid)("cart-model");
              modelElement === null || modelElement === void 0 ? void 0 : modelElement.addEventListener("click", onHandleCart);
          }
          else {
              model === null || model === void 0 ? void 0 : model.remove();
          }
      };
      bagShopping === null || bagShopping === void 0 ? void 0 : bagShopping.addEventListener("click", onHandleCart);
      closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", onHandleCart);
  })();
  (function (d) {
      const cartUser = (0, query_1.qs)(".cart--user");
      const headerCart = (0, query_1.qs)("h5", cartUser);
      const boxTotal = (0, query_1.qs)(".total--checkout", cartUser);
      const itemsCheckout = (0, query_1.qs)(".items", cartUser);
      const getBoundingHeader = headerCart === null || headerCart === void 0 ? void 0 : headerCart.getBoundingClientRect();
      const boxTotalBounding = boxTotal === null || boxTotal === void 0 ? void 0 : boxTotal.getBoundingClientRect();
      itemsCheckout.style.height = `calc(100vh - ${getBoundingHeader.height + boxTotalBounding.height}px)`;
  })(document);
  (function () {
      const form = (0, query_1.qs)(".input--search");
      if (form) {
          const submitBtn = (0, query_1.qs)("i", form);
          const onSubmitForm = (_) => {
              form.submit();
          };
          submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', onSubmitForm);
      }
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
  
  /***/ "./src/utils/state.ts":
  /*!****************************!*\
    !*** ./src/utils/state.ts ***!
    \****************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  
  Object.defineProperty(exports, "__esModule", ({ value: true }));
  exports.useState = void 0;
  const useState = (defaultValue) => {
      let value = defaultValue;
      const setValue = (newValue) => {
          value = newValue;
      };
      const getValue = () => {
          return value;
      };
      return [getValue, setValue];
  };
  exports.useState = useState;
  
  
  /***/ }),
  
  /***/ "./src/utils/string.ts":
  /*!*****************************!*\
    !*** ./src/utils/string.ts ***!
    \*****************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  
  Object.defineProperty(exports, "__esModule", ({ value: true }));
  exports.toCurrency = void 0;
  const toCurrency = (price, options = {}) => {
      return new Intl.NumberFormat('vi-VN', Object.assign({ style: 'currency', currency: 'VND', maximumFractionDigits: 0 }, options)).format(price);
  };
  exports.toCurrency = toCurrency;
  
  
  /***/ }),
  
  /***/ "./src/utils/validator/input.ts":
  /*!**************************************!*\
    !*** ./src/utils/validator/input.ts ***!
    \**************************************/
  /***/ ((__unused_webpack_module, exports) => {
  
  
  Object.defineProperty(exports, "__esModule", ({ value: true }));
  exports.isMobilePhone = exports.isPassword = exports.isEmail = exports.isRequired = void 0;
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
  const isMobilePhone = (str) => {
      if (str.length < 10 || str.length > 11) {
          return false;
      }
      return true;
  };
  exports.isMobilePhone = isMobilePhone;
  
  
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
  /******/ 	__webpack_require__("./src/ts/checkout.ts");
  /******/ 	// This entry module is referenced by other modules so it can't be inlined
  /******/ 	__webpack_require__("./src/ts/header.ts");
  /******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
  /******/ 	
  /******/ })()
  ;
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM3RCxxQkFBcUIsR0FBRyxrQkFBa0IsR0FBRyxlQUFlLEdBQUcsa0JBQWtCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSx5REFBeUQsR0FBRztBQUM1RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7Ozs7OztVQy9CckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL2NvbnN0YW50cy9wYXRoLnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdHMvY2hlY2tvdXQudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy90cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9jbGFzc0xpc3QudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9lbGVtZW50L3V0aWxzRWxlbWVudC50cyIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvLy4vc3JjL3V0aWxzL3F1ZXJ5LnRzIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vLi9zcmMvdXRpbHMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby8uL3NyYy91dGlscy92YWxpZGF0b3IvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9idGx3ZWIuZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnRsd2ViLmdpdGh1Yi5pby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2J0bHdlYi5naXRodWIuaW8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgaW5zZXJ0U3RyaW5nRWxlbWVudCwgbW9kZWxFbGVtZW50IH0gZnJvbSAnLi4vc3JjL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbWVudVwiKVxuICAgIGNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtdG9nZ2xlJylcbiAgICBjb25zdCBuYXZDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtY2xvc2UnKTtcblxuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAoYWN0aXZlVmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbi0tbW9kZWwnKTtcbiAgICAgICAgYWN0aXZlVmFsdWUgPyBpbnNlcnRTdHJpbmdFbGVtZW50KGRvY3VtZW50LmJvZHksIG1vZGVsRWxlbWVudCgnbmF2aWdhdGlvbi0tbW9kZWwnKSkgOiBtb2RlbC5yZW1vdmUoKTtcblxuICAgICAgICBjb25zdCBtb2RlbEFmdGVySW5zZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb24tLW1vZGVsJyk7XG4gICAgICAgIGlmIChtb2RlbEFmdGVySW5zZXJ0KSB7XG4gICAgICAgICAgICBtb2RlbEFmdGVySW5zZXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpc0FjdGl2ZSA9IG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGNhbGxiYWNrKGlzQWN0aXZlKVxuICAgIH1cbiAgICBuYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gICAgbmF2Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJPT1RfUEFUSCA9IHZvaWQgMDtcbmV4cG9ydHMuUk9PVF9QQVRIID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBxdWVyeV8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3F1ZXJ5XCIpO1xuY29uc3Qgc3RhdGVfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9zdGF0ZVwiKTtcbmNvbnN0IHN0cmluZ18xID0gcmVxdWlyZShcIi4uL3V0aWxzL3N0cmluZ1wiKTtcbmNvbnN0IGlucHV0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmFsaWRhdG9yL2lucHV0XCIpO1xuY29uc3QgT1IgPSAnb3InO1xuY29uc3QgQU5EID0gJ2FuZCc7XG5jb25zdCBJTkZPID0gJ2luZm9Vc2VyJztcbmNvbnN0IFVTRVJOQU1FID0gJ3VzZXJuYW1lJztcbmNvbnN0IEFERFJFU1MgPSAnYWRkcmVzcyc7XG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKGVsZW1lbnQsIG9uR2V0VmFsdWUsIGNhbGxiYWNrVG91Y2hlZCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKG9uR2V0VmFsdWUpIHtcbiAgICAgICAgICAgIG9uR2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvblRvdWNoID0gKF8pID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrVG91Y2hlZCkge1xuICAgICAgICAgICAgY2FsbGJhY2tUb3VjaGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25Ub3VjaCk7XG4gICAgZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25DaGFuZ2UpO1xufTtcbihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgW2luZm8sIHNldEluZm9dID0gKDAsIHN0YXRlXzEudXNlU3RhdGUpKHtcbiAgICAgICAgW0lORk9dOiAnJyxcbiAgICAgICAgdmFsaWRhdGU6IFtpbnB1dF8xLmlzRW1haWwsIGlucHV0XzEuaXNNb2JpbGVQaG9uZV0sXG4gICAgICAgIG9wZXJhdG9yOiBPUixcbiAgICAgICAgaXNUb3VjaGVkOiBmYWxzZVxuICAgIH0pO1xuICAgIGNvbnN0IFt1c2VybmFtZVVzZXIsIHNldFVzZXJOYW1lVXNlcl0gPSAoMCwgc3RhdGVfMS51c2VTdGF0ZSkoe1xuICAgICAgICBbVVNFUk5BTUVdOiAnJyxcbiAgICAgICAgdmFsaWRhdGU6IFtpbnB1dF8xLmlzUmVxdWlyZWRdLFxuICAgICAgICBpc1RvdWNoZWQ6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgW2FkZHJlc3NVc2VyLCBzZXRBZGRyZXNzVXNlcl0gPSAoMCwgc3RhdGVfMS51c2VTdGF0ZSkoe1xuICAgICAgICB2YWxpZGF0ZTogW2lucHV0XzEuaXNSZXF1aXJlZF0sXG4gICAgICAgIFtBRERSRVNTXTogJycsXG4gICAgICAgIGlzVG91Y2hlZDogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b24gPSAoMCwgcXVlcnlfMS5xcykoJy5zdWJtaXQtY2hlY2tvdXQnKTtcbiAgICBjb25zdCBpbmZvVXNlciA9ICgwLCBxdWVyeV8xLmdpZCkoJ2luZm8tdXNlcicpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gKDAsIHF1ZXJ5XzEuZ2lkKSgndXNlcm5hbWUnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gKDAsIHF1ZXJ5XzEuZ2lkKSgnYWRkcmVzcycpO1xuICAgIGNvbnN0IGNoZWNrVmFsaWRpdHkgPSAob2JqZWN0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBvcGVyYXRvciA9IG9iamVjdCA9PT0gbnVsbCB8fCBvYmplY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9iamVjdC5vcGVyYXRvcjtcbiAgICAgICAgY29uc3QgdmFsaWRhdGUgPSBvYmplY3QgPT09IG51bGwgfHwgb2JqZWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmplY3QudmFsaWRhdGU7XG4gICAgICAgIGlmICghdmFsaWRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gT1IpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZSA9PT0gbnVsbCB8fCB2YWxpZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRhdGUuc29tZShmdW5jID0+IGZ1bmMob2JqZWN0W3ZhbHVlXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZSA9PT0gbnVsbCB8fCB2YWxpZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRhdGUuZXZlcnkoZnVuYyA9PiBmdW5jKG9iamVjdFt2YWx1ZV0pKTtcbiAgICB9O1xuICAgIGNvbnN0IGZvcm1Jc1ZhbGlkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpc1ZhbGlkSW5mbyA9IGNoZWNrVmFsaWRpdHkoaW5mbygpLCBJTkZPKTtcbiAgICAgICAgY29uc3QgaXNWYWxpZFVzZXJOYW1lID0gY2hlY2tWYWxpZGl0eSh1c2VybmFtZVVzZXIoKSwgVVNFUk5BTUUpO1xuICAgICAgICBjb25zdCBpc1ZhbGlkQWRkcmVzcyA9IGNoZWNrVmFsaWRpdHkoYWRkcmVzc1VzZXIoKSwgQUREUkVTUyk7XG4gICAgICAgIHJldHVybiBpc1ZhbGlkSW5mbyAmJiBpc1ZhbGlkVXNlck5hbWUgJiYgaXNWYWxpZEFkZHJlc3M7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBmb3JtSXNWYWxpZCgpO1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSAhaXNWYWxpZDtcbiAgICB9O1xuICAgIHVwZGF0ZVN0YXR1cygpO1xuICAgIG9uQ2hhbmdlSW5wdXQoaW5mb1VzZXIsICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRJbmZvKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5mbygpKSwgeyBbSU5GT106IHZhbHVlIH0pKTtcbiAgICAgICAgdXBkYXRlU3RhdHVzKCk7XG4gICAgfSwgKCkgPT4ge1xuICAgICAgICBzZXRJbmZvKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5mbygpKSwgeyBpc1RvdWNoZWQ6IHRydWUgfSkpO1xuICAgIH0pO1xuICAgIG9uQ2hhbmdlSW5wdXQodXNlcm5hbWUsICh2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRVc2VyTmFtZVVzZXIoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB1c2VybmFtZVVzZXIoKSksIHsgW1VTRVJOQU1FXTogdmFsdWUgfSkpO1xuICAgICAgICB1cGRhdGVTdGF0dXMoKTtcbiAgICB9LCAoKSA9PiB7XG4gICAgICAgIHNldFVzZXJOYW1lVXNlcihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHVzZXJuYW1lVXNlcigpKSwgeyBpc1RvdWNoZWQ6IHRydWUgfSkpO1xuICAgIH0pO1xuICAgIG9uQ2hhbmdlSW5wdXQoYWRkcmVzcywgKHZhbHVlKSA9PiB7XG4gICAgICAgIHNldEFkZHJlc3NVc2VyKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYWRkcmVzc1VzZXIoKSksIHsgW0FERFJFU1NdOiB2YWx1ZSB9KSk7XG4gICAgICAgIHVwZGF0ZVN0YXR1cygpO1xuICAgIH0sICgpID0+IHtcbiAgICAgICAgc2V0QWRkcmVzc1VzZXIoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhZGRyZXNzVXNlcigpKSwgeyBpc1RvdWNoZWQ6IHRydWUgfSkpO1xuICAgIH0pO1xufSkoKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJpY2VQcm9kdWN0cyA9ICgwLCBxdWVyeV8xLnFzYSkoJy5pdGVtLXJpZ2h0Jyk7XG4gICAgY29uc3Qgc3ViVG90YWwgPSAoMCwgcXVlcnlfMS5xcykoJy5zdWJ0b3RhbCcpO1xuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSAoMCwgcXVlcnlfMS5xcykoJy50b3RhbC1wcmljZScpO1xuICAgIGNvbnN0IG1lcmdlTm9kZSA9IFsuLi5wcmljZVByb2R1Y3RzLCBzdWJUb3RhbCwgdG90YWxQcmljZV07XG4gICAgbWVyZ2VOb2RlLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwcmljZSA9ICsobm9kZS50ZXh0Q29udGVudCB8fCAwKTtcbiAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSAoMCwgc3RyaW5nXzEudG9DdXJyZW5jeSkocHJpY2UpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhdGhfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvcGF0aFwiKTtcbmNvbnN0IGNsYXNzTGlzdF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2NsYXNzTGlzdFwiKTtcbmNvbnN0IHV0aWxzRWxlbWVudF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2VsZW1lbnQvdXRpbHNFbGVtZW50XCIpO1xuY29uc3QgcXVlcnlfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9xdWVyeVwiKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGZpcnN0U2Nyb2xsID0gMDtcbiAgICBsZXQgY3VycmVudFNjcm9sbCA9IDA7XG4gICAgY29uc3QgZGVib3VuZFNjcm9sbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9ICgwLCBxdWVyeV8xLnFzKShcIiNoZWFkZXJcIik7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBjdXJyZW50U2Nyb2xsID0gb2Zmc2V0O1xuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA+IGZpcnN0U2Nyb2xsKSB7XG4gICAgICAgICAgICBoZWFkZXIgPT09IG51bGwgfHwgaGVhZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImRlYm91bmQtc2Nyb2xsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyID09PSBudWxsIHx8IGhlYWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWJvdW5kLXNjcm9sbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBmaXJzdFNjcm9sbCA9IGN1cnJlbnRTY3JvbGw7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkZWJvdW5kU2Nyb2xsSGFuZGxlcik7XG4gICAgfSk7XG59KSgpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBidXR0b24gPSAoMCwgcXVlcnlfMS5xcykoXCIuYnRuLXNlYXJjaFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSAoMCwgcXVlcnlfMS5xcykoXCIuY29udGFpbmVyLS1zZWFyY2hcIik7XG4gICAgY29uc3QgaW5wdXQgPSAoMCwgcXVlcnlfMS5xcykoXCJpbnB1dFwiLCBoZWFkZXIpO1xuICAgIGNvbnN0IHRvZ2dsZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRmllbGRJc09wZW4gPSAoMCwgY2xhc3NMaXN0XzEuY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCkoaGVhZGVyLCBcInJlc2V0LS10cmFuc2xhdGVcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gKDAsIHV0aWxzRWxlbWVudF8xLm1vZGVsRWxlbWVudCkoXCJvdmVybGF5LS1zZWFyY2hcIik7XG4gICAgICAgIGlmIChzZWFyY2hGaWVsZElzT3Blbikge1xuICAgICAgICAgICAgKDAsIHV0aWxzRWxlbWVudF8xLmluc2VydFN0cmluZ0VsZW1lbnQpKGRvY3VtZW50LmJvZHksIG92ZXJsYXlFbGVtZW50LCBcImFmdGVyYmVnaW5cIik7XG4gICAgICAgICAgICBjb25zdCBvdmVybGF5U2VhcmNoID0gKDAsIHF1ZXJ5XzEucXMpKFwiI292ZXJsYXktLXNlYXJjaFwiKTtcbiAgICAgICAgICAgIG92ZXJsYXlTZWFyY2ggPT09IG51bGwgfHwgb3ZlcmxheVNlYXJjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3ZlcmxheVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlSGVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLmRlbGV0ZShcInFcIik7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGhfMS5ST09UX1BBVEgsXG4gICAgICAgICAgICB9LCBcIlwiLCBwYXRoXzEuUk9PVF9QQVRIKTtcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaE92ZXJsYXkgPSAoMCwgcXVlcnlfMS5xcykoXCIjb3ZlcmxheS0tc2VhcmNoXCIpO1xuICAgICAgICAgICAgc2VhcmNoT3ZlcmxheSA9PT0gbnVsbCB8fCBzZWFyY2hPdmVybGF5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWFyY2hPdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBidXR0b24gPT09IG51bGwgfHwgYnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUhlYWRlcik7XG4gICAgaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHsgbG9jYXRpb24sIGhpc3RvcnkgfSA9IHdpbmRvdztcbiAgICAgICAgY29uc3QgdXJsID0gcGF0aF8xLlJPT1RfUEFUSCArIFwiP3E9XCIgKyB2YWx1ZTtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICAgICAgcGF0aDogdXJsLFxuICAgICAgICB9LCBcIlwiLCB1cmwpO1xuICAgIH0pKTtcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGJhZ1Nob3BwaW5nID0gKDAsIHF1ZXJ5XzEucXMpKFwiLnNob3BwaW5nLS1iYWdcIik7XG4gICAgY29uc3QgY2FydFVzZXIgPSAoMCwgcXVlcnlfMS5xcykoXCIuY2FydC0tdXNlclwiKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9ICgwLCBxdWVyeV8xLnFzKShcIi5jbG9zZS0tYnV0dG9uXCIsIGNhcnRVc2VyKTtcbiAgICBjb25zdCBjcmVhdGVNb2RlbCA9ICgwLCB1dGlsc0VsZW1lbnRfMS5tb2RlbEVsZW1lbnQpKFwiY2FydC1tb2RlbFwiKTtcbiAgICBjb25zdCBvbkhhbmRsZUNhcnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gKDAsIHF1ZXJ5XzEuZ2lkKShcImNhcnQtbW9kZWxcIik7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKDAsIGNsYXNzTGlzdF8xLmNsYXNzTGlzdFRvZ2dsZUVsZW1lbnQpKGNhcnRVc2VyLCBcImFjdGl2ZS1jYXJ0XCIpO1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICgwLCB1dGlsc0VsZW1lbnRfMS5pbnNlcnRTdHJpbmdFbGVtZW50KShkb2N1bWVudC5ib2R5LCBjcmVhdGVNb2RlbCwgXCJhZnRlcmJlZ2luXCIpO1xuICAgICAgICAgICAgY29uc3QgbW9kZWxFbGVtZW50ID0gKDAsIHF1ZXJ5XzEuZ2lkKShcImNhcnQtbW9kZWxcIik7XG4gICAgICAgICAgICBtb2RlbEVsZW1lbnQgPT09IG51bGwgfHwgbW9kZWxFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uSGFuZGxlQ2FydCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlbCA9PT0gbnVsbCB8fCBtb2RlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGJhZ1Nob3BwaW5nID09PSBudWxsIHx8IGJhZ1Nob3BwaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBiYWdTaG9wcGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25IYW5kbGVDYXJ0KTtcbiAgICBjbG9zZUJ1dHRvbiA9PT0gbnVsbCB8fCBjbG9zZUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uSGFuZGxlQ2FydCk7XG59KSgpO1xuKGZ1bmN0aW9uIChkKSB7XG4gICAgY29uc3QgY2FydFVzZXIgPSAoMCwgcXVlcnlfMS5xcykoXCIuY2FydC0tdXNlclwiKTtcbiAgICBjb25zdCBoZWFkZXJDYXJ0ID0gKDAsIHF1ZXJ5XzEucXMpKFwiaDVcIiwgY2FydFVzZXIpO1xuICAgIGNvbnN0IGJveFRvdGFsID0gKDAsIHF1ZXJ5XzEucXMpKFwiLnRvdGFsLS1jaGVja291dFwiLCBjYXJ0VXNlcik7XG4gICAgY29uc3QgaXRlbXNDaGVja291dCA9ICgwLCBxdWVyeV8xLnFzKShcIi5pdGVtc1wiLCBjYXJ0VXNlcik7XG4gICAgY29uc3QgZ2V0Qm91bmRpbmdIZWFkZXIgPSBoZWFkZXJDYXJ0ID09PSBudWxsIHx8IGhlYWRlckNhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlckNhcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm94VG90YWxCb3VuZGluZyA9IGJveFRvdGFsID09PSBudWxsIHx8IGJveFRvdGFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBib3hUb3RhbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpdGVtc0NoZWNrb3V0LnN0eWxlLmhlaWdodCA9IGBjYWxjKDEwMHZoIC0gJHtnZXRCb3VuZGluZ0hlYWRlci5oZWlnaHQgKyBib3hUb3RhbEJvdW5kaW5nLmhlaWdodH1weClgO1xufSkoZG9jdW1lbnQpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBmb3JtID0gKDAsIHF1ZXJ5XzEucXMpKFwiLmlucHV0LS1zZWFyY2hcIik7XG4gICAgaWYgKGZvcm0pIHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gKDAsIHF1ZXJ5XzEucXMpKFwiaVwiLCBmb3JtKTtcbiAgICAgICAgY29uc3Qgb25TdWJtaXRGb3JtID0gKF8pID0+IHtcbiAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHN1Ym1pdEJ0biA9PT0gbnVsbCB8fCBzdWJtaXRCdG4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uU3VibWl0Rm9ybSk7XG4gICAgfVxufSkoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gZXhwb3J0cy5jbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gdm9pZCAwO1xuY29uc3QgY2xhc3NMaXN0VG9nZ2xlRWxlbWVudCA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG59O1xuZXhwb3J0cy5jbGFzc0xpc3RUb2dnbGVFbGVtZW50ID0gY2xhc3NMaXN0VG9nZ2xlRWxlbWVudDtcbmNvbnN0IHNldEF0dHJpYnV0ZUVsZW1lbnQgPSAoZWxlbWVudCwgcXVlcnksIHZhbHVlKSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocXVlcnkudG9TdHJpbmcoKSwgdmFsdWUudG9TdHJpbmcoKSk7XG59O1xuZXhwb3J0cy5zZXRBdHRyaWJ1dGVFbGVtZW50ID0gc2V0QXR0cmlidXRlRWxlbWVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbnNlcnRTdHJpbmdFbGVtZW50ID0gZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBleHBvcnRzLmluc2VydEVsZW1lbnQgPSB2b2lkIDA7XG5jb25zdCBpbnNlcnRFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XG4gICAgZWxlbWVudFBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQocG9zaXRpb24gfHwgJ2JlZm9yZWVuZCcsIGVsZW1lbnRJbnNlcnQpO1xufTtcbmV4cG9ydHMuaW5zZXJ0RWxlbWVudCA9IGluc2VydEVsZW1lbnQ7XG5jb25zdCBtb2RlbEVsZW1lbnQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBvdmVybGF5RWxlbWVudCA9IGA8ZGl2IGNsYXNzPVwibW9kZWxcIiBpZD0ke2lkIHx8IFwibW9kZWxcIn0+PC9kaXY+YDtcbiAgICByZXR1cm4gb3ZlcmxheUVsZW1lbnQ7XG59O1xuZXhwb3J0cy5tb2RlbEVsZW1lbnQgPSBtb2RlbEVsZW1lbnQ7XG5jb25zdCBpbnNlcnRTdHJpbmdFbGVtZW50ID0gKGVsZW1lbnRQYXJlbnQsIGVsZW1lbnRJbnNlcnQsIHBvc2l0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGVsZW1lbnRQYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKHBvc2l0aW9uIHx8IFwiYmVmb3JlZW5kXCIsIGVsZW1lbnRJbnNlcnQpO1xufTtcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nRWxlbWVudCA9IGluc2VydFN0cmluZ0VsZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2lkID0gZXhwb3J0cy5xc2EgPSBleHBvcnRzLnFzID0gdm9pZCAwO1xuY29uc3QgcXMgPSAoc2VsZWN0b3IsIHRhcmdldE9iamVjdCA9IGRvY3VtZW50KSA9PiB7XG4gICAgcmV0dXJuIHRhcmdldE9iamVjdC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn07XG5leHBvcnRzLnFzID0gcXM7XG5jb25zdCBxc2EgPSAoc2VsZWN0b3IsIHRhcmdldE9iamVjdCA9IGRvY3VtZW50KSA9PiB7XG4gICAgcmV0dXJuIHRhcmdldE9iamVjdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbn07XG5leHBvcnRzLnFzYSA9IHFzYTtcbmNvbnN0IGdpZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG59O1xuZXhwb3J0cy5naWQgPSBnaWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXNlU3RhdGUgPSB2b2lkIDA7XG5jb25zdCB1c2VTdGF0ZSA9IChkZWZhdWx0VmFsdWUpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3Qgc2V0VmFsdWUgPSAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9O1xuICAgIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59O1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvQ3VycmVuY3kgPSB2b2lkIDA7XG5jb25zdCB0b0N1cnJlbmN5ID0gKHByaWNlLCBvcHRpb25zID0ge30pID0+IHtcbiAgICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCd2aS1WTicsIE9iamVjdC5hc3NpZ24oeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdWTkQnLCBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSwgb3B0aW9ucykpLmZvcm1hdChwcmljZSk7XG59O1xuZXhwb3J0cy50b0N1cnJlbmN5ID0gdG9DdXJyZW5jeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc01vYmlsZVBob25lID0gZXhwb3J0cy5pc1Bhc3N3b3JkID0gZXhwb3J0cy5pc0VtYWlsID0gZXhwb3J0cy5pc1JlcXVpcmVkID0gdm9pZCAwO1xuY29uc3QgdHJpbVN0cmluZyA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnRyaW0oKTtcbn07XG5jb25zdCBpc1JlcXVpcmVkID0gKHN0cikgPT4ge1xuICAgIGlmICh0cmltU3RyaW5nKHN0cikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuZXhwb3J0cy5pc1JlcXVpcmVkID0gaXNSZXF1aXJlZDtcbmNvbnN0IGlzRW1haWwgPSAoc3RyKSA9PiB7XG4gICAgaWYgKCF0cmltU3RyaW5nKHN0cikuaW5jbHVkZXMoJ0AnKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbmV4cG9ydHMuaXNFbWFpbCA9IGlzRW1haWw7XG5jb25zdCBpc1Bhc3N3b3JkID0gKHN0cikgPT4ge1xuICAgIGNvbnN0IHJlZ2V4ID0gL14oPz0uKlxcZCkoPz0uKlshQCMkJV4mKl0pKD89LipbYS16XSkuezgsfSQvO1xuICAgIHJldHVybiByZWdleC50ZXN0KHN0cik7XG59O1xuZXhwb3J0cy5pc1Bhc3N3b3JkID0gaXNQYXNzd29yZDtcbmNvbnN0IGlzTW9iaWxlUGhvbmUgPSAoc3RyKSA9PiB7XG4gICAgaWYgKHN0ci5sZW5ndGggPCAxMCB8fCBzdHIubGVuZ3RoID4gMTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5leHBvcnRzLmlzTW9iaWxlUGhvbmUgPSBpc01vYmlsZVBob25lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2NoZWNrb3V0LnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90cy9oZWFkZXIudHNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9