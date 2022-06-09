import React, { useState } from "react";

function PopupRegister(props) {
	const [showPass, setShowPass] = useState(false);
	const [formVal, setFormVal] = useState({
		email: "",
		password: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	const passBtn = () => {
		setShowPass(!showPass);
	};
	return (
		<>
			<section className="popup sm" style={{ display: "block" }}>
				<div className="table_dv">
					<div className="table_cell">
						<div className="contain">
							<div className="_inner">
								<button type="button" className="x_btn" onClick={props.close}></button>
								<h3>Register</h3>
								<form action="" method="POST" onSubmit={inputHandle}>
									<div className="form_row row">
										<div className="col-sm-12">
											<h5>First Name</h5>
											<div className="form_blk">
												<input type="text" name="fname" id="fname" value={formVal.fname} onChange={inputHandle} className="input" placeholder="eg: John" />
											</div>
										</div>
										<div className="col-sm-12">
											<h5>Last Name</h5>
											<div className="form_blk">
												<input type="text" name="lname" id="lname" value={formVal.lname} onChange={inputHandle} className="input" placeholder="eg: Wick" />
											</div>
										</div>
										<div className="col-sm-12">
											<h5>Email Address</h5>
											<div className="form_blk">
												<input type="text" name="email" id="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="eg: sample@gmail.com" />
											</div>
										</div>
										<div className="col-sm-12">
											<h5>Password</h5>
											<div className="form_blk pass_blk">
												<input type={!showPass ? "password" : "text"} name="password" id="password" value={formVal.password} onChange={inputHandle} className="input" placeholder="eg: PassLogin%7" />
												<i className={!showPass ? "icon-eye" : "icon-eye-slash"} onClick={passBtn}></i>
											</div>
										</div>
									</div>
									<div className="btn_blk form_btn form_blk">
										<button type="submit" className="site_btn block">
											Save Now
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default PopupRegister;
