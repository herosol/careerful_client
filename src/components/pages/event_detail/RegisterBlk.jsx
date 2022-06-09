import React, { useState } from "react";
import PopupRegister from "../../common/PopupRegister";
// import { Link } from "react-router-dom";

const RegisterBlk = ({ title, subtitle, para, price, price_limit, btn, btn_link }) => {
	const [state, setState] = useState({
		PopupRegister: false,
	});
	const showPopupRegister = () => {
		// console.log("ok");
		setState({ ...state, PopupRegister: true });
	};
	const closePopupRegister = () => {
		setState({ ...state, PopupRegister: false });
	};
	return (
		<>
			<div className="reg_blk">
				<h3>{title}</h3>
				<div className="data flex flex-nowrap justify-content-between">
					<div className="txt">
						<h5 className="color mb-0">{subtitle}</h5>
						<p>{para}</p>
					</div>
					{/* <div className="price text-end lh-1 ms-2">
						<strong className="color size_5">{price}</strong>
						<br />
						<small>{price_limit}</small>
					</div> */}
				</div>
				<div className="btn_blk text-right">
					{/* <Link to={btn_link} className="site_btn long">
						{btn}
					</Link> */}
					<button type="button" className="site_btn long" onClick={showPopupRegister}>
						{btn}
					</button>
				</div>
			</div>

			{state.PopupRegister === true ? <PopupRegister close={closePopupRegister} /> : ""}
		</>
	);
};

export default RegisterBlk;
