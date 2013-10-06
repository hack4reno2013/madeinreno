



Ti.App.addEventListener('reward.balance_updated', function(args) {
	$.bootyLevelLabel.text = "Your Booty Level is " + Alloy.Globals.bootyBalance;
});



function open() {
	$.bootyLevelLabel.text = "Your Booty Level is " + Alloy.Globals.bootyBalance;
}
