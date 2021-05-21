import Header from "components/Header/Header"
import MovieInfoDialog from "components/MovieInfoDialog"
import PropTypes from "prop-types"

const App = (props) => {
  const { children } = props
  return (
    <div className=' bg-gray-900'>
      <Header />
      <div className='mt-16'>{children}</div>
      <MovieInfoDialog />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
