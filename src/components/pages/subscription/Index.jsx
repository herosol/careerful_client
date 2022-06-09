import React from "react";
import Data from "../../dummy";
import SubscriptionPlan from "./SubscriptionPlan";

const Subscription = () => {
	return (
		<>
			<SubscriptionPlan data={Data.subscription} />
		</>
	);
};

export default Subscription;
