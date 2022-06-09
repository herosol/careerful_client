import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Appointment = ({ data }) => {
	const [formVal, setFormVal] = useState({
		company: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};

	return (
		<>
			<section id="book">
				<div className="contain">
					<h2 className="heading">{data.heading}</h2>
					<form action="" method="POST" onSubmit={inputHandle}>
						<div className="blk">
							<div className="date_wrapper mb-5">
								<div className="flex_row main_row row">
									<div className="col col-md-8">
										<div id="calendar">
											<DatePicker selected={new Date()} inline={true} useWeekdaysShort={true} calendarStartDay={1} />
										</div>
									</div>
									<div className="col col-md-4">
										<div className="in_col">
											<p>Wednesday, May 11</p>
											<div className="btn_blk">
												<button type="button" className="site_btn block blank stroke">
													9:30AM - 12:00AM
												</button>
												<button type="button" className="site_btn block blank stroke">
													13:30PM - 16:00PM
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="form_blk">
								<h5>Which company's assessment centre are you attending?</h5>
								<input type="text" name="company" id="company" value={formVal.company} onChange={inputHandle} className="input" placeholder="Please type the company name here" />
							</div>
							<div className="btn_blk">
								<button type="submit" className="site_btn lg block">
									Book Now
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default Appointment;
