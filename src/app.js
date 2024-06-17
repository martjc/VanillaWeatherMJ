function refreshWeather(response) {
    let temperatureElement = document.querySelector(".weather-temperature");
    let temperature = response.data.temperature.current;
    let weatherconditionsElement = document.querySelector("#conditions");
    let humidityElement = document.querySelector("#humidity");
    let windspeedElement = document.querySelector("#windspeed");

    temperatureElement.innerHTML = Math.round(temperature);
    weatherconditionsElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windspeedElement.innerHTML = response.data.wind.speed;
    console.log(response);
}


function searchCity(city) {
 let apiKey = "40ab98f05tabc0e10fc0o4394b7f3da7";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

 axios.get(apiUrl).then(refreshWeather);
}

function handleSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

searchCity("Barcelona");

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);