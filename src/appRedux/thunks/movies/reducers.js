import produce from "immer"

const initialState = {
  loading: {
    topRated: false,
    single: false
  },
  error: {
    topRated: false,
    single: false
  },
  topRated: {
    page: 0,
    results: {}
  },
  single: {}
}

export const MOVIES = {
  FETCHING: {
    TOP_RATED: "FETCHING_TOP_RATED_MOVIES",
    SINGLE: "FETCHING_SINGLE_MOVIE_DETAILS"
  },
  FETCHED: {
    TOP_RATED: "FETCHED_TOP_RATED_MOVIES",
    SINGLE: "FETCHED_SINGLE_MOVIE_DETAILS"
  },
  ERROR: {
    TOP_RATED: "ERROR_TOP_RATED_MOVIES",
    SINGLE: "ERROR_SINGLE_MOVIE_DETAILS"
  }
}

const moviesReducer = produce((draft, action) => {
  switch (action.type) {
    case MOVIES.FETCHING.TOP_RATED:
      draft.loading.topRated = true
      break

    case MOVIES.FETCHING.SINGLE:
      draft.loading.single = true
      break

    case MOVIES.FETCHED.TOP_RATED:
      draft.loading.topRated = false
      // draft.loading.all = false
      draft.topRated.page = action.payload.page
      draft.topRated.results[action.payload.page] = action.payload.results
      break

    case MOVIES.FETCHED.SINGLE:
      draft.loading.single = false
      draft.single[action.payload.id] = action.payload
      break

    case MOVIES.ERROR.TOP_RATED:
      draft.error.topRated = action.payload
      draft.loading.topRated = false
      break

    default:
      return draft
  }
}, initialState)

export default moviesReducer
