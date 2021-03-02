import React, { useEffect, useState } from "react"
import "swiper/swiper-bundle.min.css"
// import "swiper/swiper.scss"
// import "swiper/components/navigation/navigation.scss"
// import "swiper/components/pagination/pagination.scss"
// import "swiper/components/scrollbar/scrollbar.scss"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller
} from "swiper"
import { fetchTrending } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
import { FaAngleRight } from "react-icons/fa"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller])

const Home = () => {
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)

  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {
    dispatch(fetchTrending())
  }, [])

  return (
    <div>
      <div className='mb-2 flex justify-between'>
        <h3 className='text-2xl font-semibold mb-2'>Trending</h3>
        <p className="flex items-center">
          Vew All <FaAngleRight />{" "}
        </p>
      </div>
      {/* <div className=''></div> */}
      {trendingData.loading ? (
        <h1>Loaidng...</h1>
      ) : (
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // key={item.id}
        >
          {trendingData.data?.results?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <MediaFlashCard cardData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default Home
