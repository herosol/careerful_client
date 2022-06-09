import React from "react";
import CompanyBlk from "./CompanyBlk";

function Companies({ data }) {
	return (
		<>
			<section id="companies">
				<div className="contain">
					<div className="content text-center">
						<h6 className="tag">{data.tag}</h6>
						<h2>{data.heading}</h2>
					</div>
					<div className="flex_row main_row row center">
						{data.block.map((val) => {
							return (
								<div className="col col-lg-4 col-md-6" key={val.id}>
									<CompanyBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Companies;
