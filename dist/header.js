"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const overlay = document.querySelector(".model");
    const button = document.querySelector(".btn-search");
    const header = document.querySelector(".container--search");
    const toggleHeader = () => {
        header === null || header === void 0 ? void 0 : header.classList.toggle("reset--translate");
    };
    button === null || button === void 0 ? void 0 : button.addEventListener("click", toggleHeader);
    overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", toggleHeader);
    const input = header === null || header === void 0 ? void 0 : header.querySelector("input");
    input === null || input === void 0 ? void 0 : input.addEventListener("input", (event) => __awaiter(void 0, void 0, void 0, function* () {
        const { value } = event.target;
        // const response = await fetch('url.....');
        // const data = await response.json();
        // console.log(data);
    }));
};
transitionSearch();
