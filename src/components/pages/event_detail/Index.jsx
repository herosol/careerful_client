import React from "react";
import Data from "../../dummy";
import Detail from "./Detail";

const EventDetail = (props) => {
	return (
		<>
			<Detail data={Data.event_detail} show={props.popup} />
		</>
	);
};

export default EventDetail;
