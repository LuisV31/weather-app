const apiKey = "LNKMY4EN8W75FKY3V3CSFJ7SH";
const giphyApiKey = "r7oNE5emxjgGstMWcxU6W1zfdlMBfGbJ";

const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    );
    const data = await response.json();
    console.log(data); // keep for now incase of additional needs
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

// const fetchGif = async (query) => {
//   try {
//     const response = await fetch(
//       `https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${query}`,
//       { mode: "cors" }
//     );
//     const data = await response.json();
//     return data.data.images.original.url;
//   } catch (error) {
//     console.log("Error fetching GIF:", error);
//     return null;
//   }
// };

const processWeatherData = (data) => {
  const todaysForecast = {
    location: data.resolvedAddress,
    icon: data.days[0].icon,
    temperatureHigh: data.days[0].tempmax,
    temperatureLow: data.days[0].tempmin,
    conditions: data.days[0].conditions,
  };

  const currentWeather = {
    location: data.resolvedAddress,
    icon: data.currentConditions.icon,
    conditions: data.currentConditions.conditions,
    temperature: data.currentConditions.temp,
    humidity: data.currentConditions.humidity,
    windSpeed: data.currentConditions.windspeed,
  };

  const weeklyForecast = data.days.slice(0, 7).map((day) => ({
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

const displayWeather = async (data) => {
  const weatherInfoDiv = document.getElementById("weatherInfo");
  weatherInfoDiv.innerHTML = `
    <h2>Weather in ${data.location}</h2>
    <p>Temperature: ${data.temperature}</p>
    <p>Conditions: ${data.conditions}</p>
    <p>Humidity: ${data.humidity}%</p>
    <p>Wind Speed: ${data.windSpeed} mp/h</p>
    ${gifUrl ? `<img src="${gifUrl}" alt="${data.conditions}" />` : ""}
    `;
};

document
  .getElementById("locationForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.getElementById("locationInput").value;
    const loadingDiv = document.getElementById("loading");
    const weatherInfoDiv = document.getElementById("weatherInfo");

    loadingDiv.style.display = "block";
    weatherInfoDiv.innerHTML = ""; //Clear previous weather info

    try {
      const weatherData = await fetchWeather(location);
      const processedData = processWeatherData(weatherData);
      displayWeather(processedData);
    } catch (error) {
      weatherInfoDiv.innerHTML = "Error fetchin weather data.";
    } finally {
      loadingDiv.style.display = "none";
    }
  });
