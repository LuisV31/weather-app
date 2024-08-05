const apiKey = "LNKMY4EN8W75FKY3V3CSFJ7SH";

// 1. Main function: Automatically fetch weather data based on user's location
const getUserLocationWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Get the human-readable location name
        const locationName = await reverseGeocode(latitude, longitude);

        // Fetch weather data based on coordinates
        const location = `${latitude},${longitude}`;
        const weatherData = await fetchWeather(location);
        const processedData = processWeatherData(weatherData);

        // Override the location with the resolved address from reverse geocoding
        processedData.todaysForecast.location = locationName;
        displayWeather(processedData);
      },
      () => {
        // Handle error or fallback if no geolocation
        console.log("Geolocation not allowed. Please enter a location");
      }
    );
  } else {
    console.log("Geolocation not supported by this browser.");
  }
};

// 2. Event listener for form submission to fetch weather data based on user input
document
  .getElementById("locationForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.getElementById("locationInput").value;
    const loadingDiv = document.getElementById("loading");
    const weatherInfoDiv = document.getElementById("weatherInfo");

    loadingDiv.style.display = "block";
    weatherInfoDiv.innerHTML = ""; // Clear previous weather info

    try {
      const weatherData = await fetchWeather(location);
      const processedData = processWeatherData(weatherData);
      displayWeather(processedData);
    } catch (error) {
      weatherInfoDiv.innerHTML = "Error fetching weather data.";
    } finally {
      loadingDiv.style.display = "none";
    }
  });

// 3. Fetch weather data from the API
const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    );
    const data = await response.json();
    console.log(data); // Log the response for debugging
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// 4. Process the weather data to structure it for easy use
const processWeatherData = (data) => {
  const todaysForecast = {
    location: data.resolvedAddress,
    time: data.days[0].datetime,
    icon: data.days[0].icon,
    highTemp: data.days[0].tempmax,
    lowTemp: data.days[0].tempmin,
    description: data.days[0].description,
  };

  const currentWeather = {
    location: data.resolvedAddress,
    time: data.currentConditions.datetime,
    icon: data.currentConditions.icon,
    conditions: data.currentConditions.conditions,
    temperature: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    windSpeed: data.currentConditions.windspeed,
    uvIndex: data.currentConditions.uvindex,
    visibility: data.currentConditions.visibility,
  };

  const weeklyForecast = data.days.slice(1, 8).map((day) => ({
    location: data.resolvedAddress,
    date: day.datetime,
    icon: day.icon,
    conditions: day.conditions,
    temperatureHigh: day.tempmax,
    temperatureLow: day.tempmin,
  }));

  return {
    todaysForecast,
    currentWeather,
    weeklyForecast,
  };
};

// 5. Display the weather data in the UI
const displayWeather = (data) => {
  const { todaysForecast } = data;
  const weatherInfoDiv = document.querySelector(".current-day");

  // Convert the date to local time zone
  const utcDate = new Date(todaysForecast.time);
  const localDate = new Date(
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
  );

  // Format the date
  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = localDate.toLocaleDateString(undefined, dateOptions);

  // Update the location and date in the header
  document.getElementById(
    "location"
  ).textContent = `${todaysForecast.location} Weather for:`;
  document.getElementById("date").textContent = formattedDate;

  // Update the weather details
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

// 6. Reverse geocode to get a human-readable location name from coordinates
const reverseGeocode = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    return (
      data.address.city ||
      data.address.town ||
      data.address.village ||
      "Unknown location"
    );
  } catch (error) {
    console.error("Error with reverse geocoding:", error);
    return "Unknown location";
  }
};

// 7. Automatically get weather data based on user's location when the page loads
window.onload = getUserLocationWeather;
