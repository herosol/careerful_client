import React from "react";
import Data from "../../dummy";
import Stats from "./Stats";

const Statistics = () => {
	return (
		<>
			<Stats data={Data.stats} />
		</>
	);
};

export default Statistics;
