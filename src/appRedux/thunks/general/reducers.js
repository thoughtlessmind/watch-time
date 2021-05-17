import produce from "immer"

const initialState = {
  moviesDialog: {
    open: false,
    movieId: null
  }
}

export const GENERAL = {
  OPEN_MOVIE_DIALOG: "OPEN_MOVIE_DIALOG",
  CLOSE_MOVIE_DIALOG: "CLOSE_MOVIE_DIALOG"
}

const generalReducer = produce((draft, action) => {
  switch (action.type) {
    case GENERAL.OPEN_MOVIE_DIALOG:
      draft.moviesDialog.movieId = action.payload
      draft.moviesDialog.open = true
      break

    case GENERAL.CLOSE_MOVIE_DIALOG:
      draft.moviesDialog.open = false
      draft.moviesDialog.movieId = null
      break

    default:
      return draft
  }
}, initialState)

export default generalReducer
