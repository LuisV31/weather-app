const apiKey = "LNKMY4EN8W75FKY3V3CSFJ7SH";

export const fetchWeather = async (location) => {
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

export const processWeatherData = (data) => {
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
    windGust: data.currentConditions.windgust,
    windDirection: data.currentConditions.winddir,
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
