function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.info/" + s : s.substring(0, index) + "/com.orthlieb.info/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.orthlieb.info");
    this.__widgetId = "com.orthlieb.info";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.button = Ti.UI.createButton({
        id: "button"
    });
    $.__views.button && $.addTopLevelView($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = _.defaults(arguments[0], {});
    Object.defineProperty($, "systemButton", {
        get: function() {
            return $._systemButton;
        },
        set: function(systemButton) {
            $._systemButton = systemButton;
            $.button.systemButton = $.systemButton;
        }
    });
    Object.defineProperty($, "icon", {
        get: function() {
            return $._icon;
        },
        set: function(icon) {
            $._icon = icon;
            $.button.image = $.icon;
        }
    });
    Object.defineProperty($, "text", {
        get: function() {
            return $._text;
        },
        set: function(text) {
            $._text = text;
        }
    });
    _.extend($, args);
    exports.init = function(parentWindow) {
        if (!parentWindow) {
            Ti.API.error("InfoButton: missing required parameter 'parent'.");
            return;
        }
        $.systemButton || $.icon || ($.systemButton = Ti.UI.iPhone.SystemButton.INFO_LIGHT);
        parentWindow.remove($.button);
        parentWindow.rightNavButton = $.button;
        $.button.addEventListener("click", function(e) {
            $.trigger("click", e);
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;