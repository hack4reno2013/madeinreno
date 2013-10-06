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
    $.__views.__alloyId59 = Ti.UI.createButton({
        title: "Back",
        id: "__alloyId59"
    });
    $.__views.navGroupWin.add($.__views.__alloyId59);
    clickBackAndroid ? $.__views.__alloyId59.addEventListener("click", clickBackAndroid) : __defers["$.__views.__alloyId59!click!clickBackAndroid"] = true;
    $.__views.scroll = Ti.UI.createScrollView({
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true,
        id: "scroll"
    });
    $.__views.navGroupWin.add($.__views.scroll);
    $.__views.__alloyId60 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId60"
    });
    $.__views.scroll.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
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
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createImageView({
        top: "10",
        image: "qrcode.png",
        width: Ti.UI.SIZE,
        id: "__alloyId62"
    });
    $.__views.__alloyId60.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createSlider({
        width: "80%",
        top: "10",
        min: "5",
        max: "100",
        value: "5",
        id: "__alloyId63"
    });
    $.__views.__alloyId60.add($.__views.__alloyId63);
    amountSliderChanged ? $.__views.__alloyId63.addEventListener("change", amountSliderChanged) : __defers["$.__views.__alloyId63!change!amountSliderChanged"] = true;
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
    $.__views.__alloyId60.add($.__views.reloadAmount);
    $.__views.__alloyId64 = Ti.UI.createLabel({
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
        id: "__alloyId64"
    });
    $.__views.__alloyId60.add($.__views.__alloyId64);
    $.__views.picker = Ti.UI.createPicker({
        id: "picker",
        top: "0",
        selectionIndicator: "true"
    });
    $.__views.__alloyId60.add($.__views.picker);
    $.__views.paymentType = Ti.UI.createPickerColumn({
        id: "paymentType"
    });
    $.__views.picker.add($.__views.paymentType);
    $.__views.__alloyId66 = Ti.UI.createPickerRow({
        title: "PayPal",
        id: "__alloyId66"
    });
    $.__views.paymentType.addRow($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createPickerRow({
        title: "Visa",
        id: "__alloyId67"
    });
    $.__views.paymentType.addRow($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createPickerRow({
        title: "Mastercard",
        id: "__alloyId68"
    });
    $.__views.paymentType.addRow($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createPickerRow({
        title: "American Express",
        id: "__alloyId69"
    });
    $.__views.paymentType.addRow($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createPickerRow({
        title: "Discover",
        id: "__alloyId70"
    });
    $.__views.paymentType.addRow($.__views.__alloyId70);
    paymentTypeChanged ? $.__views.picker.addEventListener("change", paymentTypeChanged) : __defers["$.__views.picker!change!paymentTypeChanged"] = true;
    $.__views.__alloyId71 = Ti.UI.createButton({
        top: "5",
        title: "Continue",
        id: "__alloyId71"
    });
    $.__views.__alloyId60.add($.__views.__alloyId71);
    continueClicked ? $.__views.__alloyId71.addEventListener("click", continueClicked) : __defers["$.__views.__alloyId71!click!continueClicked"] = true;
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
    Alloy.Globals.parent = $.navGroup;
    __defers["$.__views.navGroupWin!open!open"] && $.__views.navGroupWin.addEventListener("open", open);
    __defers["$.__views.__alloyId59!click!clickBackAndroid"] && $.__views.__alloyId59.addEventListener("click", clickBackAndroid);
    __defers["$.__views.__alloyId63!change!amountSliderChanged"] && $.__views.__alloyId63.addEventListener("change", amountSliderChanged);
    __defers["$.__views.picker!change!paymentTypeChanged"] && $.__views.picker.addEventListener("change", paymentTypeChanged);
    __defers["$.__views.__alloyId71!click!continueClicked"] && $.__views.__alloyId71.addEventListener("click", continueClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;