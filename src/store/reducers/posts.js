import { GET_POSTS, ADD_POST } from "../actions/types";

const initState = {
  posts: []
};
export default function(state = initState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
}
