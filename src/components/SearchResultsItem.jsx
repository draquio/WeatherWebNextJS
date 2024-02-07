// "use client"
import { useRouter } from "next/navigation";
const SearchResultsItem = ({city, setQuery}) => {
    const router = useRouter();
    const handleTakeCity = () => {
        router.replace(`/${city.name}`)
        setQuery("")
    }
  return (
    <div className='hover:bg-slate-100 cursor-pointer' onClick={handleTakeCity}>
      {city.name} ({city.country})
    </div>
  )
}

export default SearchResultsItem
