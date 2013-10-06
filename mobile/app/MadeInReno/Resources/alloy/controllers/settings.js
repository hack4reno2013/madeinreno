function Controller() {
    function urlClicked() {
        Ti.Platform.openURL(Alloy.Globals.url);
    }
    function open() {
        var version = Alloy.Globals.prodVersion;
        $.version.text = "Version: " + version;
        var publisher = Alloy.Globals.publisher;
        $.publisher.text = publisher;
        var copyright = Alloy.Globals.copyright;
        $.copyright.text = copyright;
        var url = Alloy.Globals.url;
        $.url.text = url;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId46 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        id: "__alloyId46"
    });
    open ? $.__views.__alloyId46.addEventListener("open", open) : __defers["$.__views.__alloyId46!open!open"] = true;
    $.__views.__alloyId47 = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createImageView({
        top: "10",
        image: "appicon.png",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.publisher = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Made In Reno",
        id: "publisher",
        top: "10"
    });
    $.__views.__alloyId48.add($.__views.publisher);
    $.__views.version = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Version: 1.0",
        id: "version",
        top: "10"
    });
    $.__views.__alloyId48.add($.__views.version);
    $.__views.url = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "blue",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "http://madeinreno.org",
        id: "url",
        top: "10"
    });
    $.__views.__alloyId48.add($.__views.url);
    urlClicked ? $.__views.url.addEventListener("click", urlClicked) : __defers["$.__views.url!click!urlClicked"] = true;
    $.__views.copyright = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Copyright © 2013 Made In Reno",
        id: "copyright",
        top: "10"
    });
    $.__views.__alloyId48.add($.__views.copyright);
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId46,
        title: "Settings",
        icon: "images/settings_off.png",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId46!open!open"] && $.__views.__alloyId46.addEventListener("open", open);
    __defers["$.__views.url!click!urlClicked"] && $.__views.url.addEventListener("click", urlClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;