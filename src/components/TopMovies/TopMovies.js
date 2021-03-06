import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import MediaFlashCard from "components/MediaFlashCard"
import { fetchTrendingMovies } from "appRedux/thunks/trending/actions"
import { Pagination } from "swiper"
import PaginationButtons from "CustomComponents/Pagination"

const TopMovies = (props) => {
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

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-2'>Top Movies</h2>
      <div className='gridContainer grid gap-4 lg:gap-x-6 gap-y-8'>
        {trendingData.loading.all
          ? "loading"
          : trendingData.movies?.results[currentPage]?.map((item) => (
              <MediaFlashCard key={item.id} cardData={item} />
            ))}
      </div>
      <PaginationButtons currentPage={currentPage} basePath='/movies' />
    </div>
  )
}

TopMovies.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired
}

export default withRouter(TopMovies)
