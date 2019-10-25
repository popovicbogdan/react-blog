import React, { Component } from "react";
import { connect } from "react-redux";
import { getComments, addComment } from "../store/actions/comments";

export class Comments extends Component {
  componentWillMount() {
    this.props.getComments();
    console.log("Comments: ", this.state);
    console.log("Comments props: ", this.props);
  }
  render() {
    const commentList = this.props.comments.length ? (
      this.props.comments.map(comment => {
        return (
          <div className="container" key={comment.id}>
            <div className="comment card">
              <h2>{comment.name}</h2>
              <p>{comment.text}</p>
              <small className="time">
                posted: {comment.posted_at.slice(0, 10)}
              </small>
            </div>
          </div>
        );
      })
    ) : (
      <p>No comments for this post...</p>
    );
    return (
      <div className="container" id="comment">
        {commentList}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.post_id;
  console.log("OwnProps: ", ownProps);
  // state.comments.comments.filter(comment => {
  //   console.log(comment.post);
  // });

  return {
    comments: state.comments.comments.filter(comment => comment.post === id)
  };
};
export default connect(
  mapStateToProps,
  { getComments, addComment }
)(Comments);
