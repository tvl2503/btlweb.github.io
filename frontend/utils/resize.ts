class DetectScreen {
    isMobileScreen = window.innerWidth <= (this.screenWidth || 991);
    constructor(private screenWidth: number) {
    };
    
    
    public get isMobile() : boolean {
        return this.isMobileScreen;
    }
    
    onHandleResize(callback: (value: boolean) => void) {
        this.isMobileScreen = window.innerWidth <= (this.screenWidth || 991);
        callback(this.isMobileScreen);
    }
    onResizeScreen(callback: (value: boolean) => void) {
        callback(this.isMobileScreen);
        window.addEventListener('resize', this.onHandleResize.bind(this, callback));
    }
}

export default DetectScreen;


