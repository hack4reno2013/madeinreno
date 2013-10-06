function Controller() {
    function confirmClicked(e) {
        Ti.API.debug("reload_confirm." + arguments.callee.name + ": " + JSON.stringify(e));
        $.reload_confirm.close();
        Alloy.Globals.accountBalance += amount;
        Ti.App.fireEvent("account.balance_updated", {});
    }
    function cancelClicked(e) {
        Ti.API.debug("reload_confirm." + arguments.callee.name + ": " + JSON.stringify(e));
        $.reload_confirm.close();
    }
    function open() {
        Ti.API.trace("reload." + arguments.callee.name);
        $.paymentType.text = type;
        $.reloadAmount.text = String.format("$%d", amount);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "reload_confirm";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.reload_confirm = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: "false",
        title: "Reload Confirm",
        id: "reload_confirm"
    });
    $.__views.reload_confirm && $.addTopLevelView($.__views.reload_confirm);
    open ? $.__views.reload_confirm.addEventListener("open", open) : __defers["$.__views.reload_confirm!open!open"] = true;
    $.__views.navGroupWidget = Alloy.createWidget("com.orthlieb.navigationgroup", "widget", {
        id: "navGroupWidget"
    });
    $.__views.navGroupWidget && $.addTopLevelView($.__views.navGroupWidget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var amount = args.amount;
    var type = args.type;
    __defers["$.__views.reload_confirm!open!open"] && $.__views.reload_confirm.addEventListener("open", open);
    __defers["$.__views.__alloyId32!click!confirmClicked"] && $.__views.__alloyId32.addEventListener("click", confirmClicked);
    __defers["$.__views.__alloyId33!click!cancelClicked"] && $.__views.__alloyId33.addEventListener("click", cancelClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;