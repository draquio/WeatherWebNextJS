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
      <article className="flex flex-col md:flex-row justify-between mt-4">
       <MainWeather current={current} />
       <Minmax max={maxmin.max} min={maxmin.min} city={city.city} country={city.country}/>
      </article>
      <article>
        <CurrentStats current={current} time={futureweather[0]} />
      </article>
      <Future data={futureweather} />
      <ByHours city={city.city}/>
    </section>
  );
};

export default ResultPage;
