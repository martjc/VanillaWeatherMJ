function refreshWeather(response) {
    let temperatureElement = document.querySelector(".weather-temperature");
    let temperature = response.data.temperature.current;
    let weatherconditionsElement = document.querySelector("#conditions");
    let humidityElement = document.querySelector("#humidity");
    let windspeedElement = document.querySelector("#windspeed");
    let timeElement = document.querySelector("#datetime");
    let date = new Date(response.data.time * 1000);
    let icon = document.querySelector("#icon");

    temperatureElement.innerHTML = Math.round(temperature);
    weatherconditionsElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windspeedElement.innerHTML = response.data.wind.speed;
    timeElement.innerHTML = formatDate(date);
    icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"></img>`;

    console.log(response);
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${day} ${hours}h${minutes}`
}


function searchCity(city) {
 let apiKey = "40ab98f05tabc0e10fc0o4394b7f3da7";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

 axios.get(apiUrl).then(refreshWeather);
}

function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#form-input");
    let cityElement = document.querySelector(".city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

searchCity("Barcelona");

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);