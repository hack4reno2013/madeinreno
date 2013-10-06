if (OS_IOS) {
    var qrcodereader = require('me.izen.QRCodeReader');
    Ti.API.info("module is => " + qrcodereader);
}

function scanClicked(e) {
    Ti.API.debug('scan.' + arguments.callee.name + ': ' + JSON.stringify(e));
    if (OS_IOS) {
        qrcodereader.scanCode({
            success : function(e) {
                alert('Payment Accepted!');
                Ti.API.info("module scanURL is => " + e.scanURL);
                var scanData = JSON.parse(e.scanURL);
                Alloy.Globals.bootyBalance += scanData.amount;
                Alloy.Globals.accountBalance -= scanData.amount;
                Ti.App.fireEvent('account.balance_updated', {});
                Ti.App.fireEvent('reward.balance_updated', {});
                // {"custId" : "1", "amount" : "5.00"}
            },
            cancel : function(e) {
                alert("cancelled");
            }

        });
    }
}

function open() {
    Ti.API.trace('scan.' + arguments.callee.name);

}
