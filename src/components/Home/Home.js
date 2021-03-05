import React, { useEffect, useState } from "react"
import "swiper/swiper-bundle.min.css"
import { useDispatch, useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller
} from "swiper"
import { fetchAllTrending } from "appRedux/thunks/trending/actions"
import MediaFlashCard from "components/MediaFlashCard"
import { FaAngleRight } from "react-icons/fa"
import { Link } from "react-router-dom"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller])

const Home = () => {
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)

  useEffect(() => {
    dispatch(fetchAllTrending())
  }, [])

  return (
    <div>
      <div className='mb-2 flex justify-between'>
        <h3 className='text-2xl font-semibold mb-2'>Trending</h3>
        <Link to='/trending' className='flex items-center'>
          Vew All <FaAngleRight />{" "}
        </Link>
      </div>
      {/* <div className=''></div> */}
      {trendingData.loading.all ? (
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
          // key={item.id}
        >
          {trendingData.all?.results?.[1]?.map((item, index) => (
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
