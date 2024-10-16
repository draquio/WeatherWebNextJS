import Image from "next/image";

const Predictions = async ({ data, city }) => {
  if (!data) return "";
  return (
    <div className="pt-5 flex flex-col gap-0">
      <h2 className="text-2xl my-2 font-sans">Clima semanal en {city}</h2>
      <div className="grid md:grid-cols-3 min-[500px]:grid-cols-2  grid-cols-1 gap-x-2 w-full gap-y-2">
        {data.map((weather, index) => (
          <div
            key={index}
            className=" rounded-md py-4 bg-[var(--transparent-bg)] hover:bg-[var(--transparent-bg-hover)] transition-all duration-500 cursor-pointer"
          >
            <div className="flex">
              <figure className="w-[45%] flex justify-center items-center">
                <Image
                  src={weather.icon}
                  height={80}
                  width={80}
                  alt={weather.text}
                />
              </figure>
              <div className="flex flex-col w-[55%]">
                <h3 className="font-sans opacity-65">{weather.day}</h3>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    <span className="text-3xl">{weather.min}º</span>
                    <span className="text-sm font-sans -mt-2 opacity-65">min</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl">{weather.max}º</span>
                    <span className="text-sm font-sans -mt-2 opacity-65">max</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Predictions;
