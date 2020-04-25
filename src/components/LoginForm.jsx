import React, { Component } from "react";

export class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
    // error: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit working");
  };
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              type="text"
              className="form-control"
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              type="text"
              className="form-control"
              name="password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
