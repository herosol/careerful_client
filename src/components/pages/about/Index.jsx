import React from "react";
import Data from "../../dummy";
// import PageIntro from "../../common/PageIntro";
import WorkWithUs from "../../common/WorkWithUs";
import Vision from "../../common/Vision";
import Faqs from "./Faqs";
import ContactUs from "../../common/ContactUs";

const About = () => {
	const { work, vision, faq, contact } = Data.about;
	return (
		<>
			{/* <PageIntro data={page_intro} /> */}
			<WorkWithUs data={work} />
			<Vision data={vision} />
			<Faqs data={faq} />
			<ContactUs data={contact} />
		</>
	);
};

export default About;
