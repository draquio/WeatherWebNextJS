import { getFutureWeather } from "@/services/weather";
import Image from "next/image";

const Predictions = async ({ city }) => {
  const data = await getFutureWeather(city);
  const futureWeather = data.slice(1, 7);
  return (
    <>
      <h2 className="text-center font-bold text-2xl my-7">Clima de la semana</h2>
      <div className="grid grid-cols-6 gap-x-2">
        {futureWeather.map((weather, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-[#ffffff14] rounded py-4 hover:bg-[#ffffff36] transition-all duration-500 cursor-pointer max-w-[150px]"
          >
            <h3 className="font-bold">{weather.day}</h3>
            <Image
              src={weather.icon}
              height={80}
              width={80}
              alt={weather.text}
            />
            <p className="font-bold text-2xl">{weather.avg}°C</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Predictions;
