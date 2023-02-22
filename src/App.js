import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
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
                        <Link to="/stock">Stock Charts</Link>
                    </li>
                    <li>
                        <Link to="/all">All charts</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}



export default App;
