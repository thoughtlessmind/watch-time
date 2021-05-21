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

export const TV_SHOW = {
  FETCHING: {
    TOP_RATED: "FETCHING_TOP_RATED_TV_SHOW",
    SINGLE: "FETCHING_SINGLE_TV_SHOW_DETAILS"
  },
  FETCHED: {
    TOP_RATED: "FETCHED_TOP_RATED_TV_SHOW",
    SINGLE: "FETCHED_SINGLE_TV_SHOW_DETAILS"
  },
  ERROR: {
    TOP_RATED: "ERROR_TOP_RATED_TV_SHOW",
    SINGLE: "ERROR_SINGLE_TV_SHOW_DETAILS"
  }
}

const tvShowsReducer = produce((draft, action) => {
  switch (action.type) {
    case TV_SHOW.FETCHING.TOP_RATED:
      draft.loading.topRated = true
      break

    case TV_SHOW.FETCHING.SINGLE:
      draft.loading.single = true
      break

    case TV_SHOW.FETCHED.TOP_RATED:
      draft.loading.topRated = false
      // draft.loading.all = false
      draft.topRated.page = action.payload.page
      draft.topRated.results[action.payload.page] = action.payload.results
      break

    case TV_SHOW.FETCHED.SINGLE:
      draft.loading.single = false
      draft.single[action.payload.id] = action.payload
      break

    case TV_SHOW.ERROR.TOP_RATED:
      draft.error.topRated = action.payload
      draft.loading.topRated = false
      break

    default:
      return draft
  }
}, initialState)

export default tvShowsReducer
