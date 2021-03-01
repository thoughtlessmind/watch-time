import { fetchTrending } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)

  useEffect(() => {
    dispatch(fetchTrending())
  }, [])

  return (
    <div>
      <h3 className='text-2xl font-semibold'>Trending</h3>
      {trendingData.loading ? (
        <h1>Loaidng...</h1>
      ) : (
        trendingData.data?.results?.map((item) => (
          <MediaFlashCard cardData={item} />
        ))
      )}
    </div>
  )
}

export default Home
