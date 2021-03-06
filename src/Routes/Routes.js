import Home from "components/Home"
import Movies from "components/Movies/Movies"
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
          <Route path='/movies/trending'>
            <TopMovies />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Routes
