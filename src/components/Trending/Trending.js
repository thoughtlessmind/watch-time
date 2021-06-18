/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { fetchAllTrending } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
import PaginationButtons from "CustomComponents/Pagination"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import { toggleHeaderSearchBarVisibility } from "appRedux/thunks/general/actions"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"
import "./trending.css"

const Trending = (props) => {
  const {
    location: { search: page }
  } = props
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)
  const [currentPage, setCurrentPage] = useState("1")

  useEffect(() => {
    dispatch(toggleHeaderSearchBarVisibility(true))
    window.scrollTo(0, 0)
    dispatch(fetchAllTrending())
  }, [])

  useEffect(() => {
    const currPage = page.split("=")?.[1] ?? "1"
    setCurrentPage(parseInt(currPage, 10))
    dispatch(fetchAllTrending(parseInt(currPage, 10)))
  }, [page])

  return (
    <ContentLayoutWrapper>
      <SectionTitle className='mb-4'>Trending</SectionTitle>
      <div className='gridContainer xs:grid gap-4 lg:gap-x-6 gap-y-8'>
        {trendingData.loading.all
          ? "loading"
          : trendingData.all?.results[currentPage]?.map((item) => (
              <MediaFlashCard key={item.id} cardData={item} />
            ))}
      </div>

      <PaginationButtons currentPage={currentPage} basePath='/trending' />
    </ContentLayoutWrapper>
  )
}

Trending.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired
}

export default withRouter(Trending)
