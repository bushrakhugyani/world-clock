// Function to update the clocks for different cities
function updateClocks(cityId) {
  // Object mapping city IDs to their respective time zones
  let cities = {
    "new-york": "America/New_York",
    london: "Europe/London",
    tokyo: "Asia/Tokyo",
  };

  // Get the time zone for the specified city
  let timeZone = cities[cityId];

  // Get the current date and time in the specified time zone
  let dateTime = moment().tz(timeZone);

  // Select the city element in the DOM using the cityId
  let cityElement = document.querySelector("#" + cityId);

  // Select the date and time elements within the city element
  let dateElement = cityElement.querySelector(".date");
  let timeElement = cityElement.querySelector(".time");

  // Update the date and time in the city element with the current date and time
  dateElement.innerHTML = dateTime.format("MMMM Do YYYY");
  timeElement.innerHTML = dateTime.format("h:mm:ss A");
}

function updateAllClocks() {
  // Call updateClocks for each city
  updateClocks("new-york");
  updateClocks("london");
  updateClocks("tokyo");
}

// Update the clocks for all cities immediately (to show initial time)
updateAllClocks();

// Update the clocks for all cities every second
setInterval(updateAllClocks, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

let selectCityElement = document.querySelector("#city");
selectCityElement.addEventListener("change", updateCity);
