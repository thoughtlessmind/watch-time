import Home from "components/Home"
// import { App } from "containers"
import App from "containers/App/App"
import { Switch, BrowserRouter, Route } from "react-router-dom"

const Routes = () => {
  const a = "a"
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Routes
