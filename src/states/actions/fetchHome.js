import http from "../../helpers/http";

import {
  FETCH_HOME_CONTENT,
  FETCH_HOME_CONTENT_SUCCESS,
  FETCH_HOME_CONTENT_FAILED
} from "./actionTypes";

export const fetchHome = () => (dispatch) => {
  dispatch({
    type: FETCH_HOME_CONTENT,
    payload: null
  });
  http
    .get("home")
    .then(({ data }) => {
      dispatch({
        type: FETCH_HOME_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_HOME_CONTENT_FAILED,
        payload: error
      });
    });
};
