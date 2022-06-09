import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navigation({ active, logged }) {
	const data = {
		noti: {
			src: "/images/icon-bell.svg",
			alt: "Bell",
		},
		pro_btn: {
			dp: "/images/01.jpg",
			alt: "DP",
		},
	};
	return (
		<>
			<nav className="ease">
				{!logged ? (
					<div id="nav" className={active ? "active" : ""}>
						<ul id="lst">
							<li className="drop">
								<NavLink to="/explore" className={({ isActive }) => (isActive ? "active" : "")}>
									Explore
								</NavLink>
								<div className="sub">
									<div className="flex_row row">
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-briefcase.svg" alt="" />
												</div>
												<div className="txt">
													<h4>Career Options</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-profile-add.svg" alt="" />
												</div>
												<div className="txt">
													<h4>Career Path set</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-message-edit.svg" alt="" />
												</div>
												<div className="txt">
													<h4>Job profiles</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="drop">
								<NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
									Learn
								</NavLink>
								<div className="sub">
									<div className="flex_row row">
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-profile-2user.svg" alt="" />
												</div>
												<div className="txt">
													<h4>UK corporate culture</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-briefcase-tick.svg" alt="" />
												</div>
												<div className="txt">
													<h4>recruitment process</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-message-text.svg" alt="" />
												</div>
												<div className="txt">
													<h4>CV & cover letter</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-user-tag.svg" alt="" />
												</div>
												<div className="txt">
													<h4>interview preperation</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-clipboard-text2.svg" alt="" />
												</div>
												<div className="txt">
													<h4>assessment center</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-judge.svg" alt="" />
												</div>
												<div className="txt">
													<h4>assessment center</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className="drop">
								<NavLink to="/practice" className={({ isActive }) => (isActive ? "active" : "")}>
									Practice
								</NavLink>
								<div className="sub">
									<div className="flex_row row">
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-keyboard-open.svg" alt="" />
												</div>
												<div className="txt">
													<h4>online test</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-briefcase-timer.svg" alt="" />
												</div>
												<div className="txt">
													<h4>on demand interviews</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-book.svg" alt="" />
												</div>
												<div className="txt">
													<h4>assessment center</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
										<div className="col-md-4">
											<div className="nav_sub_blk">
												<div className="ico">
													<img src="/images/icon-monitor-mobile.svg" alt="" />
												</div>
												<div className="txt">
													<h4>coding test</h4>
													<p>Career on-demand opportunities available for you to apply now.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<ul id="cta">
							<li>
								<Link to="/apply" className="site_btn long light stroke">
									Apply
								</Link>
							</li>
							<li>
								<Link to="/signin" className="site_btn long">
									Signup/Login
								</Link>
							</li>
						</ul>
					</div>
				) : (
					<>
						<ul id="icon_btn">
							<li id="noti">
								<Link to="/notifications">
									<img src={data.noti.src} alt={data.noti.alt} />
								</Link>
							</li>
						</ul>
						<div id="pro_btn" className="drop_down">
							<div className="name">
								Arlie Anderson <span>online</span>
							</div>
							<div className="ico fill round drop_btn">
								<img src={data.pro_btn.dp} alt={data.pro_btn.alt} />
							</div>
							<div className="drop_cnt">
								<ul className="drop_lst">
									<li>
										<Link to="/dashboard">Dashboard</Link>
									</li>
									<li>
										<Link to="/profile-settings">Profile Settings</Link>
									</li>
									<li>
										<Link to="/statistics">Statistics</Link>
									</li>
									<li>
										<Link to="/mine-subscription">Subscription</Link>
									</li>
									<li>
										<Link to="/signin">Sign out</Link>
									</li>
								</ul>
							</div>
						</div>
					</>
				)}
			</nav>
		</>
	);
}

export default Navigation;
