import React, { Component } from 'react'
import movieData from './movieData'
import Card from './Card'
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
        {console.log(this.state.movies.movieData)}
        <Card />
      </main>
    )
  }
}

export default App