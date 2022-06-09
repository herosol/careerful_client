import React from "react";
import JobBlk from "../../common/JobBlk";

const JobListing = ({ listing }) => {
	return (
		<>
			<div className="flex_row job_row row">
				{listing.map((val) => {
					return (
						<div className="col" key={val.id}>
							<JobBlk {...val} />
						</div>
					);
				})}
			</div>
		</>
	);
};

export default JobListing;
