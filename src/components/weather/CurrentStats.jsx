import { Cloud, DropIcon, SunriseIcon, SunsetIcon, ThermometerIcon, WindIcon } from "@/Icons/Icons";

const CurrentStats = ({ current, time }) => {;
  return (
    <div className="w-full flex justify-center">
      <div className="md:w-3/4 w-full py-12">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-y-10">
          <div className="flex justify-center items-center gap-4">
            <span className="mt-[-8px]">
              <DropIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-65">Humedad</span>
              <span className="text-lg">{current.humidity}%</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <span className="mt-[-8px]">
              <ThermometerIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-65">Sens. Térm.</span>
              <span className="text-lg">{current.feelslike}°</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <span className="mt-[-8px]">
              <Cloud />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-65">Nubosidad</span>
              <span className="text-lg">{current.cloud}%</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <span className="mt-[-8px]">
              <SunriseIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-65">Amanecer</span>
              <span className="text-lg">{time.sunrise}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <span className="mt-[-8px]">
              <SunsetIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-65">Anochecer</span>
              <span className="text-lg">{time.sunset}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <span className="mt-[-8px]">
              <WindIcon />
            </span>
            <div className="flex flex-col">
              <span className="font-sans opacity-65">Viento</span>
              <span className="text-lg">{current.wind} Km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentStats;
