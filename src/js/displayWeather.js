import { getWindDirection } from "./weatherData";

// Function to update text content of an element
const updateElementText = (selector, text) => {
  document.querySelector(selector).textContent = text;
};

export const displayWeather = (data) => {
  if (!data) return;

  const { todaysForecast, currentWeather, weeklyForecast } = data;

  updateTodaysWeather(todaysForecast);
  updateCurrentWeather(currentWeather);
  updateWeeklyForecast(weeklyForecast);
};

const updateTodaysWeather = (todaysForecast) => {
  console.log("todaysForecast data:", todaysForecast); // Log the entire object
  console.log("datetimeEpoch:", todaysForecast.datetimeEpoch); // Specifically log datetimeEpoch

  // Utility function to format local time with offset, now local to this function
  const formatLocalTimeWithOffset = (epoch) => {
    const date = new Date(epoch * 1000); // Adjust epoch time with offset (tzoffset in hours)
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour12: true,
    };
    return date.toLocaleString(undefined, options);
  };

  // Format today's date using local time
  const formattedDate = formatLocalTimeWithOffset(
    todaysForecast.datetimeEpoch,
    todaysForecast.tzoffset
  );

  updateElementText("#location", `${todaysForecast.location}'s Weather for:`);
  updateElementText("#date", formattedDate);

  const todaysInfoDiv = document.querySelector(".todays-forecast");

  todaysInfoDiv.querySelector(
    ".weather-icon"
  ).src = `images/icons/${todaysForecast.icon}.svg`;

  updateElementText(".high-temp .temp-digit", `${todaysForecast.highTemp}°F`);
  updateElementText(".low-temp .temp-digit", `${todaysForecast.lowTemp}°F`);
  updateElementText("#todaysWeatherDescription", todaysForecast.description);
};

const updateCurrentWeather = (currentWeather) => {
  const currentWeatherDiv = document.querySelector(".current-weather");

  // Format the local time using toLocaleTimeString directly
  const localTime = new Date(
    (currentWeather.datetimeEpoch + currentWeather.tzoffset * 60) * 1000
  ).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  updateElementText("#localTime", localTime);

  currentWeatherDiv.querySelector(
    ".weather-summary .weather-icon"
  ).src = `images/icons/${currentWeather.icon}.svg`;
  updateElementText(
    ".weather-summary .weather-description",
    currentWeather.conditions
  );
  updateElementText(
    ".current-temp .temp-digit",
    `${currentWeather.temperature}°F`
  );

  updateElementText("#feelsLike", `${currentWeather.feelsLike}°F`);
  updateElementText("#humidity", `${currentWeather.humidity}%`);
  updateElementText("#windSpeed", `${currentWeather.windSpeed} mph`);
  updateElementText("#windGust", `${currentWeather.windGust} mph`);
  updateElementText(
    "#windDirection",
    getWindDirection(currentWeather.windDirection)
  );
  updateElementText("#visibility", `${currentWeather.visibility} miles`);
};

const updateWeeklyForecast = (weeklyForecast) => {
  const sevenDayDiv = document.getElementById("sevenDayContainer");
  sevenDayDiv.innerHTML = ""; // Clear previous content

  weeklyForecast.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("seven-day-forecast__day");

    const dayName = new Date(day.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    dayDiv.innerHTML = `
      <p class="day-name">${dayName}</p>
      <img src="images/icons/${day.icon}.svg" alt="${day.conditions}" />
      <p class="day-conditions">${day.conditions}</p>
      <p class="high-temp">${day.temperatureHigh}</p>
      <div
        class="low-temp">${day.temperatureLow}
      </div>
    `;

    sevenDayDiv.appendChild(dayDiv);
  });
};
