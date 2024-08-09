export const displayWeather = (data) => {
  const { todaysForecast, currentWeather } = data;

  // Cache DOM elements
  const weatherInfoDiv = document.querySelector(".todays-forecast");
  const currentWeatherDiv = document.querySelector(".current-weather");

  // Today's Forecast
  const utcDate = new Date(todaysForecast.time);
  const localDate = new Date(
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
  );

  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = localDate.toLocaleDateString(undefined, dateOptions);

  document.getElementById(
    "location"
  ).textContent = `${todaysForecast.location} Weather for:`;
  document.getElementById("date").textContent = formattedDate;

  weatherInfoDiv.querySelector(
    ".weather-icon"
  ).src = `images/icons/${todaysForecast.icon}.svg`;
  weatherInfoDiv.querySelector(
    ".high-temp .temp-digit"
  ).textContent = `${todaysForecast.highTemp}°F`;
  weatherInfoDiv.querySelector(
    ".low-temp .temp-digit"
  ).textContent = `${todaysForecast.lowTemp}°F`;
  weatherInfoDiv.querySelector("#todaysWeatherDescription").textContent =
    todaysForecast.description;

  // Current Weather
  currentWeatherDiv.querySelector("#localTime").textContent =
    currentWeather.time;
  currentWeatherDiv.querySelector(
    ".weather-summary .weather-icon"
  ).src = `images/icons/${currentWeather.icon}.svg`;
  currentWeatherDiv.querySelector(
    ".weather-summary .weather-description"
  ).textContent = currentWeather.conditions;
  currentWeatherDiv.querySelector(
    ".current-temp .temp-digit"
  ).textContent = `${currentWeather.temperature}°F`;

  currentWeatherDiv.querySelector(
    "#feelsLike"
  ).textContent = `${currentWeather.feelsLike}°F`;
  currentWeatherDiv.querySelector(
    "#humidity"
  ).textContent = `${currentWeather.humidity}%`;
  currentWeatherDiv.querySelector(
    "#windSpeed"
  ).textContent = `${currentWeather.windSpeed} mph`;
  currentWeatherDiv.querySelector(
    "#windGust"
  ).textContent = `${currentWeather.windGust} mph`;
  currentWeatherDiv.querySelector("#windDirection").textContent =
    getWindDirection(currentWeather.windDirection);
  currentWeatherDiv.querySelector(
    "#visibility"
  ).textContent = `${currentWeather.visibility} miles`;
};

// Utility function to get wind direction from degrees
const getWindDirection = (degree) => {
  const direction = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(degree / 22.5) % 16;
  return direction[index];
};
