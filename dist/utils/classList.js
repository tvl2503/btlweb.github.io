export const classListToggleElement = (element, className) => {
    return element.classList.toggle(className);
};
export const setAttributeElement = (element, query, value) => {
    element.setAttribute(query.toString(), value.toString());
};
