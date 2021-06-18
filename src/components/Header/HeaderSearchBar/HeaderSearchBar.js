/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from "clsx"
import PropTypes from "prop-types"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useHistory } from "react-router-dom"
import { handleSearchSuggestions } from "appRedux/thunks/general/actions"
import tmdbContants from "constants/tmdbContants"
import useDebouncedEffect from "hooks"
import "./headerSearchBar.scss"

const HeaderSearchBar = (props) => {
  const { className = "", ...restProps } = props

  const history = useHistory()

  const [value, setValue] = useState("")
  const [suggestionData, setSuggestionData] = useState([])
  const [showSuggestionList, setShowSuggestionList] = useState(false)

  const logRes = async (term) => {
    const data = await handleSearchSuggestions(term)
    setSuggestionData(data)
    setShowSuggestionList(Boolean(data?.length))
  }

  useDebouncedEffect(
    () => {
      logRes(value)
    },
    [value],
    500
  )

  const navigateToSinglePage = (mediaType, id) => {
    history.push(`/${mediaType}/${id}`)
    setShowSuggestionList(false)
    setValue("")
  }

  return (
    <div className='relative'>
      <form
        {...restProps}
        className={clsx("headerSearchBarCotnainer", className)}
      >
        <label htmlFor='header-search-bar'>
          <input
            type='text'
            name='query'
            // eslint-disable-next-line jsx-a11y/tabindex-no-positive
            tabIndex='1'
            onBlur={() => setTimeout(() => setShowSuggestionList(false), 200)}
            onFocus={() => setShowSuggestionList(suggestionData?.length)}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            autoCorrect='off'
            autofill='off'
            autoComplete='off'
            spellCheck='false'
            id='header-search-bar'
            placeholder='Search for a movie, tv show, person......'
            className='rounded'
          />
        </label>
        <label className='searchIconContainer'>
          <FaSearch id='submit-search' />
        </label>
      </form>
      {showSuggestionList && (
        <ul className='suggestionsList'>
          {suggestionData?.map((data) => (
            <li
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role='button'
              onClick={() => navigateToSinglePage(data.media_type, data.id)}
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
  )
}

HeaderSearchBar.propTypes = {
  className: PropTypes.string
}

HeaderSearchBar.defaultProps = {
  className: ""
}

export default HeaderSearchBar
