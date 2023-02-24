import HighchartCombo from "../components/HighchartCombo";
import {Link, useParams} from "react-router-dom";

function Combo() {
    let { id } = useParams();
    let dataPoints = require("../components/HighchartCombo/combo_chart_series_5.json")
    if (id==="5") {
        dataPoints = require("../components/HighchartCombo/combo_chart_series_5.json")
    }else if(id==="10"){
        dataPoints = require("../components/HighchartCombo/combo_chart_series_10.json")
    }else if(id==="50"){
        dataPoints = require("../components/HighchartCombo/combo_chart_series_50.json")
    }else if(id==="100"){
        dataPoints = require("../components/HighchartCombo/combo_chart_series_100.json")
    }
    return (
        <>
            Combo chart
            <nav>
                <ul>
                    <li>
                        <Link to="/combo/5">5 series</Link>
                    </li>
                    <li>
                        <Link to="/combo/10">10 series</Link>
                    </li>
                    <li>
                        <Link to="/combo/50">50 series</Link>
                    </li>
                    <li>
                        <Link to="/combo/100">100 series</Link>
                    </li>
                </ul>
            </nav>
            <HighchartCombo
                id="Combo"
                dataPoints={{'data':dataPoints}}
                title='Combo chart'
            ></HighchartCombo>
        </>
    );
}



export default Combo;
