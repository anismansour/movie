import React, { Component } from "react";
import Like from "./common/like";

export class MoviesTable extends Component {
  render() {
    const { movies, onDelete, onLike, onSort } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => onSort("title")}>title</th>
              <th onClick={() => onSort("genre.name")}>genre</th>
              <th onClick={() => onSort("numberInStock")}>stock</th>
              <th onClick={() => onSort("dailyRentalRate")}>rate</th>
              <th></th>
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
                  {" "}
                  <Like onClick={() => onLike(movie)} liked={movie.liked} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesTable;
