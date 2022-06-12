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
const query_1 = require("../utils/query");
const state_1 = require("../utils/state");
(function () {
    const swiperProduct = new swiper_1.default(".swiper-list", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
        pagination: true,
        modules: [swiper_1.Navigation]
    });
    const swiperList = new swiper_1.default(".swiper-main", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        loop: true,
        thumbs: {
            swiper: swiperProduct,
        },
        modules: [swiper_1.Navigation]
    });
})();
(function () {
    const [quantity, setQuantity] = (0, state_1.useState)(1);
    const btnDecrement = (0, query_1.qs)('#jsSub');
    const btnIncrement = (0, query_1.qs)('#jsPlus');
    const quantityProduct = (0, query_1.qs)('#jsNum');
    const quantityIsValid = () => {
        return quantity() > 1;
    };
    const setTextContent = () => {
        quantityProduct.textContent = quantity().toString();
    };
    const onIncrement = () => {
        setQuantity(quantity() + 1);
        setTextContent();
    };
    const onDecrement = () => {
        if (!quantityIsValid()) {
            return;
        }
        setQuantity(quantity() - 1);
        setTextContent();
    };
    btnDecrement === null || btnDecrement === void 0 ? void 0 : btnDecrement.addEventListener('click', onDecrement);
    btnIncrement === null || btnIncrement === void 0 ? void 0 : btnIncrement.addEventListener('click', onIncrement);
})();
