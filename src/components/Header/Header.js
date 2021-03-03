import React from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
  const headerNavLinks = [
    {
      name: "Top Movies",
      to: "/"
    },
    {
      name: "Top Shows",
      to: "/"
    },
    {
      name: "Upcomings",
      to: "/"
    },
    {
      name: "Discover",
      to: "/"
    }
  ]

  return (
    <nav className='bg-gray-800 py-4 md:px-12 sm:px-4 px-2 shadow fixed w-screen top-0 left-0 z-50'>
      {/* <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'> */}
      <div className='grid grid-cols-12 gap-2 md:gap-4'>
        <Link
          to='/'
          className='text-white text-xl md:text-2xl md:col-span-3 col-span-4 cursor-pointer'
        >
          Watch Time
        </Link>
        <input
          className='col-span-6 lg:col-span-4 opacity-70 rounded px-2 '
          placeholder='Search Movies and Shows...'
        />
        <div className='col-span-2 lg:col-span-5 px-3 col-start-11 col-end-12 md:col-start-12 my-auto'>
          <FaBars className='lg:hidden text-white h-full w-8 p-1 cursor-pointer hover:bg-gray-500 rounded ' />
          <div className='hidden lg:flex  align-center justify-around max-w-sm ml-auto'>
            {headerNavLinks.map((i) => (
              <Link
                key={i.name}
                to={i.to}
                className='text-white text-sm font-medium px-3 py-2 rounded transition-all cursor-pointer hover:bg-gray-200 hover:text-gray-800'
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Header
