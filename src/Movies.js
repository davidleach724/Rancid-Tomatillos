import React from 'react'
import Card from './Card'
import './Movies.css'

const Movies = (movies) => {
  console.log('console log', movies.movies.movieData.movies)
  const movieCards = movies.movies.movieData.movies.map(movie => {
    return (
      <Card
        moviePoster={movie.poster_path}
        movieRating={movie.average_rating}
        movieTitle={movie.title}
        movieID={movie.id}
        key={movie.id}
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