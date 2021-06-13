/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { fetchSingleMovieData } from "appRedux/thunks/movies/actions"
import { fetchSingleTvShowData } from "appRedux/thunks/tv/actions"
import tmdbContants from "constants/tmdbContants"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"
import RingRating from "CustomComponents/RingRating/RingRating"
import "./singleMediaPage.scss"

const SingleMediaPage = () => {
  const dispatch = useDispatch()
  const { mediaId } = useParams()
  const { pathname } = useLocation()

  const {
    loading: { single: movieDataLoading },
    single: movieSingle
  } = useSelector((state) => state.movies)
  const {
    loading: { single: tvShowDataLoading },
    single: tvShowSingle
  } = useSelector((state) => state.tvShows)

  const [currentMediaData, setCurrentMediaData] = useState(undefined)

  useEffect(() => {
    if (pathname.includes("tv")) dispatch(fetchSingleTvShowData(mediaId))
    else dispatch(fetchSingleMovieData(mediaId))
  }, [mediaId])

  useEffect(() => {
    if (pathname.includes("tv")) setCurrentMediaData(tvShowSingle?.[mediaId])
    else setCurrentMediaData(movieSingle?.[mediaId])
  }, [movieSingle, tvShowSingle, mediaId])

  return (
    <ContentLayoutWrapper>
      {currentMediaData && (
        <div>
          <div className='grid grid-cols-8 gap-2 md:gap-4 text-white relative'>
            <div className='bg-wrapper md:-left-12 -left-2' />
            <div className='col-span-2 rounded'>
              <img
                className='rounded'
                src={`${tmdbContants.posterPath}${currentMediaData.poster_path}`}
                alt=''
              />
            </div>
            <div className='col-span-6'>
              <h1 className='font-medium text-3xl pt-4'>
                {currentMediaData?.title || currentMediaData?.name}
                <span className='font-light opacity-80 ml-2'>
                  (
                  {new Date(
                    currentMediaData?.release_date ||
                      currentMediaData?.first_air_date
                  ).getFullYear()}
                  )
                </span>
              </h1>
              <h4 className='text-xl opacity-80'>
                {currentMediaData?.tagline}
              </h4>
              <div className='mt-4 flex items-center gap-2'>
                {currentMediaData?.hasOwnProperty("adult") && (
                  <>
                    <span className='rounded border border-white border-opacity-60 py-1 px-2'>
                      {currentMediaData?.adult ? "A" : "U"}
                    </span>
                    &#8226;
                  </>
                )}
                {currentMediaData?.vote_average && (
                  <>
                    <RingRating
                      title='Rating'
                      rating={currentMediaData?.vote_average ?? 0}
                    />
                    &#8226;
                  </>
                )}
                {currentMediaData?.release_date && (
                  <>
                    <span title='Release Date'>
                      {new Date(currentMediaData?.release_date)
                        ?.toDateString()
                        ?.substring(4)}
                    </span>
                    &#8226;
                  </>
                )}
                {currentMediaData?.runtime && (
                  <>
                    <span>{currentMediaData?.runtime} min</span>
                    &#8226;
                  </>
                )}
                {currentMediaData?.original_language && (
                  <>
                    <span className='uppercase' title='Original Language'>
                      {currentMediaData?.original_language}
                    </span>
                  </>
                )}
                {currentMediaData?.number_of_seasons && (
                  <>
                    &#8226;
                    <span className='capitalize' title='Seasons'>
                      {currentMediaData?.number_of_seasons}{" "}
                      {`${
                        currentMediaData?.number_of_seasons > 1
                          ? "Seasons"
                          : "Season"
                      }`}
                    </span>
                  </>
                )}
              </div>

              <p className='mt-4 opacity-80'>{currentMediaData?.overview}</p>
            </div>
          </div>
        </div>
      )}
    </ContentLayoutWrapper>
  )
}

export default SingleMediaPage
