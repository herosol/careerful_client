import React from "react";

const JobsIntro = ({ data }) => {
	return (
		<>
			<section id="job_intro">
				<div className="contain">
					<div className="content">
						<h1 className="heading">
							{data.heading} <span>{data.heading_ex}</span>
						</h1>
						<p className="size_5">{data.para}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default JobsIntro;
