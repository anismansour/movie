import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Joi from "joi";

export class RegisterForm extends Component {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("password"),
    name: Joi.string()
      .required()
      .min(5)
      .label("name")
  };

  HandleSubmit = e => {
    e.preventDefault();
    console.log("register submit working");
  };
  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form onSubmit={this.HandleSubmit}>
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    value={this.state.data.name}
                    onChange={this.handleChange}
                    autoFocus
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="name"
                  />
                  <MDBInput
                    value={this.state.data.email}
                    onChange={this.handleChange}
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email"
                  />

                  <MDBInput
                    value={this.state.data.password}
                    onChange={this.handleChange}
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="password"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn type="submit" className="btn btn-primary">
                    register
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>{" "}
      </div>
    );
  }
}

export default RegisterForm;
