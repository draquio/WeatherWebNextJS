import { getCityByIP } from "@/services/weather";
import ResultPage from "./[city]/page";
const Home = async () => {
  const cityname = await getCityByIP();
  return (
    <div className="container max-w-7xl box-border min-h-96 p-4">
      <ResultPage cityname={cityname} />
    </div>
  );
};

export default Home;
