import react from 'react'
import './SingleMovie.css'

const SingleMovie = ({ singleMovie, clearMovie }) => {
  return (
    <div className="single-movie-container" 
    style={{ backgroundImage: `url(${singleMovie.backdrop_path}), url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg)` }}>
      <div className="movie-information">
        <div className="left-side">
          <h2>{singleMovie.title}</h2>
          <img className= "movie-info-poster" src={singleMovie.poster_path}></img>
          <button onClick={() => clearMovie()}>GO BACK</button>
        </div>
        <div className="right-side">
          <h4>"Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!"</h4>
          <h5>"It's a movie!"</h5>
          <p>Release Date: </p>
          <p>Run Time: </p>
          <p>Genres: </p>
          <p>Avg. Rating: </p>
          <p>Budget: </p>
          <p>Revenue: </p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie