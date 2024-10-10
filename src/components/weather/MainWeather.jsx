const MainWeather = ({ current }) => {
  return (
    <div className="flex items-center w-full md:w-1/2 justify-center">
      <figure className="h-[150px] min-w-[150px]">
        <img
          src={current.weather_icon}
          alt="Clima actual"
          className="aspect-square  w-[150px] h-auto"
        />
      </figure>
      <div className="ml-8 max-w-[200px]">
        <h2 className="text-7xl">{current.temp}°</h2>
        <p className="opacity-75 font-sans">{current.weather_text}</p>
      </div>
    </div>
  );
};

export default MainWeather;
