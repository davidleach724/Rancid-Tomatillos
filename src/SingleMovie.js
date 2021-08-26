import react from 'react'
import './SingleMovie.css'

const SingleMovie = ({ singleMovie, clearMovie }) => {
  return (
    <div>
      <h1>Single Movie Right Here Yes Sir</h1>
      <button onClick={() => clearMovie()}>GO BACK</button>
    </div>
  )
}

export default SingleMovie