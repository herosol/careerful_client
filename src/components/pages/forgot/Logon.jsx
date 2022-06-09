import React, { useState } from "react";
import { Link } from "react-router-dom";

const Logon = ({ data }) => {
	const { log, side } = data;
	const [showPass, setShowPass] = useState(false);
	const [formVal, setFormVal] = useState({
		password: "",
		rep_password: "",
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
			<section id="logon" style={{ backgroundImage: "url(" + data.sec_bg + ")" }}>
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col col-lg-4">
							<div className="content">
								<h6 className="tag">{side.tag}</h6>
								<h2 className="heading">{side.title}</h2>
								<p>{side.para}</p>
								<div className="account">
									{side.account}
									<Link to={side.account_link}>{side.account_link_txt}</Link>
								</div>
							</div>
						</div>
						<div className="col col-lg-5">
							<div className="in_col">
								<form action="" method="POST" onSubmit={inputHandle}>
									<div className="log_blk">
										<div className="txt">
											<h2>{log.title}</h2>
											<p>{log.para}</p>
										</div>
										<div className="form_row row">
											<div className="col-sm-12">
												<h5>New Password</h5>
												<div className="form_blk pass_blk">
													<input type={!showPass ? "password" : "text"} name="password" id="password" value={formVal.password} onChange={inputHandle} className="input" placeholder="eg: PassLogin%7" />
													<i className={!showPass ? "icon-eye" : "icon-eye-slash"} onClick={passBtn}></i>
												</div>
											</div>
											<div className="col-sm-12">
												<h5>Repeat Password</h5>
												<div className="form_blk pass_blk">
													<input type={!showPass ? "password" : "text"} name="rep_password" id="rep_password" value={formVal.rep_password} onChange={inputHandle} className="input" placeholder="eg: PassLogin%7" />
													<i className={!showPass ? "icon-eye" : "icon-eye-slash"} onClick={passBtn}></i>
												</div>
											</div>
										</div>
										<div className="btn_blk form_btn form_blk">
											<button type="submit" className="site_btn block">
												Save Now
											</button>
										</div>
										<div className="forgot">
											{log.forget}
											<Link to={log.forget_link}>{log.forget_link_txt}</Link>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Logon;
