import { useRouter } from "next/navigation";
const SearchResultsItem = ({city, setQuery}) => {
    const router = useRouter();
    const handleTakeCity = () => {
        router.replace(`/${city.value}`)
        setQuery("")
    }
  return (
    <div className='cursor-pointer md:text-base text-xl' onClick={handleTakeCity}>
      {city.name}
    </div>
  )
}

export default SearchResultsItem
