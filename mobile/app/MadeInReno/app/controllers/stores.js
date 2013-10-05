function setMapLocation(e) {
    if (e.error) {
        alert('Error: ' + e.error);
    }
    else {
        Ti.API.info(e.coords);
        $.map.setLocation({
            latitude : e.coords.latitude,
            longitude : e.coords.longitude,
            animate : true,
            latitudeDelta : 0.04,
            longitudeDelta : 0.04
        });
    }
}

function open() {
    if (Ti.Geolocation.locationServicesEnabled) {
        Ti.Geolocation.purpose = 'Get Current Location';
        Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
        Ti.Geolocation.distanceFilter = 10;
        Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;

        Ti.Geolocation.addEventListener('location', setMapLocation);
    }
    else {
        alert('Please enable location services');
    }
}
