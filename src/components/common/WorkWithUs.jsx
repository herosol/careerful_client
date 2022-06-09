import React from "react";
import IntroRowBlk from "./IntroRowBlk";

const WorkWithUs = ({ data }) => {
	return (
		<>
			<section id="work">
				<div className="contain">
					<IntroRowBlk val={data} btnView={true} />
				</div>
			</section>
		</>
	);
};

export default WorkWithUs;
