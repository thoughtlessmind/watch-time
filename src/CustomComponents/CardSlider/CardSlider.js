/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from "clsx"
import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import "./cardSlider.scss"

const CardSlider = (props) => {
  const { children } = props
  const sliderConainerRef = useRef(null)

  const [showScrollBtns, setShowScrollBtns] = useState({
    left: false,
    right: false
  })

  useEffect(() => {
    manageScroll()
  }, [])

  const manageScroll = () => {
    const leftPos = sliderConainerRef.current.scrollLeft || 0
    const elWidth =
      sliderConainerRef.current.getBoundingClientRect()?.width || 0

    setShowScrollBtns({
      left: leftPos > 0,
      right: leftPos <= elWidth * 2
    })
  }

  const handleScrollBtnClick = (direction) => {
    sliderConainerRef.current.scroll({
      left:
        direction === "left"
          ? sliderConainerRef.current.scrollLeft - 280
          : sliderConainerRef.current.scrollLeft + 280,
      behavior: "smooth"
    })
  }

  return (
    <div className='sliederContainer'>
      <span
        className={clsx("nav-icon left-icon", {
          hide: !showScrollBtns.left
        })}
        onClick={() => handleScrollBtnClick("left")}
        role='button'
        tabIndex={0}
      >
        <FaChevronLeft />
      </span>
      <span
        className={clsx("nav-icon right-icon", {
          hide: !showScrollBtns.right
        })}
        onClick={() => handleScrollBtnClick("right")}
        role='button'
        tabIndex={0}
      >
        <FaChevronRight />
      </span>
      <div
        onScroll={manageScroll}
        className='sliderWrapper'
        ref={sliderConainerRef}
      >
        {children}
      </div>
    </div>
  )
}

CardSlider.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardSlider
