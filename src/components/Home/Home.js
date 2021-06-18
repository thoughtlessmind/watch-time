import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllTrending } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
// import CardSliderWrapper from "CustomComponents/CardSlider"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"
import CardSlider from "CustomComponents/CardSlider/CardSlider"
import { fetchUpcomingMoviesData } from "appRedux/thunks/movies/actions"
import WelcomeSection from "./WelcomSection"

const Home = () => {
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)
  const moviesData = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchAllTrending())
    dispatch(fetchUpcomingMoviesData())
  }, [])

  return (
    <div className=''>
      <WelcomeSection />
      <ContentLayoutWrapper className='mt-8'>
        <div className='mb-2 flex justify-between'>
          <SectionTitle
            to='/trending'
            arrow
            subText="This week's top movies and shows"
          >
            Trending
          </SectionTitle>
        </div>
        {trendingData.loading.all ? (
          <h1>Loaidng...</h1>
        ) : trendingData.error.all ? (
          <pre>{trendingData.error.all}</pre>
        ) : (
          <CardSlider>
            {trendingData.all?.results?.[1]?.map((item) => (
              <MediaFlashCard cardData={item} key={item.id} />
            ))}
          </CardSlider>
        )}

        <div className='mt-12'>
          <SectionTitle subText='Discover Movies &amp; Shows'>
            Upcoming
          </SectionTitle>

          {moviesData.loading.upcoming ? (
            <h1>Loaidng...</h1>
          ) : trendingData.error.upcoming ? (
            <pre>{trendingData.error.upcoming}</pre>
          ) : (
            <CardSlider>
              {moviesData.upcoming?.results?.map((item) => (
                <MediaFlashCard
                  mediaType='movie'
                  cardData={item}
                  key={item.id}
                />
              ))}
            </CardSlider>
          )}
        </div>
      </ContentLayoutWrapper>
    </div>
  )
}

export default Home
