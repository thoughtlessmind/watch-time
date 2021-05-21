import ProgressRing from "CustomComponents/ProgressRing"
import PropTypes from "prop-types"
import "./ringRating.css"

const RingRating = (props) => {
  const { rating, ...restProps } = props
  return (
    <div className='ringContainer' {...restProps}>
      <ProgressRing radius={30} progress={rating * 10} stroke={4} />
      <span
        style={{ transform: "translate(-50%, 0)" }}
        className='absolute m-0 left-1/2'
      >
        {rating}
      </span>
    </div>
  )
}

RingRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default RingRating
