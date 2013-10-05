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
    $.__views.__alloyId4 = Alloy.createController("card", {
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId6 = Alloy.createController("rewards", {
        id: "__alloyId6"
    });
    $.__views.index.addTab($.__views.__alloyId6.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId8 = Alloy.createController("stores", {
        id: "__alloyId8"
    });
    $.__views.index.addTab($.__views.__alloyId8.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId10 = Alloy.createController("settings", {
        id: "__alloyId10"
    });
    $.__views.index.addTab($.__views.__alloyId10.getViewEx({
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