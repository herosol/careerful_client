import React, { useState } from "react";

function Newsletter() {
	const [formVal, setFormVal] = useState({
		email: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<div className="subscribe">
				<span>Subscribe to keep update on new products, offers and more.</span>
				<form action="" method="POST" onSubmit={inputHandle}>
					<input type="text" name="email" id="email" value={formVal.email} onChange={inputHandle} className="input" placeholder="Enter Email Address" />
					<button type="submit">
						<img src="/images/icon-send.svg" alt="" />
					</button>
				</form>
			</div>
		</>
	);
}

export default Newsletter;
