import produce from "immer"

const initialState = {
  loading: false,
  error: null,
  data: {
    page: 0,
    results: {}
  },
  page: 0
}

export const TRENDING = {
  FETCHING: "FETCHING_TRENDING",
  FETCHED: "FETCHED_TRENDING",
  ERROR: "TRENDING_FETCHING_ERROR"
}

const trendingReducer = produce((draft, action) => {
  switch (action.type) {
    case TRENDING.FETCHING:
      draft.loading = true
      break

    case TRENDING.FETCHED:
      draft.loading = false
      draft.data.page = action.payload.page
      // draft.data.push(action.payload.results)
      draft.data.results[action.payload.page] = action.payload.results
      break

    default:
      return draft
  }
}, initialState)

export default trendingReducer
