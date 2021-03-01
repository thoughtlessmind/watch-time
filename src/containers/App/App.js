import Header from "components/Header/Header"

const App = (props) => {
  const a = "a"
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default App
