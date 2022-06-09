import React from "react";
import TopBar from "./TopBar";
import PricePlanBlk from "../../common/PricePlanBlk";

const SubscriptionPlan = ({ data }) => {
	return (
		<>
			<section id="subscription">
				<div className="contain-fluid">
					<h4 className="heading">{data.heading_01}</h4>
					<TopBar {...data.top_bar} />
					<div className="br"></div>
					<div className="br"></div>
					<h4 className="heading">{data.heading_02}</h4>
					<div className="flex_row main_row row">
						{data.block.map((val) => {
							return (
								<div className="col col-xl-4" key={val.id}>
									<PricePlanBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default SubscriptionPlan;
