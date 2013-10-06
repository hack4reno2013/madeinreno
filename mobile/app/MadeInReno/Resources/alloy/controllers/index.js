function Controller() {
    function checkForAppReset() {
        Ti.API.trace("index." + arguments.callee.name);
        var appSettingsReset = Ti.App.Properties.getString("reset_preference", "NO");
        Titanium.API.debug("reset_preference:" + appSettingsReset);
        if ("YES" === appSettingsReset) {
            Ti.App.Properties.setString("version_preference", "");
            Ti.App.Properties.setString("reset_preference", "NO");
        }
    }
    function init() {
        Ti.API.trace("index." + arguments.callee.name);
        checkForAppReset();
        if ("" == Ti.App.Properties.getString("version_preference", "")) {
            prodVersion = Ti.App.version + "-DEV";
            Ti.App.Properties.setString("version_preference", prodVersion);
        }
        Ti.API.debug("prodVersion = " + prodVersion);
        Alloy.Globals.prodVersion = prodVersion;
    }
    function open() {
        Ti.API.trace("index." + arguments.callee.name);
        init();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId10 = Alloy.createController("card", {
        id: "__alloyId10"
    });
    $.__views.index.addTab($.__views.__alloyId10.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId12 = Alloy.createController("rewards", {
        id: "__alloyId12"
    });
    $.__views.index.addTab($.__views.__alloyId12.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId14 = Alloy.createController("stores", {
        id: "__alloyId14"
    });
    $.__views.index.addTab($.__views.__alloyId14.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId16 = Alloy.createController("settings", {
        id: "__alloyId16"
    });
    $.__views.index.addTab($.__views.__alloyId16.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    open ? $.__views.index.addEventListener("open", open) : __defers["$.__views.index!open!open"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var prodVersion = Ti.App.Properties.getString("version_preference", "0.0.0-DEV");
    Alloy.Globals.prodVersion = prodVersion;
    var publisher = Ti.App.Properties.getString("publisher_preference", "Made In Reno");
    Alloy.Globals.publisher = publisher;
    var url = Ti.App.Properties.getString("url_preference", "http://madeinreno.org");
    Alloy.Globals.url = url;
    var copyright = Ti.App.Properties.getString("copyright_preference", "Copyright © 2013 MadeInReno");
    Alloy.Globals.copyright = copyright;
    $.index.open();
    __defers["$.__views.index!open!open"] && $.__views.index.addEventListener("open", open);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;