import React from "react";

const PageIntro = ({ data }) => {
	return (
		<>
			<section id="about">
				<div className="contain text-center">
					<div className="content">
						<h1 className="heading">
							{data.heading} <span>{data.heading_ex}</span>
						</h1>
						<p className="size_5">{data.para}</p>
					</div>
					<div className="fig">
						<img src={data.src} alt={data.alt} />
					</div>
				</div>
			</section>
		</>
	);
};

export default PageIntro;
