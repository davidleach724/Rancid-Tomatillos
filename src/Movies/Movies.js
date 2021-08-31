import React from 'react'
import Card from '../Card/Card'
import './Movies.css'

const Movies = ({ movies, chooseMovie }) => {
  const movieCards = movies.movies.map(movie => {
    return (
      <Card
        moviePoster={movie.poster_path}
        movieRating={parseFloat(movie.average_rating).toFixed(2)}
        movieTitle={movie.title}
        movieID={movie.id}
        key={movie.id}
        chooseMovie={chooseMovie}
      />
    )
  })

 

  return (
    <div className='movies-container'>
      {movieCards}
    </div>
  )
}

export default Movies