import React from "react";
import SearchBar from "../../common/SearchBar";

function Banner({ data }) {
	return (
		<>
			<section id="banner">
				<div className="contain">
					<div className="flex_blk">
						<div className="content">
							{/* <h6 className="tag">{data.tag}</h6> */}
							<h1 className="heading">
								{data.heading} <span>{data.heading_ex}</span>
							</h1>
							<p className="size_5">{data.para}</p>
							<SearchBar />
							<div className="users_blk">
								<strong>{data.user.title}</strong>
								<ul>
									{data.user.ul.map((val) => {
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
						</div>
						<div id="video_blk">
							<div className="vid_blk">
								<video autoPlay loop muted playsInline>
									<source src={data.video} type="video/mp4" />
								</video>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Banner;
