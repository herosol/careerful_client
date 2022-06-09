import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = ({ data }) => {
	return (
		<>
			<section id="contact">
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col col-lg-6">
							<div className="txt">
								<h6 className="tag">{data.tag}</h6>
								<h2>{data.heading}</h2>
								<p>{data.para}</p>
								<ul className="info_list">
									{data.info_list.map((val) => {
										return (
											<li key={val.id}>
												<img src={val.icon} alt={val.alt} />
												<a href={val.link}>{val.text}</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col col-lg-6">
							<div className="in_col">
								<ContactForm formData={data.form} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
