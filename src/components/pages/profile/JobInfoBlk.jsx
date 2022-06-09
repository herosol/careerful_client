import React, { useState } from "react";

const JobInfoBlk = ({ val }) => {
	const [formVal, setFormVal] = useState({
		opportunity: "",
		industry: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<h4 className="heading">{val.heading}</h4>
			<div className="form_row row">
				<div className="col-sm-4 col-xs-6">
					<h5>Opportunity type</h5>
					<div className="form_blk">
						<select name="opportunity" id="opportunity" value={formVal.opportunity} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Industry/Sector</h5>
					<div className="form_blk">
						<select name="industry" id="industry" value={formVal.industry} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobInfoBlk;
