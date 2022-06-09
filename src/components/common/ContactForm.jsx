import React, { useState } from "react";
import Button from "./Button";

function ContactForm({ formData }) {
	const [formVal, setFormVal] = useState({
		name: "",
		phone: "",
		subject: "",
		email: "",
		comments: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<form action="" method="POST" onSubmit={inputHandle}>
				{/* <h5 className="heading color">{formData.heading}</h5> */}
				<div className="form_row row">
					<div className="col-sm-12">
						<h6 className="require">Your Name</h6>
						<div className="form_blk">
							<input type="text" name="name" id="name" value={formVal.name} onChange={inputHandle} className="input" placeholder="eg: John Wick" />
						</div>
					</div>
					{/* <div className="col-sm-12">
						<h6 className="require">Phone</h6>
						<div className="form_blk">
							<input type="text" name="phone" id="phone" value={formVal.phone} onChange={inputHandle} className="input" placeholder="eg: 559-579-8833" />
						</div>
					</div>
					<div className="col-sm-12">
						<h6 className="require">Subject</h6>
						<div className="form_blk">
							<input type="text" name="subject" id="subject" value={formVal.subject} onChange={inputHandle} className="input" placeholder="eg: Lorem Ipsum" />
						</div>
					</div> */}
					<div className="col-sm-12">
						<h6 className="require">Email Address</h6>
						<div className="form_blk">
							<input type="text" name="email" id="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" />
						</div>
					</div>
					<div className="col-sm-12">
						<h6>Your Message</h6>
						<div className="form_blk">
							<textarea name="comments" id="comments" value={formVal.comments} onChange={inputHandle} className="input" placeholder="Type something here"></textarea>
						</div>
					</div>
				</div>
				<div className="btn_blk form_btn">
					<Button className="long" text={formData.btn} size="lg block" type="submit"></Button>
				</div>
			</form>
		</>
	);
}

export default ContactForm;
