import React from 'react'
import Card from '../Card/Card'
import '../Movies/Movies.css'
import { Link } from 'react-router-dom'

const Movies = ({ movies, chooseMovie }) => {
  const movieCards = movies.movies.map(movie => {
    return (
      <Link to={`/${movie.id}`}>
        <Card
          moviePoster={movie.poster_path}
          movieRating={parseFloat(movie.average_rating).toFixed(2)}
          movieTitle={movie.title}
          movieID={movie.id}
          key={movie.id}
          chooseMovie={chooseMovie}
          />
      </Link>
    )
  })



  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies
