import Loader from "@/components/loaders/Loader";
import { formatCityInverse } from "@/helpers/FormatCityName";
import {
  getCurrent,
  getCurrentByHour,
  getFutureWeather,
} from "@/services/weather";

import dynamic from "next/dynamic";
const CurrentStats = dynamic(() => import("@/components/weather/CurrentStats"));
const Future = dynamic(() => import("@/components/weather/Future"));
const ByHours = dynamic(() => import("@/components/weather/ByHours"));
const MainWeather = dynamic(() => import("@/components/weather/MainWeather"));
const Minmax = dynamic(() => import("@/components/weather/Minmax"));
const ChartStats = dynamic(() => import("@/components/weather/ChartStats"));

const ResultPage = async ({ params }) => {
  const formatCity = formatCityInverse(params.city)
  const { current, city, maxmin } = await getCurrent(formatCity);
  
  const futureweather = await getFutureWeather(formatCity);
  const weatherByHour = await getCurrentByHour(city.city);
  if (!current) return <Loader />;
  return (
    <section className="mb-11 min-h-dvh">
      <article className="flex flex-col md:flex-row justify-between mt-4 animate-fadeup min-h-[--min-height]">
        <MainWeather current={current} />
        <Minmax
          max={maxmin.max}
          min={maxmin.min}
          city={city.city}
          country={city.country}
        />
      </article>
      <article className="animation-delay-400 animate-fadeup fillmode-backwards">
        <CurrentStats current={current} time={futureweather[0]} />
      </article>
      <article className="animation-delay-800 animate-fadeup fillmode-backwards">
        <ChartStats data={weatherByHour} city={city.city} />
      </article>
      <article className="animation-delay-[1200ms] animate-fadeup fillmode-backwards">
        <Future data={futureweather} city={city.city}/>
      </article>
      <article className="animation-delay-[1600ms] animate-fadeup fillmode-backwards">
        <ByHours weatherByHour={weatherByHour} city={city.city}/>
      </article>
    </section>
  );
};

export default ResultPage;
