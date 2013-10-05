function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId13 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        id: "__alloyId13"
    });
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Settings",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId13,
        title: "Settings",
        icon: "images/airplane.png",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;