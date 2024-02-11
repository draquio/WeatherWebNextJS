
// import ByHours from "@/components/ByHours";
// import CurrentStats from "@/components/CurrentStats";
// import Future from "@/components/Future";
import Loader from "@/components/Loader";
// import MainWeather from "@/components/MainWeather";
// import Minmax from "@/components/Minmax";
import { getCurrent, getFutureWeather } from "@/services/weather";

import dynamic from 'next/dynamic';
const CurrentStats = dynamic(() => import('@/components/CurrentStats'));
const Future = dynamic(() => import('@/components/Future'));
const ByHours = dynamic(() => import('@/components/ByHours'));
const MainWeather = dynamic(() => import('@/components/MainWeather'));
const Minmax = dynamic(() => import('@/components/Minmax'));


const ResultPage = async ({ params, cityname }) => {
  const { current, city, maxmin } = await getCurrent(cityname || params.city);
  const futureweather = await getFutureWeather(cityname || params.city);
  if (!current) return <Loader />;
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
