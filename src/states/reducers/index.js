import { combineReducers } from "redux";
import fetchHome from "./fetchHome";
import fetchAboutUs from "./fetchAboutUs";
import fetchTerms from "./fetchTerms";
import fetchPrivacy from "./fetchPrivacy";
import fetchDisclaimer from "./fetchDisclaimer";
import fetchFaq from "./fetchFaq";
import fetchWorkWithUs from "./fetchWorkWithUs";
import fetchJobProfile from "./fetchJobProfile";
import fetchJobs from "./fetchJobs";
import fetchSignup from "./fetchSignup";
import fetchSignin from "./fetchSignin";
import fetchVideoInterview from "./fetchVideoInterview";
import fetchDashboard from "./fetchDashboard";
import fetchProfileSettings from "./fetchProfileSettings";

export default combineReducers({
  fetchHome,
  fetchAboutUs,
  fetchTerms,
  fetchPrivacy,
  fetchDisclaimer,
  fetchFaq,
  fetchWorkWithUs,
  fetchJobProfile,
  fetchJobs,
  fetchSignin,
  fetchSignup,
  fetchVideoInterview,
  fetchDashboard,
  fetchProfileSettings
});
