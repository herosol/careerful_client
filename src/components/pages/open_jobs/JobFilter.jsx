import React from "react";

const JobFilter = ({ active, close }) => {
	return (
		<>
			<div id="filter" className={active ? "blk active" : "blk"}>
				<button type="button" className="x_btn" onClick={close}></button>
				<div className="top_head mb-0">
					<h4 className="mb-0 text-uppercase">Filter Jobs</h4>
				</div>
				<div className="in_blk">
					<h6>Degree Requirement</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Collage Degree
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								University Degree
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Graduate Diploma
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Not Specified
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								No Minimum Requirement
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Location</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								London
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Bedforshire
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Aberdeen
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Birmingham
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Cambridge
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Dundee
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Edinburgh
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Job Industry</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Business and Operation
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Data Analytics & Research
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Information Technology
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Banking & Finance Services
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Job Type</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Graduate Jobs
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Interships
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Placements
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Insight Programmes
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Visa Acceptance</h6>
					<ul className="ctg_lst">
						<li>
							<label>
								<input type="checkbox" id="" name="sort_by" />
								Accept Graduate Visa Holders
							</label>
						</li>
					</ul>
				</div>
				<div className="in_blk">
					<h6>Salary Expectation</h6>
				</div>
			</div>
		</>
	);
};

export default JobFilter;
