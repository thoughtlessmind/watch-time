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

const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRENDING.FETCHING:
      return { ...state, loading: true, error: null }

    case TRENDING.FETCHED:
      return { ...state, loading: false, error: null, data: action.payload }

    default:
      return state
  }
}

export default trendingReducer
