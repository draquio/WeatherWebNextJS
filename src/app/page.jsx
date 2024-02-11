
import { getCityByIP } from "@/services/weather";
import ResultPage from "./[city]/page";
const Home =  async () => {
  const cityname =  await getCityByIP();
  return (
    <div className="container max-w-7xl box-border min-h-dvh p-4">
      <ResultPage cityname={"tarija"} />
    </div>
  );
};

export default Home;
