import { combineReducers } from "redux";
import postsReducer from "./posts";
import authReducer from "./auth";
import commentsReducer from "./comments";

export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
  comments: commentsReducer
});
