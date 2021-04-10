import "swiper/swiper-bundle.min.css"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller
} from "swiper"
import { Link, useLocation } from "react-router-dom"
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
  const location = useLocation()
  const trendingData = useSelector((state) => state.trending)
  const moviesData = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchTrendingMovies())
    dispatch(fetchTopRatedMovies())
  }, [])

  return (
    <div>
      <h2 className='text-3xl text-secondary-main font-bold mb-4'>
        Explore Movies
      </h2>
      <SectionTitle
        to={`${location.pathname}/trending`}
        arrow
        subText='Explore trending movies of the week'
      >
        Trending Movies
      </SectionTitle>
      <CardSliderWrapper>
        {trendingData.movies?.results[1]?.map((item) => (
          <SwiperSlide key={item.id}>
            <MediaFlashCard cardData={item} />
          </SwiperSlide>
        ))}
      </CardSliderWrapper>
      <div className='text-2xl font-semibold mt-6'>
        <SectionTitle subText='Explore top rated movies'>
          Top Rated Movies
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
