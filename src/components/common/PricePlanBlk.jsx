import React from "react";
import { Link } from "react-router-dom";

const PricePlanBlk = ({ title, price, duration, para, list_true, list_false, btn, btn_link }) => {
	return (
		<>
			<div className="plan_blk">
				<div className="txt">
					<h4 className="title">{title}</h4>
					<div className="price">
						<span>{price}</span>
						<small>{duration}</small>
					</div>
					<p>{para}</p>
					<ul>
						{list_true.map((val) => {
							return (
								<li key={val.id} className="true">
									{val.li}
								</li>
							);
						})}
						{list_false.map((val) => {
							return (
								<li key={val.id} className="false">
									{val.li}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="btn_blk text-center">
					<Link to={btn_link} className="site_btn block">
						{btn}
					</Link>
				</div>
			</div>
		</>
	);
};

export default PricePlanBlk;
