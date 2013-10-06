function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rewards";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId34 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Booty Rewards",
        id: "__alloyId34"
    });
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Reno Booty Rewards",
        top: "10",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        left: "25%",
        top: "10",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "horizontal",
        horizontalWrap: "false",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId40"
    });
    $.__views.__alloyId38.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId41"
    });
    $.__views.__alloyId38.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId42"
    });
    $.__views.__alloyId38.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId43"
    });
    $.__views.__alloyId38.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId44"
    });
    $.__views.__alloyId35.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "4 more Hearts needed to achive Red booty level",
        top: "10",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.rewards = Ti.UI.createTab({
        window: $.__views.__alloyId34,
        title: "Rewards",
        icon: "images/rewards_off.png",
        id: "rewards"
    });
    $.__views.rewards && $.addTopLevelView($.__views.rewards);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;