import HighchartHeatMap from "../components/HighchartHeatMap/HighchartHeatMap";
import {Link, useParams,} from "react-router-dom";


const Heatmap = () => {
    let { id } = useParams();
    let dataPoints =  require("../components/HighchartHeatMap/heat_map_data_points_1k.json")
    if (id==="300") {
        dataPoints = require("../components/HighchartHeatMap/heat_map_data_points_300k.json")
    }else if(id==="100"){
        dataPoints = require("../components/HighchartHeatMap/heat_map_data_points_100k.json")
    }else if(id==="50"){
        dataPoints = require("../components/HighchartHeatMap/heat_map_data_points_50k.json")
    }else if(id==="1"){
        dataPoints = require("../components/HighchartHeatMap/heat_map_data_points_1k.json")
    }
    return (
        <>
            Heatmaps
            <nav>
                <ul>
                    <li>
                        <Link to="/heatmap/1">1k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/heatmap/50">50k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/heatmap/100">100k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/heatmap/300">300k datapoints</Link>
                    </li>
                </ul>
            </nav>
            <HighchartHeatMap
                id="Single heatmap"
                dataPoints={{'data':dataPoints}}
                title='HeatMap chart with varying data-points'
            ></HighchartHeatMap>
        </>
    );
}



export default Heatmap;
