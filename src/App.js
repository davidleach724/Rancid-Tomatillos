import React, { Component } from 'react'
import movieData from './movieData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }


  render() {
    return(
      <h1>Test {console.log(movieData)}</h1>
    )
  }
}

export default App