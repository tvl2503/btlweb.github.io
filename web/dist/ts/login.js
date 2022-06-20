"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../constants/type");
const classList_1 = require("../utils/classList");
const utilsElement_1 = require("../utils/element/utilsElement");
const validateInput_1 = require("../utils/validator/validateInput");
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
