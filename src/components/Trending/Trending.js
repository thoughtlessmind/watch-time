/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import "./trending.css"
import { fetchAllTrending } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
import PaginationButtons from "CustomComponents/Pagination"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import { openCinemaDialog } from "appRedux/thunks/general/actions"

const Trending = (props) => {
  const {
    location: { search: page }
  } = props
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)
  const [currentPage, setCurrentPage] = useState("1")

  useEffect(() => {
    dispatch(fetchAllTrending())
  }, [])

  useEffect(() => {
    console.log(page)
    const currPage = page.split("=")?.[1] ?? "1"
    setCurrentPage(parseInt(currPage, 10))
    dispatch(fetchAllTrending(parseInt(currPage, 10)))
  }, [page])

  return (
    <div>
      {/* <h2 className='text-2xl font-semibold mb-2'>Trending</h2> */}
      <SectionTitle className='mb-4'>Trending</SectionTitle>
      <div className='gridContainer xs:grid gap-4 lg:gap-x-6 gap-y-8'>
        {trendingData.loading.all
          ? "loading"
          : trendingData.all?.results[currentPage]?.map((item) => (
              <MediaFlashCard
                key={item.id}
                // onClick={() => handleOpenCinemaDialog(item.id, item.media_type)}
                cardData={item}
              />
            ))}
      </div>

      <PaginationButtons currentPage={currentPage} basePath='/trending' />
    </div>
  )
}

Trending.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired
}

export default withRouter(Trending)
