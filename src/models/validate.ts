export interface callbackFn {
  isValid: boolean;
  isTouched: boolean;
  type: "input" | "touched";
}

export interface InputValidate {
  type?: string;
  element?: Element;
  isValid?: boolean
}