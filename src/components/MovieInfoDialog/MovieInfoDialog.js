import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Dialog from "CustomComponents/Dialog"
import { fetchSingleMovieData } from "appRedux/thunks/movies/actions"
import { closCinemaDialog } from "appRedux/thunks/general/actions"
import RingRating from "CustomComponents/RingRating/RingRating"
import { fetchSingleTvShowData } from "appRedux/thunks/tv/actions"
import "./moviInfoDialog.css"
import MiniAvatarCard from "CustomComponents/MiniAvatarCard"

const MovieInfoDialog = () => {
  const cinemaDialogData = useSelector((state) => state.general.cinemaDialog)
  const dispatch = useDispatch()
  const {
    loading: { single: movieLoading },
    error: { single: loadingError },
    single: allSingleMovies
  } = useSelector((state) => state.movies)

  const {
    loading: { single: tvLoading },
    error: { single: tvLoadingError },
    single: allSingleTvShows
  } = useSelector((state) => state.tvShows)

  const [currentMovieData, setCurrentMovieData] = useState(undefined)

  useEffect(() => {
    if (cinemaDialogData.open) {
      return cinemaDialogData.cinemaType === "movie"
        ? dispatch(fetchSingleMovieData(cinemaDialogData?.id))
        : dispatch(fetchSingleTvShowData(cinemaDialogData?.id))
    }
  }, [cinemaDialogData])

  useEffect(() => {
    if (cinemaDialogData.cinemaType === "movie") {
      setCurrentMovieData(allSingleMovies[cinemaDialogData?.id])
    } else {
      setCurrentMovieData(allSingleTvShows[cinemaDialogData?.id])
    }
  }, [allSingleMovies, allSingleTvShows])

  return (
    <Dialog
      className='relative'
      open={cinemaDialogData.open}
      onClose={() => dispatch(closCinemaDialog())}
    >
      <div
        className='bgWrapper'
        style={{
          backgroundImage: currentMovieData?.backdrop_path
            ? `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${currentMovieData?.backdrop_path})`
            : "inherit"
        }}
        posterBg={
          currentMovieData?.backdrop_path
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${currentMovieData?.backdrop_path}`
            : false
        }
      />
      {cinemaDialogData.open && (
        <>
          {movieLoading || tvLoading ? (
            <div className='loader' />
          ) : (
            <div className='dialogWrapper'>
              <div className='grid pt-4 md:pt-8 lg:pt-12 grid-cols-5 gap-2 text-white'>
                <div className=' pl-4 col-span-3'>
                  <Link
                    to={`/${cinemaDialogData.cinemaType}/${currentMovieData?.id}`}
                    className='text-3xl font-medium'
                    onClick={() => dispatch(closCinemaDialog())}
                  >
                    {currentMovieData && currentMovieData?.name
                      ? currentMovieData?.name
                      : currentMovieData?.original_title
                      ? currentMovieData.original_title
                      : "Loading"}
                    <span className='font-light text-gray-400 ml-4'>
                      (&nbsp;
                      {cinemaDialogData.cinemaType === "tv"
                        ? new Date(
                            currentMovieData?.first_air_date
                          ).getFullYear()
                        : new Date(
                            currentMovieData?.release_date
                          ).getFullYear()}
                      &nbsp;)
                    </span>
                  </Link>
                  <p className='font-medium  mb-2 mt-1'>
                    {currentMovieData?.tagline}
                  </p>
                  <div className='flex items-center gap-2 mb-4'>
                    <p>{currentMovieData?.release_date}</p>
                    &#8226;
                    {/* <p>{currentMovieData?.vote_average}</p> */}
                    <RingRating rating={currentMovieData?.vote_average} />
                    &#8226;
                    <p>{currentMovieData?.runtime} min</p>
                    &#8226;
                    <p className='uppercase'>
                      {currentMovieData?.original_language}
                    </p>
                  </div>
                  <div>
                    <p className='text-sm pb-2 text-gray-300'>Overview</p>
                    <p>{currentMovieData?.overview}</p>
                  </div>
                </div>
                <div className='col-span-2 h-80 flex items-center justify-center w-auto'>
                  <img
                    className='w-auto h-80 rounded shadow'
                    alt='poster'
                    src={`https://image.tmdb.org/t/p/w500/${currentMovieData?.poster_path}`}
                  />
                </div>
              </div>
              <div className='mt-4 p-4'>
                <p className='text-white font-medium text-lg mb-4'>
                  Top Billed Casts
                </p>
                <div className='grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                  {currentMovieData?.credits?.cast?.map((cast) => (
                    <MiniAvatarCard
                      className='col-span-1'
                      title={cast.name}
                      subtitle={cast.character}
                      profilePic={cast.profile_path}
                      id={cast.id}
                      key={cast.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Dialog>
  )
}

export default MovieInfoDialog
