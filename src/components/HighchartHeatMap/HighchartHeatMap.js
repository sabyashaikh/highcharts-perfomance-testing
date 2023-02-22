import React, {useEffect, useState} from 'react';
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import {onChartRender} from "../../helper";
import {getOptions} from "./heatmap_options";

HighchartsHeatmap(Highcharts);
const HighchartHeatMap = (props) => {
	const [isLoading, setIsLoading ]= useState(true)
	const customOptions=getOptions()
	customOptions.title.text=props.title
	customOptions.series[0].data=props.dataPoints.data
	const startTime = new Date()
	console.log("Started loading at :", startTime, customOptions)
	useEffect(() => {
		setIsLoading(false)
		const endTime = new Date()
		console.log("Time elapsed for chart: ",props.id, " is: ",  endTime-startTime)
	},[]);
	let  element
	if (isLoading) {
		element = <div>Loading...</div>
	} else {
		element = <HighchartsReact highcharts={Highcharts} options={customOptions}/>
	}
	return (
		<div>
			{element}
		</div>
	)
}
export default HighchartHeatMap;
