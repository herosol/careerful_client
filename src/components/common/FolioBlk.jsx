import React from "react";

const FolioBlk = ({ src, alt, name, label, para, btn }) => {
	return (
		<>
			<div className="folio_blk">
				<div className="ico fill round">
					<img src={src} alt={alt} />
				</div>
				<div className="txt">
					<h4>
						{name} <span>{label}</span>
					</h4>
					<p>{para}</p>
					<div className="btn_blk">
						<button className="site_btn text learn">
							{btn} <i className="arrow"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FolioBlk;
