function Controller() {
    function continueClicked(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        var args = {
            amount: amount,
            type: type
        };
        {
            Alloy.createController("reload_confirm", args);
        }
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
    function clickBackAndroid(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        $.navGroupWidget.close();
    }
    function paymentTypeChanged(e) {
        Ti.API.debug("reload." + arguments.callee.name + ": " + JSON.stringify(e));
        type = e.selectedValue[0];
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
    $.__views.contactView = Ti.UI.createView({
        fullscreen: "false",
        id: "contactView"
    });
    $.__views.contactView && $.addTopLevelView($.__views.contactView);
    $.__views.navGroupWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "navGroupWin",
        fullscreen: "false",
        layout: "vertical",
        title: "Reload"
    });
    $.__views.contactView.add($.__views.navGroupWin);
    open ? $.__views.navGroupWin.addEventListener("open", open) : __defers["$.__views.navGroupWin!open!open"] = true;
    $.__views.__alloyId74 = Ti.UI.createButton({
        title: "Back",
        id: "__alloyId74"
    });
    $.__views.navGroupWin.add($.__views.__alloyId74);
    clickBackAndroid ? $.__views.__alloyId74.addEventListener("click", clickBackAndroid) : __defers["$.__views.__alloyId74!click!clickBackAndroid"] = true;
    $.__views.scroll = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        id: "scroll"
    });
    $.__views.navGroupWin.add($.__views.scroll);
    $.__views.__alloyId75 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId75"
    });
    $.__views.scroll.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Reload Card",
        top: "5",
        id: "__alloyId76"
    });
    $.__views.__alloyId75.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createImageView({
        top: "10",
        image: "qr_transaction.png",
        width: Ti.UI.SIZE,
        id: "__alloyId77"
    });
    $.__views.__alloyId75.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createSlider({
        width: "80%",
        top: "10",
        min: "5",
        max: "100",
        value: "5",
        id: "__alloyId78"
    });
    $.__views.__alloyId75.add($.__views.__alloyId78);
    amountSliderChanged ? $.__views.__alloyId78.addEventListener("change", amountSliderChanged) : __defers["$.__views.__alloyId78!change!amountSliderChanged"] = true;
    $.__views.reloadAmount = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "$5",
        top: "5",
        id: "reloadAmount"
    });
    $.__views.__alloyId75.add($.__views.reloadAmount);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Payment Type",
        top: "10",
        id: "__alloyId79"
    });
    $.__views.__alloyId75.add($.__views.__alloyId79);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "0",
        selectionIndicator: "true"
    });
    $.__views.__alloyId75.add($.__views.picker);
    $.__views.paymentType = Ti.UI.createPickerColumn({
        id: "paymentType"
    });
    $.__views.picker.add($.__views.paymentType);
    $.__views.__alloyId81 = Ti.UI.createPickerRow({
        title: "PayPal",
        id: "__alloyId81"
    });
    $.__views.paymentType.addRow($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createPickerRow({
        title: "Visa",
        id: "__alloyId82"
    });
    $.__views.paymentType.addRow($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createPickerRow({
        title: "Mastercard",
        id: "__alloyId83"
    });
    $.__views.paymentType.addRow($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createPickerRow({
        title: "American Express",
        id: "__alloyId84"
    });
    $.__views.paymentType.addRow($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createPickerRow({
        title: "Discover",
        id: "__alloyId85"
    });
    $.__views.paymentType.addRow($.__views.__alloyId85);
    paymentTypeChanged ? $.__views.picker.addEventListener("change", paymentTypeChanged) : __defers["$.__views.picker!change!paymentTypeChanged"] = true;
    $.__views.__alloyId86 = Ti.UI.createButton({
        top: "5",
        title: "Continue",
        id: "__alloyId86"
    });
    $.__views.__alloyId75.add($.__views.__alloyId86);
    continueClicked ? $.__views.__alloyId86.addEventListener("click", continueClicked) : __defers["$.__views.__alloyId86!click!continueClicked"] = true;
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
    $.navGroupWidget.open($.navGroupWin, {});
    __defers["$.__views.navGroupWin!open!open"] && $.__views.navGroupWin.addEventListener("open", open);
    __defers["$.__views.__alloyId74!click!clickBackAndroid"] && $.__views.__alloyId74.addEventListener("click", clickBackAndroid);
    __defers["$.__views.__alloyId78!change!amountSliderChanged"] && $.__views.__alloyId78.addEventListener("change", amountSliderChanged);
    __defers["$.__views.picker!change!paymentTypeChanged"] && $.__views.picker.addEventListener("change", paymentTypeChanged);
    __defers["$.__views.__alloyId86!click!continueClicked"] && $.__views.__alloyId86.addEventListener("click", continueClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;