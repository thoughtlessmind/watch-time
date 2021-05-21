import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import "./welcomSection.css"

const WelcomeSection = () => {
  const searchInputRef = useRef(null)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState("")

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    alert(
      "work in progress. Please revisit/check by 22 May. \n Thank for visiting"
    )
  }

  const handleSearchInputChange = (e) => {
    setSearchInputValue(e.target.value)
  }

  return (
    <div className='h-80 bg-opacity-25 bg-gray-700 w-full md:px-12 sm:px-4 px-2 welcomeSectionContainer'>
      {/* <div className='h-full flex items-center '> */}
      <div className=' '>
        <div className='w-full md:w-4/6'>
          <div
            className={clsx("py-6 text-white upperContainer", {
              shrinkUpperContainer: isInputFocused
            })}
          >
            <h2 className='text-5xl font-bold'>Welcome.</h2>
            <h5 className='text-2xl mt-2 font-medium'>
              Millions of movies, TV shows and people to discover. Explore now.
            </h5>
          </div>
          <div className='py-6  searchFormContainer'>
            <form onSubmit={handleSearchSubmit} className='w-full searchForm'>
              <lable>
                <input
                  type='text'
                  ref={searchInputRef}
                  name='query'
                  // eslint-disable-next-line jsx-a11y/tabindex-no-positive
                  tabIndex='1'
                  autoCorrect='off'
                  autofill='off'
                  autoComplete='off'
                  spellCheck='false'
                  onChange={handleSearchInputChange}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  id='searchBox'
                  placeholder='Search for a movie, tv show, person......'
                  value={searchInputValue}
                />
              </lable>
              <input className='searchSubmitBtn' type='submit' value='Search' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
