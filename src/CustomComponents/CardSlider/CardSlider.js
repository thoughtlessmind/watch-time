import "swiper/swiper-bundle.min.css"
import { Swiper } from "swiper/react"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller
} from "swiper"
import PropTypes from "prop-types"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller])

const CardSliderWrapper = (props) => {
  const { children } = props
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={5}
      breakpoints={{
        320: {
          slidesPerView: 2
        },
        520: {
          slidesPerView: 3
        },
        748: {
          slidesPerView: 4
        },
        960: {
          slidesPerView: 5
        }
      }}
      navigation
      controller
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  )
}

CardSliderWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardSliderWrapper
