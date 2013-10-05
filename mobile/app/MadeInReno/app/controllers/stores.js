var lat, lon;

var latDelta = 0.04;
var lonDelta = 0.04;

function setCurrentPosition(e) {
    if (e.error) {
        alert('Error: ' + e.error);
    }
    else {
        Ti.API.info(e.coords);
        
        lat = e.coords.latitude;
        lon = e.coords.longitude;
        
        $.map.setLocation({
            latitude : lat,
            longitude : lon,
            animate : true,
            latitudeDelta : latDelta,
            longitudeDelta : lonDelta
        });
    }
}

function setMapLocation(e) {
    if (e.error) {
        alert('Error: ' + e.error);
    }
    else {
        Ti.API.info(e.coords);
        
        lat = e.coords.latitude;
        lon = e.coords.longitude;
        
        $.map.setLocation({
            latitude : lat,
            longitude : lon,
            animate : true,
            latitudeDelta : latDelta,
            longitudeDelta : lonDelta
        });
    }
}

function setMapRegion(e) {
    if (e.error) {
        alert('Error: ' + e.error);
    }
    else {
        $.map.region = {
            latitude : lat,
            longitude : lon,
            latitudeDelta : latDelta,
            longitudeDelta : lonDelta
        };
    }
}

function open() {
    if (Ti.Platform.name == 'iPhone OS') {
        $.map.addEventListener('complete', setMapRegion);
    }

    if (Ti.Geolocation.locationServicesEnabled) {
        Ti.Geolocation.purpose = 'Get Current Location';
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
        Ti.Geolocation.distanceFilter = 10;
        Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
        Ti.Geolocation.getCurrentPosition(setCurrentPosition);

        Ti.Geolocation.addEventListener('location', setMapLocation);
    }
    else {
        alert('Please enable location services');
    }
}
