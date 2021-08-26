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
    this.setState({ singleMovie: chosenMovie })
  }

  clearMovie = () => {
    this.setState({ singleMovie: '' })
  }

  render() {
    return(
      <main>
        <h1>🍅 🤢 Rancid Tomatillos</h1>
        {(this.state.singleMovie != '') && 
          <SingleMovie singleMovie={this.singleMovie} clearMovie={this.clearMovie}/>}
        {(this.state.singleMovie === '') && 
          <Movies movies={this.state.movies} chooseMovie={this.chooseMovie}/>}
        
      </main>
    )
  }
}

export default App