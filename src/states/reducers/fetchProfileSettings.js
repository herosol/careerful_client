import {
  FETCH_PROFILE_SETTINGS,
  FETCH_PROFILE_SETTINGS_SUCCESS,
  FETCH_PROFILE_SETTINGS_FAILED,
  SAVE_PROFILE_SETTINGS,
  SAVE_PROFILE_SETTINGS_SUCCESS,
  SAVE_PROFILE_SETTINGS_FAILED
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  isFormProcessing: false,
  content: {},
  mem: {},
  error: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_PROFILE_SETTINGS:
      return {
        ...state,
        isLoading: true,
        content: {},
        mem: {}
      };
    case FETCH_PROFILE_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: payload,
        mem: payload.mem
      };
    case FETCH_PROFILE_SETTINGS_FAILED:
      return {
        ...state,
        isLoading: false,
        content: {},
        mem: {},
        error: payload
      };
    case SAVE_PROFILE_SETTINGS:
      return {
        ...state,
        isFormProcessing: true
      };
    case SAVE_PROFILE_SETTINGS_SUCCESS:
      return {
        ...state,
        isFormProcessing: false
      };
    case SAVE_PROFILE_SETTINGS_FAILED:
      return {
        ...state,
        isFormProcessing: false,
        error: payload
      };
    default:
      return state;
  }
}
