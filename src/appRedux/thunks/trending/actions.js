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

export const fetchTrending = () => {
  const a = "a"
  return async (dispatch) => {
    dispatch({ type: TRENDING.FETCHING })
    const res = await axios({
      method: "GET",
      url:
        "https://api.themoviedb.org/3/trending/all/day?api_key=555b6d37996849e85d8e21029c5e41f3"
    })
    dispatch({ type: TRENDING.FETCHED, payload: res.data })
  }
}
