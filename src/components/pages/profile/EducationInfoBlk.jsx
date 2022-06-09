import React, { useState } from "react";

const EducationInfoBlk = ({ val }) => {
	const [formVal, setFormVal] = useState({
		status: "",
		university: "",
		degree: "",
		year: "",
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
					<h5>Current Status</h5>
					<div className="form_blk">
						<select name="status" id="status" value={formVal.status} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>University</h5>
					<div className="form_blk">
						<select name="university" id="university" value={formVal.university} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Degree subject</h5>
					<div className="form_blk">
						<select name="degree" id="degree" value={formVal.degree} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Graduation Year</h5>
					<div className="form_blk">
						<select name="year" id="year" value={formVal.year} onChange={inputHandle} className="input">
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

export default EducationInfoBlk;
