import HighchartHeatMap from "../components/HighchartHeatMap/HighchartHeatMap";

function Home() {
    const heatmap_dp_1k = require("../components/HighchartHeatMap/heat_map_data_points_1k.json")
    const heatmap_dp_50k = require("../components/HighchartHeatMap/heat_map_data_points_50k.json")
    const heatmap_dp_100k = require("../components/HighchartHeatMap/heat_map_data_points_100k.json")
    const heatmap_dp_300k = require("../components/HighchartHeatMap/heat_map_data_points_300k.json")
    return (
        <div>
            Choose chart type
        </div>
    );
}



export default Home;
