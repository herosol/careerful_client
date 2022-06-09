import React from "react";
import { Link } from "react-router-dom";

const JobBlk = ({ admin, ...val }) => {
	const { src, alt, title, link, location, degree, salary, company, company_link, act_btn } = val;
	return (
		<>
			<div className={admin ? "job_blk edit" : "job_blk"}>
				<div className="top">
					<div className="ico fill">
						<img src={src} alt={alt} />
					</div>
					<div className="title">
						<h4 className="mb-0">
							<Link to={link}>{title}</Link>
						</h4>
						<div className="company">
							<a href={company_link}>{company}</a>
						</div>
						{admin ? (
							""
						) : (
							<ul className="mini_lst">
								<li>
									<img src={process.env.PUBLIC_URL + "/images/icon-map-marker.svg"} alt="" />
									{location}
								</li>
								<li>
									<img src={process.env.PUBLIC_URL + "/images/icon-hat.svg"} alt="" />
									{degree}
								</li>
								<li>
									<img src={process.env.PUBLIC_URL + "/images/icon-dollar.svg"} alt="" />
									{salary}
								</li>
							</ul>
						)}
					</div>
					{admin ? (
						<div className="act_btn">
							<Link to={act_btn.edit}>
								<img src={process.env.PUBLIC_URL + "/images/icon-edit.svg"} alt="" />
							</Link>
						</div>
					) : (
						<div className="act_btn">
							<Link to={act_btn.view}>
								<img src={process.env.PUBLIC_URL + "/images/icon-shuffle.svg"} alt="" />
							</Link>
							<Link to={act_btn.bookmark}>
								<img src={process.env.PUBLIC_URL + "/images/icon-bookmark.svg"} alt="" />
							</Link>
						</div>
					)}
				</div>
				{admin ? (
					<div className="btm">
						<div className="form_row row">
							<div className="col-xl col-lg-4 col-md-6">
								<h5>Online Test</h5>
								<div className="form_blk">
									<select name="" id="" className="input">
										<option value="">Select</option>
										<option value="">Option 01</option>
										<option value="">Option 02</option>
										<option value="">Option 03</option>
										<option value="">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<h5>Interview</h5>
								<div className="form_blk">
									<select name="" id="" className="input">
										<option value="">Select</option>
										<option value="">Option 01</option>
										<option value="">Option 02</option>
										<option value="">Option 03</option>
										<option value="">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<h5>2nd round interview</h5>
								<div className="form_blk">
									<select name="" id="" className="input">
										<option value="">Select</option>
										<option value="">Option 01</option>
										<option value="">Option 02</option>
										<option value="">Option 03</option>
										<option value="">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<h5>final round interview</h5>
								<div className="form_blk">
									<select name="" id="" className="input">
										<option value="">Select</option>
										<option value="">Option 01</option>
										<option value="">Option 02</option>
										<option value="">Option 03</option>
										<option value="">Option 04</option>
									</select>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<h5>offer</h5>
								<div className="form_blk">
									<select name="" id="" className="input">
										<option value="">Select</option>
										<option value="">Option 01</option>
										<option value="">Option 02</option>
										<option value="">Option 03</option>
										<option value="">Option 04</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default JobBlk;
