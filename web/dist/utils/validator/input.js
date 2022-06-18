"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
