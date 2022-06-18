const trimString = (str: string) => {
    return str.trim();
}

export const isRequired = (str: string) => {
    if (trimString(str).length === 0) {
        return false;
    }
    return true;
}

export const isEmail = (str: string) => {
    if (!trimString(str).includes('@')) {
        return false;
    }

    return true;
}

export const isPassword = (str: string) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    return regex.test(str);
}