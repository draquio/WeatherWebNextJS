import { getCurrentByHour } from "@/services/weather";
import Image from "next/image";

const ByHours = async () => {
  const weatherByHour = await getCurrentByHour("Tarija");
  return (
    <section className="pt-5 pb-5">
      <h2 className="text-2xl my-7 font-sans leading-[0]">Por hora</h2>
      {/* <div className="grid md:grid-cols-6 min-[500px]:grid-cols-3 grid-cols-2 gap-2 w-full flex-wrap"> */}
      <div className="flex gap-2 overflow-x-auto flex-nowrap w-full pb-3" style={{'scrollbarColor':'#ffffff47 #072d76', 'scrollbarWidth':'thin'}}>
        {weatherByHour.map((weather, index) => (
          <div
            key={index}
            className="min-w-[125px] flex gap-y-2 flex-col w-full items-center bg-[var(--transparent-bg)] hover:bg-[var(--transparent-bg-hover)] rounded-2xl py-4 transition-all duration-500 cursor-pointer"
          >
            <h3 className="font-sans opacity-65">{weather.time}</h3>
            <Image
              src={weather.icon}
              height={60}
              width={60}
              alt={weather.text}
            />
            <p className="font-bold text-xl">{weather.temp}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ByHours;
