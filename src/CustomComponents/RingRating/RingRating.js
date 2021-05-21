import ProgressRing from "CustomComponents/ProgressRing"
import PropTypes from "prop-types"
import styled from "styled-components"

const RingContainer = styled.div`
  width: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  $ span: {
    postion: absolute;
    margin: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

const RingRating = (props) => {
  const { rating, ...restProps } = props
  return (
    <RingContainer {...restProps}>
      <ProgressRing radius={30} progress={rating * 10} stroke={4} />
      <span
        style={{ transform: "translate(-50%, 0)" }}
        className='absolute m-0 left-1/2'
      >
        {rating}
      </span>
    </RingContainer>
  )
}

RingRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default RingRating
