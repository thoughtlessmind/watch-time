import { trendingReducer, moviesReducer } from "appRedux/thunks"
import genreReducer from "appRedux/thunks/genres/reducers"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  trending: trendingReducer,
  movies: moviesReducer,
  allGenres: genreReducer
})

export default rootReducer
