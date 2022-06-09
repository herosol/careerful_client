import React from "react";
import { Link } from "react-router-dom";

const EventMiniBlk = ({ date, title, link, company_link, company, time }) => {
	return (
		<>
			<div className="event_mini_blk">
				<div className="date">{date}</div>
				<div className="txt">
					<h4 className="title mb-0">
						<Link to={link}>{title}</Link>
					</h4>
					<div className="company">
						<a href={company_link}>{company}</a>
					</div>
					<div className="time">{time}</div>
				</div>
			</div>
		</>
	);
};

export default EventMiniBlk;
