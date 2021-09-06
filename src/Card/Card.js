import './Card.css'

const Card = ({moviePoster, movieRating, movieTitle }) => {
  return (
    <div className="card-container">
      <div className="top-card">
        <img src={moviePoster} className="movie-poster" alt={movieTitle + ' poster'}></img>
      </div>
      <div className="bottom-card">
        <h2 className="poster-text">{movieTitle}</h2>
      </div>
    </div>
  )
}



export default Card