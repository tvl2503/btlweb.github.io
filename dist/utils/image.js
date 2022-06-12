"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertImageToURL = void 0;
const convertImageToURL = (file) => {
    return URL.createObjectURL(file);
};
exports.convertImageToURL = convertImageToURL;
