function Controller() {
    function setCurrentPosition(e) {
        if (e.error) alert("Error: " + e.error); else {
            Ti.API.info(e.coords);
            lat = e.coords.latitude;
            lon = e.coords.longitude;
            $.map.setLocation({
                latitude: lat,
                longitude: lon,
                animate: true,
                latitudeDelta: latDelta,
                longitudeDelta: lonDelta
            });
        }
    }
    function setMapLocation(e) {
        if (e.error) alert("Error: " + e.error); else {
            Ti.API.info(e.coords);
            lat = e.coords.latitude;
            lon = e.coords.longitude;
            $.map.setLocation({
                latitude: lat,
                longitude: lon,
                animate: true,
                latitudeDelta: latDelta,
                longitudeDelta: lonDelta
            });
        }
    }
    function setMapRegion(e) {
        e.error ? alert("Error: " + e.error) : $.map.region = {
            latitude: lat,
            longitude: lon,
            latitudeDelta: latDelta,
            longitudeDelta: lonDelta
        };
    }
    function open() {
        $.map.addEventListener("complete", setMapRegion);
        if (Ti.Geolocation.locationServicesEnabled) {
            Ti.Geolocation.purpose = "Get Current Location";
            Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
            Ti.Geolocation.distanceFilter = 10;
            Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
            Ti.Geolocation.getCurrentPosition(setCurrentPosition);
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
    $.__views.__alloyId33 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Booty Stores",
        id: "__alloyId33"
    });
    open ? $.__views.__alloyId33.addEventListener("open", open) : __defers["$.__views.__alloyId33!open!open"] = true;
    var __alloyId34 = [];
    $.__views.__alloyId35 = Ti.Map.createAnnotation({
        latitude: 39.52445,
        longitude: -119.81961,
        title: "Pneumatic Diner",
        id: "__alloyId35"
    });
    __alloyId34.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.Map.createAnnotation({
        latitude: 39.518327,
        longitude: -119.809545,
        title: "Classic Skate Shop",
        id: "__alloyId36"
    });
    __alloyId34.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.Map.createAnnotation({
        latitude: 39.519286,
        longitude: -119.807642,
        title: "NeverEnder",
        id: "__alloyId37"
    });
    __alloyId34.push($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.Map.createAnnotation({
        latitude: 39.519204,
        longitude: -119.810351,
        title: "Great Full Gardens",
        id: "__alloyId38"
    });
    __alloyId34.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.Map.createAnnotation({
        latitude: 39.515419,
        longitude: -119.807498,
        title: "Junkee",
        id: "__alloyId39"
    });
    __alloyId34.push($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.Map.createAnnotation({
        latitude: 39.519264,
        longitude: -119.81237,
        title: "Too Soul Tea",
        id: "__alloyId40"
    });
    __alloyId34.push($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.Map.createAnnotation({
        latitude: 39.528069,
        longitude: -119.834731,
        title: "Poleletics",
        id: "__alloyId41"
    });
    __alloyId34.push($.__views.__alloyId41);
    $.__views.map = Ti.Map.createView({
        annotations: __alloyId34,
        ns: Ti.Map,
        id: "map"
    });
    $.__views.__alloyId33.add($.__views.map);
    $.__views.stores = Ti.UI.createTab({
        window: $.__views.__alloyId33,
        title: "Stores",
        icon: "images/store_off.png",
        id: "stores"
    });
    $.__views.stores && $.addTopLevelView($.__views.stores);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var lat, lon;
    var latDelta = .04;
    var lonDelta = .04;
    __defers["$.__views.__alloyId33!open!open"] && $.__views.__alloyId33.addEventListener("open", open);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;