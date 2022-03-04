import { EMAIL, PASSWORD, REQUIRED } from "../constants/type.js";
import { classListToggleElement, setAttributeElement } from "../utils/classList.js";
import { insertStringElement } from "../utils/element/utilsElement.js";
import { validateInput } from "../utils/validator/validateInput.js";
const input = document.querySelectorAll('input');
export const insertMessageCallback = (valueCallback, element, message, id) => {
    const { isTouched, isValid } = valueCallback;
    const messageBefore = document.getElementById(id);
    if (isTouched && !isValid) {
        const parentElement = element.parentElement;
        element.classList.add('error--input');
        if (parentElement === null || parentElement === void 0 ? void 0 : parentElement.classList.contains('form-group')) {
            if (!messageBefore) {
                insertStringElement(parentElement, `<p class="error--message" id=${id}>${message}</p>`, 'afterend');
            }
        }
        ;
    }
    else {
        messageBefore === null || messageBefore === void 0 ? void 0 : messageBefore.remove();
        element.classList.remove('error--input');
    }
};
input.forEach(item => {
    const validate = item.getAttribute('data-validate');
    if (validate) {
        let message;
        switch (validate) {
            case EMAIL:
                message = 'Email is not valid!';
                break;
            case PASSWORD:
                message = 'Password must have at least 8 character, one special character and one character';
                break;
            case REQUIRED:
                message = 'Field must be required';
                break;
            default:
                message = 'Field must be required';
        }
        validateInput(item, validate, (value) => {
            insertMessageCallback(value, item, message, `${validate}--input`);
        }, (value) => {
            insertMessageCallback(value, item, message, `${validate}--input`);
        });
    }
});
const inputPassword = [...input].filter(item => item.type === PASSWORD);
inputPassword.forEach(i => {
    const parentElement = i.parentElement;
    if (parentElement) {
        const eye = parentElement === null || parentElement === void 0 ? void 0 : parentElement.querySelector('i');
        eye === null || eye === void 0 ? void 0 : eye.addEventListener('click', () => {
            const activeButton = classListToggleElement(eye, 'color-blue');
            activeButton ? setAttributeElement(i, 'type', 'text') : setAttributeElement(i, 'type', 'password');
        });
    }
});
