function initializesegTemplate() {
    flexCars = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "focusSkin": "CopyslFbox045394fcc6b4b4b",
        "height": "25%",
        "id": "flexCars",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox045394fcc6b4b4b",
        "zIndex": 1
    }, {}, {});
    flexCars.setDefaultUnit(kony.flex.DP);
    var imgCar = new kony.ui.Image2({
        "centerY": "50%",
        "height": "75%",
        "id": "imgCar",
        "isVisible": true,
        "left": "12%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "40%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblCarBrand = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblCarBrand",
        "isVisible": true,
        "left": "65%",
        "skin": "CopyslLabel094761f3b02e744",
        "text": "Label",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnDelete = new kony.ui.Button({
        "centerY": "60%",
        "focusSkin": "slButtonGlossRed",
        "height": "30%",
        "id": "btnDelete",
        "isVisible": true,
        "left": "100%",
        "onClick": AS_Button_b222292d25f7451a8743c87802dec59d,
        "skin": "CopyslButtonGlossBlue0fb988fda16ea45",
        "text": "Button",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flexCars.add(
    imgCar, lblCarBrand, btnDelete);
}