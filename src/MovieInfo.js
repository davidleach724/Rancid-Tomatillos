var dayjs = require('dayjs')

class MovieInfo {
  constructor (movie) {
    this.movie = movie
    this.background = movie.backdrop_path
    this.title = movie.title
    this.poster = movie.poster_path
    this.overview = movie.overview
    this.tagline = movie.tagline
    this.releaseDate = `Release Date: ${this.formatReleaseDate(movie.release_date)}`
    this.runTime = `Run Time: ${movie.runtime} minutes`
    this.genres = `Genres: ${this.formatGenres(movie.genres)}`
    this.rating = `Average Rating: ${parseFloat(movie.average_rating).toFixed(2)}`
    this.budget = `Budget: ${this.formatCost(movie.budget)}`
    this.revenue = `Revenue: ${this.formatCost(movie.revenue)}`
  }

  formatReleaseDate(releaseDate) {
    let date = dayjs(releaseDate)
    return date.format("MMMM D YYYY")
  }

  formatGenres(genres) {
    return genres.join(', ')
  }

  formatCost(cost) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(cost)
  }

}

export default MovieInfo