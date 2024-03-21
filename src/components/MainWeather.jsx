import Image from "next/image";

const MainWeather = ({ current }) => {
  return (
    <div className="flex items-center w-full md:w-1/2 justify-center">
      <figure className="h-[150px] w-[150px]">
        <Image
          width={150}
          height={150}
          src={current.weather_icon}
          alt="Clima actual"
          priority
          loading="eager"
        />
      </figure>
      <div className="ml-8">
        <h2 className="text-7xl">{current.temp}°</h2>
        <p className="opacity-75 font-sans">{current.weather_text}</p>
      </div>
    </div>
  );
};

export default MainWeather;
