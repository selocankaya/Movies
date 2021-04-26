import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: 'Intersteller',
        rating: 8.6,
        overview: 'lorem lorem lorem',
        imageURL:
          'https://www.themoviedb.org/t/p/original/y1TKElkgWOl90iFik3GHlgJdphm.jpg',
      },
      {
        id: 2,
        name: 'Saving Private',
        rating: 8.9,
        overview: 'lorem lorem lorem',
        imageURL:
          'https://www.themoviedb.org/t/p/original/7gvDbspcNt3X4sjFO8Tq3PNwhb4.jpg',
      },
      {
        id: 3,
        name: 'The Shawshank Redemption',
        rating: 8.9,
        overview: 'lorem lorem lorem',
        imageURL:
          'https://www.themoviedb.org/t/p/original/eOZrLKszfq8VOqPUxOVlSLwpY5W.jpg',
      },
    ],
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar />
          </div>
        </div>
        <MovieList
          movies={this.state.movies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;
