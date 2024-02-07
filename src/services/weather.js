import { ENV } from "@/constants";
import { mapCurrentCity, mapCurrentWeather } from "@/functions";

  export const getCurrent = async (query = "") =>  {
    try {
      const url = `${ENV.API_URL}${ENV.API_Routes.current}?key=${process.env.API_Key}&lang=es&q=${query}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status === 200) {
        const current = mapCurrentWeather(result.current);
        const city = mapCurrentCity(result.location);
        return {current, city};     
      }
      throw result
    } catch (error) {
        return error;
    }
  }

  export const getCity = async (query = "") =>  {
    try {
      const url = `${ENV.API_URL}${ENV.API_Routes.search}?key=${process.env.API_Key}&lang=es&q=${query}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status === 200) {
        // const city = mapCurrentCity(result.location);
        return result;     
      }
      throw result
    } catch (error) {
        return error;
    }
  }