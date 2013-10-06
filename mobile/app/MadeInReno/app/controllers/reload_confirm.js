var args = arguments[0] || {};

var amount = args.amount;
var type = args.type;

function confirmClicked(e) {
    Ti.API.debug('reload_confirm.' + arguments.callee.name + ': ' + JSON.stringify(e));
    Alloy.Globals.accountBalance += amount;
    Ti.App.fireEvent('account.balance_updated', {});
	if(OS_ANDROID) {
	    $.navGroupWidget.back();
	}
	else {
		$.reload_confirm.close();
	}
}

function cancelClicked(e) {
    Ti.API.debug('reload_confirm.' + arguments.callee.name + ': ' + JSON.stringify(e));
	if(OS_ANDROID) {
	    $.navGroupWidget.back();
	}
	else {
		$.reload_confirm.close();
	}
}

function clickBackAndroid(e) {
	Ti.API.debug('reload.' + arguments.callee.name + ': ' + JSON.stringify(e));
    $.navGroupWidget.close();
}

function clickChange(e) {
	Ti.API.debug('reload.' + arguments.callee.name + ': ' + JSON.stringify(e));
	if(OS_ANDROID) {
	    $.navGroupWidget.close();
	}
	else {
		$.reload_confirm.close();
	}
}

var leftNavButton = Alloy.createController('navBarButton').getView();
leftNavButton.title = 'Change';
leftNavButton.addEventListener('click', clickChange);

function open() {
    Ti.API.trace('reload.' + arguments.callee.name);
    $.paymentType.text = type;
    $.reloadAmount.text = String.format("$%d", amount);
}

if (OS_ANDROID) {
    $.navGroupWidget.open($.navGroupWin, {});
}

if (OS_IOS) {
    $.navGroupWin.leftNavButton = leftNavButton;
    $.navGroupWidget.init($.navGroup, {});
    $.navGroupWidget.open($.navGroupWin, {});
}
