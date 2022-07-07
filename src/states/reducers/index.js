import { combineReducers } from "redux";
import fetchHome from "./fetchHome";
import fetchAboutUs from "./fetchAboutUs";
import fetchTerms from "./fetchTerms";
import fetchPrivacy from "./fetchPrivacy";
import fetchDisclaimer from "./fetchDisclaimer";
import fetchFaq from "./fetchFaq";
import fetchWorkWithUs from "./fetchWorkWithUs";
import fetchPartnerWithUs from "./fetchPartnerWithUs";
import fetchCareers from "./fetchCareers";
import fetchJobProfile from "./fetchJobProfile";
import fetchJobs from "./fetchJobs";
import fetchSignup from "./fetchSignup";
import fetchSignin from "./fetchSignin";
import fetchVideoInterview from "./fetchVideoInterview";
import fetchDashboard from "./fetchDashboard";
import fetchProfileSettings from "./fetchProfileSettings";
import fetchEvents from "./fetchEvents";
import fetchEventDetail from "./fetchEventDetail";

export default combineReducers({
  fetchHome,
  fetchAboutUs,
  fetchTerms,
  fetchPrivacy,
  fetchDisclaimer,
  fetchFaq,
  fetchWorkWithUs,
  fetchPartnerWithUs,
  fetchCareers,
  fetchJobProfile,
  fetchJobs,
  fetchSignin,
  fetchSignup,
  fetchVideoInterview,
  fetchDashboard,
  fetchProfileSettings,
  fetchEvents,
  fetchEventDetail
});
