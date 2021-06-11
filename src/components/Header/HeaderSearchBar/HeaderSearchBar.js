import clsx from "clsx"
import PropTypes from "prop-types"
import { FaSearch } from "react-icons/fa"
import "./headerSearchBar.scss"

const HeaderSearchBar = (props) => {
  const { className = "", ...restProps } = props
  return (
    <form className={clsx("headerSearchBarCotnainer", className)}>
      <label htmlFor='header-search-bar'>
        <input
          type='text'
          name='query'
          // eslint-disable-next-line jsx-a11y/tabindex-no-positive
          tabIndex='1'
          autoCorrect='off'
          autofill='off'
          autoComplete='off'
          spellCheck='false'
          id='header-search-bar'
          placeholder='Search for a movie, tv show, person......'
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
