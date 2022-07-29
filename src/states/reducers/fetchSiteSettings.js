import {
  FETCH_SITE_SETTINGS,
  FETCH_SITE_SETTINGS_SUCCESS,
  FETCH_SITE_SETTINGS_FAILED
} from "../actions/actionTypes";

const initialState = {
  isGloballyLoading: true,
  siteSettings: {},
  error: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SITE_SETTINGS:
      return {
        ...state,
        isLoading: true,
        siteSettings: {}
      };
    case FETCH_SITE_SETTINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        siteSettings: payload
      };
    case FETCH_SITE_SETTINGS_FAILED:
      return {
        ...state,
        isLoading: false,
        siteSettings: {},
        error: payload
      };
    default:
      return state;
  }
}
