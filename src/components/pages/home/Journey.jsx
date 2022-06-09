import React, { useState } from "react";
import Slider from "react-slick";
import FaqBlk from "../../common/FaqBlk";

const Journey = ({ data }) => {
	const [slider, setSlider] = useState();
	const [thumbs, setThumbs] = useState();
	const settings = {
		arrows: false,
		infinite: true,
		vertical: true,
		verticalSwiping: true,
		focusOnSelect: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	const settings_thumb = {
		arrows: false,
		infinite: true,
		fade: true,
		draggable: false,
		swipe: false,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<section id="journey">
				<div className="contain">
					<div className="content text-center">
						<h2 className="heading">{data.heading}</h2>
					</div>
					<div className="flex_row main_row row">
						<div className="col col-lg-6 pe-lg-5">
							{/* <div className="faq_lst">
								{data.block.map((val) => {
									return <FaqBlk {...val} key={val.id} />;
								})}
							</div> */}
							<div id="slick-journey" className="faq_lst">
								<Slider {...settings} asNavFor={thumbs} ref={(slider1) => setSlider(slider1)}>
									{data.block.map((val) => {
										return (
											<div className="item" key={val.id}>
												<FaqBlk {...val} />
											</div>
										);
									})}
								</Slider>
							</div>
							{/* <div id="slick-journey">
								<Slider {...settings} asNavFor={thumbs} ref={(slider1) => setSlider(slider1)}>
									{data.slider.map((val) => {
										return (
											<div className="item" key={val.id}>
												<div className="inner">
													<h4>{val.title}</h4>
													<p>{val.para}</p>
												</div>
											</div>
										);
									})}
								</Slider>
							</div> */}
						</div>
						<div className="col col-lg-6 ps-lg-5">
							<div id="slick-journey-thumbs">
								<Slider {...settings_thumb} asNavFor={slider} ref={(slider2) => setThumbs(slider2)}>
									{data.thumbs.map((val) => {
										return (
											<div className="item" key={val.id}>
												<div className="fig">
													<img src={val.src} alt={val.alt} />
												</div>
											</div>
										);
									})}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Journey;
