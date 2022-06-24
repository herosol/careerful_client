import http from "../../helpers/http";
import * as helpers from "../../helpers/helpers";

import {
  FETCH_JOBS_CONTENT,
  FETCH_JOBS_CONTENT_SUCCESS,
  FETCH_JOBS_CONTENT_FAILED,
  FETCH_JOBS_SEARCH,
  FETCH_JOBS_SEARCH_SUCCESS,
  FETCH_JOBS_SEARCH_FAILED
} from "./actionTypes";

export const fetchJobs = () => (dispatch) => {
  dispatch({
    type: FETCH_JOBS_CONTENT,
    payload: null
  });
  http
    .get("jobs")
    .then(({ data }) => {
      dispatch({
        type: FETCH_JOBS_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_JOBS_CONTENT_FAILED,
        payload: error
      });
    });
};

export const searchJobsData = (post) => (dispatch) => {
  dispatch({
    type: FETCH_JOBS_SEARCH,
    payload: null
  });
  http
    .post("fetch-jobs-data", helpers.doObjToFormData(post))
    .then(({ data }) => {
      dispatch({
        type: FETCH_JOBS_SEARCH_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_JOBS_SEARCH_FAILED,
        payload: error
      });
    });
};
