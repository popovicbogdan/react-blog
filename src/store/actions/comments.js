import { GET_COMMENTS, ADD_COMMENT } from "./types";
import ApiHelper from "./ApiHelper";

export const getComments = () => dispatch => {
  const d = ApiHelper.get("comments");

  if (d) {
    d.then(resp => dispatch({ type: GET_COMMENTS, payload: resp.data })).catch(
      err => console.log(err)
    );
  }
};

export const addComment = comment => dispatch => {
  const d = ApiHelper.post("comments/", comment);

  if (d) {
    d.then(resp => dispatch({ type: ADD_COMMENT, payload: resp.data })).catch(
      err => {
        console.log(err);
      }
    );
  }
};
