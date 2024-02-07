import cities from "./cities.json";
export const mapCurrentWeather = (currentWeather) => {
    const mapCurrent = {
        temp: currentWeather.temp_c,
        weather_text: currentWeather.condition.text,
        weather_icon: 'https:'+currentWeather.condition.icon,
        wind: currentWeather.wind_kph,
        humidity: currentWeather.humidity,
        feelslike: currentWeather.feelslike_c,
        last_updated: currentWeather.last_updated
    }
    return mapCurrent;
}

export const mapCurrentCity = (currentCity) => {
    const mapCurrent = {
        city: currentCity.name,
        country: currentCity.country,
        localtime: currentCity.localtime,
        time_zone: currentCity.tz_id
    }
    return mapCurrent;
}

export const findCity = (query) => {
    const result = cities.filter(city => city.name.toLowerCase().startsWith(query.toLowerCase()))
    return result.slice(0,5)
}