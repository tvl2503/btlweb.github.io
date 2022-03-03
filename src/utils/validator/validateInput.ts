import { EMAIL, PASSWORD } from "../../constants/type.js";
import { isEmail, isPassword } from "./input.js";
import { callbackFn } from "../../models/validate.js";

export const validateInput = (
  input: HTMLInputElement,
  typeValidate: string,
  cbInputEvent: (value: callbackFn) => void,
  cbTouched: (value: callbackFn) => void
) => {
  let isTouched = false;
  let isValid = false;
  input.oninput = () => {
    const value = input.value;
    switch (typeValidate) {
      case EMAIL:
        isValid = isEmail(value);
        break;
      case PASSWORD:
        isValid = isPassword(value);
        break;
    }
    cbInputEvent({
      isValid,
      isTouched,
      type: 'input'
    });
  }
  input.onblur = () => {
    isTouched = true;
    cbTouched({
        isValid,
        isTouched,
        type: 'touched'
    })
  };
  return {
    isValid,
    isTouched,
  };
};
