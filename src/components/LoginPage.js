import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";

export class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
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
              name="username"
              id="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
          <p className="redir">
            Don't have an account?
            <Link to="/signup" className="redir-link">
              Register
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
  { login }
)(LoginPage);
