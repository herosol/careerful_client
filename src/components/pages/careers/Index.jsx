import React from "react";
import Data from "../../dummy";
import CareerPath from "./CareerPath";
import Vision from "../../common/Vision";
import Strip from "../../common/Strip";
import WorkAnalys from "./WorkAnalys";

const Careers = () => {
	const { career_path, vision, work_analys, strip } = Data.careers;
	return (
		<>
			<CareerPath data={career_path} />
			<Vision data={vision} />
			<Strip data={strip} />
			<WorkAnalys data={work_analys} />
		</>
	);
};

export default Careers;
