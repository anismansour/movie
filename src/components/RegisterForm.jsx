import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Joi from "joi-browser";

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

 

  validate = () => {
    const { data } = this.state;
    const errors = {};
    if (data.name.trim() === "") errors.name = "name is required";
    if (data.password.trim() === "") errors.password = "password is required";
    if (data.email.trim() === "") errors.email = "email is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  HandleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    // console.log(errors);
    this.setState({ errors: errors || {} });
    //added errors ||{} otherwise errors become null
    if (errors) return;
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
                  {this.state.errors.name && (
                    <div className="alert alert-danger">
                      {this.state.errors.name}
                    </div>
                  )}
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
                  {this.state.errors.email && (
                    <div className="alert alert-danger">
                      {this.state.errors.email}
                    </div>
                  )}

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
                {this.state.errors.password && (
                  <div className="alert alert-danger">
                    {this.state.errors.password}
                  </div>
                )}
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
