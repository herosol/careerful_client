import React, { useState } from "react";

const AddressInfoBlk = () => {
	const [formVal, setFormVal] = useState({
		country: "",
		state: "",
		city: "",
		zip: "",
		address: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<div className="blk">
				<h4 className="subheading">Address information</h4>
				<div className="form_row row">
					<div className="col-sm-4 col-xs-6">
						<h6>Country</h6>
						<div className="form_blk">
							<select name="country" id="country" value={formVal.country} onChange={inputHandle} className="input">
								<option value="">Select</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
								<option value="232">United Kingdom</option>
							</select>
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>State</h6>
						<div className="form_blk">
							<select name="state" id="state" value={formVal.state} onChange={inputHandle} className="input">
								<option value="">Select</option>
								<option value="2289">Isle of Wight</option>
								<option value="2290">St Helens</option>
								<option value="2291">London Borough of Brent</option>
								<option value="2292">Walsall</option>
								<option value="2293">Trafford</option>
								<option value="2294">City of Southampton</option>
								<option value="2295">Sheffield</option>
							</select>
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>City</h6>
						<div className="form_blk">
							<input type="text" name="city" id="city" value={formVal.city} onChange={inputHandle} className="input" placeholder="eg: California" />
						</div>
					</div>
					<div className="col-sm-4 col-xs-6">
						<h6>Zip Code</h6>
						<div className="form_blk">
							<input type="text" id="zip" name="zip" value={formVal.zip} onChange={inputHandle} className="input" placeholder="eg: BL0 0WY" />
						</div>
					</div>
					<div className="col-sm-8 col-xs-12">
						<h6>Address</h6>
						<div className="form_blk">
							<input type="text" id="address" name="address" value={formVal.address} onChange={inputHandle} className="input" placeholder="eg: 123 Main Street, California" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddressInfoBlk;
