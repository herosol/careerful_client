import React from "react";

const TopBar = ({ data, firstStepDone, secondStepDone, thirdStepDone }) => {
	return (
		<>
			<ul className="top_bar">
				<li className={firstStepDone ? "active" : ""}>
					<div className="icon">{data[0].num}</div>
					<strong>{data[0].text}</strong>
				</li>
				<li className={secondStepDone ? "active" : ""}>
					<div className="icon">{data[1].num}</div>
					<strong>{data[1].text}</strong>
				</li>
				<li className={thirdStepDone ? "active" : ""}>
					<div className="icon">{data[2].num}</div>
					<strong>{data[2].text}</strong>
				</li>
			</ul>
		</>
	);
};

export default TopBar;
