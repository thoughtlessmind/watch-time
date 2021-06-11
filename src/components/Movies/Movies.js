import { Link, useLocation } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "appRedux/thunks/trending/actions"
import CardSliderWrapper from "CustomComponents/CardSlider"
import MediaFlashCard from "components/MediaFlashCard"
import { fetchTopRatedMovies } from "appRedux/thunks/movies/actions"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import MovieInfoDialog from "components/MovieInfoDialog"
import { openCinemaDialog } from "appRedux/thunks/general/actions"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"
import CardSlider from "CustomComponents/CardSlider/CardSlider"

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
    <ContentLayoutWrapper>
      <h2 className='text-xl text-secondary-main font-medium mb-4'>
        Explore Movies
      </h2>
      <SectionTitle
        to={`${location.pathname}/trending`}
        arrow
        subText='Explore trending movies of the week'
      >
        Trending Movies
      </SectionTitle>
      <CardSlider>
        {trendingData.movies?.results[1]?.map((item) => (
          <MediaFlashCard cardData={item} key={item.id} />
        ))}
      </CardSlider>
      <div className='text-2xl font-semibold mt-6'>
        <SectionTitle subText='Explore top rated movies'>
          Top Rated Movies
        </SectionTitle>

        <CardSlider>
          {trendingData.movies?.results[1]?.map((item) => (
            <MediaFlashCard key={item.id} cardData={item} />
          ))}
        </CardSlider>
      </div>
      {/* <MovieInfoDialog /> */}
    </ContentLayoutWrapper>
  )
}

export default Movies
