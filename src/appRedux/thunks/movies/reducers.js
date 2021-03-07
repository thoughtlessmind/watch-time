import produce from "immer"

const initialState = {
  loading: {
    topRated: false
  },
  error: {
    topRated: false
  },
  topRated: {
    page: 0,
    results: {}
  }
}

export const MOVIES = {
  FETCHING: {
    TOP_RATED: "FETCHING_TOP_RATED_MOVIES"
  },
  FETCHED: {
    TOP_RATED: "FETCHED_TOP_RATED_MOVIES"
  },
  ERROR: {
    TOP_RATED: "ERROR_TOP_RATED_MOVIES"
  }
}

const moviesReducer = produce((draft, action) => {
  switch (action.type) {
    case MOVIES.FETCHING.TOP_RATED:
      draft.loading.all = true
      break

    case MOVIES.FETCHED.TOP_RATED:
      draft.loading.topRated = false
      draft.topRated.page = action.payload.page
      draft.topRated.results[action.payload.page] = action.payload.results
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
