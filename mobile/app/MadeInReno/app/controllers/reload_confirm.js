var args = arguments[0] || {};

var amount = args.amount;
var type = args.type;

function confirmClicked(e) {
    Ti.API.debug('reload_confirm.' + arguments.callee.name + ': ' + JSON.stringify(e));
    $.reload_confirm.close();
    Alloy.Globals.accountBalance += amount;
    Ti.App.fireEvent('account.balance_updated', {});
}

function cancelClicked(e) {
    Ti.API.debug('reload_confirm.' + arguments.callee.name + ': ' + JSON.stringify(e));
    $.reload_confirm.close();
}

function open() {
    Ti.API.trace('reload.' + arguments.callee.name);
    $.paymentType.text = type;
    $.reloadAmount.text = String.format("$%d", amount);
}
