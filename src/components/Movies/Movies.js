import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller
} from "swiper"
import { Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "appRedux/thunks/trending/actions"
import CardSliderWrapper from "CustomComponents/CardSlider"
import MediaFlashCard from "components/MediaFlashCard"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller])

const Movies = () => {
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)

  useEffect(() => {
    dispatch(fetchTrendingMovies())
  }, [])

  return (
    <div>
      <div className='mb-2 flex justify-between'>
        <h3 className='text-2xl font-semibold mb-2'>Trending</h3>
        <Link to='/movies/trending' className='flex items-center'>
          Vew All <FaAngleRight />{" "}
        </Link>
      </div>
      <CardSliderWrapper>
        {trendingData.movies?.results[1].map((item) => (
          <SwiperSlide key={item.id}>
            <MediaFlashCard cardData={item} />
          </SwiperSlide>
        ))}
      </CardSliderWrapper>
    </div>
  )
}

export default Movies