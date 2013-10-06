function Controller() {
    function open() {
        $.bootyLevelLabel.text = "Your Booty Level is " + Alloy.Globals.bootyBalance;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rewards";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId37 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Booty Rewards",
        id: "__alloyId37"
    });
    open ? $.__views.__alloyId37.addEventListener("open", open) : __defers["$.__views.__alloyId37!open!open"] = true;
    $.__views.scroll = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        id: "scroll"
    });
    $.__views.__alloyId37.add($.__views.scroll);
    $.__views.__alloyId38 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId38"
    });
    $.__views.scroll.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        layout: "vertical",
        width: "100%",
        height: Ti.UI.SIZE,
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.bootyLevelLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Booty Level: 36",
        id: "bootyLevelLabel",
        top: "10"
    });
    $.__views.__alloyId39.add($.__views.bootyLevelLabel);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FB0D0E",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Rewards",
        top: "10",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createImageView({
        top: 15,
        height: 64,
        image: "images/renocollective.jpg",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        text: "Reno Collective - 100 Booty: $5 off one drop-in day",
        top: "10",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FB0D0E",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Food and Drink",
        top: "10",
        id: "__alloyId43"
    });
    $.__views.__alloyId39.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        top: 15,
        height: 64,
        image: "images/toosoul.jpg",
        id: "__alloyId44"
    });
    $.__views.__alloyId39.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        text: "Tea Soul Tea Co. - 100 Booty: Free tea with purchase of one pastry",
        top: "10",
        id: "__alloyId45"
    });
    $.__views.__alloyId39.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        top: 15,
        height: 64,
        image: "images/pneumaticdiner-300x300.jpg",
        id: "__alloyId46"
    });
    $.__views.__alloyId39.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        text: "Pneumatic Diner - 50 Booty: 1 free drink with food purchase ($8 max)",
        top: "10",
        id: "__alloyId47"
    });
    $.__views.__alloyId39.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FB0D0E",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Fitness",
        top: "10",
        id: "__alloyId48"
    });
    $.__views.__alloyId39.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createImageView({
        top: 15,
        height: 64,
        image: "images/poleletics-300x162.jpg",
        id: "__alloyId49"
    });
    $.__views.__alloyId39.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        text: "Poleletic - 200 Booty: 1 free class",
        top: "10",
        id: "__alloyId50"
    });
    $.__views.__alloyId39.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FB0D0E",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Fashion",
        top: "10",
        id: "__alloyId51"
    });
    $.__views.__alloyId39.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createImageView({
        top: 15,
        height: 64,
        image: "images/NE_Web_Logo-300x52.jpg",
        id: "__alloyId52"
    });
    $.__views.__alloyId39.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        text: "Never Ender - 300 Booty: 15% off your next purchase",
        top: "10",
        id: "__alloyId53"
    });
    $.__views.__alloyId39.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        top: 15,
        height: 64,
        image: "images/junkee.png",
        id: "__alloyId54"
    });
    $.__views.__alloyId39.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        text: "Junkee Clothing Exchanged - 75 Booty: 10% off your next purchase",
        top: "10",
        id: "__alloyId55"
    });
    $.__views.__alloyId39.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createImageView({
        top: 15,
        height: 64,
        image: "images/classic-300x182.jpg",
        id: "__alloyId56"
    });
    $.__views.__alloyId39.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left",
        text: "Classic Skate Shop - 250 Booty: 10% off your next purchase",
        top: "10",
        id: "__alloyId57"
    });
    $.__views.__alloyId39.add($.__views.__alloyId57);
    $.__views.rewards = Ti.UI.createTab({
        window: $.__views.__alloyId37,
        title: "Rewards",
        icon: "images/rewards_off.png",
        id: "rewards"
    });
    $.__views.rewards && $.addTopLevelView($.__views.rewards);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.App.addEventListener("reward.balance_updated", function() {
        $.bootyLevelLabel.text = "Your Booty Level is " + Alloy.Globals.bootyBalance;
    });
    __defers["$.__views.__alloyId37!open!open"] && $.__views.__alloyId37.addEventListener("open", open);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;