import { getCurrent } from "@/services/weather"
import Image from 'next/image'

const ResultPage = async ({params}) => {
  const {current, city} = await getCurrent(params.city);
  if (!current) return ""
  return (
    <section>
      <div className="text-center">
        <h2>{city.city}, {city.country}</h2>
        <p>Febrero 7, 2023</p>
      </div>
      <article className="flex justify-between">
        <div>
          <Image width={30} height={30} src={current.weather_icon} alt="Clima actual" />
          {/* <img src={current.weather_icon} /> */}
          <div>
            21 Graddos
            sadasdasd
          </div>
        </div>
        <div>Más preducciones</div>
      </article>
    </section>
  )
}

export default ResultPage
