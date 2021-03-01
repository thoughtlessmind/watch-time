import { configureStore } from "appRedux/store"
import { enableAllPlugins } from "immer"
import { Provider } from "react-redux"
import Routes from "Routes/Routes"
import "tailwindcss/tailwind.css"

enableAllPlugins()

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
