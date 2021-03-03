import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"

const MediaFlashCard = (props) => {
  const { cardData } = props
  const getMonthYearString = (dateString) => {
    const d = new Date(dateString)
    const arr = d.toDateString().split(" ")
    return `${arr[1]} ${arr[3]}`
  }
  return (
    <div className='md:w-52 w-44 p-2 bg-gray-400 rounded shadow-xl cursor-pointer hover:shadow-2xl transition-shadow'>
      <img
        className='h-64 w-48 object-cover rounded'
        src={`https://image.tmdb.org/t/p/w500/${cardData.poster_path}`}
        alt='Movie Poster'
      />
      <p className='flex items-center gap-0.5 mt-2'>
        <FaStar className='text-yellow-400 mr-2' /> {cardData.vote_average}
        <span className='ml-auto'>
          {getMonthYearString(cardData.release_date || cardData.first_air_date)}
        </span>
      </p>
      <p className='text-lg font-semibold'>
        {cardData.original_title || cardData.original_name}
      </p>
    </div>
  )
}

MediaFlashCard.propTypes = {
  cardData: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    original_name: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string
  }).isRequired
}

export default MediaFlashCard
