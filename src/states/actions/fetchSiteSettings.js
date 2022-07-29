import http from "../../helpers/http";

import {
  FETCH_SITE_SETTINGS,
  FETCH_SITE_SETTINGS_SUCCESS,
  FETCH_SITE_SETTINGS_FAILED
} from "./actionTypes";

export const fetchSiteSettings = () => (dispatch) => {
  dispatch({
    type: FETCH_SITE_SETTINGS,
    payload: null
  });
  http
    .get("site-settings")
    .then(({ data }) => {
      dispatch({
        type: FETCH_SITE_SETTINGS_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_SITE_SETTINGS_FAILED,
        payload: error
      });
    });
};
