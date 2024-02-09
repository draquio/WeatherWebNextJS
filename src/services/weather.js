import { ENV } from "@/constants";
import {
  MapFutureWeather,
  mapCurrentCity,
  mapCurrentWeather,
  mapHoursCurrent,
} from "@/functions";

export const getFutureWeather = async (query = "") => {
  try {
    const url = `${ENV.API_URL}${ENV.API_Routes.future}?key=${process.env.API_Key}&lang=es&days=7&q=${query}`;
    const response = await fetch(url, {cache: 'no-store'});
    const result = await response.json();
    if (response.status === 200) {
      const mapFuture = MapFutureWeather(result);
      return mapFuture;
    }
    throw result;
  } catch (error) {
    return error;
  }
};

export const getCurrent = async (query = "") => {
  try {
    const url = `${ENV.API_URL}${ENV.API_Routes.current}?key=${process.env.API_Key}&lang=es&q=${query}`;
    const response = await fetch(url, {cache: 'no-store'});
    const result = await response.json();
    if (response.status === 200) {
      const current = mapCurrentWeather(result.current);
      const tempmaxmin = await getFutureWeather(query);
      const maxmin = tempmaxmin[0];
      const city = mapCurrentCity(result.location);
      return { current, city, maxmin };
    }
    throw result;
  } catch (error) {
    return error;
  }
};

export const getCurrentByHour = async (query = "") => {
  try {
    const url = `${ENV.API_URL}${ENV.API_Routes.future}?key=${process.env.API_Key}&lang=es&q=${query}&days=1`;
    const response = await fetch(url, {cache: 'no-store'});
    const result = await response.json();
    if (response.status === 200) {
      return mapHoursCurrent(result);
    }
    throw result;
  } catch (error) {
    return error;
  }
};

const getIP = async () => {
  try {
    const response = await fetch("https://api.ipify.org/?format=json");
    const result = await response.json();
    if (response.status === 200) {
      return result.ip;
    }
    throw result;
  } catch (error) {
    return error;
  }
};

export const getCityByIP = async () => {
  const ip = await getIP();
  try {
    const response = await fetch(`https://ipinfo.io/${ip}/json`);
    const result = await response.json();
    if (response.status === 200) {
      return result.city;
    }
    throw result;
  } catch (error) {}
};

