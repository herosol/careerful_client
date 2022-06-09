import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
	chart: {
		type: "column",
	},
	title: {
		text: "",
	},
	subtitle: {
		text: "",
	},
	xAxis: {
		categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		crosshair: true,
	},
	yAxis: {
		min: 0,
		title: "",
	},
	tooltip: {
		shared: true,
		useHTML: true,
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0,
		},
	},
	colors: ["#6131d8", "#19cba6"],
	series: [
		{
			name: "Mild",
			data: [176.0, 135.6, 148.5, 216.4, 194.1, 49.9, 71.5, 106.4, 129.2, 144.0, 95.6, 54.4],
		},
		{
			name: "Severe",
			data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
		},
	],
};

const ChartYear = () => {
	return (
		<>
			<div className="blk">
				<HighchartsReact highcharts={Highcharts} options={options} />
			</div>
		</>
	);
};

export default ChartYear;
