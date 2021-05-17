import { trendingReducer, moviesReducer } from "appRedux/thunks"
import generalReducer from "appRedux/thunks/general/reducers"
import genreReducer from "appRedux/thunks/genres/reducers"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  trending: trendingReducer,
  movies: moviesReducer,
  allGenres: genreReducer,
  general: generalReducer
})

export default rootReducer
