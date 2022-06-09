import React from "react";
import FaqBlk from "../../common/FaqBlk";

const Faqs = ({ data }) => {
	return (
		<>
			<section id="faq_about">
				<div className="contain">
					<div className="content text-center">
						<h6 className="tag">{data.tag}</h6>
						<h2>{data.heading}</h2>
					</div>
					<div className="faq_lst">
						{data.block.map((val) => {
							return <FaqBlk key={val.id} {...val} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Faqs;
