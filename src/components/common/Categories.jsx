import React from "react";
import CategoryBlk from "./CategoryBlk";

function Categories({ data }) {
	return (
		<>
			<section id="categories">
				<div className="contain">
					<div className="content text-center">
						<h6 className="tag">{data.tag}</h6>
						<h2>{data.heading}</h2>
					</div>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<CategoryBlk {...val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Categories;
