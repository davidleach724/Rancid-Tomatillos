import React, { Component } from 'react'
import movieData from './movieData'
import Movies from './Movies'
import SingleMovie from './SingleMovie'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: { movieData },
      singleMovie: []
    }
  }

  chooseMovie = (id) => {
    const chosenMovie = this.state.movies.movieData.find(movie => movie.id === id)
    this.setState({ singleMovie: [chosenMovie]})
  }

  render() {
    return(
      <main>
        <h1>🍅 🤢 Rancid Tomatillos</h1>
        {(this.state.singleMovie.length > 1) && 
          <SingleMovie {...this.state.singleMovie}/>}
        {(this.state.singleMovie.length < 1) && 
          <Movies movies={this.state.movies} chooseMovie={this.chooseMovie}/>}
        
      </main>
    )
  }
}

export default App