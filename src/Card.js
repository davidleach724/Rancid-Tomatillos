import './Card.css'

const Card = ({moviePoster, movieRating, movieTitle, movieID, chooseMovie}) => {
  return (
    <div className="card-container" onClick={() => chooseMovie(movieID)}>
      <div className="top-card">
        <img src={moviePoster} className="movie-poster"></img>
      </div>
      <div className="bottom-card">
        <h2 className="poster-text">{movieTitle}</h2>
        <h3 className="poster-text">Rating: {movieRating}</h3>
      </div>
    </div>
  )
}



export default Card