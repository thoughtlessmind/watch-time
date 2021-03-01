/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "appRedux"

const configureStore = () => {
  const middlewares = [thunk]
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__({
            trace: true,
            traceLimit: 25
          })
        )
      : applyMiddleware(...middlewares)
  )
  return store
}

export default configureStore
