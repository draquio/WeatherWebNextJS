import { useRouter } from "next/navigation";
import { formatCity } from "@/helpers/FormatCityName";
const SearchResultsItem = ({city, setQuery, setCity}) => {
    const router = useRouter();
    const handleTakeCity = () => {
        const citynameFormated = formatCity(city.value);
        router.replace(`/${citynameFormated}`)
        setQuery("")
        setCity([])
    }
  return (
    <div className='cursor-pointer md:text-base text-xl' onClick={handleTakeCity}>
      {city.name}
    </div>
  )
}

export default SearchResultsItem
