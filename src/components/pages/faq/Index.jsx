import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import Accordion from "./Accordion";

const Faq = () => {
	const { cover, accordion } = Data.faq;
	return (
		<>
			<Cover data={cover} />
			<Accordion data={accordion} />
		</>
	);
};

export default Faq;
