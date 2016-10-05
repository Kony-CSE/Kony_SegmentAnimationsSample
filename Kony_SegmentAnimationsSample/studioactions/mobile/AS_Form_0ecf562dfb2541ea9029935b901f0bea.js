function AS_Form_0ecf562dfb2541ea9029935b901f0bea(eventobject) {
    populateDataToSegment();
    flexCars.setGestureRecognizer(2, {
        fingers: 1,
        swipedistance: 50,
        swipevelocity: 75
    }, animateTheLabelInsideRow);
}