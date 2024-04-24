import API_Key from '../config';

function onGeoSuccess (position){
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
    console.log(position);
    console.log("You live in", lat, lon);

    fetch(url).then(res => res.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const tempMin = data.main.temp_min;
        const tempMax = data.main.temp_max;
        weather.innerText = `${data.weather[0].main} / min: ${tempMin}℃ / max: ${tempMax}℃`;
        city.innerText = data.name;
        console.log(tempMin, tempMax);
    });
}
function onGeoError (){
    alert("Can't find your location.");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

window.addEventListener('DOMContentLoaded', function(){

    const day = new Date();

    const month = day.getMonth()+1;
    const date = day.getDate();
    console.log(month, date);

});