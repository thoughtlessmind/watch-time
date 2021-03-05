import Home from "components/Home"
import TopMovies from "components/TopMovies"
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
          <Route path='/top-movies'>
            <TopMovies />
          </Route>
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Routes
