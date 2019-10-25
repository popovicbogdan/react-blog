import { ADD_COMMENT, GET_COMMENTS } from "../actions/types";

const initState = {
  comments: []
};
export default function(state = initState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
}
