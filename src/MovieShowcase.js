import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);

    // return movieData.map(movie => <MovieCard 
    //   title={movie.title}
    //   IMDBRating={movie.IMDBRating}
    //   genres={movie.genres}
    //   title={movie.poster}
    //   />
    // )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
