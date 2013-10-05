function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "card";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Card",
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Card",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.card = Ti.UI.createTab({
        window: $.__views.__alloyId0,
        title: "Card",
        icon: "images/airplane.png",
        id: "card"
    });
    $.__views.card && $.addTopLevelView($.__views.card);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;