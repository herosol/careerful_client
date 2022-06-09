import React, { useState } from "react";
import TopBar from "./TopBar";

const Register = ({ data }) => {
	const [step, setStep] = useState(1);
	const [firstStepDone, setFirstStepDone] = useState(0);
	const [secondStepDone, setSecondStepDone] = useState(0);
	const [thirdStepDone, setThirdStepDone] = useState(0);
	const [fourthStepDone, setFourthStepDone] = useState(0);
	const [fifthStepDone, setFifthStepDone] = useState(0);
	const [sixthStepDone, setSixthStepDone] = useState(0);
	return (
		<>
			<section id="interview">
				<div className="contain">
					<h2 className="heading text-center">{data.heading}</h2>
					<TopBar data={data.top_bar} firstStepDone={firstStepDone} secondStepDone={secondStepDone} thirdStepDone={thirdStepDone} fourthStepDone={fourthStepDone} fifthStepDone={fifthStepDone} sixthStepDone={sixthStepDone} />
					<form action="" method="POST">
						<fieldset className={step === 1 ? "active" : ""}>
							<h4 className="heading text-center">Please introduce yourself. Stop the recording and go to next step.</h4>
							<div className="vid_blk">
								<video autoPlay loop muted playsInline controls>
									<source src={data.video} type="video/mp4" />
								</video>
							</div>
							<div class="btn_blk justify-content-center mt-5">
								<button
									type="button"
									class="site_btn lg"
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
							<h4 className="heading text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</h4>
							<div className="vid_blk">
								<video autoPlay loop muted playsInline controls>
									<source src={data.video} type="video/mp4" />
								</video>
							</div>
							<div class="btn_blk justify-content-center mt-5">
								{/* <button
									type="button"
									class="site_btn light stroke lg"
									onClick={() => {
										setStep(1);
										setSecondStepDone(1);
									}}
								>
									Previous step
								</button> */}
								<button
									type="button"
									class="site_btn lg"
									onClick={() => {
										setStep(3);
										setSecondStepDone(2);
									}}
								>
									Save and go to next step
								</button>
							</div>
						</fieldset>
						<fieldset className={step === 3 ? "active" : ""}>
							<h4 className="heading text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</h4>
							<div className="vid_blk">
								<video autoPlay loop muted playsInline controls>
									<source src={data.video} type="video/mp4" />
								</video>
							</div>
							<div class="btn_blk justify-content-center mt-5">
								{/* <button
									type="button"
									class="site_btn light stroke lg"
									onClick={() => {
										setStep(2);
										setThirdStepDone(2);
									}}
								>
									Previous step
								</button> */}
								<button
									type="button"
									class="site_btn lg"
									onClick={() => {
										setStep(4);
										setThirdStepDone(3);
									}}
								>
									Save and go to next step
								</button>
							</div>
						</fieldset>
						<fieldset className={step === 4 ? "active" : ""}>
							<h4 className="heading text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</h4>
							<div className="vid_blk">
								<video autoPlay loop muted playsInline controls>
									<source src={data.video} type="video/mp4" />
								</video>
							</div>
							<div class="btn_blk justify-content-center mt-5">
								{/* <button
									type="button"
									class="site_btn light stroke lg"
									onClick={() => {
										setStep(3);
										setFourthStepDone(3);
									}}
								>
									Previous step
								</button> */}
								<button
									type="button"
									class="site_btn lg"
									onClick={() => {
										setStep(5);
										setFourthStepDone(4);
									}}
								>
									Save and go to next step
								</button>
							</div>
						</fieldset>
						<fieldset className={step === 5 ? "active" : ""}>
							<h4 className="heading text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit?</h4>
							<div className="vid_blk">
								<video autoPlay loop muted playsInline controls>
									<source src={data.video} type="video/mp4" />
								</video>
							</div>
							<div class="btn_blk justify-content-center mt-5">
								{/* <button
									type="button"
									class="site_btn light stroke lg"
									onClick={() => {
										setStep(4);
										setFifthStepDone(4);
									}}
								>
									Previous step
								</button> */}
								<button
									type="button"
									class="site_btn lg"
									onClick={() => {
										setStep(6);
										setFifthStepDone(5);
									}}
								>
									Save and go to next step
								</button>
							</div>
						</fieldset>
						<fieldset className={step === 6 ? "active" : ""}>
							<h4 className="heading text-center">Upload or Finish</h4>
							<div className="form_blk">
								<div className="lbl_btn">
									<input type="radio" name="confirm" id="confirm1" />
									<label htmlFor="confirm1">Do you want to just finish it off</label>
								</div>
							</div>
							<div className="form_blk">
								<div className="lbl_btn">
									<input type="radio" name="confirm" id="confirm2" />
									<label htmlFor="confirm2">Do you want upload it or submit it for the review by an expert</label>
								</div>
							</div>
							<div class="btn_blk justify-content-center mt-5">
								{/* <button
									type="button"
									class="site_btn light stroke lg"
									onClick={() => {
										setStep(5);
										setSixthStepDone(5);
									}}
								>
									Previous step
								</button> */}
								<button
									type="submit"
									class="site_btn lg"
									onClick={() => {
										setStep(7);
										setSixthStepDone(6);
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
