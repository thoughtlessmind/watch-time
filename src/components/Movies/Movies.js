import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchTrendingMovies } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
import { fetchTopRatedMovies } from "appRedux/thunks/movies/actions"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import { toggleHeaderSearchBarVisibility } from "appRedux/thunks/general/actions"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"
import CardSlider from "CustomComponents/CardSlider/CardSlider"

const Movies = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const trendingData = useSelector((state) => state.trending)

  useEffect(() => {
    dispatch(fetchTrendingMovies())
    dispatch(fetchTopRatedMovies())
    dispatch(toggleHeaderSearchBarVisibility(true))
    window.scrollTo(0, 0)
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
