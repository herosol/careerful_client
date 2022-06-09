import React, { useState } from "react";

const PersonalInfoBlk = ({ val }) => {
	const [formVal, setFormVal] = useState({
		fname: "Jennifer",
		lname: "Kem",
		phone: "02077829920",
		email: "jenniferkem@gmail.com",
		dob: "12-31-1992",
		language: "english",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<h4 className="heading">{val.heading}</h4>
			<div className="dp_blk upLoadDp">
				<div className="ico fill round">
					<img src={val.dp} alt={val.dp_alt} />
				</div>
				<div className="txt">
					<div className="btn_blk">
						<button type="button" className="site_btn sm small">
							Upload new
						</button>
						<input type="file" name="dp_image" id="dp_image" hidden />
					</div>
					<div className="small mt-3">
						Acceptable only jpg, png <br /> The maximum file size is 500 kb and the minimum size is 80 kb.
					</div>
				</div>
			</div>
			<div className="form_row row">
				<div className="col-sm-4 col-xs-6">
					<h5>First Name</h5>
					<div className="form_blk">
						<input type="text" name="fname" id="fname" value={formVal.fname} onChange={inputHandle} className="input" placeholder="eg: John" />
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Last Name</h5>
					<div className="form_blk">
						<input type="text" name="lname" id="lname" value={formVal.lname} onChange={inputHandle} className="input" placeholder="eg: Wick" />
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Phone Number</h5>
					<div className="form_blk">
						<input type="text" name="phone" id="phone" value={formVal.phone} onChange={inputHandle} className="input" placeholder="eg: +92300 0000 000" />
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Email Address</h5>
					<div className="form_blk">
						<input type="text" id="email" name="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" readOnly={true} />
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Date of Birth</h5>
					<div className="form_blk">
						<input type="text" name="dob" id="dob" value={formVal.dob} onChange={inputHandle} className="input" placeholder="eg: 01-01-1998" />
					</div>
				</div>
				<div className="col-sm-4 col-xs-6">
					<h5>Language</h5>
					<div className="form_blk">
						<select name="language" id="language" value={formVal.language} onChange={inputHandle} className="input">
							<option value="">Select</option>
							<option value="english">English</option>
							<option value="spanish">Spanish</option>
							<option value="arabic">Arabic</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInfoBlk;
