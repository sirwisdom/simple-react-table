import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handlDelete = movie => {
    const newMovie = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: newMovie });
  };
  getMovieNumber() {
    if (this.state.movies.length === 0)
      return <h1 className="text-warning text-capitalize">No more movies</h1>;
  }
  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.length ? (
          <div>
            <h4>Showing {movies.length} number of Movies</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {movies.map(movie => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handlDelete(movie)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          this.getMovieNumber()
        )}
      </>
    );
  }
}

export default Movies;
