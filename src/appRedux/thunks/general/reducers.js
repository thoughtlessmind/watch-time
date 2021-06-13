import produce from "immer"

const initialState = {
  cinemaDialog: {
    open: false,
    id: null
  },
  headerSearchbarVisible: true
}

export const GENERAL = {
  OPEN_CINEMA_DIALOG: "OPEN_MOVIE_DIALOG",
  CLOSE_CINEMA_DIALOG: "CLOSE_MOVIE_DIALOG",
  TOGGLE_HEADER_SEARCHBAR: "TOGGLE_HEADER_SEARCHBAR"
}

const generalReducer = produce((draft, action) => {
  switch (action.type) {
    case GENERAL.OPEN_CINEMA_DIALOG:
      draft.cinemaDialog.id = action.payload.id
      draft.cinemaDialog.cinemaType = action.payload.cinemaType
      draft.cinemaDialog.open = true
      break

    case GENERAL.CLOSE_CINEMA_DIALOG:
      draft.cinemaDialog.open = false
      draft.cinemaDialog.id = null
      draft.cinemaDialog.cinemaType = null
      break

    case GENERAL.TOGGLE_HEADER_SEARCHBAR:
      draft.headerSearchbarVisible = action.payload
      break

    default:
      return draft
  }
}, initialState)

export default generalReducer
