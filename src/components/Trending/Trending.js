import MediaFlashCard from "components/MediaFlashCard"
import { useSelector } from "react-redux"
import "./trending.css"

const Trending = () => {
  const trendingData = useSelector((state) => state.trending)

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-2'>Trending</h2>
      <div className='gridContainer grid gap-4 lg:gap-x-6 gap-y-8'>
        {trendingData.loading
          ? "loading"
          : trendingData.data?.results?.map((item) => (
              <MediaFlashCard key={item.id} cardData={item} />
            ))}
      </div>
    </div>
  )
}

export default Trending
