import {
  handleSearchSuggestions,
  toggleHeaderSearchBarVisibility
} from "appRedux/thunks/general/actions"
import clsx from "clsx"
import tmdbContants from "constants/tmdbContants"
import useDebouncedEffect from "hooks"
import { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./welcomSection.css"
import isInViewport from "utils"
import "./welcomeSection.scss"
import { useDispatch } from "react-redux"

const WelcomeSection = () => {
  const searchInputRef = useRef(null)
  const history = useHistory()
  const dispatch = useDispatch()
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState("")
  const [suggestionData, setSuggestionData] = useState([])
  const [showSuggestionList, setShowSuggestionList] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const fn = () => {
      if (searchInputRef.current) {
        if (isInViewport(searchInputRef.current))
          dispatch(toggleHeaderSearchBarVisibility(false))
        else dispatch(toggleHeaderSearchBarVisibility(true))
      }
    }

    if (searchInputRef.current)
      document.addEventListener("scroll", fn, { signal: controller.signal })
    return () => {
      controller.abort()
    }
  }, [searchInputRef])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
  }

  const handleSearchInputChange = (e) => {
    setSearchInputValue(e.target.value)
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
    setShowSuggestionList(suggestionData?.length > 0)
  }

  const handleInputBlurfocus = () => {
    if (suggestionData?.length > 0) {
      setTimeout(() => {
        setIsInputFocused(false)
        setShowSuggestionList(false)
      }, 200)
    } else {
      setIsInputFocused(false)
      setShowSuggestionList(false)
    }
  }

  const logRes = async (term) => {
    const data = await handleSearchSuggestions(term)
    setSuggestionData(data)
    setShowSuggestionList(Boolean(data?.length))
  }

  useDebouncedEffect(
    () => {
      logRes(searchInputValue)
    },
    [searchInputValue],
    500
  )

  const navigateToSinglePage = (mediaType, id) => {
    history.push(`/${mediaType}/${id}`)
    setShowSuggestionList(false)
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
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlurfocus}
                  id='searchBox'
                  placeholder='Search for a movie, tv show, person......'
                  value={searchInputValue}
                />
              </lable>
              <input className='searchSubmitBtn' type='submit' value='Search' />
            </form>
            {showSuggestionList && (
              <ul className='welcome-suggestionsList'>
                {suggestionData?.map((data) => (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                  <li
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role='button'
                    onClick={() =>
                      navigateToSinglePage(data.media_type, data.id)
                    }
                  >
                    <img
                      alt={data.name || data.title}
                      src={
                        tmdbContants.posterPath +
                        (data.poster_path || data.profile_path)
                      }
                    />
                    <span className='text-info'>
                      <span className='name'>{data.name || data.title}</span>
                      <span className='year'>
                        {data.known_for_department
                          ? data.known_for_department
                          : new Date(
                              data.release_date || data.first_air_date
                            ).getFullYear()}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
