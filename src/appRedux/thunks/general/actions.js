import axios from "axios"
import { GENERAL } from "./reducers"

export const openCinemaDialog = (cinemaId, cinemaType) => {
  return (dispatch) => {
    dispatch({
      type: GENERAL.OPEN_CINEMA_DIALOG,
      payload: { id: cinemaId, cinemaType }
    })
  }
}

export const closCinemaDialog = () => {
  return (dispatch) => {
    dispatch({ type: GENERAL.CLOSE_CINEMA_DIALOG })
  }
}

export const handleSearchSuggestions = async (searchTerm, page = 1) => {
  if (searchTerm) {
    const res = await axios({
      url: `/search/multi?page=1&language=en-US&query=`,
      params: {
        page,
        language: "en-US",
        query: searchTerm
      }
    })
    return res.data.results
  }
}

/**
 * Control the visibility of the header search bar
 * @param {Boolean} isVisible Visibility control
 */
export const toggleHeaderSearchBarVisibility = (isVisible) => {
  return (dispatch) => {
    dispatch({ type: GENERAL.TOGGLE_HEADER_SEARCHBAR, payload: isVisible })
  }
}
