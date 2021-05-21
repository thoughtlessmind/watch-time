import { trendingReducer, moviesReducer } from "appRedux/thunks"
import generalReducer from "appRedux/thunks/general/reducers"
import genreReducer from "appRedux/thunks/genres/reducers"
import tvShowsReducer from "appRedux/thunks/tv/reducers"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  trending: trendingReducer,
  movies: moviesReducer,
  allGenres: genreReducer,
  general: generalReducer,
  tvShows: tvShowsReducer
})

export default rootReducer
