import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import TermsConditions from "./TermsConditions";

const Terms = () => {
	const { cover } = Data.terms;
	return (
		<>
			<Cover data={cover} />
			<TermsConditions />
		</>
	);
};

export default Terms;
