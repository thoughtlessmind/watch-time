import produce from "immer"

const intialState = {
  data: {},
  loading: false,
  error: undefined
}

export const GENRES = {
  FETCHING_GENRES_LIST: "FETCHING_ALL_GENRES_LIST",
  FETCHED_GENRES_LIST: "FETCHED_ALL_GENRE_LIST",
  ERROR_FETCHING_GENRES_LIST: "ERROR_FETCHING_GENRES_LIST"
}

const genreReducer = produce((draft, action) => {
  switch (action.type) {
    case GENRES.FETCHING_GENRES_LIST:
      draft.loading = true
      draft.error = undefined
      break

    case GENRES.FETCHED_GENRES_LIST:
      // eslint-disable-next-line no-case-declarations
      const obj = {}
      action.payload.map((i) => {
        obj[i.id] = i.name
        return null
      })
      draft.loading = false
      draft.data = obj
      break

    case GENRES.ERROR_FETCHING_GENRES_LIST:
      draft.tv.loading = false
      draft.tv.error = action.payload
      break

    default:
      return draft
  }
}, intialState)

export default genreReducer
