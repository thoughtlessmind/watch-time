import produce from "immer"

const initialState = {
  loading: false,
  error: null,
  data: []
}

export const TRENDING = {
  FETCHING: "FETCHING_TRENDING",
  FETCHED: "FETCHED_TRENDING",
  ERROR: "TRENDING_FETCHING_ERROR"
}

const trendingReducer1 = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING.FETCHING:
      return { ...state, loading: true, error: null }

    case TRENDING.FETCHED:
      return { ...state, loading: false, error: null, data: action.payload }

    default:
      return state
  }
}

const trendingReducer = produce((draft, action) => {
  switch (action.type) {
    case TRENDING.FETCHING:
      draft.loading = true
      break

    case TRENDING.FETCHED:
      draft.loading = false
      draft.data = action.payload
      break

    default:
      return draft
  }
}, initialState)

export default trendingReducer
