import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled, { css } from "styled-components"
import Dialog from "CustomComponents/Dialog"
import { fetchSingleMovieData } from "appRedux/thunks/movies/actions"
import { closCinemaDialog } from "appRedux/thunks/general/actions"
import CircularRating from "CustomComponents/CircularRating/CircularRating"
import RingRating from "CustomComponents/RingRating/RingRating"
import PersonList from "CustomComponents/PseronsList/PersonList"
import { fetchSingleTvShowData } from "appRedux/thunks/tv/actions"

const DialogWrapper = styled.div`
  padding: 16px;
  overflow-y: auto;
  position: relative;
  height: 100%;
  border-radius: 0.25rem;
`

const BgWrapper = styled.div`
  background: ${(props) => `url(${props.posterBg})`};
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: " ";
  z-index: -2;
  border-radius: 0.25rem;
  overflow: hidden;
  &:after {
    background: linear-gradient(
      to bottom right,
      rgb(8 11 18),
      rgb(0 1 2 / 78%)
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: " ";
  }
`

const MovieInfoDialog = (props) => {
  const cinemaDialogData = useSelector((state) => state.general.cinemaDialog)
  const dispatch = useDispatch()
  const {
    loading: { single: loading },
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
    console.log(cinemaDialogData)
  }, [cinemaDialogData])

  useEffect(() => {
    console.log({ loading, loadingError, allSingleMovies })
  })

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
      <BgWrapper
        posterBg={
          currentMovieData?.backdrop_path
            ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${currentMovieData?.backdrop_path}`
            : false
        }
      />
      <DialogWrapper>
        <div className='grid pt-4 md:pt-8 lg:pt-12 grid-cols-5 gap-2 text-white'>
          <div className=' pl-4 col-span-3'>
            <h4 className='text-3xl font-medium'>
              {currentMovieData.name
                ? currentMovieData.name
                : currentMovieData.original_title
                ? currentMovieData.original_title
                : "Loading"}
            </h4>
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
              <p className='uppercase'>{currentMovieData?.original_language}</p>
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
        <div>
          <p className='text-white font-medium text-lg mb-4'>
            Top Billed Casts
          </p>
          <div>
            <PersonList personsArr={currentMovieData?.credits?.cast ?? []} />
          </div>
        </div>
      </DialogWrapper>
    </Dialog>
  )
}

export default MovieInfoDialog

// Example of using condition props in styled-component

/**
  const DialogWrapper = styled.div`
  padding: 16px;
  overflow-y: scroll;
  position: relative;
  ${(props) =>
    props.posterBg &&
    css`
      &:before {
        background: url(${props.posterBg});
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        color: black;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        content: " ";
        z-index: -2;
      }
    `}
`
 */
