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

    // Show loading indicator while fetchin weather data
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
      // Hide loadin indicator after data is processed
      loadingDiv.style.display = "none";
    }
  });

// Get the user's location weather on page load
document.addEventListener("DOMContentLoaded", () => {
  getUserLocationWeather();
});
