import http from "../../helpers/http";

import {
  FETCH_TERMS_AND_CONDITIONS_CONTENT,
  FETCH_TERMS_AND_CONDITIONS_CONTENT_SUCCESS,
  FETCH_TERMS_AND_CONDITIONS_CONTENT_FAILED
} from "./actionTypes";

export const fetchTerms = () => (dispatch) => {
  dispatch({
    type: FETCH_TERMS_AND_CONDITIONS_CONTENT,
    payload: null
  });
  http
    .get("terms-and-conditions")
    .then(({ data }) => {
      dispatch({
        type: FETCH_TERMS_AND_CONDITIONS_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_TERMS_AND_CONDITIONS_CONTENT_FAILED,
        payload: error
      });
    });
};
