import React, { Component } from 'react'
// import movieData from './movieData'
import Movies from './Movies'
import SingleMovie from './SingleMovie'
import { fetchData } from './APIcalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: '',
      singleMovie: ''
    }
  }

  componentDidMount() {
    fetchData('movies')
    .then(movies => this.setState({ movies }))
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
        {(this.state.movies) && <Movies movies={this.state.movies} />}
        {/* {(this.state.singleMovie !== '') && 
          <SingleMovie singleMovie={this.state.singleMovie} clearMovie={this.clearMovie}/>}
        {(this.state.singleMovie === '') && 
          <Movies movies={this.state.movies} chooseMovie={this.chooseMovie}/>} */}
        
      </main>
    )
  }
}

export default App