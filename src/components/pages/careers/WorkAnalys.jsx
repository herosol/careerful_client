import React from "react";
import { Link } from "react-router-dom";
import CategoryBlk from "../../common/CategoryBlk";

const WorkAnalys = ({ data }) => {
	return (
		<>
			<section id="work_analys">
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col-lg-6">
							<div className="txt">
								<h6 className="tag">{data.tag}</h6>
								<h2 className="heading">
									{data.heading}
									<span>{data.heading_ex}</span>
								</h2>
								<p>{data.para}</p>
								<div className="btn_blk">
									<Link to={data.btn_link} className="site_btn long">
										{data.btn}
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="grid_row sub_row">
								{data.block.map((val) => {
									return (
										<div className="col" key={val.id}>
											<CategoryBlk {...val} />
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WorkAnalys;
