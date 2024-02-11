import cities from "./cities.json";
export const mapCurrentWeather = (currentWeather) => {
  const mapCurrent = {
    temp: currentWeather.temp_c,
    weather_text: currentWeather.condition.text,
    weather_icon:
      "https:" + currentWeather.condition.icon.replace("64x64", "128x128"),
    wind: currentWeather.wind_kph,
    humidity: currentWeather.humidity,
    feelslike: Math.round(currentWeather.feelslike_c),
    last_updated: currentWeather.last_updated,
    cloud: currentWeather.cloud,
    uv: currentWeather.uv,
  };
  return mapCurrent;
};

export const mapCurrentCity = (currentCity) => {
  const mapCurrent = {
    city: currentCity.name,
    country: currentCity.country,
    localtime: FormatDate(currentCity.localtime),
  };
  return mapCurrent;
};

export const findCity = (query) => {
  const result = cities.filter((city) =>
    city.name.toLowerCase().startsWith(query.toLowerCase())
  );
  return result.slice(0, 5);
};

export const MapFutureWeather = (weather) => {
  const MapWeather = weather.forecast.forecastday.map((weather) => ({
    date: weather.date,
    max: Math.round(weather.day.maxtemp_c),
    min: Math.round(weather.day.mintemp_c),
    avg: Math.round(weather.day.avgtemp_c),
    text: weather.day.condition.text,
    icon: "https:" + weather.day.condition.icon.replace("64x64", "128x128"),
    day: getDay(weather.date),
    sunrise: weather.astro.sunrise,
    sunset: weather.astro.sunset,
  }));
  return MapWeather;
};

const getDay = (date) => {
  const day = new Date(date);
  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];
  return days[day.getDay()];
};

const FormatDate = (date) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const newdate = new Date(date);
  const day = newdate.getDate();
  const month = months[newdate.getMonth()];
  return `${day} de ${month}`;
};

export const mapHoursCurrent = (current) => {
  const maphours = current.forecast.forecastday[0].hour.map((current) => ({
    time: getHour(current.time),
    temp: Math.round(current.temp_c),
    text: current.condition.text,
    icon: "https:" + current.condition.icon,
  }));
  return maphours;
};
const getHour = (date) => {
  const hour = date.slice(11, 16);
  return hour;
};


