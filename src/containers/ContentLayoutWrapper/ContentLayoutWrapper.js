import clsx from "clsx"
import PropTypes from "prop-types"

const ContentLayoutWrapper = (props) => {
  const { children, className = "", ...restProps } = props
  return (
    <div
      className={clsx(className, "md:px-12 sm:px-4 px-2  pt-4")}
      {...restProps}
    >
      {children}
    </div>
  )
}

ContentLayoutWrapper.propTypes = {
  children: PropTypes.number.isRequired,
  className: PropTypes.string
}

ContentLayoutWrapper.defaultProps = {
  className: ""
}

export default ContentLayoutWrapper
