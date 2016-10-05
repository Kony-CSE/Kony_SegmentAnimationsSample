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
    isDebug: true,
    middlewareContext: "SegAnimations",
    isturlbase: "http://kh177.kitspl.com:8585/services",
    isMFApp: true,
    appKey: "7cf0a2e7b9803ba8e6f24cb40ffd4b35",
    appSecret: "f727235aee7d95012b15217bc74c8563",
    serviceUrl: "http://kh177.kitspl.com:8585/authService/100000002/appconfig",
    svcDoc: {
        "appId": "d7644356-e429-4b14-8c77-db1eb688e147",
        "baseId": "f34227fe-e982-441c-8c5a-a408a52e064f",
        "name": "SegAnimations",
        "selflink": "http://kh177.kitspl.com:8585/authService/100000002/appconfig",
        "reportingsvc": {
            "custom": "http://kh177.kitspl.com:8585/services/CMS",
            "session": "http://kh177.kitspl.com:8585/services/IST"
        },
        "Webapp": {
            "url": "http://kh177.kitspl.com:8585/SegAnimations"
        },
        "services_meta": {}
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: [],
    url: "http://kh177.kitspl.com:8585/SegAnimations/MWServlet",
    secureurl: "http://kh177.kitspl.com:8585/SegAnimations/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
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
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;