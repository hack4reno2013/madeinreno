function Controller() {
    function confirmClicked(e) {
        Ti.API.debug("reload_confirm." + arguments.callee.name + ": " + JSON.stringify(e));
        Alloy.Globals.accountBalance += amount;
        Ti.App.fireEvent("account.balance_updated", {});
        $.navGroupWidget.back();
    }
    function cancelClicked(e) {
        Ti.API.debug("reload_confirm." + arguments.callee.name + ": " + JSON.stringify(e));
        $.navGroupWidget.back();
    }
    function clickBackAndroid(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        $.navGroupWidget.close();
    }
    function clickChange(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        $.navGroupWidget.close();
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
    $.__views.reload_confirm = Ti.UI.createView({
        fullscreen: "false",
        title: "Reload Confirm",
        id: "reload_confirm"
    });
    $.__views.reload_confirm && $.addTopLevelView($.__views.reload_confirm);
    open ? $.__views.reload_confirm.addEventListener("open", open) : __defers["$.__views.reload_confirm!open!open"] = true;
    $.__views.navGroupWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "navGroupWin",
        fullscreen: "false",
        layout: "vertical",
        title: "Reload Confirm"
    });
    $.__views.reload_confirm.add($.__views.navGroupWin);
    open ? $.__views.navGroupWin.addEventListener("open", open) : __defers["$.__views.navGroupWin!open!open"] = true;
    $.__views.__alloyId87 = Ti.UI.createButton({
        title: "Change",
        id: "__alloyId87"
    });
    $.__views.navGroupWin.add($.__views.__alloyId87);
    clickBackAndroid ? $.__views.__alloyId87.addEventListener("click", clickBackAndroid) : __defers["$.__views.__alloyId87!click!clickBackAndroid"] = true;
    $.__views.scroll = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        id: "scroll"
    });
    $.__views.navGroupWin.add($.__views.scroll);
    $.__views.__alloyId88 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId88"
    });
    $.__views.scroll.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Summary",
        top: "5",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.reloadAmount = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "$0",
        id: "reloadAmount"
    });
    $.__views.__alloyId88.add($.__views.reloadAmount);
    $.__views.paymentType = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "None",
        id: "paymentType"
    });
    $.__views.__alloyId88.add($.__views.paymentType);
    $.__views.__alloyId90 = Ti.UI.createButton({
        buttom: "20",
        left: "25",
        height: "40",
        title: "Confirm",
        id: "__alloyId90"
    });
    $.__views.__alloyId88.add($.__views.__alloyId90);
    confirmClicked ? $.__views.__alloyId90.addEventListener("click", confirmClicked) : __defers["$.__views.__alloyId90!click!confirmClicked"] = true;
    $.__views.__alloyId91 = Ti.UI.createButton({
        buttom: "20",
        right: "25",
        height: "40",
        top: "-40",
        title: "Cancel",
        id: "__alloyId91"
    });
    $.__views.__alloyId88.add($.__views.__alloyId91);
    cancelClicked ? $.__views.__alloyId91.addEventListener("click", cancelClicked) : __defers["$.__views.__alloyId91!click!cancelClicked"] = true;
    $.__views.navGroupWidget = Alloy.createWidget("com.orthlieb.navigationgroup", "widget", {
        id: "navGroupWidget"
    });
    $.__views.navGroupWidget && $.addTopLevelView($.__views.navGroupWidget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var amount = args.amount;
    var type = args.type;
    var leftNavButton = Alloy.createController("navBarButton").getView();
    leftNavButton.title = "Change";
    leftNavButton.addEventListener("click", clickChange);
    $.navGroupWidget.open($.navGroupWin, {});
    __defers["$.__views.reload_confirm!open!open"] && $.__views.reload_confirm.addEventListener("open", open);
    __defers["$.__views.navGroupWin!open!open"] && $.__views.navGroupWin.addEventListener("open", open);
    __defers["$.__views.__alloyId87!click!clickBackAndroid"] && $.__views.__alloyId87.addEventListener("click", clickBackAndroid);
    __defers["$.__views.__alloyId90!click!confirmClicked"] && $.__views.__alloyId90.addEventListener("click", confirmClicked);
    __defers["$.__views.__alloyId91!click!cancelClicked"] && $.__views.__alloyId91.addEventListener("click", cancelClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;