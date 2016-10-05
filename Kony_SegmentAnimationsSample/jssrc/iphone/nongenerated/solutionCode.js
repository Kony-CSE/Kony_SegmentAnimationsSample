// Function to populate data on the segment.This function is invoked on the preshow event of the frmHome
function populateDataToSegment() {
    // Creating an array of Data
    var segData = [{
        carImage: "bmw.png",
        CarBrand: "BMW",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "fiat.png",
        CarBrand: "Fiat",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "jaguar.png",
        CarBrand: "Jaguar",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "lexus.png",
        CarBrand: "Lexus",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "skoda.png",
        CarBrand: "Skoda",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "toyota.png",
        CarBrand: "Toyota",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "alfa.png",
        CarBrand: "Alfa",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "audi.png",
        CarBrand: "Audi",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "bmw.png",
        CarBrand: "Honda",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "fiat.png",
        CarBrand: "Suzuki",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "jaguar.png",
        CarBrand: "Porsche",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "lexus.png",
        CarBrand: "Nissan",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "skoda.png",
        CarBrand: "Infinity",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "toyota.png",
        CarBrand: "Acura",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "alfa.png",
        CarBrand: "Bentley",
        deleteButton: "Delete",
        template: flexCars
    }, {
        carImage: "audi.png",
        CarBrand: "Hyundai",
        deleteButton: "Delete",
        template: flexCars
    }];
    kony.print("########## segData=" + JSON.stringify(segData));
    // Setting the segment widgetdataMap 
    frmStart.segCars.widgetDataMap = {
        imgCar: "carImage",
        lblCarBrand: "CarBrand",
        btnDelete: "deleteButton"
    };
    frmStart.segCars.setData(segData);
}

function setAnimation(animationType) {
    var transformObject1 = kony.ui.makeAffineTransform();
    var transformObject2 = kony.ui.makeAffineTransform();
    if (animationType == "translate") {
        // This will be invoked when you click on translate button
        transformObject1.translate(200, 0);
        transformObject2.translate(0, 0);
    } else if (animationType == "scale") {
        // This will be invoked when you click on scale button
        transformObject1.scale(0, 0);
        transformObject2.scale(1, 1);
    } else if (animationType == "rotate") {
        // This will be invoked when you click on rotate button
        transformObject1.rotate(90);
        transformObject2.rotate(0);
    }
    var animationObject = kony.ui.createAnimation({
        "0": {
            "transform": transformObject1,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "transform": transformObject2,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animationConfig = {
        duration: 1,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    var animationCallbacks = {
        "animationEnd": function() {
            kony.print("animation END")
        }
    };
    var animationDefObject = {
        definition: animationObject,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    frmStart.segCars.setAnimations({
        visible: animationDefObject
    });
}

function deleteRecordwithAnimation() {
    var transformObject1 = kony.ui.makeAffineTransform();
    var transformObject2 = kony.ui.makeAffineTransform();
    transformObject1.scale(1, 1);
    transformObject2.scale(0, 0);
    var animDefinitionOne = {
        0: {
            "transform": transformObject1
        },
        100: {
            "transform": transformObject2
        }
    };
    var animDefinition = kony.ui.createAnimation(animDefinitionOne);
    var animConfig = {
        "duration": 0.3,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.NONE
    };
    var animationObject = {
        definition: animDefinition,
        config: animConfig
    };
    var rowIndex = frmStart.segCars.selectedIndex[1];
    var secIndex = frmStart.segCars.selectedIndex[0];
    frmStart.segCars.removeAt(rowIndex, secIndex, animationObject);
}

function animateTheLabelInsideRow(widget, gestureInfo, context) {
    var animationObject = kony.ui.createAnimation({
        "0": {
            "centerY": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "centerY": "30%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animationConfig = {
        duration: 0.5,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    var animationCallbacks = {
        "animationEnd": function() {
            animateTheButtonInsideRow(context.sectionIndex, context.rowIndex)
        }
    };
    var animationDefObject = {
        definition: animationObject,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    var row1 = {
        sectionIndex: context.sectionIndex,
        rowIndex: context.rowIndex
    };
    var rowList = [row1];
    frmStart.segCars.animateRows({
        rows: rowList,
        widgets: ["lblCarBrand"],
        animation: animationDefObject
    });
}

function animateTheButtonInsideRow(swipeSecIndex, swipeRowIndex) {
    var animationObject = kony.ui.createAnimation({
        "0": {
            "left": "100%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "left": "65%",
            "height": "30%",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    var animationConfig = {
        duration: 0.5,
        fillMode: kony.anim.FILL_MODE_FORWARDS
    };
    var animationCallbacks = {
        "animationEnd": function() {
            kony.print("Animating button is finished")
        }
    };
    var animationDefObject = {
        definition: animationObject,
        config: animationConfig,
        callbacks: animationCallbacks
    };
    var row1 = {
        sectionIndex: swipeSecIndex,
        rowIndex: swipeRowIndex
    };
    var rowList = [row1];
    frmStart.segCars.animateRows({
        rows: rowList,
        widgets: ["btnDelete"],
        animation: animationDefObject
    });
}