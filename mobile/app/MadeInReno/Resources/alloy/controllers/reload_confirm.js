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
    $.__views.navGroupWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "navGroupWin",
        title: "Reload Confirm"
    });
    $.__views.scroll = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        id: "scroll"
    });
    $.__views.navGroupWin.add($.__views.scroll);
    $.__views.__alloyId29 = Ti.UI.createView({
        top: "5",
        layout: "vertical",
        id: "__alloyId29"
    });
    $.__views.scroll.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Summary",
        top: "5",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.reloadAmount = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "$0",
        id: "reloadAmount"
    });
    $.__views.__alloyId29.add($.__views.reloadAmount);
    $.__views.paymentType = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "None",
        id: "paymentType"
    });
    $.__views.__alloyId29.add($.__views.paymentType);
    $.__views.__alloyId31 = Ti.UI.createButton({
        buttom: "20",
        left: "25",
        height: "40",
        title: "Confirm",
        id: "__alloyId31"
    });
    $.__views.__alloyId29.add($.__views.__alloyId31);
    confirmClicked ? $.__views.__alloyId31.addEventListener("click", confirmClicked) : __defers["$.__views.__alloyId31!click!confirmClicked"] = true;
    $.__views.__alloyId32 = Ti.UI.createButton({
        buttom: "20",
        right: "25",
        height: "40",
        top: "-40",
        title: "Cancel",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    cancelClicked ? $.__views.__alloyId32.addEventListener("click", cancelClicked) : __defers["$.__views.__alloyId32!click!cancelClicked"] = true;
    $.__views.navGroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.navGroupWin,
        id: "navGroup"
    });
    $.__views.reload_confirm.add($.__views.navGroup);
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
    __defers["$.__views.__alloyId31!click!confirmClicked"] && $.__views.__alloyId31.addEventListener("click", confirmClicked);
    __defers["$.__views.__alloyId32!click!cancelClicked"] && $.__views.__alloyId32.addEventListener("click", cancelClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;