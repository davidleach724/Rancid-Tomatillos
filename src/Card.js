import react from 'react'
import './Card.css'

const Card = ({moviePoster, movieRating, movieTitle, movieID}) => {
  return (
    <div>
      <div className="top-card">
        <img src={moviePoster} height="60px"></img>
      </div>
      <div className="bottom-card">
        <h2>{movieTitle}</h2>
        <h3>{movieRating}</h3>
      </div>
    </div>
  )
}



export default Card