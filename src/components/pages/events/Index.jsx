import React from "react";
import Data from "../../dummy";
import AllEvents from "./AllEvents";

const Events = () => {
	return (
		<>
			<AllEvents data={Data.events} />
		</>
	);
};

export default Events;
