import React, { useState } from "react";
import SrchBar from "./SrchBar";
import EventBlk from "../../common/EventBlk";

const AllEvents = ({ data }) => {
	const [formVal, setFormVal] = useState({
		sort: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<section id="events">
				<div className="contain">
					<SrchBar />
					<ul className="tag_list">
						<li>
							<span>Virtual Events</span>
						</li>
						<li>
							<span>Social Events</span>
						</li>
						<li>
							<span>Company Events</span>
						</li>
						<li>
							<span>Awesome Events</span>
						</li>
					</ul>
					<div className="br"></div>
					<div className="sort_blk size_4 mb-4">
						<select name="sort" id="sort" value={formVal.sort} onChange={inputHandle} className="input w-auto p-0 border-0">
							<option value="">Now - March 22, 2023</option>
							<option value="">Now - March 22, 2023</option>
							<option value="">Now - March 22, 2023</option>
							<option value="">Now - March 22, 2023</option>
							<option value="">Now - March 22, 2023</option>
						</select>
					</div>
					{data.block.map((val) => {
						return <EventBlk {...val} key={val.id} />;
					})}
					<div className="btn_blk justify-content-between mt-5">
						<button type="button" className="site_btn text prev_btn">
							<i className="chevron-left"></i> Previous Event
						</button>
						<button type="button" className="site_btn text next_btn">
							Next Event <i className="chevron-right"></i>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default AllEvents;
