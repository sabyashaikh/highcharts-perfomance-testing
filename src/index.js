import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heatmap from "./pages/Heatmap";
import MainApp from "./pages/MainApp";
import Scatter from "./pages/Scatter";
import Stock from "./pages/Stock";
import Map from "./pages/Map";
import Home from "./pages/Home";
import Combo from "./pages/Combo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="heatmap" element={<Heatmap />} />
                <Route path="scatter" element={<Scatter />} />
                <Route path="stock" element={<Stock />} />
                <Route path="map" element={<Map />} />
                <Route path="combo" element={<Combo />} />
                <Route path="overview" element={<MainApp />} />
                <Route path="*" element={<App />} />
                <Route path="heatmap/:id" element={<Heatmap />} />
                <Route path="scatter/:id" element={<Scatter />} />
                <Route path="stock/:id" element={<Stock />} />
                <Route path="combo/:id" element={<Combo />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

