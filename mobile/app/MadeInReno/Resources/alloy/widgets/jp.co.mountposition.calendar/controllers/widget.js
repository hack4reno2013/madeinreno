function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.co.mountposition.calendar/" + s : s.substring(0, index) + "/jp.co.mountposition.calendar/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    new (require("alloy/widget"))("jp.co.mountposition.calendar");
    this.__widgetId = "jp.co.mountposition.calendar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.view = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "view"
    });
    $.__views.view && $.addTopLevelView($.__views.view);
    $.__views.container = Ti.UI.createView({
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.FILL,
        top: 0,
        left: 0,
        id: "container"
    });
    $.__views.view.add($.__views.container);
    $.__views.days = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "22dp",
        backgroundImage: WPATH("/images/bg.png"),
        backgroundRepeat: true,
        layout: "horizontal",
        top: 0,
        id: "days"
    });
    $.__views.container.add($.__views.days);
    $.__views.dates = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        top: "22dp",
        id: "dates"
    });
    $.__views.container.add($.__views.dates);
    doClick ? $.__views.dates.addEventListener("click", doClick) : __defers["$.__views.dates!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var CALENDAR_WIDTH, DAY_COLOR, OUTDAY_COLOR, TILE_WIDTH, WEEK_COLOR, args, calendarMonth, col, createWeekView, day, dayOfWeek, doClick, i, moment, nextMonth, period, prevMonth, row, tile, weekView, _i, _j, _k, _len, _ref, _ref1, _ref2;
    moment = require("alloy/moment");
    args = arguments[0] || {};
    period = null != args.period ? moment(args.period) : moment();
    WEEK_COLOR = [ "#FF9999", "#999999", "#999999", "#999999", "#999999", "#999999", "#91C176" ];
    DAY_COLOR = [ "#FF0000", "#333333", "#333333", "#333333", "#333333", "#333333", "#64A515" ];
    OUTDAY_COLOR = [ "#FF9999", "#999999", "#999999", "#999999", "#999999", "#999999", "#91C176" ];
    exports.TILE_WIDTH = TILE_WIDTH = Math.floor(Ti.Platform.displayCaps.platformWidth / 7);
    CALENDAR_WIDTH = 7 * TILE_WIDTH;
    $.days.width = $.dates.width = CALENDAR_WIDTH;
    $.selected = null;
    doClick = function(e) {
        var _ref, _ref1, _ref2;
        if (null != e.source.date && !e.source._isEntry) {
            null != $.selected && null != (_ref = $.selected.children[0]) && (_ref.backgroundImage = WPATH("/images/calendar/tile.png"));
            $.selected = e.source;
            return null != (_ref1 = $.selected) ? null != (_ref2 = _ref1.children[0]) ? _ref2.backgroundImage = WPATH("/images/calendar/selected.png") : void 0 : void 0;
        }
    };
    _ref = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ];
    for (i = _i = 0, _len = _ref.length; _len > _i; i = ++_i) {
        day = _ref[i];
        $.days.add(Ti.UI.createLabel({
            color: WEEK_COLOR[i],
            textAlign: "center",
            font: {},
            text: day,
            width: TILE_WIDTH
        }));
    }
    $.calendar = {};
    calendarMonth = moment(period);
    period.date(1);
    dayOfWeek = period.day();
    prevMonth = moment(period).subtract("months", 1);
    nextMonth = moment(period).add("months", 1);
    col = 0;
    row = 0;
    createWeekView = function() {
        return Ti.UI.createView({
            layout: "horizontal",
            width: CALENDAR_WIDTH,
            height: TILE_WIDTH
        });
    };
    weekView = createWeekView();
    if (0 !== dayOfWeek) for (i = _j = _ref1 = dayOfWeek - 1; 0 >= _ref1 ? 0 >= _j : _j >= 0; i = 0 >= _ref1 ? ++_j : --_j) {
        weekView.add(Ti.UI.createLabel({
            color: OUTDAY_COLOR[col],
            textAlign: "center",
            text: prevMonth.daysInMonth() - i,
            font: {},
            backgroundImage: WPATH("/images/calendar/inactive.png"),
            width: TILE_WIDTH,
            height: TILE_WIDTH,
            prevMonth: true
        }));
        col++;
    }
    for (i = _k = 1, _ref2 = period.daysInMonth(); _ref2 >= 1 ? _ref2 >= _k : _k >= _ref2; i = _ref2 >= 1 ? ++_k : --_k) {
        tile = Ti.UI.createView({
            backgroundColor: "transparent",
            width: TILE_WIDTH,
            height: TILE_WIDTH,
            date: period.unix()
        });
        tile.add(Ti.UI.createLabel({
            color: DAY_COLOR[period.day()],
            backgroundImage: WPATH("/images/calendar/tile.png"),
            font: {},
            textAlign: "center",
            text: period.date(),
            width: TILE_WIDTH,
            height: TILE_WIDTH,
            _isEntry: false,
            touchEnabled: false
        }));
        weekView.add(tile);
        $.calendar["" + period.date()] = tile;
        period.add("days", 1);
        col++;
        if (7 === col) {
            $.dates.add(weekView);
            weekView = createWeekView();
            col = 0;
            row++;
        }
    }
    while (0 !== col) {
        weekView.add(Ti.UI.createLabel({
            color: OUTDAY_COLOR[col],
            textAlign: "center",
            text: nextMonth.date(),
            font: {},
            backgroundImage: WPATH("/images/calendar/inactive.png"),
            width: TILE_WIDTH,
            height: TILE_WIDTH,
            nextMonth: true
        }));
        nextMonth.add("days", 1);
        col++;
        if (7 === col) {
            $.dates.add(weekView);
            col = 0;
            row++;
        }
    }
    exports.setImage = function(day, image, options) {
        var _ref3;
        null == options && (options = {});
        moment.isMoment(day) && (day = day.date());
        tile = null != (_ref3 = $.calendar) ? _ref3["" + day] : void 0;
        if (null != (null != tile ? tile.date : void 0)) {
            tile.remove(tile.children[0]);
            _.extend(tile, {
                _isEntry: true
            }, options);
            return tile.add(Ti.UI.createImageView({
                image: image,
                width: TILE_WIDTH,
                height: TILE_WIDTH,
                touchEnabled: false
            }));
        }
    };
    exports.setView = function(day, view, options) {
        var _ref3;
        null == options && (options = {});
        moment.isMoment(day) && (day = day.date());
        tile = null != (_ref3 = $.calendar) ? _ref3["" + day] : void 0;
        if (null != tile) {
            _.extend(tile, options);
            return tile.add(view);
        }
    };
    exports.calendarMonth = function() {
        return calendarMonth;
    };
    exports.select = function(day) {
        var touchEvent, _ref3;
        moment.isMoment(day) && (day = day.date());
        touchEvent = "singletap";
        tile = null != (_ref3 = $.calendar) ? _ref3["" + day] : void 0;
        return null != tile ? tile.fireEvent(touchEvent, {
            source: tile
        }) : void 0;
    };
    exports.setDate = function() {
        moment.isMoment(day) && (day = day.date());
    };
    exports.getDate = function() {
        return day;
    };
    exports.selectedDate = function() {
        return null != $.selected ? moment.unix($.selected.date) : moment();
    };
    exports.destroy = function() {
        $.calendar = null;
        $.selected = null;
        return $.destroy();
    };
    __defers["$.__views.dates!click!doClick"] && $.__views.dates.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;