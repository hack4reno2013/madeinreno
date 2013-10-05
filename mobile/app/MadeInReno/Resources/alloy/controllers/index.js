function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;