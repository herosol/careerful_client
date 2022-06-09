import React from "react";
import Data from "../../dummy";
import Logon from "./Logon";

const Signin = () => {
	return (
		<>
			<Logon data={Data.signin} />
		</>
	);
};

export default Signin;
