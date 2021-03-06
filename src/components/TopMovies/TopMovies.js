import { toggleHeaderSearchBarVisibility } from "appRedux/thunks/general/actions"
import fetchAllGenresList from "appRedux/thunks/genres/actions"
import { fetchTopRatedMovies } from "appRedux/thunks/movies/actions"
import MediaFlashCard from "components/MediaFlashCard"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"
import PaginationButtons from "CustomComponents/Pagination"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"

const TopMovies = (props) => {
  const {
    location: { search: page }
  } = props

  const dispatch = useDispatch()
  const topRatedMoviesData = useSelector((state) => state.movies)
  const [currentPage, setCurrentPage] = useState("1")

  useEffect(() => {
    dispatch(fetchAllGenresList())
    dispatch(toggleHeaderSearchBarVisibility(true))
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const currPage = page.split("=")?.[1] ?? "1"
    setCurrentPage(parseInt(currPage, 10))
    dispatch(fetchTopRatedMovies(parseInt(currPage, 10)))
  }, [page])

  return (
    <ContentLayoutWrapper>
      <SectionTitle>Top Rated Movies</SectionTitle>
      <div className='gridContainer grid gap-4 lg:gap-x-6 gap-y-8 mt-4'>
        {topRatedMoviesData.loading.all
          ? "loading"
          : topRatedMoviesData.topRated?.results[currentPage]?.map((item) => (
              <MediaFlashCard key={item.id} cardData={item} />
            ))}
      </div>
      <PaginationButtons
        currentPage={currentPage}
        basePath='/movies/trending'
      />
    </ContentLayoutWrapper>
  )
}

TopMovies.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired
}

export default withRouter(TopMovies)
