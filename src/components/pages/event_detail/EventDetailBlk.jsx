import React from "react";
import { Link } from "react-router-dom";
import RegisterBlk from "./RegisterBlk";

const EventDetailBlk = ({ title, time, type, price, src, alt, reg_blk }) => {
	return (
		<>
			<div className="event_detail">
				<h2>{title}</h2>
				<div className="btm">
					<div className="time">{time}</div>
					<div className="type small">
						<img src={process.env.PUBLIC_URL + "/images/icon-video2.svg"} alt="" />
						{type}
					</div>
					{/* <div className="price color">{price}</div> */}
				</div>
				<div className="fig">
					<img src={src} alt={alt} />
				</div>
				<div className="txt">
					<p>This is where you’d put the event description.</p>
					<p>This is an example of an event using Event Tickets Plus and the Virtual Events add-on where tickets are sold, and guests cannot see the livestream info until they’ve purchased a ticket. Once they’ve purchased a ticket, an email with the livestream link will be automatically sent to them.</p>
					<h4>Event Organizer</h4>
					<p>
						<i>If you have Event Calendar Pro, viewers of your calendar can click on the organizer’s name below and view all events from that organizer.</i>
					</p>
					<p>&nbsp;</p>
					<p>Using shortcodes from Event Tickets Plus, you’re able to display protected content, that only attendees who have registered for the event and logged into the site can see. Everyone else will see a notice to register to access the livestream.</p>
					<p>???? Please login and register for the event to access the livestream.</p>
				</div>
				<div className="btn_blk mt-5 mb-5">
					<Link to="?" className="site_btn text">
						<i className="plus"></i> Add to Google Calendar
					</Link>
					<Link to="?" className="site_btn text">
						<i className="plus"></i> Add to iCalendar
					</Link>
				</div>
				<RegisterBlk {...reg_blk} />
			</div>
		</>
	);
};

export default EventDetailBlk;
