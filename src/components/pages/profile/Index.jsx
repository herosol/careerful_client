import React from "react";
import Data from "../../dummy";
import Settings from "./Settings";

const Profile = () => {
	return (
		<>
			<Settings data={Data.settings} />
		</>
	);
};

export default Profile;
