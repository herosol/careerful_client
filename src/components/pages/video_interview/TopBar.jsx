import React from "react";

const TopBar = ({ data, firstStepDone, secondStepDone, thirdStepDone, fourthStepDone, fifthStepDone, sixthStepDone }) => {
	return (
		<>
			<ul className="top_bar justify-content-center">
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
				<li className={fourthStepDone ? "active" : ""}>
					<div className="icon">{data[3].num}</div>
					<strong>{data[3].text}</strong>
				</li>
				<li className={fifthStepDone ? "active" : ""}>
					<div className="icon">{data[4].num}</div>
					<strong>{data[4].text}</strong>
				</li>
				<li className={sixthStepDone ? "active" : ""}>
					<div className="icon">{data[5].num}</div>
					<strong>{data[5].text}</strong>
				</li>
			</ul>
		</>
	);
};

export default TopBar;
