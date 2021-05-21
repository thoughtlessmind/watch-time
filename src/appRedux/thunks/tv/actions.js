import axios from "axios"
import { TV_SHOW } from "./reducers"

/**
 * Get the primary information about a tv show
 * @param {String} tvShow TMDB movie ID
 */
export const fetchSingleTvShowData = (movieId) => {
  return async (dispatch) => {
    dispatch({ type: TV_SHOW.FETCHING.SINGLE })
    try {
      const res = await axios({
        method: "GET",
        url: `/tv/${movieId}`,
        params: {
          append_to_response:
            "images,videos,credits,certification,watch/providers"
        }
      })
      dispatch({ type: TV_SHOW.FETCHED.SINGLE, payload: res.data })
    } catch (err) {
      dispatch({ type: TV_SHOW.ERROR.SINGLE, payload: err })
    }
  }
}

/**
 * Fetch the top rated tv show
 * @param {Number | String} page page number of the reults. max 1000
 */
export const fetchTopRatedTvShows = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: TV_SHOW.FETCHING.TOP_RATED })
    const res = await axios({
      method: "GET",
      url: "/tv/top_rated",
      params: {
        page
      }
    })
    dispatch({ type: TV_SHOW.FETCHED.TOP_RATED, payload: res.data })
  }
}
