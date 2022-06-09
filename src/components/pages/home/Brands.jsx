import React from "react";

function Brands({ data }) {
	return (
		<>
			<section id="brands">
				<div className="contain text-center">
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

export default Brands;
