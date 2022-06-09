import React from "react";
import { Link } from "react-router-dom";

const EventBlk = ({ title, date, day, time, para, link, type, btn, src, alt }) => {
	return (
		<>
			<div className="event_blk">
				<div className="date">
					<small>{day}</small>
					{date}
				</div>
				<div className="txt">
					<div className="time small">{time}</div>
					<h4 className="title mb-0">
						<Link to={link}>{title}</Link>
					</h4>
					<div className="type small">
						<img src={process.env.PUBLIC_URL + "/images/icon-video2.svg"} alt="" />
						{type}
					</div>
					<p>{para}</p>
					<div className="btn_blk">
						<Link to={link} className="site_btn text">
							{btn}
							<i className="arrow"></i>
						</Link>
					</div>
				</div>
				<div className="fig">
					<figure>
						<Link to={link}>
							<img src={src} alt={alt} />
						</Link>
					</figure>
				</div>
			</div>
		</>
	);
};

export default EventBlk;
