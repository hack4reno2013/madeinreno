function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rewards";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId17 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Booty Rewards",
        id: "__alloyId17"
    });
    $.__views.__alloyId18 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Reno Booty Rewards",
        top: "10",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        left: "25%",
        top: "10",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "horizontal",
        horizontalWrap: "false",
        id: "__alloyId21"
    });
    $.__views.__alloyId18.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId22"
    });
    $.__views.__alloyId21.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId23"
    });
    $.__views.__alloyId21.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId24"
    });
    $.__views.__alloyId21.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId25"
    });
    $.__views.__alloyId21.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        left: "5",
        top: "5",
        image: "images/glyphicons_012_heart.png",
        id: "__alloyId26"
    });
    $.__views.__alloyId21.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId27"
    });
    $.__views.__alloyId18.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "4 more Hearts needed to achive Red booty level",
        top: "10",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.rewards = Ti.UI.createTab({
        window: $.__views.__alloyId17,
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