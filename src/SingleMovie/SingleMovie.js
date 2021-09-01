import MovieInfo from './MovieInfo'
import { Link } from 'react-router-dom'
import './SingleMovie.css'

const SingleMovie = ({ singleMovie, clearMovie }) => {
  const movie = new MovieInfo(singleMovie)

  return (
    <div className="single-movie-container"
    style={{ backgroundImage: `url(${movie.background}), url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg)` }}>
      <div className="movie-information">
        <div className="left-side">
          <h2>{movie.title}</h2>
          <img className= "movie-info-poster" src={movie.poster} alt="movie poster"></img>
          <Link to={'/'} className='back-btn'>GO BACK</Link>
        </div>
        <div className="right-side">
          <h4 className="movie-overview">{movie.overview}</h4>
          <h5>{singleMovie.tagline}</h5>
          <p>{movie.releaseDate}</p>
          <p>{movie.genres}</p>
          <p>{movie.runTime}</p>
          <p>{movie.rating}</p>
          <p>{movie.budget}</p>
          <p>{movie.revenue}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
