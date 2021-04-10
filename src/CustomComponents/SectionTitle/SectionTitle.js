import { FaChevronRight } from "react-icons/fa"
import PropTypes from "prop-types"
import "./sectionTitle.css"
import { Link } from "react-router-dom"

const SectionTitle = (props) => {
  const {
    title,
    arrow = false,
    subText = null,
    className = "",
    children,
    to,
    ...restProps
  } = props

  return (
    <LinkDecider
      to={to}
      className={`inline-block text-2xl cursor-pointer mb-2  ${className}`}
      {...restProps}
    >
      <span className='flex items-center gap-2 mainTitle'>
        <span className=' font-semibold'>{children}</span>
        {arrow && (
          <FaChevronRight className='text-xl opacity-95 duration-150' />
        )}
      </span>
      {subText && <span className='text-sm font-medium'>{subText}</span>}
    </LinkDecider>
  )
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  subText: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string
}

SectionTitle.defaultProps = {
  arrow: false,
  subText: null,
  className: "",
  to: null
}

export default SectionTitle

/**
 * Conditionally returns `<div>` or `<Link>` element base on `to` prop
 * @returns JSX ELemnt
 */
const LinkDecider = (props) => {
  const { to = null, children, ...rest } = props
  if (to) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    )
  }
  return <div {...rest}>{children}</div>
}

LinkDecider.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired
}

LinkDecider.defaultProps = {
  to: null
}
