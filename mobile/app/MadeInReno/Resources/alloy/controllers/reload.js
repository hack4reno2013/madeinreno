function Controller() {
    function continueClicked(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        var args = {
            amount: amount,
            type: type
        };
        var reloadController = Alloy.createController("reload_confirm", args);
        reloadController.getView().open();
        $.reload.close();
    }
    function amountSliderChanged(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        amount = e.value;
        $.reloadAmount.text = String.format("$%d", e.value);
    }
    function clickBack(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        $.reload.close();
    }
    function paymentTypeChanged(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        type = e.selectedValue[0];
    }
    function close() {
        Ti.API.trace("reload." + arguments.callee.name);
        $.reload.close();
    }
    function open() {
        Ti.API.trace("reload." + arguments.callee.name);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "reload";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.reload = Ti.UI.createWindow({
        backgroundColor: "#fff",
        fullscreen: "false",
        title: "Reload",
        id: "reload"
    });
    $.__views.reload && $.addTopLevelView($.__views.reload);
    open ? $.__views.reload.addEventListener("open", open) : __defers["$.__views.reload!open!open"] = true;
    close ? $.__views.reload.addEventListener("close", close) : __defers["$.__views.reload!close!close"] = true;
    $.__views.navGroupWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "navGroupWin",
        title: "Reload"
    });
    $.__views.scroll = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        id: "scroll"
    });
    $.__views.navGroupWin.add($.__views.scroll);
    $.__views.__alloyId17 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId17"
    });
    $.__views.scroll.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Reload Card",
        top: "5",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createImageView({
        top: "10",
        image: "qrcode.png",
        width: Ti.UI.SIZE,
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createSlider({
        width: "80%",
        top: "10",
        min: "5",
        max: "100",
        value: "5",
        id: "__alloyId20"
    });
    $.__views.__alloyId17.add($.__views.__alloyId20);
    amountSliderChanged ? $.__views.__alloyId20.addEventListener("change", amountSliderChanged) : __defers["$.__views.__alloyId20!change!amountSliderChanged"] = true;
    $.__views.reloadAmount = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "$5",
        top: "5",
        id: "reloadAmount"
    });
    $.__views.__alloyId17.add($.__views.reloadAmount);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Payment Type",
        top: "10",
        id: "__alloyId21"
    });
    $.__views.__alloyId17.add($.__views.__alloyId21);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "0",
        selectionIndicator: "true"
    });
    $.__views.__alloyId17.add($.__views.picker);
    $.__views.paymentType = Ti.UI.createPickerColumn({
        id: "paymentType"
    });
    $.__views.picker.add($.__views.paymentType);
    $.__views.__alloyId23 = Ti.UI.createPickerRow({
        title: "PayPal",
        id: "__alloyId23"
    });
    $.__views.paymentType.addRow($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createPickerRow({
        title: "Visa",
        id: "__alloyId24"
    });
    $.__views.paymentType.addRow($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createPickerRow({
        title: "Mastercard",
        id: "__alloyId25"
    });
    $.__views.paymentType.addRow($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createPickerRow({
        title: "American Express",
        id: "__alloyId26"
    });
    $.__views.paymentType.addRow($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createPickerRow({
        title: "Discover",
        id: "__alloyId27"
    });
    $.__views.paymentType.addRow($.__views.__alloyId27);
    paymentTypeChanged ? $.__views.picker.addEventListener("change", paymentTypeChanged) : __defers["$.__views.picker!change!paymentTypeChanged"] = true;
    $.__views.__alloyId28 = Ti.UI.createButton({
        top: "5",
        title: "Continue",
        id: "__alloyId28"
    });
    $.__views.__alloyId17.add($.__views.__alloyId28);
    continueClicked ? $.__views.__alloyId28.addEventListener("click", continueClicked) : __defers["$.__views.__alloyId28!click!continueClicked"] = true;
    $.__views.navGroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.navGroupWin,
        id: "navGroup"
    });
    $.__views.reload.add($.__views.navGroup);
    $.__views.navGroupWidget = Alloy.createWidget("com.orthlieb.navigationgroup", "widget", {
        id: "navGroupWidget"
    });
    $.__views.navGroupWidget && $.addTopLevelView($.__views.navGroupWidget);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var amount = 0;
    var type = "";
    var leftNavButton = Alloy.createController("navBarButton").getView();
    leftNavButton.title = "Back";
    leftNavButton.addEventListener("click", clickBack);
    $.navGroupWin.leftNavButton = leftNavButton;
    $.navGroupWidget.init($.navGroup, {});
    $.navGroupWidget.open($.navGroupWin, {});
    Alloy.Globals.parent = $.navGroup;
    __defers["$.__views.reload!open!open"] && $.__views.reload.addEventListener("open", open);
    __defers["$.__views.reload!close!close"] && $.__views.reload.addEventListener("close", close);
    __defers["$.__views.__alloyId20!change!amountSliderChanged"] && $.__views.__alloyId20.addEventListener("change", amountSliderChanged);
    __defers["$.__views.picker!change!paymentTypeChanged"] && $.__views.picker.addEventListener("change", paymentTypeChanged);
    __defers["$.__views.__alloyId28!click!continueClicked"] && $.__views.__alloyId28.addEventListener("click", continueClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;