/* eslint-disable import/prefer-default-export */
import axios from "axios"
import { TRENDING } from "./reducers"

// export const fetchTrending = () => async (dispatch) => {
//   dispatch({ type: TRENDING.FETCHING })
//   const res = await axios({
//     method: "GET",
//     url:
//       "https://api.themoviedb.org/3/trending/all/day?api_key=555b6d37996849e85d8e21029c5e41f3"
//   })
//   dispatch({ type: TRENDING.FETCHED, payload: res.data })
// }

export const fetchAllTrending = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: TRENDING.FETCHING.ALL })
    const res = await axios({
      method: "GET",
      url: "/trending/all/day",
      params: {
        page
      }
    })
    dispatch({ type: TRENDING.FETCHED.ALL, payload: res.data })
  }
}

/**
 * Fetch the trending movies
 * @param {String | Number} page page number
 */
export const fetchTrendingMovies = (page = 1) => {
  return async (dispatch) => {
    dispatch({ type: TRENDING.FETCHING.MOVIES })
    const res = await axios({
      method: "GET",
      url: "/trending/movie/day",
      params: {
        page
      }
    })
    dispatch({ type: TRENDING.FETCHED.MOVIES, payload: res.data })
  }
}
