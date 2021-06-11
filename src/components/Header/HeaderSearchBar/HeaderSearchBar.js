import clsx from "clsx"
import useDebouncedEffect from "hooks"
import PropTypes from "prop-types"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import "./headerSearchBar.scss"

const HeaderSearchBar = (props) => {
  const { className = "", ...restProps } = props

  const [value, setValue] = useState("")

  useDebouncedEffect(() => console.log(value), [value], 500)
  return (
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
          onChange={(e) => setValue(e.target.value)}
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
  )
}

HeaderSearchBar.propTypes = {
  className: PropTypes.string
}

HeaderSearchBar.defaultProps = {
  className: ""
}

export default HeaderSearchBar
