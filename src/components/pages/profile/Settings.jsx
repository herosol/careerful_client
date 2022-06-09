import React from "react";
import ChangePass from "./ChangePass";
import PersonalInfoBlk from "./PersonalInfoBlk";
import OpportunityInfoBlk from "./OpportunityInfoBlk";
import EducationInfoBlk from "./EducationInfoBlk";
import JobInfoBlk from "./JobInfoBlk";

const Settings = ({ data }) => {
	const { personal_info, opportunity_info, education_info, job_info, change_pass } = data;
	return (
		<>
			<section id="settings">
				<div className="contain-fluid">
					<form action="" method="POST">
						<PersonalInfoBlk val={personal_info} />
						<div className="br"></div>
						<div className="br"></div>
						<OpportunityInfoBlk val={opportunity_info} />
						<div className="br"></div>
						<div className="br"></div>
						<EducationInfoBlk val={education_info} />
						<div className="br"></div>
						<div className="br"></div>
						<JobInfoBlk val={job_info} />
						<div className="btn_blk form_btn">
							<button type="submit" className="site_btn lg long">
								Update Information
							</button>
						</div>
					</form>
					<div className="br"></div>
					<div className="br"></div>
					<ChangePass val={change_pass} />
				</div>
			</section>
		</>
	);
};
export default Settings;
