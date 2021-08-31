import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import SingleMovie from '../SingleMovie/SingleMovie'
import { fetchData } from '../APIcalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: null,
      singleMovie: null
    }
  }

  componentDidMount() {
    fetchData('movies')
    .then(movies => this.setState({ movies }))
    .catch(error => this.setState({ error: error}))
  }

  chooseMovie = (id) => {
    fetchData(`movies/${id}`)
    .then(singleMovie => this.setState({ singleMovie }))
    .catch(error => this.setState({ error: error}))
  }

  clearMovie = () => {
    this.setState({ singleMovie: null })
  }

  render() {
    return(
      <main>
        <h1>🍅 🤢 Rancid Tomatillos 🎥</h1>
        {(this.state.error) && <h2>Sorry...Server Error 🤷‍♂️</h2>}
        {(this.state.singleMovie !== null) &&
          <SingleMovie singleMovie={this.state.singleMovie.movie} clearMovie={this.clearMovie}/>}
        {(this.state.singleMovie === null) && (this.state.movies) &&
          <Movies movies={this.state.movies} chooseMovie={this.chooseMovie}/>}
        <div className="footer">
          <h4>Turing School of Software Design - Module 3 Paired Project. All rights not reserved 2021</h4>
        </div>
      </main>
    )
  }
}

export default App
