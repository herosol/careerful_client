import React from "react";

const CategoryBlk = ({ src, alt, title }) => {
	return (
		<>
			<div className="category_blk">
				<div className="ico">
					<img src={src} alt={alt} />
				</div>
				<div className="txt">
					<h5>{title}</h5>
				</div>
			</div>
		</>
	);
};

export default CategoryBlk;
