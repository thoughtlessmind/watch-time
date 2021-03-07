import { trendingReducer, moviesReducer } from "appRedux/thunks"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  trending: trendingReducer,
  movies: moviesReducer
})

export default rootReducer
