import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { register } from "../store/actions/auth";
import { connect } from "react-redux";

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
    if (this.state.password === this.state.confpassword) {
      const { username, email, password } = this.state;
      this.props.register(username, email, password);
    } else {
      alert("passwords are not matching please try again");
    }
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confpassword"
              id="confirm-password"
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(SignupPage);
