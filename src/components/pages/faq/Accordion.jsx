import React from "react";
import FaqBlk from "../../common/FaqBlk";

const Accordion = ({ data }) => {
	return (
		<>
			<section id="faq">
				<div className="contain">
					<div className="faq_lst">
						{data.block.map((val) => {
							return <FaqBlk {...val} key={val.id} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Accordion;
