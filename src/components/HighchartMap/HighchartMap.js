import React, {useEffect, useState} from 'react';
import HighchartsReact from 'highcharts-react-official'
import {getOptions} from "./map_options";
import Highcharts from "highcharts/";
import HC_map from "highcharts/modules/map";
HC_map(Highcharts)
const HighchartMap = (props) => {
	const [isLoading, setIsLoading ]= useState(true)
	const customOptions=getOptions()
	const startTime = new Date()
	console.log("Started loading at :", startTime)
	useEffect(() => {
		setIsLoading(false)
		const endTime = new Date()
		console.log("Time elapsed for chart: ",props.id, " is: ",  (endTime-startTime/1000))
	});
	let  element
	if (isLoading) {
		element = <div>Loading...</div>
	} else {
		element = <HighchartsReact highcharts={Highcharts} constructorType={'mapChart'} options={customOptions}/>
	}
	return (
		<div>
			{element}
		</div>
	)
}
export default HighchartMap;
