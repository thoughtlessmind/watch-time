import PropTypes from "prop-types"

const CircularRating = (props) => {
  const { rating } = props
  return (
    <div className='circularRatingWrapper'>
      <div className='arc' />
      <span>{rating}</span>
    </div>
  )
}

CircularRating.propTypes = {
  rating: PropTypes.number || PropTypes.string
}

CircularRating.defaultProps = {
  rating: 0
}

export default CircularRating
