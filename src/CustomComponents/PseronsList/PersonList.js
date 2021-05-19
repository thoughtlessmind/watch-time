import PropTypes from "prop-types"

const PersonList = (props) => {
  const { personsArr = [], maxLimit = 8 } = props
  return (
    <ul className='mx-auto  grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-5xl xl:grid-cols-6'>
      {personsArr.slice(0, 8)?.map((cast) => (
        <li
          key={cast.name}
          className='rounded overflow-hidden bg-opacity-20 bg-white'
        >
          <div className='space-y-4'>
            <img
              className='w-full h-auto'
              src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
              alt=''
            />
            <div className='space-y-2 mx-auto h-20 w-20 lg:w-24 lg:h-24'>
              <div className='font-medium lg:text-sm'>
                <h3 className='tex-sm text-gray-200'>{cast.name}</h3>
                <p className='text-gray-300 text-xs'>{cast.character}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

PersonList.propTypes = {
  personsArr: PropTypes.arrayOf(Object).isRequired,
  maxLimit: PropTypes.number
}

PersonList.defaultProps = {
  maxLimit: 8
}

export default PersonList
