import React from "react";
import Data from "../../dummy";
import JobsIntro from "./JobsIntro";
import JobProfileList from "./JobProfileList";
// import Categories from "../../common/Categories";

const JobProfile = () => {
	const { intro, list } = Data.job_profile;
	return (
		<>
			<JobsIntro data={intro} />
			<JobProfileList data={list} />
			{/* <Categories data={categories} /> */}
		</>
	);
};

export default JobProfile;
