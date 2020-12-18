var latitude = 0;
var longitude = 0;

function iniciar() {
    var boton = document.getElementById('obtener');
    boton.addEventListener('click', obtener, false);
}

function obtener() {
    navigator.geolocation.getCurrentPosition(mostrar, showError);
}

function mostrar(posicion) {

    latitude = 'Latitud: ' + posicion.coords.latitude;
    longitude = 'Longitud: ' + posicion.coords.longitude;
    let c = 'Exactitud: ' + posicion.coords.accuracy;

    console.log(latitude);
    console.log(longitude);
    console.log(c);

    mapboxgl.accessToken = 'pk.eyJ1IjoicmF1dSIsImEiOiJja2gwbm9jNDcxZmV6MzBycnRtZGRzY2c1In0.fB4oL4fL-s2l0--i9EeICg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [posicion.coords.longitude, posicion.coords.latitude],
        zoom: 15
    });
    var popup = new mapboxgl.Popup({ offset: 25 }).setText(
        'ESTAMOS AQUI.'
    );
    var marker = new mapboxgl.Marker()
        .setLngLat([posicion.coords.longitude, posicion.coords.latitude])
        .setPopup(popup)
        .addTo(map);

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');

    map.addControl(new mapboxgl.FullscreenControl());



}

function errores(error) {
    alert('Error: ' + error.code + ' ' + error.message);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}



window.addEventListener('load', iniciar, false);