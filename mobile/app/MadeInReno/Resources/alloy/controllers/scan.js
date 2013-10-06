function Controller() {
    function scanClicked(e) {
        Ti.API.debug("scan." + arguments.callee.name + ": " + JSON.stringify(e));
    }
    function open() {
        Ti.API.trace("scan." + arguments.callee.name);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "scan";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId58 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Scan",
        id: "__alloyId58"
    });
    open ? $.__views.__alloyId58.addEventListener("open", open) : __defers["$.__views.__alloyId58!open!open"] = true;
    $.__views.__alloyId60 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Scanning is not yet supported on Android.",
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
    $.__views.scan = Ti.UI.createTab({
        window: $.__views.__alloyId58,
        title: "Scan",
        icon: "images/scan_off.png",
        id: "scan"
    });
    $.__views.scan && $.addTopLevelView($.__views.scan);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId58!open!open"] && $.__views.__alloyId58.addEventListener("open", open);
    __defers["$.__views.__alloyId59!click!scanClicked"] && $.__views.__alloyId59.addEventListener("click", scanClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;