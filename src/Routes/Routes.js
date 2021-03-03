import Home from "components/Home"
import Trending from "components/Trending"
// import { App } from "containers"
import App from "containers/App/App"
import { Switch, BrowserRouter, Route } from "react-router-dom"

const Routes = () => {
  const a = "a"
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/trending'>
            <Trending />
          </Route>
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Routes
