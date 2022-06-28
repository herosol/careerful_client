import http from "../../helpers/http";
import httpBlob from "../../helpers/http-blob";
import * as helpers from "../../helpers/helpers";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/siteSettings";
import Text from "../../components/common/Text";

import {
  FETCH_VIDEO_INTERVIEW_CONTENT,
  FETCH_VIDEO_INTERVIEW_CONTENT_SUCCESS,
  FETCH_VIDEO_INTERVIEW_CONTENT_FAILED,
  SAVE_INTERVIEW_VIDEO,
  SAVE_INTERVIEW_VIDEO_SUCCESS,
  SAVE_INTERVIEW_VIDEO_FAILED
} from "./actionTypes";

export const fetchSignup = () => (dispatch) => {
  dispatch({
    type: FETCH_VIDEO_INTERVIEW_CONTENT,
    payload: null
  });
  http
    .get("video-interview")
    .then(({ data }) => {
      dispatch({
        type: FETCH_VIDEO_INTERVIEW_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_VIDEO_INTERVIEW_CONTENT_FAILED,
        payload: error
      });
    });
};

export const saveVideoStep = (formData) => (dispatch) => {
  //   console.log(formData);
  //   dispatch({
  //     type: SAVE_INTERVIEW_VIDEO,
  //     payload: null
  //   });
  httpBlob
    .post("save-interview-video", formData)
    .then(({ data }) => {
      if (data.status) {
        if (data.interview_session_id) {
          console.log(data.interview_session_id);
          localStorage.setItem(
            "interview_session_id",
            data.interview_session_id
          );
        }
        console.log(localStorage.getItem("interview_session_id"));
      }
      dispatch({
        type: SAVE_INTERVIEW_VIDEO_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: SAVE_INTERVIEW_VIDEO_FAILED,
        payload: error
      });
    });
};
export const finishInterview = (formData) => (dispatch) => {
  //   console.log(formData);
  //   dispatch({
  //     type: SAVE_INTERVIEW_VIDEO,
  //     payload: null
  //   });
  httpBlob
    .post("save-interview", helpers.doObjToFormData(formData))
    .then(({ data }) => {
      if (data.status) {
        localStorage.setItem("interview_session_id", "");
        console.log("Saved Successfully");
      }
      //   dispatch({
      //     type: SAVE_INTERVIEW_VIDEO_SUCCESS,
      //     payload: data
      //   });
    })
    .catch((error) => {
      dispatch({
        type: SAVE_INTERVIEW_VIDEO_FAILED,
        payload: error
      });
    });
};
