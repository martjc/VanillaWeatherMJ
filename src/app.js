function updateData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;

  cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

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
