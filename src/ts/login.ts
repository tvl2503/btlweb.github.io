import { EMAIL, PASSWORD, REQUIRED } from "../constants/type";
import { callbackFn } from "../models/validate";
import { classListToggleElement, setAttributeElement } from "../utils/classList";
import { insertStringElement } from "../utils/element/utilsElement";
import { validateInput } from "../utils/validator/validateInput";
import { getHeader } from "../layout/header";

getHeader();
const input = document.querySelectorAll('input');

export const insertMessageCallback = (valueCallback: callbackFn, element: HTMLInputElement, message: string, id: string) => {
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
        })
    }
})

const inputPassword = [...input].filter(item => item.type === PASSWORD);
inputPassword.forEach(i => {
    const parentElement = i.parentElement;
    if (parentElement) {
        const eye = parentElement?.querySelector('i');
        eye?.addEventListener('click', () => {
            const activeButton = classListToggleElement(eye, 'color-blue');
            activeButton ? setAttributeElement(i, 'type', 'text') : setAttributeElement(i, 'type', 'password');
        })
    }
})