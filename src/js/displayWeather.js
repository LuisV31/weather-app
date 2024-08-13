import { getWindDirection } from "./weatherData";

const formatLocalTimeWithOffset = (epoch, tzoffset) => {
  const date = new Date((epoch + tzoffset * 60) * 1000); // Adjust epoch time with offset
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString(undefined, options);
};

export const displayWeather = (data) => {
  if (!data) return;

  const { todaysForecast, currentWeather, weeklyForecast } = data;

  // Cache DOM elements
  const todaysInfoDiv = document.querySelector(".todays-forecast");
  const currentWeatherDiv = document.querySelector(".current-weather");
  const sevenDayDiv = document.getElementById("sevenDayContainer");

  const formattedDate = new Date(todaysForecast.time).toLocaleDateString(
    undefined,
    {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  document.getElementById(
    "location"
  ).textContent = `${todaysForecast.location} Weather for:`;
  document.getElementById("date").textContent = formattedDate;

  todaysInfoDiv.querySelector(
    ".weather-icon"
  ).src = `images/icons/${todaysForecast.icon}.svg`;
  todaysInfoDiv.querySelector(
    ".high-temp .temp-digit"
  ).textContent = `${todaysForecast.highTemp}°F`;
  todaysInfoDiv.querySelector(
    ".low-temp .temp-digit"
  ).textContent = `${todaysForecast.lowTemp}°F`;
  todaysInfoDiv.querySelector("#todaysWeatherDescription").textContent =
    todaysForecast.description;

  // Update Current Weather elements
  const localTime = formatLocalTimeWithOffset(
    currentWeather.datetimeEpoch,
    currentWeather.tzoffset
  );

  currentWeatherDiv.querySelector("#localTime").textContent = localTime;
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

  // Dynamically add weekly forecast elements
  sevenDayDiv.innerHTML = ""; // Clear previous content
  weeklyForecast.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("seven-day-forecast__day");

    const dayName = new Date(day.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    dayDiv.innerHTML = `
    <p>${dayName}</p>
    <img src="images/icons/${day.icon}.svg" alt="${day.conditions}" />
    <p>High: ${day.temperatureHigh}°F</p>
    <p>${day.conditions}</p>
    <p>Low: ${day.temperatureLow}°F</p>
    `;

    sevenDayDiv.appendChild(dayDiv);
  });
};
