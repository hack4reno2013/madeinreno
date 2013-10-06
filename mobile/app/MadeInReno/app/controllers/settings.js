
function urlClicked(e) {
	Ti.Platform.openURL(Alloy.Globals.url);
}


function open() {
	var version = Alloy.Globals.prodVersion;
	$.version.text = 'Version: ' + version;
	
	var publisher = Alloy.Globals.publisher;
	$.publisher.text = publisher;
	
	var copyright = Alloy.Globals.copyright;
	$.copyright.text = copyright;
	
	var url = Alloy.Globals.url;
	$.url.text = url;
}
