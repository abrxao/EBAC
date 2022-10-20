if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position){
    const blockMaps = document.querySelector("#blockMaps");
    const mapsTitle = document.querySelector(".loc__maps__title");
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    blockMaps.setAttribute('src', url);
    mapsTitle.innerHTML = '';
    blockMaps.style.display = 'block';
}
