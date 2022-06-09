import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import Disclaimer from "./Disclaimer";

const Disclaim = () => {
	const { cover } = Data.disclaim;
	return (
		<>
			<Cover data={cover} />
			<Disclaimer />
		</>
	);
};

export default Disclaim;
