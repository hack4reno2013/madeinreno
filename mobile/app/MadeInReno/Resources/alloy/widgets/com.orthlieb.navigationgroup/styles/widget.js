function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.navigationgroup/" + s : s.substring(0, index) + "/com.orthlieb.navigationgroup/" + s.substring(index + 1);
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
} ];