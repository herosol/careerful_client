import React from "react";
import { Link } from "react-router-dom";

const JobProfileBlk = ({ src, alt, link, title, para, btn }) => {
	return (
		<div className="job_profile_blk">
			<div className="fig">
				<Link to={link}>
					<img src={src} alt={alt} />
				</Link>
			</div>
			<div className="txt">
				<h4>
					<Link to={link}>{title}</Link>
				</h4>
				<p>{para}</p>
				<div className="btn_blk">
					<Link to={link} className="site_btn text learn">
						{btn}
						<i className="arrow"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JobProfileBlk;
