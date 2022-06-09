import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

const Register = ({ data }) => {
	const [step, setStep] = useState(1);
	const [firstStepDone, setFirstStepDone] = useState(0);
	const [secondStepDone, setSecondStepDone] = useState(0);
	const [thirdStepDone, setThirdStepDone] = useState(0);
	const [formVal, setFormVal] = useState({
		fname: "",
		lanme: "",
		phone: "",
		email: "",
		language: "",
		password: "",
		ethnicity: "",
		sexual: "",
		nationality: "",
		edu_current: "",
		edu_uni: "",
		edu_degree: "",
		edu_graduation: "",
		job_type: "",
		sector: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<section id="register">
				<div className="contain">
					<h2 className="heading">{data.heading}</h2>
					<TopBar data={data.top_bar} firstStepDone={firstStepDone} secondStepDone={secondStepDone} thirdStepDone={thirdStepDone} />
					<form action="" method="POST" onSubmit={inputHandle}>
						<fieldset className={step === 1 ? "active" : ""}>
							<h4 className="heading">Basic Information</h4>
							<div className="form_row row">
								<div className="col-sm-6">
									<h5>First Name</h5>
									<input type="text" name="fname" id="fname" value={formVal.fname} onChange={inputHandle} className="input" placeholder="eg: John" />
								</div>
								<div className="col-sm-6">
									<h5>Last Name</h5>
									<input type="text" name="lanme" id="lanme" value={formVal.lanme} onChange={inputHandle} className="input" placeholder="eg: Wick" />
								</div>
								<div className="col-sm-6">
									<h5>Phone Number</h5>
									<input type="text" name="phone" id="phone" value={formVal.phone} onChange={inputHandle} className="input" placeholder="eg: 222 2222 2222" />
								</div>
								<div className="col-sm-6">
									<h5>Email Address</h5>
									<input type="text" name="email" id="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" />
								</div>
								<div className="col-sm-6">
									<h5>Language</h5>
									<select name="language" id="language" value={formVal.language} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-6">
									<h5>Password</h5>
									<input type="password" name="password" id="password" value={formVal.password} onChange={inputHandle} className="input" placeholder="eg: PassLogin%7" />
								</div>
							</div>
							<div className="br"></div>
							<div className="br"></div>
							<h4 className="heading">Equal Opportunities</h4>
							<div className="form_row row">
								<div className="col-sm-6">
									<h5>Ethnicity</h5>
									<select name="ethnicity" id="ethnicity" value={formVal.ethnicity} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-6">
									<h5>Sexual Orientation</h5>
									<select name="sexual" id="sexual" value={formVal.sexual} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-12">
									<h5>Do you consider yourself to have a disability or learning difficulties?</h5>
									<ul className="check_list">
										<li>
											<label htmlFor="disability_yes">
												<input type="radio" name="disability" id="disability_yes" />
												<span>Yes</span>
											</label>
										</li>
										<li>
											<label htmlFor="disability_no">
												<input type="radio" name="disability" id="disability_no" />
												<span>No</span>
											</label>
										</li>
									</ul>
								</div>
								<div className="col-sm-6">
									<h5>Nationality</h5>
									<select name="nationality" id="nationality" value={formVal.nationality} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
							</div>
							<div className="btn_blk mt-5">
								<button
									type="button"
									className="site_btn lg"
									onClick={() => {
										setStep(2);
										setFirstStepDone(1);
									}}
								>
									Save and go to next step
								</button>
							</div>
						</fieldset>
						<fieldset className={step === 2 ? "active" : ""}>
							<h4 className="heading">Education</h4>
							<div className="form_row row">
								<div className="col-sm-6">
									<h5>Current Status</h5>
									<select name="edu_current" id="edu_current" value={formVal.edu_current} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-6">
									<h5>University</h5>
									<select name="edu_uni" id="edu_uni" value={formVal.edu_uni} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-6">
									<h5>Degree Subject</h5>
									<select name="edu_degree" id="edu_degree" value={formVal.edu_degree} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-6">
									<h5>Graduation Year</h5>
									<input type="text" name="edu_graduation" id="edu_graduation" value={formVal.edu_graduation} onChange={inputHandle} className="input" placeholder="eg: 2020" />
								</div>
							</div>
							<div className="btn_blk mt-5">
								<button
									type="button"
									className="site_btn lg"
									onClick={() => {
										setStep(3);
										setSecondStepDone(1);
									}}
								>
									Save and go to next step
								</button>
							</div>
						</fieldset>
						<fieldset className={step === 3 ? "active" : ""}>
							<h4 className="heading">Job Preference</h4>
							<div className="form_row row">
								<div className="col-sm-6">
									<h5>Opportunity Type</h5>
									<select name="job_type" id="job_type" value={formVal.job_type} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-6">
									<h5>Industry/Sector</h5>
									<select name="sector" id="sector" value={formVal.sector} onChange={inputHandle} className="input">
										<option value="">Select</option>
										<option value="01">Option 01</option>
										<option value="02">Option 02</option>
										<option value="03">Option 03</option>
										<option value="04">Option 04</option>
										<option value="05">Option 05</option>
									</select>
								</div>
								<div className="col-sm-12">
									<div className="form_blk upload_blk long">
										<button type="button" className="input">
											Upload Your CV
										</button>
										<input type="file" name="document" id="document" />
									</div>
								</div>
								<div className="col-sm-12">
									<div className="form_blk">
										<div className="lbl_btn">
											<input type="checkbox" name="confirm" id="confirm" />
											<label htmlFor="confirm">
												I agree to Careerful&nbsp;
												<Link target="_blank" to="/terms-conditions">
													Terms &amp; Conditions
												</Link>
												&nbsp;and&nbsp;
												<Link target="_blank" to="/privacy-policy">
													Privacy Policy.
												</Link>
											</label>
											<span id="confirm-error" className="validation-error"></span>
										</div>
									</div>
								</div>
							</div>
							<div className="btn_blk mt-5">
								<button
									type="submit"
									className="site_btn lg"
									onClick={() => {
										setThirdStepDone(1);
									}}
								>
									Save and Finish
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</section>
		</>
	);
};

export default Register;
