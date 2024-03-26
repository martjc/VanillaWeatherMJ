function updateData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let weatherCondition = document.querySelector("#weather-condition");
  weatherCondition.innerHTML = response.data.condition.description;

  let weatherHumidity = document.querySelector("#humidity");
  weatherHumidity.innerHTML = response.data.temperature.humidity;

  let weatherWind = document.querySelector("#wind");
  weatherWind.innerHTML = response.data.wind.speed;

  let date = new Date(response.data.time * 1000);
  let todayDay = document.querySelector("#day");
  todayDay.innerHTML = formatDate(date);
  let nowTime = document.querySelector("#hour");
  nowTime.innerHTML = `${date.getHours()}:${date.getMinutes()}`;

console.log(response);

  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    let day = days[date.getDay()];
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
