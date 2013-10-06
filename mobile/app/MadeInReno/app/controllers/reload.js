var amount = 0;
var type = '';

function continueClicked(e) {
	Ti.API.debug('reload.' + arguments.callee.name + ': ' + JSON.stringify(e));
	var args = {
		amount: amount,
		type: type
	};

	var reloadController = Alloy.createController('reload_confirm', args);

	if(OS_IOS) {
		reloadController.getView().open();
		$.reload.close();
	}
}

function amountSliderChanged(e) {
	Ti.API.debug('reload.' + arguments.callee.name + ': ' + JSON.stringify(e));
	amount = e.value;
	$.reloadAmount.text = String.format("$%d", e.value);
}

function clickBack(e) {
	Ti.API.debug('reload.' + arguments.callee.name + ': ' + JSON.stringify(e));
	$.reload.close();
}

function clickBackAndroid(e) {
	Ti.API.debug('reload.' + arguments.callee.name + ': ' + JSON.stringify(e));
    $.navGroupWidget.close();
}

function paymentTypeChanged(e) {
	Ti.API.debug('reload.' + arguments.callee.name + ': ' + JSON.stringify(e));
	type = e.selectedValue[0];
}

var leftNavButton = Alloy.createController('navBarButton').getView();
leftNavButton.title = 'Back';
leftNavButton.addEventListener('click', clickBack);

// var rightNavButton = Alloy.createController('navBarButton').getView();
// rightNavButton.title = 'Save';
// rightNavButton.addEventListener('click', clickSave);

function close() {
	Ti.API.trace('reload.' + arguments.callee.name);
	$.reload.close();
}

function open () {
	Ti.API.trace('reload.' + arguments.callee.name);

}

if (OS_ANDROID) {
    $.navGroupWidget.open($.navGroupWin, {});
}

if (OS_IOS) {
    $.navGroupWin.leftNavButton = leftNavButton;
    $.navGroupWidget.init($.navGroup, {});
    $.navGroupWidget.open($.navGroupWin, {});
}

Alloy.Globals.parent = $.navGroup;