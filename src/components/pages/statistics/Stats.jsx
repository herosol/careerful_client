import React from "react";
import SearchBar from "../../common/SearchBar";
import DashCard from "../../common/DashCard";
import ChartNationality from "./ChartNationality";
import ChartCurrent from "./ChartCurrent";
import ChartDegree from "./ChartDegree";
import ChartYear from "./ChartYear";
import ChartOpportunity from "./ChartOpportunity";
import ChartIndustry from "./ChartIndustry";

const Stats = ({ data }) => {
	return (
		<>
			<section id="stats">
				<div className="contain-fluid">
					<SearchBar />
					<div className="br"></div>
					<h4 className="heading">{data.heading}</h4>
					<div className="flex_row card_row">
						{data.card.map((val) => {
							return (
								<div className="col" key={val.id}>
									<DashCard {...val} />
								</div>
							);
						})}
					</div>
					<div className="br"></div>
					<div className="br"></div>
					<div className="flex_row chart_row row">
						<div className="col col-md-6">
							<div className="in_col">
								<h4 className="heading">{data.chart_title_01}</h4>
								<ChartNationality />
							</div>
						</div>
						<div className="col col-md-6">
							<div className="in_col">
								<h4 className="heading">{data.chart_title_02}</h4>
								<ChartCurrent />
							</div>
						</div>
						<div className="col col-md-6">
							<div className="in_col">
								<h4 className="heading">{data.chart_title_03}</h4>
								<ChartDegree />
							</div>
						</div>
						<div className="col col-md-6">
							<div className="in_col">
								<h4 className="heading">{data.chart_title_04}</h4>
								<ChartYear />
							</div>
						</div>
						<div className="col col-md-6">
							<div className="in_col">
								<h4 className="heading">{data.chart_title_05}</h4>
								<ChartOpportunity />
							</div>
						</div>
						<div className="col col-md-6">
							<div className="in_col">
								<h4 className="heading">{data.chart_title_06}</h4>
								<ChartIndustry />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Stats;
