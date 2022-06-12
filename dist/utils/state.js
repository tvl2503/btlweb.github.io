"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useState = void 0;
const useState = (defaultValue) => {
    let value = defaultValue;
    const setValue = (newValue) => {
        value = newValue;
    };
    const getValue = () => {
        return value;
    };
    return [getValue, setValue];
};
exports.useState = useState;
