// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var window = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
label.text = "QR Scan Test";
label.color = 'black';
window.add(label);
window.open();

// TODO: write your module tests here
var qrcodereader = require('me.izen.QRCodeReader');
Ti.API.info("module is => " + qrcodereader);

qrcodereader.scanCode({
                success:function(e)
                {
                      alert("scan URL : "+e.scanURL);
                },
                cancel:function(e){
                      alert("cancelled");
                }
});

Ti.API.info("module scanURL is => " + qrcodereader.scanURL);

