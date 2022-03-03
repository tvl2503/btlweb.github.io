const trimString = (str) => {
    return str.trim();
};
export const isRequired = (str) => {
    if (trimString(str).length === 0) {
        return false;
    }
    return true;
};
export const isEmail = (str) => {
    if (!trimString(str).includes('@')) {
        return false;
    }
    return true;
};
export const isPassword = (str) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    return regex.test(str);
};
