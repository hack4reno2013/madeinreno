

var prodVersion = Ti.App.Properties.getString('version_preference', '0.0.0-DEV');
Alloy.Globals.prodVersion = prodVersion;

var publisher = Ti.App.Properties.getString('publisher_preference', 'Made In Reno');
Alloy.Globals.publisher = publisher;

var url = Ti.App.Properties.getString('url_preference', 'http://madeinreno.org');
Alloy.Globals.url = url;

var copyright = Ti.App.Properties.getString('copyright_preference', 'Copyright © 2013 MadeInReno');
Alloy.Globals.copyright = copyright;

function checkForAppReset() {
	Ti.API.trace('index.' + arguments.callee.name);
	var appSettingsReset = Ti.App.Properties.getString('reset_preference', 'NO');
	Titanium.API.debug('reset_preference:' + appSettingsReset);
	if (appSettingsReset === 'YES') {
		Ti.App.Properties.setString('version_preference', '');
		Ti.App.Properties.setString('reset_preference', 'NO');
	}
}


function init() {
	Ti.API.trace('index.' + arguments.callee.name);
	checkForAppReset();
	if (Ti.App.Properties.getString('version_preference', '') == '') {
		if (ENV_PRODUCTION) {
			prodVersion = Ti.App.version + '-GA';
		} else {
			prodVersion = Ti.App.version + '-DEV';
		}
		Ti.App.Properties.setString('version_preference', prodVersion);
	}
	Ti.API.debug('prodVersion = ' + prodVersion);
	Alloy.Globals.prodVersion = prodVersion;
}

function open() {
	Ti.API.trace('index.' + arguments.callee.name);
	init();
}

$.index.open();