import { trendingReducer } from "appRedux/thunks"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  trending: trendingReducer
})

export default rootReducer
