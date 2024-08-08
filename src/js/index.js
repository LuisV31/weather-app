import "../styles/styles.css"; // Importing CSS for Webpack to bundle
import { fetchWeather, processWeatherData } from "./weatherData";
import { displayWeather } from "./displayWeather";
import { getUserLocationWeather } from "./location";

document
  .getElementById("locationForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.getElementById("locationInput").value;
    const loadingDiv = document.getElementById("loading");

    loadingDiv.style.display = "block";

    try {
      const weatherData = await fetchWeather(location);
      console.log(weatherData); // Check the structure of the data
      const processedData = processWeatherData(weatherData);
      displayWeather(processedData);
    } catch (error) {
      document.querySelector("#todaysWeatherDescription").textContent =
        "Error fetching weather data.";
    } finally {
      loadingDiv.style.display = "none";
    }
  });

window.onload = getUserLocationWeather;
