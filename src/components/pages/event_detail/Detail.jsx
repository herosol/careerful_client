import React from "react";
import { Link } from "react-router-dom";
import EventDetailBlk from "./EventDetailBlk";

const Detail = ({ data }) => {
	return (
		<>
			<section id="events" className="detail">
				<div className="contain">
					<div className="btn_blk mb-5">
						<Link to="/events" className="site_btn text prev_btn">
							<i className="chevron-left"></i> All Events
						</Link>
					</div>
					<EventDetailBlk {...data.detail} reg_blk={data.reg_blk} />
				</div>
			</section>
		</>
	);
};

export default Detail;
