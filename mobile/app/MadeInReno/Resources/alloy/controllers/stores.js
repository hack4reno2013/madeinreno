function Controller() {
    function setMapLocation(e) {
        if (e.error) alert("Error: " + e.error); else {
            Ti.API.info(e.coords);
            $.map.setLocation({
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                animate: true,
                latitudeDelta: .04,
                longitudeDelta: .04
            });
        }
    }
    function open() {
        if (Ti.Geolocation.locationServicesEnabled) {
            Ti.Geolocation.purpose = "Get Current Location";
            Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
            Ti.Geolocation.distanceFilter = 10;
            Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
            Ti.Geolocation.addEventListener("location", setMapLocation);
        } else alert("Please enable location services");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "stores";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId15 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Stores",
        id: "__alloyId15"
    });
    open ? $.__views.__alloyId15.addEventListener("open", open) : __defers["$.__views.__alloyId15!open!open"] = true;
    var __alloyId16 = [];
    $.__views.__alloyId17 = Ti.Map.createAnnotation({
        latitude: 39.52445,
        longitude: -119.81961,
        title: "Pneumatic Diner",
        id: "__alloyId17"
    });
    __alloyId16.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.Map.createAnnotation({
        latitude: 39.518327,
        longitude: -119.809545,
        title: "Classic Skate Shop",
        id: "__alloyId18"
    });
    __alloyId16.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.Map.createAnnotation({
        latitude: 39.519286,
        longitude: -119.807642,
        title: "NeverEnder",
        id: "__alloyId19"
    });
    __alloyId16.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.Map.createAnnotation({
        latitude: 39.519204,
        longitude: -119.810351,
        title: "Great Full Gardens",
        id: "__alloyId20"
    });
    __alloyId16.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.Map.createAnnotation({
        latitude: 39.515419,
        longitude: -119.807498,
        title: "Junkee",
        id: "__alloyId21"
    });
    __alloyId16.push($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.Map.createAnnotation({
        latitude: 39.519264,
        longitude: -119.81237,
        title: "Too Soul Tea",
        id: "__alloyId22"
    });
    __alloyId16.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.Map.createAnnotation({
        latitude: 39.528069,
        longitude: -119.834731,
        title: "Poleletics",
        id: "__alloyId23"
    });
    __alloyId16.push($.__views.__alloyId23);
    $.__views.map = Ti.Map.createView({
        annotations: __alloyId16,
        ns: Ti.Map,
        id: "map"
    });
    $.__views.__alloyId15.add($.__views.map);
    $.__views.stores = Ti.UI.createTab({
        window: $.__views.__alloyId15,
        title: "Stores",
        icon: "images/airplane.png",
        id: "stores"
    });
    $.__views.stores && $.addTopLevelView($.__views.stores);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId15!open!open"] && $.__views.__alloyId15.addEventListener("open", open);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;