import React from "react";
import Data from "../../dummy";
import JobList from "./JobList";

const OpenJobs = () => {
	return (
		<>
			<JobList data={Data.open_jobs} />
		</>
	);
};

export default OpenJobs;
