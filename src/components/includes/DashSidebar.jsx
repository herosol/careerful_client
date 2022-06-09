import React from "react";
import { NavLink } from "react-router-dom";

const data = {
	list: [
		{
			id: 1,
			src: "/images/icon-dashboard.svg",
			alt: "Dashboard",
			btn: "Dashboard",
			btn_link: "/dashboard",
			sub: [],
		},
		{
			id: 2,
			src: "/images/icon-layers.svg",
			alt: "Explore",
			btn: "Explore",
			btn_link: "/explore",
			sub: [
				{
					id: 1,
					btn: "Call details",
					btn_link: "/call-details",
				},
				{
					id: 2,
					btn: "Agent productivity",
					btn_link: "/agent-productivity",
				},
				{
					id: 3,
					btn: "Queue details",
					btn_link: "/queue-details",
				},
				{
					id: 4,
					btn: "Abandoned calls",
					btn_link: "/abandoned-calls",
				},
			],
		},
		{
			id: 3,
			src: "/images/icon-book2.svg",
			alt: "Learn",
			btn: "Learn",
			btn_link: "/learn",
			sub: [
				{
					id: 1,
					btn: "Call details",
					btn_link: "/call-details",
				},
				{
					id: 2,
					btn: "Agent productivity",
					btn_link: "/agent-productivity",
				},
				{
					id: 3,
					btn: "Queue details",
					btn_link: "/queue-details",
				},
				{
					id: 4,
					btn: "Abandoned calls",
					btn_link: "/abandoned-calls",
				},
			],
		},
		{
			id: 4,
			src: "/images/icon-mouse-circle.svg",
			alt: "Practice",
			btn: "Practice",
			btn_link: "/practice",
			sub: [],
		},
		{
			id: 5,
			src: "/images/icon-document.svg",
			alt: "Apply",
			btn: "Apply",
			btn_link: "/apply",
			sub: [],
		},
	],
};

const DashSidebar = ({ active, toggle }) => {
	return (
		<>
			<aside id="dash_sidebar" className={active ? "active" : ""}>
				<div className="inside">
					<ul className="list">
						{data.list.map((val) => {
							return (
								<li key={val.id}>
									<NavLink to={val.btn_link} onClick={toggle}>
										<img src={val.src} alt={val.alt} />
										{val.btn}
									</NavLink>
									<ul className="sub">
										{val.sub.map((val) => {
											return (
												<li key={val.id}>
													<NavLink to={val.btn_link}>{val.btn}</NavLink>
												</li>
											);
										})}
									</ul>
								</li>
							);
						})}
					</ul>
				</div>
			</aside>
		</>
	);
};

export default DashSidebar;
