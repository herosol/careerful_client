import React from "react";
import JobProfileBlk from "../../common/JobProfileBlk";

const JobProfileList = ({ data }) => {
	return (
		<>
			<section id="job_profile_list">
				<div className="contain">
					<div className="flex_row main_row row">
						{data.map((val) => {
							return (
								<div className="col col-lg-4 col-md-6" key={val.id}>
									<JobProfileBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default JobProfileList;
