import { configureStore } from "appRedux/store"
import axios from "axios"
import { enableAllPlugins } from "immer"
import { Provider } from "react-redux"
import Routes from "Routes/Routes"
import "tailwindcss/tailwind.css"

enableAllPlugins()

axios.defaults.baseURL = "https://api.themoviedb.org/3"

axios.interceptors.request.use(
  (req) => {
    req.params = {
      ...req.params,
      api_key: process.env.REACT_APP_TMDB_KEY
    }
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

const App = () => {
  const store = configureStore()
  return (
    <Provider store={store}>
      <div>
        <Routes />
      </div>
    </Provider>
  )
}

export default App
