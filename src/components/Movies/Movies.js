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
import { fetchTopRatedMovies } from "appRedux/thunks/movies/actions"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller])

const Movies = () => {
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)
  const moviesData = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchTrendingMovies())
    dispatch(fetchTopRatedMovies())
  }, [])

  return (
    <div>
      <SectionTitle subText='Explore trending movies of the week'>
        Trending
      </SectionTitle>
      <CardSliderWrapper>
        {trendingData.movies?.results[1]?.map((item) => (
          <SwiperSlide key={item.id}>
            <MediaFlashCard cardData={item} />
          </SwiperSlide>
        ))}
      </CardSliderWrapper>
      <div className='text-2xl font-semibold mb-2 mt-6'>
        <SectionTitle subText='Explore top rated movies'>
            Top Rated
        </SectionTitle>

        <CardSliderWrapper>
          {trendingData.movies?.results[1]?.map((item) => (
            <SwiperSlide key={item.id}>
              <MediaFlashCard cardData={item} />
            </SwiperSlide>
          ))}
        </CardSliderWrapper>
      </div>
    </div>
  )
}

export default Movies
