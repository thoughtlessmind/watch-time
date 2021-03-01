import { configureStore } from "appRedux"
import { Provider } from "react-redux"
import Routes from "Routes/Routes"
import "tailwindcss/tailwind.css"

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
