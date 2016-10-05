//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SegAnimations",
    appName: "SegAnimations",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.84",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "SegAnimations",
    isMFApp: false,
    eventTypes: [],
    url: "http://kh177.kitspl.com:8585/SegAnimations/MWServlet",
    secureurl: "http://kh177.kitspl.com:8585/SegAnimations/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeFBox0db129082375d47();
    initializesegTemplate();
    frmStartGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: SegGesturespostappinit,
        showstartupform: function() {
            frmStart.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();