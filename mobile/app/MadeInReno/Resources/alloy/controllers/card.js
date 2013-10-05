function Controller() {
    function reloadClicked() {
        alert("reload clicked!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "card";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Booty Card",
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Made In Reno",
        top: "10",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        top: "10",
        image: "qrcode.png",
        width: Ti.UI.SIZE,
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Current Balance",
        top: "10",
        id: "__alloyId5"
    });
    $.__views.__alloyId2.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "$0.00",
        top: "10",
        id: "__alloyId6"
    });
    $.__views.__alloyId2.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        top: "20",
        bottom: "10",
        title: "Reload",
        id: "__alloyId7"
    });
    $.__views.__alloyId2.add($.__views.__alloyId7);
    reloadClicked ? $.__views.__alloyId7.addEventListener("click", reloadClicked) : __defers["$.__views.__alloyId7!click!reloadClicked"] = true;
    $.__views.card = Ti.UI.createTab({
        window: $.__views.__alloyId0,
        title: "Card",
        icon: "images/card_off.png",
        id: "card"
    });
    $.__views.card && $.addTopLevelView($.__views.card);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId7!click!reloadClicked"] && $.__views.__alloyId7.addEventListener("click", reloadClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;