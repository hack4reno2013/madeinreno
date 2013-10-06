function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.info/" + s : s.substring(0, index) + "/com.orthlieb.info/" + s.substring(index + 1);
    return path;
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
        color: "#000",
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
} ];