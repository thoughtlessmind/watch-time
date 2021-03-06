import Home from "components/Home"
import Movies from "components/Movies/Movies"
import Trending from "components/Trending"
import App from "containers/App/App"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import TrendingMovies from "components/TrendingMovies"
import TopMovies from "components/TopMovies/TopMovies"
import SingleMediaPage from "components/SingleMediaPage"

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
          <Route path='/movie/:mediaId'>
            <SingleMediaPage />
          </Route>
          <Route path='/tv/:mediaId'>
            <SingleMediaPage />
          </Route>
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Routes
