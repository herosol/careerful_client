import React from "react";
// import { Link } from "react-router-dom";

function SocialLinks() {
	return (
		<>
			<ul className="social_links">
				<li>
					<a href="?" target="_blank" rel="noreferrer">
						<img src="/images/social-facebook.svg" alt="" />
					</a>
				</li>
				<li>
					<a href="?" target="_blank" rel="noreferrer">
						<img src="/images/social-instagram.svg" alt="" />
					</a>
				</li>
				<li>
					<a href="?" target="_blank" rel="noreferrer">
						<img src="/images/social-youtube.svg" alt="" />
					</a>
				</li>
				<li>
					<a href="?" target="_blank" rel="noreferrer">
						<img src="/images/social-twitter.svg" alt="" />
					</a>
				</li>
			</ul>
		</>
	);
}

export default SocialLinks;
