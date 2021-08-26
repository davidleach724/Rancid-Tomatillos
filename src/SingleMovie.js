import react from 'react'
import './SingleMovie.css'

const SingleMovie = ({ singleMovie, clearMovie }) => {
  return (
    <div className="single-movie-container" 
    style={{ backgroundImage: `url(${singleMovie.backdrop_path})` }}>
      <h2>{singleMovie.title}</h2>
      <p></p>
      <button onClick={() => clearMovie()}>GO BACK</button>
    </div>
  )
}

export default SingleMovie