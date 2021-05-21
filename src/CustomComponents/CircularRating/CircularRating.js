import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const CircularRatingWrapper = styled.div`
  border-radius: 50%;
  // border: 3px solid blue;
  padding: 5px;
  font-size: 16;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Arc = styled.div`
  overflow: hidden;
  position: absolute;
  top: -1em;
  right: 50%;
  bottom: 50%;
  left: -1em;
  transform-origin: 100% 100%;
  transform: rotate(45deg) skewX(30deg);
  &:after {
    box-sizing: border-box;
    display: block;
    border: solid 1em green;
    width: 200%;
    height: 200%;
    border-radius: 50%;
    transform: skewX(-30deg);
    content: "";
  }
`

const CircularRating = (props) => {
  const { rating } = props
  return (
    <CircularRatingWrapper>
      <Arc />
      <span>{rating}</span>
    </CircularRatingWrapper>
  )
}

CircularRating.propTypes = {
  rating: PropTypes.number || PropTypes.string
}

CircularRating.defaultProps = {
  rating: 0
}

export default CircularRating
