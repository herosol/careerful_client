import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../common/SearchBar";
import DashCard from "../../common/DashCard";
import JobBlk from "../../common/JobBlk";
import EventMiniBlk from "../../common/EventMiniBlk";

const Account = ({ data }) => {
	return (
		<>
			<section id="dash">
				<div className="contain-fluid">
					<SearchBar />
					<div className="br"></div>
					<h4 className="heading">{data.heading_01}</h4>
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
					<div className="top_head">
						<h4 className="heading">{data.heading_02}</h4>
					</div>
					<div className="flex_row event_row row">
						{data.events.map((val) => {
							return (
								<div className="col col-md-6" key={val.id}>
									<EventMiniBlk {...val} />
								</div>
							);
						})}
					</div>
					<div className="br"></div>
					<div className="br"></div>
					<div className="top_head">
						<h4 className="heading">{data.heading_03}</h4>
						<div className="btn_blk">
							<Link to={data.btn_link} className="site_btn">
								{data.btn}
								<i className="plus"></i>
							</Link>
						</div>
					</div>
					{data.jobs.map((val) => {
						return <JobBlk {...val} key={val.id} admin={true} />;
					})}
				</div>
			</section>
		</>
	);
};

export default Account;
