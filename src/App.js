import './App.css';
import { Outlet, Link } from "react-router-dom";
import {createRandomComboData} from "./helper";

function App() {
    //createRandomData(1000)
    //createRandomTimeData(1000)
    //createRandomHeatMapData(1000)
    //createRandomComboData(12, 100)
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/heatmap">Heatmap charts</Link>
                    </li>
                    <li>
                        <Link to="/scatter">Scatter charts</Link>
                    </li>
                    <li>
                        <Link to="/map">Map charts</Link>
                    </li>
                    <li>
                        <Link to="/combo">Combo Charts</Link>
                    </li>
                    <li>
                        <Link to="/stock">Stock Charts</Link>
                    </li>
                    <li>
                        <Link to="/overview">All charts</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}



export default App;
