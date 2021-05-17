import Header from "components/Header/Header"
import MovieInfoDialog from "components/MovieInfoDialog"
import PropTypes from "prop-types"

const App = (props) => {
  const { children } = props
  return (
    <div className=' bg-gray-900'>
      <Header />
      <div className='md:px-12 sm:px-4 px-2 mt-16 pt-4'>{children}</div>
      <MovieInfoDialog />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
