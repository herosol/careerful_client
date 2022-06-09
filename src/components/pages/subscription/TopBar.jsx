import React from "react";
import { Link } from "react-router-dom";

const TopBar = ({ title, para, btn_01, btn_link_01, btn_02, btn_link_02 }) => {
	return (
		<>
			<div className="top_bar">
				<div className="txt">
					<h3 className="color">{title}</h3>
					<p>{para}</p>
				</div>
				<div className="btn_blk flex-md-nowrap ms-md-5">
					<Link to={btn_link_01} className="site_btn long">
						{btn_01}
					</Link>
					<Link to={btn_link_02} className="site_btn long blank stroke">
						{btn_02}
					</Link>
				</div>
			</div>
		</>
	);
};

export default TopBar;
