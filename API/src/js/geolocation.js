if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position){
    
    const blockMaps = document.querySelector("#blockMaps");
    const mapsWait = document.querySelector(".loc__maps__wait");
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    blockMaps.setAttribute('src', url);
    mapsWait.innerHTML = '';
    blockMaps.style.display = 'block';
}

const mapsBtn = document.querySelector(".loc__maps__wait__permission");

mapsBtn.addEventListener("click", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
    }
});


