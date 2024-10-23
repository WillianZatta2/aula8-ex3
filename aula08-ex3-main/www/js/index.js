
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    getCurrentLocation();
}
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(link);
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}

function link(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const mapLink = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=16/${latitude}/${longitude}`;
    const linkElement = document.createElement('a');
    linkElement.href = mapLink;
    linkElement.textContent = 'Veja sua localização no OpenStreetMap';
    linkElement.target = '_blank';
    document.body.appendChild(linkElement);
}
