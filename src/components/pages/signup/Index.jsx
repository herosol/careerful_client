import React from "react";
import Data from "../../dummy";
import Register from "./Register";

const Signup = () => {
	return (
		<>
			<Register data={Data.signup} />
		</>
	);
};

export default Signup;
