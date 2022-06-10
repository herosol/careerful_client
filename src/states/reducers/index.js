import { combineReducers } from "redux";
import fetchHome from "./fetchHome";
import fetchAboutUs from "./fetchAboutUs";
import fetchTerms from "./fetchTerms";
import fetchPrivacy from "./fetchPrivacy";
import fetchDisclaimer from "./fetchDisclaimer";

export default combineReducers({
  fetchHome,
  fetchAboutUs,
  fetchTerms,
  fetchPrivacy,
  fetchDisclaimer
});
