import React from "react";
import { Link } from "react-router-dom";

const Strip = ({ data }) => {
	return (
		<>
			<section id="strip">
				<div className="contain text-center">
					<div className="inside">
						<h2 className="heading">{data.heading}</h2>
						<p>{data.para}</p>
						<div className="btn_blk mt-5">
							<Link to={data.btn_link} className="site_btn long light">
								{data.btn}
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Strip;
