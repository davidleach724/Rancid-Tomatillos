import React, { Component } from 'react'
import Movies from '../Movies/Movies'
import SingleMovie from '../SingleMovie/SingleMovie'
import { fetchData } from '../APIcalls'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: null
    }
  }

  componentDidMount() {
     fetchData(`movies`)
    .then(movies => this.setState({ movies }))
    .catch(error => this.setState({ error: error}))
  }

  render() {
    return(
      <main>
        <h1>🍅 🤢 Rancid Tomatillos 🎥</h1>

        {this.state.error && <h2>Sorry...Server Error 🤷‍♂️</h2>}
        
        {this.state.movies &&
          <Route exact path="/" render={() => 
            <Movies movies={this.state.movies}/>} 
          />}

          <Route exact path="/:id" render={({ match }) => {
            return <SingleMovie movieID={parseInt(match.params.id)}/>} } />
          

        <div className="footer">
          <h4>Turing School of Software Design - Module 3 Paired Project. All rights not reserved 2021</h4>
        </div>
      </main>
    )
  }
}

export default App
