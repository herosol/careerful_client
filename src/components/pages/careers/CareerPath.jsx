import React from "react";
import { Link } from "react-router-dom";

const CareerPath = ({ data }) => {
	return (
		<>
			<section id="career">
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col-lg-5">
							<div className="flex_blk">
								<div className="txt">
									<h1 className="heading">
										{data.heading}
										<span>{data.heading_ex}</span>
									</h1>
									<p>{data.para}</p>
									<div className="btn_blk">
										<Link to={data.btn_link} className="site_btn">
											{data.btn}
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="fig">
					<img src={data.src} alt={data.alt} />
				</div>
			</section>
		</>
	);
};

export default CareerPath;
