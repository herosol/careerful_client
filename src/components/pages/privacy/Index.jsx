import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import PrivacyPolicy from "./PrivacyPolicy";

const Privacy = () => {
	const { cover } = Data.privacy;
	return (
		<>
			<Cover data={cover} />
			<PrivacyPolicy />
		</>
	);
};

export default Privacy;
