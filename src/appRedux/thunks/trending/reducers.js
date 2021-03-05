import produce from "immer"

const initialState = {
  loading: {
    all: false,
    movies: false,
    tv: false
  },
  error: {
    all: false,
    movies: false,
    tv: false
  },
  all: {
    page: 0,
    results: {}
  },
  movies: {
    page: 0,
    results: {}
  },
  tv: {
    page: 0,
    results: {}
  }
}

export const TRENDING = {
  FETCHING: {
    ALL: "FETCHING_TRENDING_ALL",
    MOVIES: "FETCING_TRENDING_MOVIES",
    TV: "FETCING_TRENDING_TV"
  },
  FETCHED: {
    ALL: "FETCHED_TRENDING_ALL",
    MOVIES: "FETCHED_TRENDING_MOVIES",
    TV: "FETCHED_TRENDING_TV"
  },
  ERROR: {
    ALL: "ERROR_FETCH_TRENDING_ALL",
    MOVIES: "ERROR_FETCH_TRENDING_MOVIES",
    TV: "ERROR_FETCH_TRENDING_TV"
  }
}

const trendingReducer = produce((draft, action) => {
  switch (action.type) {
    case TRENDING.FETCHING.ALL:
      draft.loading.all = true
      break

    case TRENDING.FETCHED.ALL:
      draft.loading.all = false
      draft.all.page = action.payload.page
      draft.all.results[action.payload.page] = action.payload.results
      break

    case TRENDING.FETCHING.MOVIES:
      draft.loading.movies = true
      break

    case TRENDING.FETCHED.MOVIES:
      draft.loading.movies = false
      draft.movies.page = action.payload.page
      draft.movies.results[action.payload.page] = action.payload.results
      break

    default:
      return draft
  }
}, initialState)

export default trendingReducer
