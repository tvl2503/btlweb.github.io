"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInput = void 0;
const type_1 = require("../../constants/type");
const input_1 = require("./input");
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
