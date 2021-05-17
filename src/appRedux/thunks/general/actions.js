import { GENERAL } from "./reducers"

export const opneMoviesDialog = (movieId) => {
  return (dispatch) => {
    dispatch({ type: GENERAL.OPEN_MOVIE_DIALOG, payload: movieId })
  }
}

export const closeMovieDialog = () => {
  return (dispatch) => {
    dispatch({ type: GENERAL.CLOSE_MOVIE_DIALOG })
  }
}
