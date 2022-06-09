import React from "react";
import OwlCarousel from "react-owl-carousel";
import FolioBlk from "../../common/FolioBlk";

function Folio({ data }) {
	const option = {
		margin: 0,
		loop: true,
		dots: true,
		nav: false,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			580: {
				items: 2,
			},
			991: {
				items: 3,
			},
			1200: {
				nav: true,
			},
		},
	};
	return (
		<>
			<section id="folio">
				<div className="contain">
					<div className="content text-center">
						<h2>{data.heading}</h2>
					</div>
					<OwlCarousel id="owl-folio" className="owl-carousel owl-theme" {...option}>
						{data.block.map((val) => {
							return <FolioBlk key={val.id} {...val} />;
						})}
					</OwlCarousel>
				</div>
			</section>
		</>
	);
}

export default Folio;
