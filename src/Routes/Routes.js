import Home from "components/Home"
import Movies from "components/Movies/Movies"
import Trending from "components/Trending"
// import { App } from "containers"
import App from "containers/App/App"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import TrendingMovies from "components/TrendingMovies"
import TopMovies from "components/TopMovies/TopMovies"
import MovieInfoDialog from "components/MovieInfoDialog"

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
            <TrendingMovies />
          </Route>
          <Route path='/movies/top-rated'>
            <TopMovies />
          </Route>
          {/* <Route path='/movies/:movieId'>
            <MovieInfoDialog />
          </Route> */}
          <Route path='/movies'>
            <Movies />
          </Route>
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Routes
