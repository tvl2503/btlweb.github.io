import { EMAIL, PASSWORD } from "../constants/type.js";
import { callbackFn } from "../models/validate.js";
import { insertStringElement } from "../utils/element/utilsElement.js";
import { validateInput } from "../utils/validator/validateInput.js";

const input = document.querySelectorAll('input');

const insertMessageCallback = (valueCallback: callbackFn, element: HTMLInputElement, message: string, id: string) => {
    const {isTouched, isValid} = valueCallback;
    const messageBefore = document.getElementById(id);
    if (isTouched && !isValid) {
        const parentElement = element.parentElement;
        element.classList.add('error--input');
        if (parentElement?.classList.contains('form-group')) {
            if (!messageBefore) {
                insertStringElement(parentElement, `<p class="error--message" id=${id}>${message}</p>`, 'afterend');
            }
        };
    } else {
        messageBefore?.remove();
        element.classList.remove('error--input');
    }
}
input.forEach(item => {
    const validate = item.getAttribute('data-validate');
    if (validate) {
        let message: string;
        switch (validate) {
            case EMAIL:
                message = 'Email is not valid!';
                break;
            case PASSWORD:
                message = 'Password must have at least 8 character, one special character and one character';
                break;
            default:
                message = '';
        }
        validateInput(item, validate, (value) => {
            insertMessageCallback(value, item, message, `${validate}--input`);
        }, (value) => {
            insertMessageCallback(value, item, message, `${validate}--input`);
        })
    }
})