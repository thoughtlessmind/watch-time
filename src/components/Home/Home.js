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
// import CardSliderWrapper from "CustomComponents/CardSlider"
import SectionTitle from "CustomComponents/SectionTitle/SectionTitle"
import ContentLayoutWrapper from "containers/ContentLayoutWrapper"
import CardSlider from "CustomComponents/CardSlider/CardSlider"
import WelcomeSection from "./WelcomSection"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller])

const Home = () => {
  const dispatch = useDispatch()
  const trendingData = useSelector((state) => state.trending)

  useEffect(() => {
    dispatch(fetchAllTrending())
  }, [])

  return (
    <div className=''>
      <WelcomeSection />
      <ContentLayoutWrapper className='mt-8'>
        <div className='mb-2 flex justify-between'>
          {/* <h3 className='text-2xl font-semibold mb-2'>Trending</h3> */}
          <SectionTitle
            to='/trending'
            arrow
            subText="This week's top movies and shows"
          >
            Trending
          </SectionTitle>
        </div>
        {trendingData.loading.all ? (
          <h1>Loaidng...</h1>
        ) : trendingData.error.all ? (
          <pre>{trendingData.error.all}</pre>
        ) : (
          <CardSlider>
            {trendingData.all?.results?.[1]?.map((item) => (
              <MediaFlashCard cardData={item} key={item.id} />
            ))}
          </CardSlider>
        )}
      </ContentLayoutWrapper>
    </div>
  )
}

export default Home
