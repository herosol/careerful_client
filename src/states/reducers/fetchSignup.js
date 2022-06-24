import {
  FETCH_SIGN_UP_CONTENT,
  FETCH_SIGN_UP_CONTENT_SUCCESS,
  FETCH_SIGN_UP_CONTENT_FAILED,
  CREATE_ACCOUNT_MESSAGE,
  CREATE_ACCOUNT_MESSAGE_SUCCESS,
  CREATE_ACCOUNT_MESSAGE_FAILED
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  content: {},
  error: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SIGN_UP_CONTENT:
      return {
        ...state,
        isLoading: true,
        content: {}
      };
    case FETCH_SIGN_UP_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: payload
      };
    case FETCH_SIGN_UP_CONTENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
}
