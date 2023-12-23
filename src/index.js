import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/about-us/about-us.jsx";
import CenterComponents from "./views/center/center.jsx";
import DonateComponents from "./views/donate/donate.jsx";
import GalleryComponents from "./views/gallery/gallery.jsx";
import SectorComponents from "./views/sector/sector.jsx";
import ServicesComponents from "./views/services/services.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/services" element={<ServicesComponents />} />
      <Route path="/sector" element={<SectorComponents />} />
      <Route path="/gallery" element={<GalleryComponents />} />
      <Route path="/donate" element={<DonateComponents />} />
      <Route path="/center" element={<CenterComponents />} />
      <Route path="/about-us" element={<CustomComponents />} />
      <Route path="/" element={<Components />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
