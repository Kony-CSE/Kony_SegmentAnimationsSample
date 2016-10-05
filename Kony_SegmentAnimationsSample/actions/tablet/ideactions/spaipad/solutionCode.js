function setGestures() {
    // Recognize doubletap gesture on flexDoubleTap
    // We are passing 
    //	1 - to Recognize the tap gestureType
    //	{fingers:1,taps:2} - to Recognize single finger doubletap gesture
    //	doubleTapGestureHandler - is the function to handle the doubleTap gesture
    flexCars.setGestureRecognizer(1, {
        fingers: 1,
        taps: 2
    }, doubleTapGestureHandler);
    // Recognize swipe gesture on flexSwipe
    // We are passing 
    //	2 - to Recognize the swipe gestureType
    //	{fingers:1,swipedistance:100,swipevelocity:90} - to Recognize single fingure swipe gesture. 
    //	Swipe will get recognised when user swipes for 100 pxiels distance or at a velocity of 90 pixels/sec
    //	swipeGestureHandler - is the function to handle the swipe gesture
    flexCars.setGestureRecognizer(2, {
        fingers: 1,
        swipedistance: 50,
        swipevelocity: 75
    }, swipeGestureHandler);
    // Recognize longPress gesture on flexLongPress
    // We are passing 
    //	3 - to Recognize the longPress gestureType
    //	{pressDuration:2} - user has to longPress for 2 seconds for the gesture to get recognized, however on Android, pressDuration is ignored and fixed at 500ms
    //	longPressGestureHandler - is the function to handle the longPress gesture
    flexCars.setGestureRecognizer(3, {
        pressDuration: 2
    }, longPressGestureHandler);
}
// Function to handle the doubleTap gesture
function doubleTapGestureHandler(widget, gestureInfo, context) {
    kony.print(" ########## doubleTapGestureHandler() -----> START");
    // Displaying an alert that the user has performed double tap gesture
    //kony.ui.Alert({message: "Double Tap Gesture Recongnized!", alertType: constants.ALERT_TYPE_INFO, alertTitle: "Gesture", yesLabel: "Yipee!"}, {});
    // Logging the gestureInfo details
    kony.print("########## gestureInfo :: " + JSON.stringify(gestureInfo));
    alert("double tap context object" + JSON.stringify(context))
    kony.print("########## doubletap Section index:" + context["sectionIndex"] + "Row index :" + context["rowIndex"]);
    kony.print("########## doubletap selected record" + JSON.stringify(frmStart.segCars.data[context["rowIndex"]]))
    kony.print("########## doubleTapGestureHandler() -----> END");
}

function swipeGestureHandler(widget, gestureInfo, context) {
    kony.print(" ########## swipeGestureHandler() -----> START");
    // Displaying an alert that the user has performed double tap gesture
    //kony.ui.Alert({message: "Swipe Gesture Recongnized!", alertType: constants.ALERT_TYPE_INFO, alertTitle: "Gesture", yesLabel: "Yipee!"}, {});
    // Logging the gestureInfo details
    kony.print("########## gestureInfo :: " + JSON.stringify(gestureInfo));
    alert("swipe context object" + JSON.stringify(context))
    kony.print("########## swipe Section index:" + context["sectionIndex"] + "Row index :" + context["rowIndex"]);
    kony.print("##########  swipe selected record" + JSON.stringify(frmStart.segCars.data[context["rowIndex"]]))
    kony.print("########## swipeGestureHandler() -----> END");
}
// Function to handle the longPress gesture
function longPressGestureHandler(widget, gestureInfo, context) {
    kony.print(" ########## longPressGestureHandler() -----> START");
    // Displaying an alert that the user has performed long press gesture
    //kony.ui.Alert({message: "Long press Gesture Recongnized!", alertType: constants.ALERT_TYPE_INFO, alertTitle: "Gesture", yesLabel: "Yipee!"}, {});
    // Logging the gestureInfo details
    kony.print("########## gestureInfo :: " + JSON.stringify(gestureInfo));
    alert("longpress context object" + JSON.stringify(context))
    kony.print("########## longpress Section index:" + context["sectionIndex"] + "Row index :" + context["rowIndex"]);
    kony.print("########## longpress selected record" + JSON.stringify(frmStart.segCars.data[context["rowIndex"]]))
    kony.print("########## longPressGestureHandler() -----> END");
}