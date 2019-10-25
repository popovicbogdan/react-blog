import React from "react";
import { connect } from "react-redux";
import Comments from "./Comments.js";
import CommentForm from "./CommentForm";

class Article extends React.Component {
  componentDidMount() {}
  render() {
    const { post } = this.props;
    console.log(post);

    return (
      <div>
        <div className="container">
          <div className="card single-art">
            <h1>{post.title}</h1>
            <p>{post.text}</p>
            <small className="time">
              posted: {post.created_at.slice(0, 10)}
            </small>
          </div>
        </div>

        <Comments post_id={this.props.match.params.id} />
        <CommentForm post_id={this.props.match.params.id} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  console.log(id, state.posts.posts.find(post => post.id === id));
  return {
    post: state.posts.posts.find(post => post.id === id)
  };
};
export default connect(mapStateToProps)(Article);
