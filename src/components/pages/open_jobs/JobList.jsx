import React, { useState } from "react";
import SearchBar from "../../common/SearchBar";
import JobFilter from "./JobFilter";
import JobListing from "./JobListing";

const JobList = ({ data }) => {
	const [active, setActive] = useState(false);
	const toggleFilter = () => {
		setActive(!active);
	};
	return (
		<>
			<section id="open_jobs">
				<div className="top_blk">
					<div className="contain">
						<SearchBar />
					</div>
				</div>
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col-xl-4 filter_wrapper_col">
							<JobFilter active={active} close={toggleFilter} />
						</div>
						<div className="col-xl">
							<div className="top_head">
								<div className="txt">
									<h3>{data.heading}</h3>
									<p>{data.show_result}</p>
								</div>
								<div className="btn_blk">
									<select name="" id="" className="input">
										<option value="">Sort by</option>
										<option value="">Newest Listings</option>
										<option value="">Oldest Listings</option>
										<option value="">Closest</option>
									</select>
								</div>
							</div>
							<JobListing listing={data.jobs} />
						</div>
					</div>
					<div id="filter_btn_blk" className="btn_blk">
						<button type="button" id="filter_btn" className="site_btn auto" onClick={toggleFilter}>
							<img src={process.env.PUBLIC_URL + "/images/icon-slider.svg"} alt="" />
							View Filters
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default JobList;
