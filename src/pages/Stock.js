import HighchartHeatMap from "../components/HighchartHeatMap/HighchartHeatMap";
import {Link, useParams} from "react-router-dom";
import HighchartStock from "../components/HighchartStock";
import dp_1k from "../components/HighchartStock/stock_chart_data_points_1k.json";

function Stock() {
    let { id } = useParams();
    let dataPoints = require("../components/HighchartStock/stock_chart_data_points_1k.json")
    if (id==="300") {
        dataPoints = require("../components/HighchartStock/stock_chart_data_points_300k.json")
    }else if(id==="100"){
        dataPoints = require("../components/HighchartStock/stock_chart_data_points_100k.json")
    }else if(id==="50"){
        dataPoints = require("../components/HighchartStock/stock_chart_data_points_50k.json")
    }else if(id==="1"){
        dataPoints = require("../components/HighchartStock/stock_chart_data_points_1k.json")
    }
    return (
        <>
            Stock
            <nav>
                <ul>
                    <li>
                        <Link to="/stock/1">1k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/stock/50">50k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/stock/100">100k datapoints</Link>
                    </li>
                    <li>
                        <Link to="/stock/300">300k datapoints</Link>
                    </li>
                </ul>
            </nav>
            <HighchartStock
                id="Stock general"
                dataPoints={{'data':dataPoints}}
                title='Stock chart with varying data-points'
            ></HighchartStock>
        </>
    );
}



export default Stock;
