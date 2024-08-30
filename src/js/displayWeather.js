import { getWindDirection } from "./weatherData";

// Function to update text content of an element
const updateElementText = (selector, text) => {
  document.querySelector(selector).textContent = text;
};

// Global variable to cache the weather data
let weatherDataCache = null;

export const displayWeather = (data) => {
  if (!data) return;

  // Cache the data for reuse
  weatherDataCache = data;

  const { todaysForecast, currentWeather, weeklyForecast } = data;

  updateTodaysWeather(todaysForecast);
  updateCurrentWeather(currentWeather);
  updateWeeklyForecast(weeklyForecast);
};

const updateTodaysWeather = (todaysForecast) => {
  // Utility function to format local time with offset, now local to this function
  const formatLocalTimeWithOffset = (epoch) => {
    const date = new Date(epoch * 1000);
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
  const formattedDate = formatLocalTimeWithOffset(todaysForecast.datetimeEpoch);

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

  // Convert datetimeEpoch to milliseconds and create a new Date object
  const utcDate = new Date(currentWeather.datetimeEpoch * 1000);

  // Use Intl.DateTimeFormat to handle timezone conversion based on the offset
  const localTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: `Etc/GMT${currentWeather.tzoffset >= 0 ? "-" : "+"}${Math.abs(
      currentWeather.tzoffset
    )}`,
  }).format(utcDate);

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

// Function to create HTML for a single day in the forecast
const createDayHTML = (day) => {
  const isMobile = window.innerWidth <= 768;

  const localDate = new Date(day.datetimeEpoch * 1000);

  const dayName = isMobile
    ? localDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
      })
    : localDate.toLocaleDateString("en-US", {
        weekday: "short",
      });

  if (isMobile) {
    return `
      <img class="weather-icon" src="images/icons/${day.icon}.svg" alt="${day.conditions}" />
      <div class="day-info">
        <p class="day-conditions">${day.conditions}</p>
        <p class="day-name">${dayName}</p>
      </div>
      <div class="end-div">
        <div class="temp-div">
          <span class="high-temp">${day.temperatureHigh}°</span>
          <span class="low-temp">${day.temperatureLow}°</span>
        </div>
        <div class="rain-div">
          <img class="rain-icon" src="images/icons/rain-precip.png" alt="Rain chance" />
          <span class="rain-chance">${day.precipprop}%</span>
      </div>
    `;
  } else {
    return `
      <p class="day-name">${dayName}</p>
      <img src="images/icons/${day.icon}.svg" alt="${day.conditions}" />
      <p class="day-conditions">${day.conditions}</p>
      <p class="high-temp">${day.temperatureHigh}</p>
      <div
        class="low-temp">${day.temperatureLow}
      </div>
    `;
  }
};

const updateWeeklyForecast = (weeklyForecast) => {
  const sevenDayDiv = document.getElementById("sevenDayContainer");
  sevenDayDiv.innerHTML = ""; // Clear previous content

  weeklyForecast.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("seven-day-forecast__day");

    dayDiv.innerHTML = createDayHTML(day);
    sevenDayDiv.appendChild(dayDiv);
  });
};

// Re-render the weather forecast on window resize to handle the layout changes
window.addEventListener("resize", () => {
  if (weatherDataCache) {
    displayWeather(weatherDataCache);
  }
});
