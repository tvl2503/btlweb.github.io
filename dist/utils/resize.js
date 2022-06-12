"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DetectScreen {
    constructor(screenWidth) {
        this.screenWidth = screenWidth;
        this.isMobileScreen = window.innerWidth <= (this.screenWidth || 991);
    }
    ;
    get isMobile() {
        return this.isMobileScreen;
    }
    onHandleResize(callback) {
        this.isMobileScreen = window.innerWidth <= (this.screenWidth || 991);
        callback(this.isMobileScreen);
    }
    onResizeScreen(callback) {
        callback(this.isMobileScreen);
        window.addEventListener('resize', this.onHandleResize.bind(this, callback));
    }
}
exports.default = DetectScreen;
