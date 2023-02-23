import React, {useEffect, useState} from 'react';
import {getOptions} from './stock_options'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from "highcharts/highstock";

const HighchartStock = (props) => {
	const [isLoading, setIsLoading ]= useState(true)
	const customOptions=getOptions()
	customOptions.series=[{data:props.dataPoints.data}]
	customOptions.title.text=props.title
	const startTime = new Date()
	console.log("Started loading at :", startTime)
	useEffect(() => {
		setIsLoading(false)
		const endTime = new Date()
		console.log("Time now:", endTime)
		console.log("Time elapsed for chart: ",props.id, " is: ",  endTime-startTime)
	});
	let  element
	if (isLoading) {
		element = <div>Loading...</div>
	} else {
		element = <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={customOptions}/>
	}
	return (
		<div>
			{element}
		</div>
	)
}
export default HighchartStock;
