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
