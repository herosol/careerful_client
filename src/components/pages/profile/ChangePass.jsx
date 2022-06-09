import React, { useState } from "react";

const ChangePass = ({ val }) => {
	const [pass, setPass] = useState(false);
	const [formVal, setFormVal] = useState({
		pass: "",
		new_pass: "",
		confirm_pass: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	const passView = () => {
		setPass(!pass);
	};
	return (
		<>
			<div className="top_head">
				<h4 className="heading">{val.heading}</h4>
				<div className="info">
					<strong></strong>
					<div className="infoIn">
						<p>Your password must contain the following:</p>
						<ul>
							<li>At least 8 characters in length (a strong password has at least 8 characters)</li>
							<li>At least 1 capital letter, 1 small letter, 1 number and 1 symbol.</li>
						</ul>
					</div>
				</div>
			</div>
			<form action="" method="POST" onSubmit={inputHandle}>
				<div className="form_row row">
					<div className="col-sm-4 col-xs-12">
						<div className="form_blk pass_blk">
							<input type={!pass ? "password" : "text"} name="pass" id="pass" value={formVal.pass} onChange={inputHandle} className="input" placeholder="Current password" />
							<i className={!pass ? "icon-eye" : "icon-eye-slash"} onClick={passView}></i>
						</div>
					</div>
					<div className="col-sm-4 col-xs-12">
						<div className="form_blk pass_blk">
							<input type={!pass ? "password" : "text"} name="new_pass" id="new_pass" value={formVal.new_pass} onChange={inputHandle} className="input" placeholder="New password" />
							<i className={!pass ? "icon-eye" : "icon-eye-slash"} onClick={passView}></i>
						</div>
					</div>
					<div className="col-sm-4 col-xs-12">
						<div className="form_blk pass_blk">
							<input type={!pass ? "password" : "text"} name="confirm_pass" id="confirm_pass" value={formVal.confirm_pass} onChange={inputHandle} className="input" placeholder="Confirm new password" />
							<i className={!pass ? "icon-eye" : "icon-eye-slash"} onClick={passView}></i>
						</div>
					</div>
				</div>
				<div className="btn_blk form_btn">
					<button type="submit" className="site_btn lg long">
						Change Password
					</button>
				</div>
			</form>
		</>
	);
};

export default ChangePass;
