import React, { useState } from "react";

const OpportunityInfoBlk = ({ val }) => {
	const [formVal, setFormVal] = useState({
		ethnicity: "",
		orientation: "",
		nationality: "",
		disability: "",
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
					<h5>Ethnicity</h5>
					<div className="form_blk">
						<select name="ethnicity" id="ethnicity" value={formVal.ethnicity} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Sexual orientation</h5>
					<div className="form_blk">
						<select name="orientation" id="orientation" value={formVal.orientation} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Nationality</h5>
					<div className="form_blk">
						<select name="nationality" id="nationality" value={formVal.nationality} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="">Option 01</option>
							<option value="">Option 02</option>
							<option value="">Option 03</option>
							<option value="">Option 04</option>
						</select>
					</div>
				</div>
				<div className="col-sm-12 col-xs-12">
					<h5>Do you consider yourself to have a disability or learning difficulties?</h5>
					<ul className="check_list">
						<li>
							<label for="disability_yes">
								<input type="radio" name="disability" id="disability_yes" />
								<span>Yes</span>
							</label>
						</li>
						<li>
							<label for="disability_no">
								<input type="radio" name="disability" id="disability_no" />
								<span>No</span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default OpportunityInfoBlk;
