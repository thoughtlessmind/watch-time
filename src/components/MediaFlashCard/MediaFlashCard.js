import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"

const MediaFlashCard = (props) => {
  const { cardData } = props
  return (
    <div>
      <img
        className='h-64 w-44 object-cover'
        src={`https://image.tmdb.org/t/p/w500/${cardData.poster_path}`}
        alt='Movie Poster'
      />
      <FaStar />
    </div>
  )
}

MediaFlashCard.propTypes = {
  cardData: PropTypes.shape({
    poster_path: PropTypes.string
  }).isRequired
}

export default MediaFlashCard
