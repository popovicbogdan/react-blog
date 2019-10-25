import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignupPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confpassword: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { username, email, password, confpassword } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confpassword"
              id="confirm-password"
              value={confpassword}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Signup</button>
          <p className="redir">
            Already have an account?
            <Link to="/login" className="redir-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignupPage;
