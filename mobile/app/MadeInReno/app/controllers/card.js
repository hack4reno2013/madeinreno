
Alloy.Globals.accountBalance = 101;
Alloy.Globals.bootyBalance = 36;

function reloadClicked(e) {

	var args = {
	};

	var reloadController = Alloy.createController('reload', args);

	if(OS_IOS) {
		reloadController.getView().open();
	}
}

Ti.App.addEventListener('account.balance_updated', function(args) {
	$.accountBalanceLabel.text = String.format("$%d", Alloy.Globals.accountBalance);
});


$.accountBalanceLabel.text = String.format("$%d", Alloy.Globals.accountBalance);