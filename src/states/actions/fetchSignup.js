import http from "../../helpers/http";
import * as helpers from "../../helpers/helpers";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/siteSettings";
import Text from "../../components/common/Text";

import {
  FETCH_SIGN_UP_CONTENT,
  FETCH_SIGN_UP_CONTENT_SUCCESS,
  FETCH_SIGN_UP_CONTENT_FAILED,
  CREATE_ACCOUNT_MESSAGE,
  CREATE_ACCOUNT_MESSAGE_SUCCESS,
  CREATE_ACCOUNT_MESSAGE_FAILED
} from "./actionTypes";

export const fetchSignup = () => (dispatch) => {
  dispatch({
    type: FETCH_SIGN_UP_CONTENT,
    payload: null
  });
  http
    .get("signup")
    .then(({ data }) => {
      dispatch({
        type: FETCH_SIGN_UP_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_SIGN_UP_CONTENT_FAILED,
        payload: error
      });
    });
};

export const createAccount = (formData) => (dispatch) => {
  console.log(formData);
  return false;
  dispatch({
    type: CREATE_ACCOUNT_MESSAGE,
    payload: null
  });
  http
    .post("auth/create-account", helpers.doObjToFormData(formData))
    .then(({ data }) => {
      if (data.validationErrors) {
        toast.error(
          <Text string={data.validationErrors} parse={true} />,
          TOAST_SETTINGS
        );
      } else {
        toast.success(
          "Account have been created successfully.",
          TOAST_SETTINGS
        );
      }
      dispatch({
        type: CREATE_ACCOUNT_MESSAGE_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: CREATE_ACCOUNT_MESSAGE_FAILED,
        payload: error
      });
    });
};
