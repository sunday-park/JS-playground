import { API_Key } from '../config.js';

const weatherHandler = {

    onGeoSuccess: (position) => {
        const lat = position.coords.latitude; 
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
        // console.log(position);
        // console.log("You live in", lat, lon);
    
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const weatherIcon = document.querySelector(".weather-icon");
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            const tempMin = data.main.temp_min;
            const tempMax = data.main.temp_max;
            weather.innerText = `${data.weather[0].main} / feels_like ${data.main.feels_like} / min: ${tempMin}℃ / max: ${tempMax}℃`;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherIcon.alt = `alt=${data.weather[0].description}`
            city.innerText = data.name;
            console.log(tempMin, tempMax);
        });
    },
    onGeoError: () => {
        alert("We Can't find your location.");
    },
};

navigator.geolocation.getCurrentPosition(weatherHandler.onGeoSuccess, weatherHandler.onGeoError);

window.addEventListener('DOMContentLoaded', () => {
    const day = new Date();
    const month = day.getMonth()+1;
    const date = day.getDate();
    console.log(month, date);
});


