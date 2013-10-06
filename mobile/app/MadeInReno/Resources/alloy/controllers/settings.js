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
    $.__views.__alloyId61 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Settings",
        id: "__alloyId61"
    });
    open ? $.__views.__alloyId61.addEventListener("open", open) : __defers["$.__views.__alloyId61!open!open"] = true;
    $.__views.__alloyId62 = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createImageView({
        top: "10",
        image: "appicon.png",
        id: "__alloyId64"
    });
    $.__views.__alloyId63.add($.__views.__alloyId64);
    $.__views.publisher = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Made In Reno",
        id: "publisher",
        top: "10"
    });
    $.__views.__alloyId63.add($.__views.publisher);
    $.__views.version = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Version: 1.0",
        id: "version",
        top: "10"
    });
    $.__views.__alloyId63.add($.__views.version);
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
    $.__views.__alloyId63.add($.__views.url);
    urlClicked ? $.__views.url.addEventListener("click", urlClicked) : __defers["$.__views.url!click!urlClicked"] = true;
    $.__views.copyright = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Copyright © 2013 Made In Reno",
        id: "copyright",
        top: "10"
    });
    $.__views.__alloyId63.add($.__views.copyright);
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId61,
        title: "Settings",
        icon: "images/settings_off.png",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId61!open!open"] && $.__views.__alloyId61.addEventListener("open", open);
    __defers["$.__views.url!click!urlClicked"] && $.__views.url.addEventListener("click", urlClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;