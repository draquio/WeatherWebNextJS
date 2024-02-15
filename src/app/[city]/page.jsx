import Loader from "@/components/Loader";
import { getCurrent, getFutureWeather } from "@/services/weather";

import dynamic from "next/dynamic";
const CurrentStats = dynamic(() => import("@/components/CurrentStats"));
const Future = dynamic(() => import("@/components/Future"));
const ByHours = dynamic(() => import("@/components/ByHours"));
const MainWeather = dynamic(() => import("@/components/MainWeather"));
const Minmax = dynamic(() => import("@/components/Minmax"));

const ResultPage = async ({ params }) => {
  const { current, city, maxmin } = await getCurrent(params.city);
  const futureweather = await getFutureWeather(params.city);
  if (!current) return <Loader />;
  return (
    <section className="mb-11 min-h-dvh">
      <article className="flex flex-col md:flex-row justify-between mt-4">
        <MainWeather current={current} />
        <Minmax
          max={maxmin.max}
          min={maxmin.min}
          city={city.city}
          country={city.country}
        />
      </article>
      <article>
        <CurrentStats current={current} time={futureweather[0]} />
      </article>
      <Future data={futureweather} />
      <ByHours city={city.city} />
    </section>
  );
};

export default ResultPage;
