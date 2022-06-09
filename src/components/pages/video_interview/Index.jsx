import React from "react";
import Data from "../../dummy";
import Interview from "./Interview";

const VideoInterview = () => {
	return (
		<>
			<Interview data={Data.interview} />
		</>
	);
};

export default VideoInterview;
