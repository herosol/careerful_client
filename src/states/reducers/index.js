import { combineReducers } from "redux";
import fetchSiteSettings from "./fetchSiteSettings";
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
import fetchBlogs from "./fetchBlogs";
import fetchBlogDetail from "./fetchBlogDetail";
import fetchJobProfileDetail from "./fetchJobProfileDetail";
import fetchUkCorporate from "./fetchUkCorporate";
import fetchTestimonials from "./fetchTestimonials";
import fetchRecrProcess from "./fetchRecrProcess";
import fetchCvCoverLetter from "./fetchCvCoverLetter";
import fetchCvGuidance from "./fetchCvGuidance";
import fetchCoverLetterGuidance from "./fetchCoverLetterGuidance";
import fetchCvBuilder from "./fetchCvBuilder";
import fetchCoverLetterBuilder from "./fetchCoverLetterBuilder";
import fetchAssessmentCenter from "./fetchAssessmentCenter";
import fetchInterview from "./fetchInterview";
import fetchOnlineTest from "./fetchOnlineTest";
import fetchTestCategories from "./fetchTestCategories";
import fetchTestCategyDetail from "./fetchTestCategyDetail";
import fetchCareerOptions from "./fetchCareerOptions";

export default combineReducers({
  fetchSiteSettings,
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
  fetchEventDetail,
  fetchBlogs,
  fetchBlogDetail,
  fetchJobProfileDetail,
  fetchUkCorporate,
  fetchTestimonials,
  fetchRecrProcess,
  fetchCvCoverLetter,
  fetchCvGuidance,
  fetchCoverLetterGuidance,
  fetchCvBuilder,
  fetchCoverLetterBuilder,
  fetchAssessmentCenter,
  fetchInterview,
  fetchOnlineTest,
  fetchTestCategories,
  fetchTestCategyDetail,
  fetchCareerOptions
});
