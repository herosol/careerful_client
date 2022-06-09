import React, { useState } from "react";
import Data from "../dummy";

const SearchBar = () => {
	const { icon, icon_alt, btn, flag, flag_alt } = Data.srch_bar;
	const [formVal, setFormVal] = useState({
		search: "",
	});
	const inputHandle = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormVal({ ...formVal, [name]: value });
	};
	return (
		<>
			<form action="" method="POST" onSubmit={inputHandle} id="srch_bar">
				<div className="inside input">
					<div className="flag_blk d-inline-flex align-items-center">
						UK <img src={flag} alt={flag_alt} />
					</div>
					<div className="form_blk">
						<img src={icon} alt={icon_alt} />
						<input type="text" name="search" id="search" value={formVal.search} onChange={inputHandle} className="input" placeholder="Job, Company, Location" autoComplete="off" />
					</div>
					<button type="submit" className="site_btn">
						{btn}
					</button>
				</div>
			</form>
		</>
	);
};

export default SearchBar;
