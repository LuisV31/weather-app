export const displayWeather = (data) => {
  const { todaysForecast } = data;
  const weatherInfoDiv = document.querySelector(".current-day");

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
};
