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

const fetchGif = async (query) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${query}`,
      { mode: "cors" }
    );
    const data = await response.json();
    return data.data.images.original.url;
  } catch (error) {
    console.log("Error fetching GIF:", error);
    return null;
  }
};

const processWeatherData = (data) => {
  const requiredData = {
    location: data.resolvedAddress,
    temperature: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
    windSpeed: data.currentConditions.windspeed,
    icon: data.currentConditions.icon,
  };
  return requiredData;
};

const displayWeather = async (data) => {
  const weatherInfoDiv = document.getElementById("weatherInfo");
  const gifUrl = await fetchGif(data.icon); //Fetch the GIF based on icon name
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
