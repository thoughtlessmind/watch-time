import Header from "components/Header/Header"
import PropTypes from "prop-types"

const App = (props) => {
  const { children } = props
  return (
    <div>
      <Header />
      <div className='md:px-12 sm:px-4 mt-16 pt-4'>{children}</div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App
