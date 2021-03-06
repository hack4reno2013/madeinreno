function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.scrollablewebview/" + s : s.substring(0, index) + "/com.orthlieb.scrollablewebview/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "ScrollView",
    style: {
        contentWidth: "auto",
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: true
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "000",
        font: {
            fontSize: 16,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center"
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TextField",
    style: {
        top: 5,
        left: 5,
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED"
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "reward_title",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FB0D0E",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "reward_item",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#004080",
        font: {
            fontSize: 18,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "left"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "reward_logo",
    style: {
        top: 15,
        height: 64
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "scrollableView",
    style: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        currentPage: 0,
        pagingControlColor: "#fff",
        backgroundColor: "white"
    }
}, {
    isId: true,
    queries: {
        formFactor: "isHandheld"
    },
    priority: 100011.0011,
    key: "toolbar",
    style: {
        left: 0,
        right: 0,
        bottom: 0,
        height: "30 dp",
        backgroundColor: "transparent"
    }
}, {
    isId: true,
    queries: {
        formFactor: "isHandheld"
    },
    priority: 100011.0012,
    key: "prevButton",
    style: {
        left: 0,
        bottom: 0,
        width: "30 dp",
        height: "30 dp",
        backgroundImage: WPATH("images/arrow_left.png"),
        backgroundDisabledImage: WPATH("images/arrow_left_disabled.png"),
        enabled: false
    }
}, {
    isId: true,
    queries: {
        formFactor: "isHandheld"
    },
    priority: 100011.0013,
    key: "label",
    style: {
        font: {
            fontSize: "12 dp"
        },
        center: {
            x: "50%",
            y: "50%"
        },
        color: "#888888"
    }
}, {
    isId: true,
    queries: {
        formFactor: "isHandheld"
    },
    priority: 100011.0014,
    key: "nextButton",
    style: {
        right: 0,
        bottom: 0,
        width: "30 dp",
        height: "30 dp",
        backgroundImage: WPATH("images/arrow_right.png"),
        backgroundDisabledImage: WPATH("images/arrow_right_disabled.png"),
        enabled: false
    }
}, {
    isId: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 100011.0015,
    key: "toolbar",
    style: {
        left: 0,
        right: 0,
        bottom: 0,
        height: "60 dp",
        backgroundColor: "transparent"
    }
}, {
    isId: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 100011.0016,
    key: "prevButton",
    style: {
        left: 0,
        bottom: 0,
        width: "60 dp",
        height: "60 dp",
        backgroundImage: WPATH("images/arrow_left.png"),
        backgroundDisabledImage: WPATH("images/arrow_left_disabled.png"),
        enabled: false
    }
}, {
    isId: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 100011.0017,
    key: "label",
    style: {
        font: {
            fontSize: "24 dp"
        },
        center: {
            x: "50%",
            y: "50%"
        },
        color: "#888888"
    }
}, {
    isId: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 100011.0018,
    key: "nextButton",
    style: {
        right: 0,
        bottom: 0,
        width: "60 dp",
        height: "60 dp",
        backgroundImage: WPATH("images/arrow_right.png"),
        backgroundDisabledImage: WPATH("images/arrow_right_disabled.png"),
        enabled: false
    }
} ];