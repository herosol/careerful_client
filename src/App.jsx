import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";

// Common Pages
import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/pages/home/Index";
import About from "./components/pages/about/Index";
import Work from "./components/pages/work/Index";
import Partner from "./components/pages/partner/Index";
import Careers from "./components/pages/careers/Index";
import OpenJobs from "./components/pages/open_jobs/Index";
import Faq from "./components/pages/faq/Index";
import Events from "./components/pages/events/Index";
import EventDetail from "./components/pages/event_detail/Index";
import Signin from "./components/pages/signin/Index";
import Signup from "./components/pages/signup/Index";
import Forgot from "./components/pages/forgot/Index";
import VideoInterview from "./components/pages/video_interview/Index";

import JobProfile from "./components/pages/job_profile/Index";
import Booking from "./components/pages/booking/Index";
import Privacy from "./components/pages/privacy/Index";
import Disclaim from "./components/pages/disclaimer/Index";
import Terms from "./components/pages/terms/Index";

// Account & Popup
import Dashboard from "./components/pages/dashboard/Index";
import Statistics from "./components/pages/statistics/Index";
import Profile from "./components/pages/profile/Index";
import Subscription from "./components/pages/subscription/Index";

// Error & Popup
import Error from "./components/pages/error/Index";
import PopupVideo from "./components/common/PopupVideo";
// import PopupRegister from "./components/common/PopupRegister";

function App() {
	const [state, setState] = useState({
		PopupVideo: false,
		// PopupRegister: false,
	});
	// const showPopupVideo = () => {
	// 	setState({ ...state, PopupVideo: true });
	// };
	// const showPopupRegister = () => {
	// 	setState({ ...state, PopupRegister: true });
	// };
	const closePopupVideo = () => {
		setState({ ...state, PopupVideo: false });
	};
	const PageLayout = () => (
		<>
			<Header logged={false} />
			<Outlet />
			<Footer />
		</>
	);
	const PageLogLayout = () => (
		<>
			<Header logged={true} />
			<Outlet />
		</>
	);
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route element={<PageLayout />}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/work-with-us" element={<Work />} />
						<Route exact path="/partner-with-us" element={<Partner />} />
						<Route exact path="/careers" element={<Careers />} />
						<Route exact path="/open-jobs" element={<OpenJobs />} />
						<Route exact path="/faq" element={<Faq />} />
						<Route exact path="/events" element={<Events />} />
						<Route exact path="/event-detail" element={<EventDetail />} />
						<Route exact path="/signin" element={<Signin />} />
						<Route exact path="/signup" element={<Signup />} />
						<Route exact path="/forgot-password" element={<Forgot />} />
						<Route exact path="/video-interview" element={<VideoInterview />} />
						<Route exact path="/job-profile" element={<JobProfile />} />
						<Route exact path="/booking" element={<Booking />} />
						<Route exact path="/privacy-policy" element={<Privacy />} />
						<Route exact path="/disclaimer" element={<Disclaim />} />
						<Route exact path="/terms-conditions" element={<Terms />} />
					</Route>
					<Route element={<PageLogLayout />}>
						<Route exact path="/dashboard" element={<Dashboard />} />
						<Route exact path="/profile-settings" element={<Profile />} />
						<Route exact path="/statistics" element={<Statistics />} />
						<Route exact path="/mine-subscription" element={<Subscription />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
				{state.PopupVideo === true ? <PopupVideo close={closePopupVideo} /> : ""}
				{/* {state.PopupRegister === true ? <PopupRegister close={closePopupRegister} /> : ""} */}
			</BrowserRouter>
		</>
	);
}

export default App;
