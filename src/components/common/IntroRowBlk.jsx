import React from "react";
import { Link } from "react-router-dom";

const IntroRowBlk = ({ val, btnView }) => {
	return (
		<>
			<div className="flex_row intro_row row">
				<div className="col col-lg-6">
					<div className="fig">
						<img src={val.src} alt={val.alt} />
					</div>
				</div>
				<div className="col col-lg-6">
					<div className="txt">
						<h6 className="tag">{val.tag}</h6>
						<h2 className="heading">
							{val.title} <span>{val.title_ex}</span>
						</h2>
						<p className="para">{val.para}</p>
						{btnView ? (
							<div className="btn_blk">
								<Link to={val.btn_link} className="site_btn long">
									{val.btn}
								</Link>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default IntroRowBlk;
