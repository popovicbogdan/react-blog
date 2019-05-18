// import axios from "axios";
import { GET_POSTS, ADD_POST } from "../actions/types";
import ApiHelper from "./ApiHelper";

export const getPosts = () => dispatch => {
  const d = ApiHelper.get("posts/");
  if (d) {
    d.then(resp => dispatch({ type: GET_POSTS, payload: resp.data })).catch(
      err => console.log(err)
    );
  }
};
export const addPost = article => dispatch => {
  const d = ApiHelper.post("posts/", article);

  if (d) {
    d.then(resp => dispatch({ type: ADD_POST, payload: resp.data })).catch(
      err => console.log(err)
    );
  }
};
