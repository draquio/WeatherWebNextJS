import Image from "next/image";

export const ArrowDown = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="m112 268 144 144 144-144M256 392V100"
      ></path>
    </svg>
  );
};

export const ArrowUp = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="48"
        d="m112 244 144-144 144 144M256 120v292"
      ></path>
    </svg>
  );
};

export const DropIcon = () => {
  return <Image src="/svg/drop.svg" width={24} height={24} alt="drop" />;
};

export const Cloud = () => {
  return <Image src="/svg/cloud2.svg" width={24} height={24} alt="cloud" />;
};

export const ThermometerIcon = () => {
  return (
    <Image
      src="/svg/thermometer.svg"
      width={24}
      height={24}
      alt="thermometer"
    />
  );
};

export const SunriseIcon = () => {
  return <Image src="/svg/sunrise.svg" width={24} height={24} alt="sunrise" />;
};
export const SunsetIcon = () => {
  return <Image src="/svg/sunset.svg" width={24} height={24} alt="sunset" />;
};

export const WindIcon = () => {
  return <Image src="/svg/wind.svg" width={24} height={24} alt="wind" />;
};

export const SearchIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
    </svg>
  );
};
