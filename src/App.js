import React, { Component } from 'react'
import movieData from './movieData'
import Movies from './Movies'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: { movieData }
    }
  }

  render() {
    return(
      <main>
        <h1>Header Goes Here</h1>
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}

export default App