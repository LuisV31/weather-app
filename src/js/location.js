import { fetchWeather, processWeatherData } from "./weatherData";
import { displayWeather } from "./displayWeather";

export const reverseGeocode = async (latitude, longitude) => {
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

export const getUserLocationWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationName = await reverseGeocode(latitude, longitude);
        const weatherData = await fetchWeather(`${latitude},${longitude}`);
        const processedData = processWeatherData(weatherData);
        processedData.todaysForecast.location = locationName;
        displayWeather(processedData);
      },
      () => {
        console.log("Geolocation not allowed. Please enter a location");
      }
    );
  } else {
    console.log("Geolocation not supported by this browser.");
  }
};
