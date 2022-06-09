import React, { useState } from "react";

const SrchBar = () => {
	const [formVal, setFormVal] = useState({
		srch: "",
		location: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<form action="" method="POST" onSubmit={inputHandle} className="main_form">
				<div className="inside">
					<div className="form_blk">
						<img src={process.env.PUBLIC_URL + "/images/icon-search-normal.svg"} alt="" className="ico" />
						<input type="text" name="srch" id="srch" value={formVal.srch} onChange={inputHandle} className="input" placeholder="Search for events" />
					</div>
					<div className="form_blk border-end-0">
						<img src={process.env.PUBLIC_URL + "/images/icon-location-minus.svg"} alt="" className="ico" />
						<input type="text" name="location" id="location" value={formVal.location} onChange={inputHandle} className="input" placeholder="In a location" />
					</div>
					<button type="submit" className="site_btn blank stroke">
						Find Event
					</button>
					<div className="form_blk flex-grow-0">
						<button type="button" className="filter_btn d-flex align-align-items-center lh-1">
							<img src={process.env.PUBLIC_URL + "/images/icon-slider.svg"} alt="" className="ico" />
							Hide Filters
						</button>
					</div>
					<select name="list" id="list" value={formVal.list} onChange={inputHandle} className="input w-auto ps-0">
						<option value="">List</option>
						<option value="">Option 01</option>
						<option value="">Option 02</option>
						<option value="">Option 03</option>
						<option value="">Option 04</option>
					</select>
				</div>
			</form>
		</>
	);
};

export default SrchBar;
