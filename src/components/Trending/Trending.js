/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { fetchTrending } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import "./trending.css"
import PropTypes from "prop-types"

const Trending = (props) => {
  const {
    location: { search: page }
  } = props
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)
  const [currentPage, setCurrentPage] = useState("1")

  useEffect(() => {
    dispatch(fetchTrending())
  }, [])

  useEffect(() => {
    console.log(page)
    const currPage = page.split("=")?.[1] ?? "1"
    setCurrentPage(parseInt(currPage, 10))
    dispatch(fetchTrending(parseInt(currPage, 10)))
  }, [page])

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-2'>Trending</h2>
      <div className='gridContainer grid gap-4 lg:gap-x-6 gap-y-8'>
        {trendingData.loading
          ? "loading"
          : trendingData.data?.results[currentPage]?.map((item) => (
              <MediaFlashCard key={item.id} cardData={item} />
            ))}
      </div>
      <div className='flex justify-center items-center gap-2 my-8'>
        <Link
          type='button'
          className='border-2 w-12 rounded flex justify-center'
          to={`/trending?page=${currentPage === 1 ? 1 : currentPage - 1}`}
        >
          Prev
        </Link>

        {(currentPage === 1
          ? [currentPage, currentPage + 1, currentPage + 2]
          : [currentPage - 1, currentPage, currentPage + 1]
        ).map((item, index) => (
          <Link
            type='button'
            data-active={currentPage === item ? "true" : "false "}
            className='border-2 w-12 rounded flex justify-center'
            to={`/trending?page=${item}`}
          >
            {item}
          </Link>
        ))}
        <Link
          type='button'
          className='border-2 w-12 rounded flex justify-center'
          to={`/trending?page=${currentPage + 1}`}
        >
          Next
        </Link>
      </div>
    </div>
  )
}

Trending.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired
}

export default withRouter(Trending)
