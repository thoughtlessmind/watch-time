import { FaInfoCircle, FaStar } from "react-icons/fa"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { openCinemaDialog } from "appRedux/thunks/general/actions"
import { useDispatch } from "react-redux"
import "./mediaFlashCard.css"

const MediaFlashCard = (props) => {
  const { cardData, onClick, ...restProps } = props
  const dispatch = useDispatch()
  const getMonthYearString = (dateString) => {
    const d = new Date(dateString)
    const arr = d.toDateString().split(" ")
    return `${arr[1]} ${arr[3]}`
  }

  const handleInfoBtnClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(openCinemaDialog(cardData.id, cardData.media_type))
  }
  return (
    <Link to={`/${cardData.media_type}/${cardData.id}`}>
      <div
        component='a'
        tabIndex={0}
        role='button'
        style={{ maxWidth: "180px" }}
        className='flashCardContainer md:w-auto w-34 bg-gray-200 relative rounded shadow-xl cursor-pointer duration-300 hover:shadow-2xl transition-shadow'
        {...restProps}
      >
        <FaInfoCircle
          onKeyPress={handleInfoBtnClick}
          onClick={handleInfoBtnClick}
          className='infoIcon'
        />

        <img
          loading='lazy'
          className='h-56 w-full object-cover rounded rounded-b-none'
          src={`https://image.tmdb.org/t/p/w500/${cardData.poster_path}`}
          alt='Movie Poster'
        />
        <div className='p-2'>
          <p className='flex items-center gap-0.5 text-sm font-medium'>
            <FaStar className='text-yellow-400 mr-1' /> {cardData.vote_average}
            <span className='ml-auto'>
              {getMonthYearString(
                cardData.release_date || cardData.first_air_date
              )}
            </span>
          </p>
          <p className='text-base font-medium '>
            {cardData.original_title || cardData.original_name}
          </p>
        </div>
      </div>
    </Link>
  )
}

MediaFlashCard.propTypes = {
  cardData: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    id: PropTypes.number,
    media_type: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func
}

MediaFlashCard.defaultProps = {
  onClick: null
}

export default MediaFlashCard
