import React, { Component } from 'react'
import movieData from './movieData'
import Movies from './Movies'
import SingleMovie from './SingleMovie'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: { movieData },
      singleMovie: ''
    }
  }

  chooseMovie = (id) => {
    const chosenMovie = this.state.movies.movieData.movies.find(movie => movie.id === id)
    this.state.singleMovie = chosenMovie
    console.log(this.state.singleMovie)
  }

  render() {
    return(
      <main>
        <h1>🍅 🤢 Rancid Tomatillos</h1>
        {(this.state.singleMovie) && <h1>Heeey</h1>}
        {(!this.state.singleMovie) && 
          <Movies movies={this.state.movies} chooseMovie={this.chooseMovie}/>}
        
      </main>
    )
  }
}

export default App