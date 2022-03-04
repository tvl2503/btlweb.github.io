export const classListToggleElement = (element: Element, className: string) => {
    return element.classList.toggle(className);
}

export const setAttributeElement = (element: Element, query: string | number | boolean, value: string | number | boolean) => {
    element.setAttribute(query.toString(), value.toString());
}