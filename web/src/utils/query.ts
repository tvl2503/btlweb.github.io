export const qs = (selector: string, targetObject: Document | Element = document) => {
  return targetObject.querySelector(selector);
}

export const qsa = (selector: string, targetObject: Document | Element = document) => {
  return targetObject.querySelectorAll(selector);
}

export const gid = (id: string) => {
  return document.getElementById(id);
}