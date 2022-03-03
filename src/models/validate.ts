export interface callbackFn {
    isValid: boolean;
    isTouched: boolean;
    type: 'input' | 'touched'
  }