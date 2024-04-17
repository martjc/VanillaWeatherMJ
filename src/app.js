function capitalizeFirstletter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let weatherCondition = document.querySelector("#weather-condition");
  weatherCondition.innerHTML = capitalizeFirstletter(response.data.condition.description);

  let weatherHumidity = document.querySelector("#humidity");
  weatherHumidity.innerHTML = response.data.temperature.humidity;

  let weatherWind = document.querySelector("#wind");
  weatherWind.innerHTML = response.data.wind.speed;

  let now = new Date();
  let todayDate = document.querySelector("#today-date");
  let hour = now.getHours();
  let formattedHour = hour.toString().padStart(2, '0');
  let minutes = now.getMinutes();
  let formattedMinutes = minutes.toString().padStart(2, '0');

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];

  todayDate.innerHTML = `${day}, ${formattedHour}h${formattedMinutes}`; 

  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
let apiKey = "40ab98f05tabc0e10fc0o4394b7f3da7";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(updateData);

}

function submitSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");

    searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", submitSearch);

searchCity("Sydney");
