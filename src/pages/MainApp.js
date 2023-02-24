import '../App.css';
import HighchartStock from "../components/HighchartStock";
import HighchartMap from "../components/HighchartMap";
import HighchartScatter from "../components/HighchartScatter";
import HighchartHeatMap from "../components/HighchartHeatMap/HighchartHeatMap";
import HighchartCombo from "../components/HighchartCombo";

function MainApp() {
    const dp_50k = require("../components/HighchartStock/stock_chart_data_points_50k.json")
    const dp_100k = require("../components/HighchartStock/stock_chart_data_points_100k.json")
    const scatter_dp_100k = require("../components/HighchartScatter/scatter_chart_data_points_100k.json")
    const scatter_dp_50k = require("../components/HighchartScatter/scatter_chart_data_points_50k.json")
    const scatter_dp_1k = require("../components/HighchartScatter/scatter_chart_data_points_1k.json")
    const heatmap_dp_100k = require("../components/HighchartHeatMap/heat_map_data_points_100k.json")
    const heatmap_dp_1k = require("../components/HighchartHeatMap/heat_map_data_points_1k.json")
    const combo_100_series = require("../components/HighchartCombo/combo_chart_series_100.json")
    const combo_10_series = require("../components/HighchartCombo/combo_chart_series_10.json")
    return (

        <div>
            <div style={{width: '100%', backgroundColor: 'peachpuff',padding: 10 }}>
                <HighchartHeatMap
                    id="Heatmap_100k"
                    dataPoints={{'data':heatmap_dp_100k}}
                    title='HeatMap chart with 100K data-points'
                ></HighchartHeatMap>
            </div>
            <div style={{width: '100%', backgroundColor: 'lightcyan',padding: 10 }}>
                <HighchartHeatMap
                    id="Heatmap_1k"
                    dataPoints={{'data':heatmap_dp_1k}}
                    title='HeatMap chart with 1K data-points'
                ></HighchartHeatMap>
            </div>
        <div style={{width: '100%', display: 'table'}}>
            <div style={{display: 'table-row', padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'indigo',padding: 10 }}>
                        <HighchartMap
                            id="Map"
                            title='Map chart'
                        ></HighchartMap>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightpink',padding: 10 }}>
                        <HighchartScatter
                            id="Scatter_50k"
                            dataPoints={{'data':scatter_dp_50k}}
                            title='Scatter chart with 50K data-points'
                        ></HighchartScatter>
                    </div>
                </div>
            </div>
            <div style={{display: 'table-row',  padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightgreen',  padding: 10 }}>
                        <HighchartStock
                            id="Stock_50k"
                            dataPoints={{'data':dp_50k}}
                            title='Stock chart with 50K data-points'
                        ></HighchartStock>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightpink',padding: 10 }}>
                        <HighchartScatter
                            id="Scatter_1k"
                            dataPoints={{'data':scatter_dp_1k}}
                            title='Scatter chart with 1K data-points'
                        ></HighchartScatter>
                    </div>
                </div>
            </div>
            <div style={{display: 'table-row',  padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
                        <HighchartStock
                            id="Stock_50k"
                            dataPoints={{'data':dp_50k}}
                            title='Stock chart with 50K data-points'
                        ></HighchartStock>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'orange',padding: 10 }}>
                        <HighchartScatter
                            id="Scatter_1k"
                            dataPoints={{'data':scatter_dp_1k}}
                            title='Scatter chart with 1K data-points'
                        ></HighchartScatter>
                    </div>
                </div>
            </div>
            <div style={{display: 'table-row',  padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
                        <HighchartStock
                            id="Stock_100k"
                            dataPoints={{'data':dp_100k}}
                            title='Stock chart with 100K data-points'
                        ></HighchartStock>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'orange',padding: 10 }}>
                        <HighchartScatter
                            id="Scatter_1k"
                            dataPoints={{'data':scatter_dp_1k}}
                            title='Scatter chart with 1K data-points'
                        ></HighchartScatter>
                    </div>
                </div>
            </div>
            <div style={{display: 'table-row',  padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
                        <HighchartStock
                            id="Stock_100k"
                            dataPoints={{'data':dp_100k}}
                            title='Stock chart with 100K data-points'
                        ></HighchartStock>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'orange',padding: 10 }}>
                        <HighchartScatter
                            id="Scatter_1k"
                            dataPoints={{'data':scatter_dp_1k}}
                            title='Scatter chart with 1K data-points'
                        ></HighchartScatter>
                    </div>
                </div>
            </div>
            <div style={{display: 'table-row',  padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightyellow',  padding: 10 }}>
                        <HighchartStock
                            id="Stock_100k"
                            dataPoints={{'data':dp_100k}}
                            title='Stock chart with 100K data-points'
                        ></HighchartStock>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'orange',padding: 10 }}>
                        <HighchartScatter
                            id="Scatter_1k"
                            dataPoints={{'data':scatter_dp_1k}}
                            title='Scatter chart with 1K data-points'
                        ></HighchartScatter>
                    </div>
                </div>
            </div>
            <div style={{display: 'table-row',  padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'limegreen',  padding: 10 }}>
                        <HighchartStock
                            id="Stock_100k"
                            dataPoints={{'data':dp_100k}}
                            title='Stock chart with 100K data-points'
                        ></HighchartStock>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightsalmon',padding: 10 }}>
                        <HighchartScatter
                            id="Scatter_100k"
                            dataPoints={{'data':scatter_dp_100k}}
                            title='Scatter chart with 100K data-points'
                        ></HighchartScatter>
                    </div>
                </div>
            </div>
            <div style={{display: 'table-row',  padding:50}}>
                <div style={{width: '50%', display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lightcoral',  padding: 10 }}>
                        <HighchartCombo
                            id="Combo_10"
                            dataPoints={{'data':combo_10_series}}
                            title='Combination chart with 10 series'
                        ></HighchartCombo>
                    </div>
                </div>
                <div style={{display: 'table-cell'}}>
                    <div style={{ backgroundColor: 'lime',padding: 10 }}>
                        <HighchartCombo
                            id="Combo_100"
                            dataPoints={{'data':combo_100_series}}
                            title='Combination chart with 100 series'
                        ></HighchartCombo>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}



export default MainApp;
