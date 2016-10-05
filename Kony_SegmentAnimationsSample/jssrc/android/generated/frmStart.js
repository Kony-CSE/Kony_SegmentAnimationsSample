function addWidgetsfrmStart() {
    frmStart.setDefaultUnit(kony.flex.PERCENTAGE);
    var flxAnimationOptions = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "8%",
        "horizontalScrollIndicator": true,
        "id": "flxAnimationOptions",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
        "skin": "slFSbox",
        "top": "1%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxAnimationOptions.setDefaultUnit(kony.flex.DP);
    var btnMove = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnMove",
        "isVisible": true,
        "left": "0%",
        "onClick": AS_Button_68a5ac27529646d6bea90ccf4410b3f6,
        "skin": "CopyslButtonGlossBlue0a9e071ccae3a43",
        "text": "Translate",
        "top": "0%",
        "width": "32%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnScale = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnScale",
        "isVisible": true,
        "left": "3%",
        "onClick": AS_Button_116b300ebe2840a88c590fbbd8d76cd8,
        "skin": "CopyslButtonGlossBlue0a9e071ccae3a43",
        "text": "Scale",
        "top": "0%",
        "width": "32%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnRotate = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "100%",
        "id": "btnRotate",
        "isVisible": true,
        "left": "3%",
        "onClick": AS_Button_4aba58ec64214c88870c5124cdf28cc0,
        "skin": "CopyslButtonGlossBlue0a9e071ccae3a43",
        "text": "Rotate",
        "top": "0%",
        "width": "32%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAnimationOptions.add(
    btnMove, btnScale, btnRotate);
    var segCars = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
        "data": [{
            "btnDelete": "Button",
            "imgCar": "imagedrag.png",
            "lblCarBrand": "Label"
        }],
        "groupCells": false,
        "height": "90%",
        "id": "segCars",
        "isVisible": true,
        "left": "0%",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_5aefbb9fae4341e48cd483682b9d6fad,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": flexCars,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "1%",
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true,
                "projectionAngle": 60
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btnDelete": "btnDelete",
            "flexCars": "flexCars",
            "imgCar": "imgCar",
            "lblCarBrand": "lblCarBrand"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "dockSectionHeaders": false
    });
    frmStart.add(
    flxAnimationOptions, segCars);
};

function frmStartGlobals() {
    frmStart = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmStart,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "bounces": true,
        "enableScrolling": true,
        "enabledForIdleTimeout": false,
        "horizontalScrollIndicator": true,
        "id": "frmStart",
        "init": AS_Form_0ecf562dfb2541ea9029935b901f0bea,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "pagingEnabled": false,
        "skin": "slForm",
        "verticalScrollIndicator": true
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": true,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};