import ByHours from "@/components/ByHours";
import Future from "@/components/Future";
import { getCurrent } from "@/services/weather";
import Image from "next/image";

const ResultPage = async ({ params, cityname }) => {
  const { current, city, maxmin } = await getCurrent(cityname || params.city);
  if (!current) return "";
  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          {city.city}, {city.country}
        </h1>
        <p className="text-lg">{city.localtime}</p>
      </div>
      <article className="flex justify-between my-16">
        <div className="flex items-center border-r-[1px] w-1/2 border-[#ffffff56] justify-center">
          <Image
            width={128}
            height={128}
            src={current.weather_icon}
            alt="Clima actual"
          />
          <div className="text-center">
            <h2 className="text-5xl">{current.temp}°C</h2>
            <p>{current.weather_text}</p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="grid grid-cols-3 gap-y-10">
            <div className="text-center flex flex-col">
              <span>{maxmin.max}°C</span>
              <span>Máxima</span>
            </div>
            <div className="text-center flex flex-col">
              <span>{current.wind} km/h</span>
              <span>Viento</span>
            </div>
            <div className="text-center flex flex-col">
              <span>{current.humidity}%</span>
              <span>Humedad</span>
            </div>
            <div className="text-center flex flex-col">
              <span>{maxmin.min}°C</span>
              <span>Mínima</span>
            </div>
            <div className="text-center flex flex-col">
              <span>{current.feelslike}°C</span>
              <span>Sens. Térm.</span>
            </div>
            <div className="text-center flex flex-col">
            <span>{current.cloud}%</span>
              <span>Nubosidad</span>
            </div>
          </div>
        </div>
      </article>
      <Future city={city.city} />
      <ByHours />
    </section>
  );
};

export default ResultPage;
