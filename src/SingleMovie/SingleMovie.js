import React, { Component } from 'react'
import MovieInfo from './MovieInfo'
import { fetchData } from '../APIcalls'
import { Link } from 'react-router-dom'
import './SingleMovie.css'

class SingleMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleMovie: null
    }
  }

  componentDidMount() {
    fetchData(`movies/${this.props.movieID}`)
      .then(movie => this.setState({ singleMovie: new MovieInfo(movie.movie)}))
      .catch(error => this.setState({ error: error}))
  }

  render() {
    return (
      <>
      {this.state.error && <h2 className="error">{'Sorry...Server Error 🤷‍♂️'} </h2>}
      {this.state.singleMovie !== null && 
      <div className="single-movie-container"
      style={{ backgroundImage: `url(${this.state.singleMovie.background}), url(https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg)` }}>
        <div className="movie-information">
          <div className="left-side">
            <h2>{this.state.singleMovietitle}</h2>
            <img className= "movie-info-poster" src={this.state.singleMovie.poster} alt="movie poster"></img>
            <Link to={'/'} className='back-btn'>GO BACK</Link>
          </div>
          <div className="right-side">
            <h4 className="movie-overview">{this.state.singleMovie.overview}</h4>
            <h5>{this.state.singleMovie.tagline}</h5>
            <p>{this.state.singleMovie.releaseDate}</p>
            <p>{this.state.singleMovie.genres}</p>
            <p>{this.state.singleMovie.runTime}</p>
            <p>{this.state.singleMovie.rating}</p>
            <p>{this.state.singleMovie.budget}</p>
            <p>{this.state.singleMovie.revenue}</p>
          </div>
        </div>
      </div>
      }
      </>
    ) 
  }
}

export default SingleMovie
