import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS
} from "./types";
import ApiHelper from "./ApiHelper";

// Check TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  const d = ApiHelper.get("user", null, tokenHeaders(getState));
  console.log(d);

  if (d) {
    d.then(resp => {
      dispatch({ type: USER_LOADED, payload: resp.data });
    }).catch(err =>
      dispatch({
        type: AUTH_ERROR
      })
    );
  }
};

export const login = (username, password) => dispatch => {
  // Request Body
  const body = JSON.stringify({ username, password });

  //Headers
  const initHeaders = {
    "Content-type": "application/json"
  };

  const d = ApiHelper.post("login", body, initHeaders);

  if (d) {
    d.then(resp => {
      dispatch({ type: LOGIN_SUCCESS, payload: resp.data });
    }).catch(err =>
      dispatch({
        type: LOGIN_FAIL
      })
    );
  }
};
export const logout = () => (dispatch, getState) => {
  const d = ApiHelper.post("logout/", null, tokenHeaders(getState));
  console.log(d);

  if (d) {
    d.then(resp => {
      dispatch({ type: LOGOUT_SUCCESS, payload: resp.data });
    }).catch(err => console.log(err));
  }
};

export const register = (username, email, password) => dispatch => {
  // Request body
  const body = JSON.stringify({ username, email, password });

  const initHeaders = {
    "Content-type": "application/json"
  };

  const d = ApiHelper.post("register", body, initHeaders);

  if (d) {
    d.then(resp => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: resp.data
      });
    }).catch(err => console.log(err));
  }
};

// get the headers
const tokenHeaders = getState => {
  // get token from state
  const token = getState().auth.token;

  // Headers
  const headers = {
    "Content-type": "application/json"
  };

  //if token, add to headers
  if (token) {
    console.log(token);

    headers["Authorization"] = `Token ${token}`;
  }
  return headers;
};
