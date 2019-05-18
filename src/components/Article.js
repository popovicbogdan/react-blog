import React from "react";
import { connect } from "react-redux";

class Article extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const post = this.props.post;
    return (
      <div className="container">
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  console.log(id, state.posts.posts.find(post => post.id === id));
  return {
    post: state.posts.posts.find(post => post.id == id)
  };
};
export default connect(mapStateToProps)(Article);
