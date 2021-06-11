import clsx from "clsx"
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import HeaderSearchBar from "./HeaderSearchBar"

const headerNavLinks = [
  {
    name: "Top Movies",
    to: "/movies"
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavSideBar = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className='bg-gray-800 py-4 md:px-12 sm:px-4 px-2 shadow fixed w-screen top-0 left-0 z-50'>
      <div className='grid grid-cols-12 gap-2 md:gap-4'>
        <Link
          to='/'
          className='text-secondary-main font-semibold text-xl md:text-2xl md:col-span-3 col-span-4 cursor-pointer'
        >
          Watch Time
        </Link>
        <div className='col-span-6 lg:col-span-4 opacity-70 rounded px-2 '>
          <HeaderSearchBar />
        </div>
        <div className='col-span-2 lg:col-span-5 px-3 col-start-11 col-end-12 md:col-start-12 my-auto'>
          <FaBars
            onClick={handleNavSideBar}
            className='lg:hidden text-white h-full w-8 p-1 cursor-pointer hover:bg-gray-500 rounded '
          />
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

      {isOpen && (
        <div
          onClick={() => setIsOpen((prev) => prev && false)}
          className={clsx({ "z-10 fixed inset-0 transition-opacity": isOpen })}
          role='button'
          tabIndex='-1'
          onKeyUp={({ keyCode }) => keyCode === 27 && setIsOpen(false)}
        >
          <div className='absolute inset-0 bg-black opacity-50' />
        </div>
      )}
      <aside
        className={clsx(
          "lg:hidden transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",
          { "translate-x-0": isOpen, "translate-x-full": !isOpen }
        )}
      >
        <div>
          <div className='h-16 bg-gray-800 p-4'>
            <h3 className='text-white text-lg md:text-xl cursor-pointer'>
              Watch Time
            </h3>
          </div>
          <div className='p-4 flex flex-col'>
            {headerNavLinks.map((i) => (
              <Link
                key={i.name}
                to={i.to}
                className='text-gray-800 text-sm font-medium px-3 py-2 rounded transition-all cursor-pointer hover:bg-gray-200 hover:text-gray-800'
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </aside>
      {/* </div> */}
    </nav>
  )
}

export default Header
