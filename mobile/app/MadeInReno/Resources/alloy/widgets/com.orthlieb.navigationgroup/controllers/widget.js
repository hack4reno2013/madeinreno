function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.navigationgroup/" + s : s.substring(0, index) + "/com.orthlieb.navigationgroup/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("com.orthlieb.navigationgroup");
    this.__widgetId = "com.orthlieb.navigationgroup";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.windowStack = [];
    $.navGroup;
    $.init = function() {};
    exports.open = function(windowToOpen, options) {
        $.windowStack.push(windowToOpen);
        windowToOpen.addEventListener("close", function(e) {
            $.top === e.source && $.windowStack.pop();
            $.trigger("close", e);
        });
        windowToOpen.addEventListener("android:back", function() {
            $.close();
        });
        windowToOpen.addEventListener("open", function(e) {
            $.trigger("open", e);
        });
        windowToOpen.navBarHidden = windowToOpen.navBarHidden || false;
        windowToOpen.open(options);
    };
    exports.back = function(options) {
        if ($.windowStack.length > 1) {
            $.top.close(options);
            return true;
        }
        return false;
    };
    exports.close = function(options) {
        $.back();
        $.top.close(options);
    };
    exports.home = function(options) {
        if ($.windowStack.length > 1) {
            var stack = $.windowStack.slice(0);
            for (var i = stack.length - 1; i > 0; i--) stack[i].close(options);
        }
    };
    Object.defineProperty($, "top", {
        get: function() {
            return _.last($.windowStack);
        }
    });
    Object.defineProperty($, "length", {
        get: function() {
            return $.windowStack.length;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;