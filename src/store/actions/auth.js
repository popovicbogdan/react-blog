import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from "./types";
import ApiHelper from "./ApiHelper";

// Check TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  // get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //if token, add to headers config
  if (token) {
    console.log(token);

    config.headers["Authorization"] = `Token ${token}`;
  }

  const d = ApiHelper.get("auth/user", config);
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

  const d = ApiHelper.post("auth/login", body);

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
  // get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  //if token, add to headers config
  if (token) {
    console.log(token);

    config.headers["Authorization"] = `Token ${token}`;
  }

  const d = ApiHelper.get("auth/logout", null, config);
  console.log(d);

  if (d) {
    d.then(resp => {
      dispatch({ type: LOGOUT_SUCCESS, payload: resp.data });
    }).catch(err => console.log(err));
  }
};
