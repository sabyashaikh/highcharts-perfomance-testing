import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {getOptions} from "./combo_options";

const HighchartCombo = (props) => {
	const [isLoading, setIsLoading ]= useState(true)
	const customOptions=getOptions()
	customOptions.series=props.dataPoints.data
	customOptions.title.text=props.title
	const startTime = new Date()
	console.log("Started loading at :", startTime)
	useEffect(() => {
		setIsLoading(false)
		const endTime = new Date()
		console.log("Time elapsed for chart: ",props.id, " is: ",  endTime-startTime)
	});
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
export default HighchartCombo;
