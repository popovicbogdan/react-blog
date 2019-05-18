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
            <label>Enter your name please</label>
            <input
              type="text"
              name="author"
              id=""
              value={author}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label>Enter your title please</label>
            <input
              type="text"
              name="title"
              id=""
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label>Enter the text of your article please</label>
            <textarea name="text" value={text} onChange={this.handleChange} />
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
