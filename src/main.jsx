import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Carnet from "./pages/Carnet";
import Playground from "./pages/Playground";

import Ecomiam from "./pages/projects/Ecomiam";
import Better from "./pages/projects/Better";
import LesCheminsDeLaNature from "./pages/projects/LesCheminsDeLaNature";
import WWWomen from "./pages/projects/WWWomen";

import "./main.css";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router basename="/portfolio">
        <Routes>
          <Route index element={<App />} />
          <Route path="/carnet" element={<Carnet />} />
          <Route path="/projects/ecomiam" element={<Ecomiam />} />
          <Route path="/projects/better" element={<Better />} />
          <Route path="/projects/lescheminsdelanature" element={<LesCheminsDeLaNature />} />
          <Route path="/projects/wwwomen" element={<WWWomen />} />
          <Route path="/creations" element={<Playground />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
