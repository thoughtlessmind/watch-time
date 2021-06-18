import PropTypes from "prop-types"
import clsx from "clsx"
import tmdbContants from "constants/tmdbContants"
import { Link } from "react-router-dom"

const MiniAvatarCard = (props) => {
  const { title, subtitle, className, profilePic, id } = props
  return (
    <div className={clsx("flex shadow-sm rounded-md bg-white", className)}>
      <img
        src={`${tmdbContants.profilePath}${profilePic}`}
        alt={title}
        className='flex-shrink-0 flex items-center justify-center w-16 h-24 text-xs font-medium rounded-l-md'
      />
      <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200  rounded-r-md truncate'>
        <div className='flex-1 px-4 py-2 text-sm truncate'>
          <Link
            to={`/people/${id}`}
            className='text-gray-900 font-medium hover:text-gray-600'
          >
            {title}
          </Link>
          <p className='text-gray-500 mt-1'>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

MiniAvatarCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  profilePic: PropTypes.string,
  id: PropTypes.number
}

MiniAvatarCard.defaultProps = {
  subtitle: "",
  className: "",
  profilePic: "",
  id: null
}

export default MiniAvatarCard
