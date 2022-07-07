import http from "../../helpers/http";
import * as helpers from "../../helpers/helpers";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/siteSettings";
import Text from "../../components/common/Text";

import {
  FETCH_JOBS_CONTENT,
  FETCH_JOBS_CONTENT_SUCCESS,
  FETCH_JOBS_CONTENT_FAILED,
  FETCH_JOBS_SEARCH,
  FETCH_JOBS_SEARCH_SUCCESS,
  FETCH_JOBS_SEARCH_FAILED,
  SAVE_JOB,
  SAVE_JOB_SUCCESS,
  SAVE_JOB_FAILED
} from "./actionTypes";

export const fetchJobs = () => (dispatch) => {
  dispatch({
    type: FETCH_JOBS_CONTENT,
    payload: null
  });
  http
    .post(
      "jobs",
      helpers.doObjToFormData({ authToken: localStorage.getItem("authToken") })
    )
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
  post = { ...post, authToken: localStorage.getItem("authToken") };
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

export const saveJobAction = (formData) => (dispatch) => {
  let jobId = formData.id;
  if (localStorage.getItem("authToken")) {
    dispatch({
      type: SAVE_JOB,
      payload: null
    });
    formData = { ...formData, authToken: localStorage.getItem("authToken") };
    http
      .post("save-job", helpers.doObjToFormData(formData))
      .then(({ data }) => {
        if (data.status) {
          data = { ...data, id: jobId };
          toast.success("Job Saved Successfully.", TOAST_SETTINGS);
          dispatch({
            type: SAVE_JOB_SUCCESS,
            payload: data
          });
        } else {
          dispatch({
            type: SAVE_JOB_FAILED,
            payload: null
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: SAVE_JOB_FAILED,
          payload: error
        });
      });
  } else {
    toast.error("Please signin first to save this job post.", TOAST_SETTINGS);
  }
};
