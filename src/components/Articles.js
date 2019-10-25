import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../store/actions/posts.js";
import { ReactComponent as Snow } from "../static/snowflake.svg";
import { Link } from "react-router-dom";
// import Article from "./Article";

export class Articles extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    this.props.getPosts();
    console.log(this.props);
    const { author, title, text, created_at } = this.props.posts;
    const posts = { author, title, text, created_at };
    this.setState({
      posts: posts
    });
  }

  render() {
    const postList = this.props.posts.length ? (
      this.props.posts.map(post => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 art" key={post.id}>
            <Link to={"/articles/" + post.id}>
              <div className="card">
                <div className="card-img-top art-thumb">
                  <Snow className="snowflake" />{" "}
                </div>
                <div className="card-title cardtext">{post.title}</div>
                <div className="card-body cardtext">
                  {post.text.slice(0, 80)}...
                </div>
              </div>
            </Link>
          </div>
        );
      })
    ) : (
      <p>There are no articles to show now...</p>
    );
    return (
      <div className="container" id="articlescont">
        <div className="row">{postList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};
export default connect(
  mapStateToProps,
  { getPosts }
)(Articles);
