import React from "react";
import IntroRowBlk from "../../common/IntroRowBlk";

function Intro({ data }) {
	return (
		<>
			<section id="intro">
				<div className="contain">
					<div className="content text-center">
						<h2>{data.heading}</h2>
						<p>{data.para}</p>
					</div>
					<div className="flex_row main_row">
						{data.block.map((val) => {
							return (
								<div className="col" key={val.id}>
									<IntroRowBlk val={val} />
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Intro;
