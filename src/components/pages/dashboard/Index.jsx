import React from "react";
import Data from "../../dummy";
import Account from "./Account";

const Dashboard = () => {
	return (
		<>
			<Account data={Data.dashboard} />
		</>
	);
};

export default Dashboard;
