export const insertElement = (elementParent: Element, elementInsert: Element, position?: InsertPosition ) => {
    elementParent.insertAdjacentElement(position || 'beforeend', elementInsert);
}

export const modelElement = (id?: string) => {
    const overlayElement = `<div class="model" id=${id || "model"}></div>`;
    return overlayElement;
}

export const insertStringElement = (elementParent: Element, elementInsert: string, position?: InsertPosition) => {
    return elementParent.insertAdjacentHTML(position || "beforeend", elementInsert);
}