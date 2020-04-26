import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
// import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "../services/fakeMovieService";

export class AddMovie extends Component {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    genres: [],
    errors: {}
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  HandleSubmit = e => {
    e.preventDefault();
    console.log("added movie");
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form onSubmit={this.HandleSubmit}>
                <p className="h5 text-center mb-4">ADD MOVIE</p>
                <div className="grey-text">
                  <MDBInput
                    value={this.state.data.title}
                    onChange={this.handleChange}
                    autoFocus
                    label="Title"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="title"
                  />
                  {/* <MDBInput
                    value={this.state.data.genre}
                    onChange={this.handleChange}
                    autoFocus
                    label="Genre"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="genre"
                  /> */}

                  <MDBInput
                    value={this.state.data.numberInStock}
                    onChange={this.handleChange}
                    label="Number in stock"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="numberInStock"
                  />

                  <MDBInput
                    value={this.state.data.dailyRentalRate}
                    onChange={this.handleChange}
                    label="rate"
                    group
                    type="text"
                    validate
                    name="dailyRentalRate"
                  />
                </div>

                <div className="text-center">
                  <MDBBtn type="submit" className="btn btn-primary">
                    ADD MOVIE
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AddMovie;
