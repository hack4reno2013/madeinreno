function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.scrollablewebview/" + s : s.substring(0, index) + "/com.orthlieb.scrollablewebview/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function NextButtonClick() {
        $.currentPage++;
    }
    function PrevButtonClick() {
        $.currentPage--;
    }
    function ScrollableViewScrollEnd(e) {
        $.currentPage = e.currentPage;
    }
    function UpdateLabel(page) {
        $.nextButton.enabled = $.urlArray.length - 1 > page;
        $.prevButton.enabled = 0 != page;
        var pageControlString = "";
        for (i = 0; $.urlArray.length > i; i++) pageControlString += i != page ? "⛋" : "⛏";
        $.label.text = pageControlString;
    }
    function UpdateToolbar() {
        var pagingControlIsOn = "on" == $.showPagingControl || "auto" == $.showPagingControl && $.urlArray.length > 1;
        if (pagingControlIsOn) {
            $.scrollableView.pagingControl = false;
            $.scrollableView.bottom = Alloy.isTablet ? "60 dp" : "30 dp";
            UpdateLabel($.currentPage);
            $.toolbar.visible = true;
        } else {
            $.scrollableView.bottom = 0;
            $.toolbar.visible = false;
            $.scrollableView.showPagingControl = false;
        }
    }
    new (require("alloy/widget"))("com.orthlieb.scrollablewebview");
    this.__widgetId = "com.orthlieb.scrollablewebview";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createView({
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    var __alloyId0 = [];
    $.__views.scrollableView = Ti.UI.createScrollableView({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        currentPage: 0,
        pagingControlColor: "#fff",
        backgroundColor: "white",
        views: __alloyId0,
        id: "scrollableView"
    });
    $.__views.main.add($.__views.scrollableView);
    ScrollableViewScrollEnd ? $.__views.scrollableView.addEventListener("scrollend", ScrollableViewScrollEnd) : __defers["$.__views.scrollableView!scrollend!ScrollableViewScrollEnd"] = true;
    $.__views.toolbar = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            right: 0,
            bottom: 0,
            height: "30 dp",
            backgroundColor: "transparent"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            right: 0,
            bottom: 0,
            height: "60 dp",
            backgroundColor: "transparent"
        });
        _.extend(o, {
            id: "toolbar",
            backgroundColor: "grey"
        });
        return o;
    }());
    $.__views.main.add($.__views.toolbar);
    $.__views.prevButton = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            left: 0,
            bottom: 0,
            width: "30 dp",
            height: "30 dp",
            backgroundImage: WPATH("images/arrow_left.png"),
            backgroundDisabledImage: WPATH("images/arrow_left_disabled.png"),
            enabled: false
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            left: 0,
            bottom: 0,
            width: "60 dp",
            height: "60 dp",
            backgroundImage: WPATH("images/arrow_left.png"),
            backgroundDisabledImage: WPATH("images/arrow_left_disabled.png"),
            enabled: false
        });
        _.extend(o, {
            id: "prevButton"
        });
        return o;
    }());
    $.__views.toolbar.add($.__views.prevButton);
    PrevButtonClick ? $.__views.prevButton.addEventListener("click", PrevButtonClick) : __defers["$.__views.prevButton!click!PrevButtonClick"] = true;
    $.__views.label = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "000",
            font: {
                fontSize: 16,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center"
        });
        Alloy.isHandheld && _.extend(o, {
            font: {
                fontSize: "12 dp"
            },
            center: {
                x: "50%",
                y: "50%"
            },
            color: "#888888"
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: "24 dp"
            },
            center: {
                x: "50%",
                y: "50%"
            },
            color: "#888888"
        });
        _.extend(o, {
            id: "label"
        });
        return o;
    }());
    $.__views.toolbar.add($.__views.label);
    $.__views.nextButton = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isHandheld && _.extend(o, {
            right: 0,
            bottom: 0,
            width: "30 dp",
            height: "30 dp",
            backgroundImage: WPATH("images/arrow_right.png"),
            backgroundDisabledImage: WPATH("images/arrow_right_disabled.png"),
            enabled: false
        });
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            right: 0,
            bottom: 0,
            width: "60 dp",
            height: "60 dp",
            backgroundImage: WPATH("images/arrow_right.png"),
            backgroundDisabledImage: WPATH("images/arrow_right_disabled.png"),
            enabled: false
        });
        _.extend(o, {
            id: "nextButton"
        });
        return o;
    }());
    $.__views.toolbar.add($.__views.nextButton);
    NextButtonClick ? $.__views.nextButton.addEventListener("click", NextButtonClick) : __defers["$.__views.nextButton!click!NextButtonClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = _.defaults(arguments[0], {
        pagingControlStyle: "native",
        showPagingControl: "auto",
        currentPage: 0,
        urlArray: []
    });
    var properties = [ "urlArray", "pagingControlStyle", "showPagingControl", "currentPage" ];
    var subviews = [ "scrollableView", "toolbar", "prevButton", "nextButton", "label" ];
    var dimensions = [ "left", "top", "right", "bottom", "center", "width", "height" ];
    _.extend($.main, _.chain(args).omit(properties).omit(subviews).value());
    _.extend($.scrollableView, _.chain(args.scrollableView).omit([ "showPagingControl", "currentPage", "views" ]).omit(dimensions).value());
    _.extend($.prevButton, args.prevButton);
    _.extend($.nextButton, args.nextButton);
    _.extend($.label, args.label);
    _.extend($.toolbar, _.omit(args.toolbar, dimensions));
    $._showPagingControl = "auto";
    Object.defineProperty($, "showPagingControl", {
        get: function() {
            return $._showPagingControl;
        },
        set: function(showPagingControl) {
            if (-1 == _.indexOf([ "on", "off", "auto" ], showPagingControl) || showPagingControl == $._showPagingControl) return;
            $._showPagingControl = showPagingControl;
            UpdateToolbar();
        }
    });
    $._pagingControlStyle = "native";
    Object.defineProperty($, "pagingControlStyle", {
        get: function() {
            return $._pagingControlStyle;
        },
        set: function(pagingControlStyle) {
            if (-1 == _.indexOf([ "native", "toolbar" ], pagingControlStyle) || pagingControlStyle == $._pagingControlStyle) return;
            $._pagingControlStyle = pagingControlStyle;
            UpdateToolbar();
        }
    });
    $._currentPage = 0;
    Object.defineProperty($, "currentPage", {
        get: function() {
            return $._currentPage;
        },
        set: function(currentPage) {
            if (0 > currentPage || currentPage >= $.urlArray.length || currentPage == $._currentPage) return;
            $._currentPage = currentPage;
            $.scrollableView.currentPage = currentPage;
            UpdateToolbar();
        }
    });
    Object.defineProperty($, "urlArray", {
        get: function() {
            return $._urlArray;
        },
        set: function(urlArray) {
            $._urlArray = urlArray;
            var aViews = [];
            var wv = _.chain(args.webView).omit([ "url", "html" ]).omit(dimensions).value();
            for (var j = 0; urlArray.length > j; j++) {
                var url = urlArray[j].match(/^http/) ? urlArray[j] : "/HTML/" + urlArray[j] + ".html";
                Ti.API.info("Accessing URL: " + url);
                wv.url = url;
                aViews[j] = Ti.UI.createWebView(wv);
                aViews[j].addEventListener("load", function(e) {
                    $.trigger("load", e);
                });
            }
            $.scrollableView.views = aViews;
            UpdateToolbar();
        }
    });
    var x = _.pick(args, properties);
    _.extend($, x);
    __defers["$.__views.scrollableView!scrollend!ScrollableViewScrollEnd"] && $.__views.scrollableView.addEventListener("scrollend", ScrollableViewScrollEnd);
    __defers["$.__views.prevButton!click!PrevButtonClick"] && $.__views.prevButton.addEventListener("click", PrevButtonClick);
    __defers["$.__views.nextButton!click!NextButtonClick"] && $.__views.nextButton.addEventListener("click", NextButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;