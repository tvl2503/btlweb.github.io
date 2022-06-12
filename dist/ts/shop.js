"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classList_1 = require("../utils/classList");
const utilsElement_1 = require("../utils/element/utilsElement");
const params_1 = require("../utils/params");
const resize_1 = __importDefault(require("../utils/resize"));
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
