//actions.js file 
function AS_Button_078e0e3e415944c1b39b66b868999034(eventobject) {
    setAnimation("translate")
}
function AS_Button_116b300ebe2840a88c590fbbd8d76cd8(eventobject) {
    setAnimation("scale")
}
function AS_Button_2e9e4f79dd794041b5570fff4177763c(eventobject) {
    animateTheLabelInsideRow();
}
function AS_Button_322e9e3b9a2b4938a0a31c70dbe79ac1(eventobject) {
    setAnimation("rotate");
}
function AS_Button_4aba58ec64214c88870c5124cdf28cc0(eventobject) {
    setAnimation("rotate");
}
function AS_Button_68a5ac27529646d6bea90ccf4410b3f6(eventobject) {
    setAnimation("translate")
}
function AS_Button_77d1e401bf5b47c9a1dfa8c65aeb5e87(eventobject) {
    setAnimation("scale")
}
function AS_Button_90165c3d08c64100aff17e4e213cc719(eventobject) {
    setOperations("Remove");
}
function AS_Button_b222292d25f7451a8743c87802dec59d(eventobject, context) {
    deleteRecordwithAnimation()
}
function AS_Button_b441c7e79fec4798a19a8beee7404fc0(eventobject) {
    setOperations("Add");
}
function AS_Button_d8ee658fa91542558a23fbfb29ceddd5(eventobject) {
    setAnimation("rotate");
}
function AS_Button_f2cbeedd18964a59af26bd8ded9da6b8(eventobject) {
    setOperations("Replace");
}
function AS_Form_0ecf562dfb2541ea9029935b901f0bea(eventobject) {
    populateDataToSegment();
    flexCars.setGestureRecognizer(2, {
        fingers: 1,
        swipedistance: 50,
        swipevelocity: 75
    }, animateTheLabelInsideRow);
}
function AS_Form_1ff0ba40d9a040bb82dfc0c3d9af3562(eventobject) {}
function AS_Form_66e6ec62b0db4acd9da81f43d449e8ce(eventobject) {}
function AS_Form_abf0b09855c842a5a01bf13c0dfaf589(eventobject) {}
function AS_Form_b1170dfb1695413385bbc53f930f330b(eventobject) {}
function AS_Form_e59bf004819a4783959f2bb4b8e344ae(eventobject) {}
function AS_Segment_5aefbb9fae4341e48cd483682b9d6fad(eventobject, sectionNumber, rowNumber) {}
function SegGesturespostappinit(params) {}