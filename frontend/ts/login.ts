import { EMAIL, PASSWORD, REQUIRED } from "../constants/type";
import { callbackFn, InputValidate } from "../models/validate";
import {
  classListToggleElement,
  setAttributeElement,
} from "../utils/classList";
import { insertStringElement } from "../utils/element/utilsElement";
import { validateInput } from "../utils/validator/validateInput";

const elements: Array<InputValidate> = [];
(function () {
  const input = document.querySelectorAll("input");
  const buttonSubmit = document.querySelector(
    "button[type='submit']"
  ) as HTMLButtonElement;
  buttonSubmit.disabled = true;
  const insertMessageCallback = (
    valueCallback: callbackFn,
    element: HTMLInputElement,
    message: string,
    id: string
  ) => {
    const { isTouched, isValid } = valueCallback;
    const messageBefore = document.getElementById(id);
    const indexElement = elements.findIndex((item) => item.element === element);
    elements[indexElement].isValid = isValid;
    if (isTouched && !isValid) {
      const parentElement = element.parentElement;
      element.classList.add("error--input");
      if (parentElement?.classList.contains("form-group")) {
        if (!messageBefore) {
          insertStringElement(
            parentElement,
            `<p class="error--message" id=${id}>${message}</p>`,
            "afterend"
          );
        }
      }
    } else {
      messageBefore?.remove();
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
      let message: string;
      switch (validate) {
        case EMAIL:
          message = "Email is not valid!";
          break;
        case PASSWORD:
          message =
            "Password must have at least 8 character, one special character and one character";
          break;
        case REQUIRED:
        default:
          message = "Field must be required";
      }
      validateInput(
        item,
        validate,
        (value) => {
          insertMessageCallback(value, item, message, `${validate}--input`);
        },
        (value) => {
          insertMessageCallback(value, item, message, `${validate}--input`);
        }
      );
    }
  });

  const inputPassword = [...input].filter((item) => item.type === PASSWORD);
  inputPassword.forEach((i) => {
    const parentElement = i.parentElement;
    if (parentElement) {
      const eye = parentElement?.querySelector("i");
      eye?.addEventListener("click", () => {
        const activeButton = classListToggleElement(eye, "color-blue");
        activeButton
          ? setAttributeElement(i, "type", "text")
          : setAttributeElement(i, "type", "password");
      });
    }
  });
})();
