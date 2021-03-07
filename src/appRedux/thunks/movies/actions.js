/* eslint-disable import/prefer-default-export */
import axios from "axios"
import { MOVIES } from "./reducers"

/**
 * Fetch the top rated movies
 * @param {Number | String} page page number of the reults. max 1000
 */
export const fetchTopRatedMovies = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: MOVIES.FETCHING.TOP_RATED })
    const res = await axios({
      method: "GET",
      url: "/movie/top_rated",
      params: {
        page
      }
    })
    dispatch({ type: MOVIES.FETCHED.TOP_RATED, payload: res.data })
  }
}
