import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../store/actions/comments";

export class CommentForm extends Component {
  state = {
    name: "",
    text: "",
    post: this.props.post_id
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state);
    console.log(this.state);
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { name, text } = this.state;
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Comment text</label>
            <input
              type="text"
              name="text"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm);
