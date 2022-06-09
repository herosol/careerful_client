import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import DashSidebar from "./DashSidebar";

function Header({ logged }) {
	const [scroll, setScroll] = useState(false);
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, [scroll]);
	const ToggleActive = () => {
		setToggle(!toggle);
	};

	return (
		<>
			{!logged ? (
				<header className={scroll ? "fix" : ""}>
					<div className="contain">
						<Logo />
						<button type="button" className={!toggle ? "toggle" : "toggle active"} onClick={() => ToggleActive(!toggle)}>
							<span></span>
						</button>
						<Navigation active={toggle} toggle={ToggleActive} logged={false} />
						<div className="clearfix"></div>
					</div>
					{toggle ? <Sidebar active={toggle} toggle={ToggleActive} className={!toggle ? "" : "active"} /> : ""}
				</header>
			) : (
				<>
					<header className="fix logged">
						<div className="contain-fluid">
							<Logo />
							<button type="button" className={!toggle ? "toggle" : "toggle active"} onClick={() => ToggleActive(!toggle)}>
								<span></span>
							</button>
							<Navigation logged={true} />
							<div className="clearfix"></div>
						</div>
					</header>
					<DashSidebar active={toggle} toggle={ToggleActive} />
				</>
			)}
		</>
	);
}

export default Header;
