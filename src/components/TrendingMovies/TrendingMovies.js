import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import MediaFlashCard from "components/MediaFlashCard"
import { fetchTrendingMovies } from "appRedux/thunks/trending/actions"
import PaginationButtons from "CustomComponents/Pagination"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import { toggleHeaderSearchBarVisibility } from "appRedux/thunks/general/actions"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"

const TrendingMovies = (props) => {
  const {
    location: { search: page }
  } = props
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)
  const [currentPage, setCurrentPage] = useState("1")

  useEffect(() => {
    const currPage = page.split("=")?.[1] ?? "1"
    setCurrentPage(parseInt(currPage, 10))
    dispatch(fetchTrendingMovies(parseInt(currPage, 10)))
  }, [page])

  useEffect(() => {
    dispatch(toggleHeaderSearchBarVisibility(true))
    window.scrollTo(0, 0)
  }, [])

  return (
    <ContentLayoutWrapper>
      <SectionTitle>Trending Movies</SectionTitle>
      <div className='gridContainer grid gap-4 lg:gap-x-6 gap-y-8 mt-4'>
        {trendingData.loading.all
          ? "loading"
          : trendingData.movies?.results[currentPage]?.map((item) => (
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

TrendingMovies.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired
}

export default withRouter(TrendingMovies)
