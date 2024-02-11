import { ArrowDown, ArrowUp } from "@/Icons/Icons";
const Minmax = ({ min, max, city, country }) => {
  return (
    <div className="w-full md:w-1/2 mt-16 mb-11 flex flex-col justify-center items-center gap-y-5 ">
      <h2 className="text-3xl font-serif font-bold text-center">
        {city}, {country}.
      </h2>
      <div className="flex md:gap-[120px] gap-12 justify-center">
        <div className="flex items-center gap-3">
          <span className="bg-[#ffffff14] p-3 rounded-full">
            <ArrowDown />
          </span>
          <div className="flex flex-col">
            <span className="opacity-65 font-sans text-sm">Min.</span>
            <span className="text-2xl">{min}°</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-[#ffffff14] p-3 rounded-full">
            <ArrowUp />
          </span>
          <div className="flex flex-col">
            <span className="opacity-65 font-sans text-sm">Max.</span>
            <span className="text-2xl">{max}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minmax;
