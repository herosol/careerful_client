import React from "react";

const Vision = ({ data }) => {
	return (
		<>
			<section id="vision">
				<div className="contain">
					<div className="content text-center">
						<h6 className="tag">{data.tag}</h6>
						<h2>{data.heading}</h2>
					</div>
					<div className="flex_row main_row row center">
						{data.block.map((val) => {
							return (
								<div className="col col-lg-3 col-md-6" key={val.id}>
									<div className="vision_blk">
										<div className="ico">
											<img src={val.src} alt={val.alt} />
										</div>
										<div className="txt">
											<h4>{val.title}</h4>
											<p>{val.para}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Vision;
