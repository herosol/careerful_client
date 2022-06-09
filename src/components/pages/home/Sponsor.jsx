import React from "react";

function Sponsor({ data }) {
	return (
		<>
			<section id="sponsor">
				<div className="contain text-center">
					<div className="content">
						<h2>{data.heading}</h2>
					</div>
					<ul className="brand_lst">
						{data.icons.map((val) => {
							return (
								<li key={val.id}>
									<div className="ico">
										<img src={val.src} alt={val.alt} />
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Sponsor;
