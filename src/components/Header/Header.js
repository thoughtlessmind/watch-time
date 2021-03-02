import React from "react"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const a = "nn"
  return (
    <nav className='bg-gray-800 py-4 md:px-12 sm:px-4 shadow fixed w-screen top-0 left-0 z-50'>
      {/* <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'> */}
      <div className='grid grid-cols-12 gap-4'>
        <p className='text-white text-xl md:text-2xl col-span-4 cursor-pointer'>
          Watch Time
        </p>
        <input
          className='col-span-5 lg:col-span-3 opacity-70 rounded px-2 '
          placeholder='Search Movies and Shows...'
        />
        <div className='col-span-1 lg:col-span-3 px-3 '>
          <FaBars className='lg:hidden text-white h-full w-8 p-1 col-end-12 cursor-pointer hover:bg-gray-500 rounded ' />
          <div className='hidden lg:grid grid-cols-4 gap-1 place-content-center'>
            <a href='/' className='text-white text-sm cursor-pointer'>
              Trending
            </a>
            <a href='/' className='text-white text-sm cursor-pointer'>
              Top Moview
            </a>
            <a href='/' className='text-white text-sm cursor-pointer'>
              Top Shows
            </a>
            <a href='/' className='text-white text-sm cursor-pointer'>
              Upcoming
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Header
