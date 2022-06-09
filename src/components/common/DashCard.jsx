import React from "react";

const DashCard = ({ num, text }) => {
	return (
		<>
			<div className="dash_card">
				<div className="num">{num}</div>
				<strong>{text}</strong>
			</div>
		</>
	);
};

export default DashCard;
