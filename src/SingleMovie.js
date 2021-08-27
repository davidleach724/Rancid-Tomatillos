import react from 'react'
import './SingleMovie.css'

const SingleMovie = ({ singleMovie, clearMovie }) => {
  return (
    <div className="single-movie-container" 
    style={{ backgroundImage: `url(${singleMovie.backdrop_path}), url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg)` }}>
      <div className="left-side">
        <h2>{singleMovie.title}</h2>

      </div>
      <div className="right-side">
        
      </div>
      <button onClick={() => clearMovie()}>GO BACK</button>
    </div>
  )
}

export default SingleMovie