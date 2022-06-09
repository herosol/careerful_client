import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import SocialLinks from "./SocialLinks";

function Footer() {
	const data = {
		list_01: [
			{
				id: 1,
				icon: "/images/icon-location.svg",
				alt: "Location",
				text: "Kemp House, 152 - 160 City Road, London, EC1V 2NX",
				// link: "",
			},
			{
				id: 2,
				icon: "/images/icon-sms-tracking.svg",
				alt: "Envelope",
				text: "support@ukvisajobs.com",
				link: "mailto:support@ukvisajobs.com",
			},
			{
				id: 3,
				icon: "/images/icon-call-incoming.svg",
				alt: "Phone",
				text: "0112-345-345-5544",
				link: "tel:0112-345-345-5544",
			},
		],
		list_02: [
			{
				id: 1,
				text: "Experienced Hire Jobs",
				link: "/hire-jobs",
			},
			{
				id: 2,
				text: "Students & Graduate Jobs",
				link: "/jobs",
			},
			{
				id: 3,
				text: "Resources",
				link: "/resources",
			},
			{
				id: 4,
				text: "About us",
				link: "/about",
			},
		],
		list_03: [
			{
				id: 1,
				text: "Blogs & News",
				link: "/blog",
			},
			{
				id: 2,
				text: "Recent Activities",
				link: "/recent-activities",
			},
			{
				id: 3,
				text: "eBook and Papers",
				link: "/ebook-and-papers",
			},
			{
				id: 4,
				text: "Images and Update",
				link: "/images-and-update",
			},
		],
		sm_list: [
			{
				id: 1,
				text: "Privacy Policy",
				link: "/privacy-policy",
			},
			{
				id: 2,
				text: "Terms & conditions",
				link: "/terms-conditions",
			},
			{
				id: 3,
				text: "Disclaimer",
				link: "/disclaimer",
			},
		],
		para: "This design is intellectual property of Ilghar Consulting Limited. It should not be copied or reproduced to be used for any purposes other than supporting the web development for Ilghar Consulting Limited (Careeful). Ilghar Consulting Limited will constantly engage with external parties to prevent copy right violations.",
		copyright: {
			start: "Copyright © 2022 ",
			mid: "Emissary Recruiting Solutions, Inc.",
			last: "All rights reserved.",
		},
	};
	return (
		<>
			<footer>
				<div className="contain">
					<div className="flex_row main_row row">
						<div className="col-lg">
							<div className="in_col">
								<h4>Career Guide</h4>
								<ul className="list info_list">
									{data.list_01.map((val) => {
										return (
											<li key={val.id}>
												<img src={val.icon} alt={val.alt} />
												<a href={val.link}>{val.text}</a>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col-lg">
							<div className="in_col">
								<h4>Quick Links</h4>
								<ul className="list">
									{data.list_02.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col-lg">
							<div className="in_col">
								<h4>Resources</h4>
								<ul className="list">
									{data.list_03.map((val) => {
										return (
											<li key={val.id}>
												<Link to={val.link}>{val.text}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
						<div className="col-xl-4">
							<div className="in_col">
								<Newsletter />
							</div>
						</div>
					</div>
					<p className="small mt-5 pt-5 mb-0">{data.para}</p>
					<hr />
					<ul className="sm_list">
						{data.sm_list.map((val) => {
							return (
								<li key={val.id}>
									<Link to={val.link}>{val.text}</Link>
								</li>
							);
						})}
					</ul>
					<div className="copyright">
						<p className="text-center">
							{data.copyright.start} <Link to="/">{data.copyright.mid}</Link> {data.copyright.last}
						</p>
						<SocialLinks />
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
