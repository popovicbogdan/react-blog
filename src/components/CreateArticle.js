import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../store/actions/posts";

export class CreateArticle extends Component {
  state = {
    author: "",
    title: "",
    text: ""
  };
  componentDidMount() {
    console.log(this.props);
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    // const { author, title, text } = this.state;
    // const post = { author, title, text };
    this.props.addPost(this.state);
    console.log(this.state);
    // this.props.history.push("/");
  };
  render() {
    const { author, title, text } = this.state;
    return (
      <div className="container">
        <form
          className="form"
          method="post"
          action="/"
          onSubmit={this.handleSubmit}
        >
          <div className="input-field">
            <label htmlFor="author">Enter your name please</label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="title">Enter your title please</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">Enter the text of your article please</label>
            <textarea
              name="text"
              id="text"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(CreateArticle);
