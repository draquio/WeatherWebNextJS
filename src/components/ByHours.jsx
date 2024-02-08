import { getCurrentByHour } from "@/services/weather"
import Image from "next/image";

const ByHours = async () => {
    const weatherByHour = await getCurrentByHour("Tarija");
  return (
    <div className="flex gap-3 overflow-x-auto">
        {weatherByHour.map((weather, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-[#ffffff14] rounded py-4 hover:bg-[#ffffff36] transition-all duration-500 cursor-pointer max-w-[150px] min-w-[100px]"
          >
            <h3 className="font-bold">{weather.time}</h3>
            <Image
              src={weather.icon}
              height={80}
              width={80}
              alt={weather.text}
            />
            <p className="font-bold text-2xl">{weather.temp}°C</p>
          </div>
        ))}
      </div>
  )
}

export default ByHours
