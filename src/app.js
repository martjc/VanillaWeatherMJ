function submitSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}


let searchFormElement = document.querySelector("#search");
searchFormElement.addEventListener("submit", submitSearch);
