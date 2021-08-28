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
          <h4 className="movie-overview">{singleMovie.overview}</h4>
          <h5>{singleMovie.tagline}</h5>
          <p>Release Date: {singleMovie.release_date}</p>
          <p>Run Time: {singleMovie.runtime} minutes</p>
          <p>Genres: {singleMovie.genres}</p>
          <p>Avg. Rating: {parseFloat(singleMovie.average_rating).toFixed(2)}</p>
          <p>Budget: {singleMovie.budget}</p>
          <p>Revenue: {singleMovie.revenue}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie