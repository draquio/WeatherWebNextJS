import ByHours from "@/components/ByHours";
import CurrentStats from "@/components/CurrentStats";
import Future from "@/components/Future";
import MainWeather from "@/components/MainWeather";
import Minmax from "@/components/Minmax";
import { getCurrent, getFutureWeather } from "@/services/weather";
const ResultPage = async ({ params, cityname }) => {
  const { current, city, maxmin } = await getCurrent(cityname || params.city);
  const futureweather = await getFutureWeather(cityname || params.city);
  if (!current) return "";
  return (
    <section className="mb-11">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          {city.city}, {city.country}
        </h1>
        <p className="text-lg">{city.time}</p>
      </div>
      <article className="flex justify-between my-16">
       <MainWeather current={current} />
       <Minmax max={maxmin.max} min={maxmin.min} />
      </article>
      <article>
        <CurrentStats current={current} time={futureweather[0]} />
      </article>
      <Future data={futureweather} />
      {/* <ByHours city={city.city}/> */}
    </section>
  );
};

export default ResultPage;
