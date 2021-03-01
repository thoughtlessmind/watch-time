import React from "react"

const Header = () => {
  const a = "nn"
  return (
    <nav className='bg-gray-800 py-4 md:px-12 sm:px-4 shadow fixed w-screen top-0 left-0'>
      {/* <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'> */}
      <div className='grid grid-cols-8 gap-4'>
        <p className='text-white text-2xl col-span-2 cursor-pointer'>
          Watch Time
        </p>
        <input
          className='col-span-3 opacity-70 rounded px-2 '
          placeholder='Search Movies and Shows...'
        />
        <div className='col-span-3 grid grid-cols-4 gap-1 px-3 place-content-center'>
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
      {/* </div> */}
    </nav>
  )
}

export default Header
