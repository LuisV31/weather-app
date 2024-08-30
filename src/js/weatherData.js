const apiKey = "LNKMY4EN8W75FKY3V3CSFJ7SH";

export const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    );
    const data = await response.json();
    console.log("API Response:"); // Log the full API response
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export const processWeatherData = (data) => {
  if (!data) return null;

  const todaysForecast = {
    location: data.resolvedAddress,
    datetimeEpoch: data.days[0].datetimeEpoch,
    time: data.days[0].datetime,
    icon: data.days[0].icon,
    highTemp: Math.round(data.days[0].tempmax),
    lowTemp: Math.round(data.days[0].tempmin),
    description: data.days[0].description,
  };

  const currentWeather = {
    location: data.resolvedAddress,
    datetimeEpoch: data.currentConditions.datetimeEpoch,
    timezone: data.timezone,
    tzoffset: data.tzoffset,
    icon: data.currentConditions.icon,
    conditions: data.currentConditions.conditions,
    temperature: Math.round(data.currentConditions.temp),
    feelsLike: Math.round(data.currentConditions.feelslike),
    humidity: data.currentConditions.humidity,
    windSpeed: Math.round(data.currentConditions.windspeed),
    windGust: Math.round(data.currentConditions.windgust),
    windDirection: data.currentConditions.winddir,
    visibility: data.currentConditions.visibility,
  };

  const weeklyForecast = data.days.slice(1, 8).map((day) => ({
    date: day.datetime,
    datetimeEpoch: day.datetimeEpoch,
    icon: day.icon,
    temperatureHigh: Math.round(day.tempmax),
    conditions: day.conditions,
    temperatureLow: Math.round(day.tempmin),
    precipprop: day.precipprob,
    tzoffset: data.tzoffset,
  }));

  return {
    todaysForecast,
    currentWeather,
    weeklyForecast,
  };
};

// Utility function to get wind direction from degrees
export const getWindDirection = (degree) => {
  const direction = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(degree / 22.5) % 16;
  return direction[index];
};
