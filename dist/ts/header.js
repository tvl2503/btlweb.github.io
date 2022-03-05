var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { classListToggleElement } from "../utils/classList";
import { insertStringElement, modelElement, } from "../utils/element/utilsElement";
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
const transitionHeader = () => {
    window.addEventListener("scroll", deboundScrollHandler);
};
transitionHeader();
const transitionSearch = () => {
    const button = document.querySelector(".btn-search");
    const header = document.querySelector(".container--search");
    const toggleHeader = () => {
        const searchFieldIsOpen = classListToggleElement(header, "reset--translate");
        const overlayElement = modelElement("overlay--search");
        if (searchFieldIsOpen) {
            insertStringElement(document.body, overlayElement, "afterbegin");
            const overlaySearch = document === null || document === void 0 ? void 0 : document.querySelector("#overlay--search");
            overlaySearch === null || overlaySearch === void 0 ? void 0 : overlaySearch.addEventListener("click", toggleHeader);
        }
        else {
            const searchOverlay = document === null || document === void 0 ? void 0 : document.querySelector('#overlay--search');
            searchOverlay === null || searchOverlay === void 0 ? void 0 : searchOverlay.remove();
        }
    };
    button === null || button === void 0 ? void 0 : button.addEventListener("click", toggleHeader);
    const input = header === null || header === void 0 ? void 0 : header.querySelector("input");
    input === null || input === void 0 ? void 0 : input.addEventListener("input", (event) => __awaiter(void 0, void 0, void 0, function* () {
        const { value } = event.target;
    }));
};
transitionSearch();
