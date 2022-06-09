import React from "react";
import Data from "../../dummy";
import Appointment from "./Appointment";

const Booking = () => {
	return (
		<>
			<Appointment data={Data.booking} />
		</>
	);
};

export default Booking;
