import axios from "axios"
import { GENRES } from "./reducers"

const fetchMoviesGenres = async () => {
  const res = await axios({
    method: "GET",
    url: "/genre/movie/list"
  })
  return res
}

const fetchTvGenres = async () => {
  const res = await axios({
    method: "GET",
    url: "/genre/tv/list"
  })
  return res
}

/**
 * Fethces all the genres list of tv and movies and comnbines them into one object
 * @param {Function} callback callback function
 */
const fetchAllGenresList = (callback) => {
  return async (dispatch) => {
    dispatch({ type: GENRES.FETCHING_GENRES_LIST })
    try {
      const moviesList = await fetchMoviesGenres()
      const tvList = await fetchTvGenres()
      dispatch({
        type: GENRES.FETCHED_GENRES_LIST,
        payload: [...moviesList.data.genres, ...tvList.data.genres]
      })
      if (callback)
        callback([...moviesList.data.genres, ...tvList.data.genres], false)
    } catch (err) {
      if (callback) callback(err, true)
      dispatch({ type: GENRES.ERROR_FETCHING_GENRES_LIST, payload: err })
    }
  }
}

export default fetchAllGenresList
