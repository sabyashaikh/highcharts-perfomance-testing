import HighchartHeatMap from "../components/HighchartHeatMap/HighchartHeatMap";
import {Link, useParams} from "react-router-dom";
import scatter_dp_1k from "../components/HighchartScatter/scatter_chart_data_points_1k.json";
import HighchartScatter from "../components/HighchartScatter";

function Scatter() {
    let { id } = useParams();
    let dataPoints = []
    if (id==="300") {
        dataPoints = require("../components/HighchartScatter/scatter_chart_data_points_300k.json")
    }else if(id==="100"){
        dataPoints = require("../components/HighchartScatter/scatter_chart_data_points_100k.json")
    }else if(id==="50"){
        dataPoints = require("../components/HighchartScatter/scatter_chart_data_points_50k.json")
    }else if(id==="1"){
        dataPoints = require("../components/HighchartScatter/scatter_chart_data_points_1k.json")
    }
    return (
        <>
            Scatter
            <nav>
                <ul>
                    <li>
                        <Link to="/scatter/1">1k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/scatter/50">50k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/scatter/100">100k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/scatter/300">300k datapoints</Link>
                    </li>
                </ul>
            </nav>
            <HighchartScatter
                id="Scatter Single"
                dataPoints={{'data':dataPoints}}
                title='Scatter chart with verying data-points'
            ></HighchartScatter>
        </>
    );
}



export default Scatter;
