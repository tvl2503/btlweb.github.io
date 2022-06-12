"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUrlParameter = exports.insertURLParams = void 0;
function insertURLParams(key, value) {
    if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?" +
            searchParams.toString();
        window.history.pushState({ path: newurl }, "", newurl);
    }
}
exports.insertURLParams = insertURLParams;
// to remove the specific key
function removeUrlParameter(paramKey) {
    const url = window.location.href;
    var r = new URL(url);
    r.searchParams.delete(paramKey);
    const newUrl = r.href;
    window.history.pushState({ path: newUrl }, "", newUrl);
}
exports.removeUrlParameter = removeUrlParameter;
