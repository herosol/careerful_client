import React from "react";

const CompanyBlk = ({ src, alt, title, para }) => {
	return (
		<>
			<div className="inner">
				<div className="ico">
					<img src={src} alt={alt} />
				</div>
				<div className="txt">
					<h5>{title}</h5>
					<p>{para}</p>
				</div>
			</div>
		</>
	);
};

export default CompanyBlk;
