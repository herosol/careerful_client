import React from "react";
import Data from "../../dummy";
import PageIntro from "../../common/PageIntro";
import Vision from "../../common/Vision";
// import Categories from "../../common/Categories";
import Faqs from "./Faqs";
import Companies from "../../common/Companies";
import Strip from "../../common/Strip";

const Work = () => {
	const { page_intro, vision, faq, companies, strip } = Data.work;
	return (
		<>
			<PageIntro data={page_intro} />
			<Vision data={vision} />
			{/* <Categories data={categories} /> */}
			<Faqs data={faq} />
			<Companies data={companies} />
			<Strip data={strip} />
		</>
	);
};

export default Work;
