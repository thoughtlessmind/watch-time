import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const PaginationButtons = (props) => {
  const { currentPage, basePath } = props
  return (
    <div className='flex justify-center items-center gap-2 py-8'>
      <Link
        type='button'
        className='border-2 w-12 rounded flex justify-center'
        to={`${basePath}?page=${currentPage === 1 ? 1 : currentPage - 1}`}
      >
        Prev
      </Link>

      {(currentPage === 1
        ? [currentPage, currentPage + 1, currentPage + 2]
        : [currentPage - 1, currentPage, currentPage + 1]
      ).map((item) => (
        <Link
          key={item}
          type='button'
          data-active={currentPage === item ? "true" : "false "}
          className='border-2 w-12 rounded flex justify-center'
          to={`${basePath}?page=${item}`}
        >
          {item}
        </Link>
      ))}
      <Link
        type='button'
        className='border-2 w-12 rounded flex justify-center'
        to={`${basePath}?page=${currentPage + 1}`}
      >
        Next
      </Link>
    </div>
  )
}

PaginationButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  basePath: PropTypes.string.isRequired
}

export default PaginationButtons
