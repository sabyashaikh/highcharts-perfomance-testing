import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { onChartRender } from "../../helper";
import {getOptions} from "./scatter_options";

const HighchartScatter = (props) => {
	const [isLoading, setIsLoading ]= useState(true)
	const customOptions=getOptions()
	customOptions.series[0].data=props.dataPoints.data
	customOptions.title.text=props.title
	const startTime = new Date()
	console.log("Started loading at :", startTime)
	useEffect(() => {
		setIsLoading(false)
		const endTime = new Date()
		//console.log("Done loading chart: ", props.id , " at ", endTime )
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
export default HighchartScatter;
