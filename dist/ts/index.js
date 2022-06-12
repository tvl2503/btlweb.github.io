"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const swiper_1 = __importStar(require("swiper"));
const utilsElement_1 = require("../utils/element/utilsElement");
const classList_1 = require("../utils/classList");
new swiper_1.default(".swiper--container", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    modules: [swiper_1.Pagination],
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    speed: 750,
});
new swiper_1.default(".swiper--collection", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    modules: [swiper_1.Pagination, swiper_1.Navigation],
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    breakpoints: {
        200: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    speed: 500,
});
// fake from api
(() => {
    let options = ["Best Sellers", "New Arrivals", "On Trend"];
    let defaultValue = "Best Sellers";
    const textSelect = document === null || document === void 0 ? void 0 : document.querySelector(".text--select");
    textSelect.textContent = defaultValue;
    const listOptions = document === null || document === void 0 ? void 0 : document.getElementById("list--options");
    const button = document === null || document === void 0 ? void 0 : document.querySelector(".content--select");
    const createList = options.map((item, index) => {
        return `<li data-index=${index}>${item}</li>`;
    });
    const joinStringList = createList.join("");
    (0, utilsElement_1.insertStringElement)(listOptions, joinStringList, "afterbegin");
    const handleListItem = () => {
        (0, classList_1.classListToggleElement)(listOptions, "show");
    };
    button === null || button === void 0 ? void 0 : button.addEventListener("click", handleListItem);
    const listItems = document === null || document === void 0 ? void 0 : document.querySelectorAll("li[data-index]");
    if ((listItems === null || listItems === void 0 ? void 0 : listItems.length) > 0) {
        listItems.forEach((item) => {
            item.addEventListener("click", () => {
                textSelect.textContent = item.textContent;
            });
        });
    }
})();
