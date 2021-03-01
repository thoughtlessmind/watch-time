import { fetchTrending } from "appRedux/thunks/trending/actions"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrending())
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
