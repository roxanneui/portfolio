import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Gallery from "./pages/Gallery";
import Carnet from "./pages/Carnet";
import Contact from "./pages/Contact";
import Ecomiam from "./pages/projects/Ecomiam";
import Better from "./pages/projects/Better";
import LesCheminsDeLaNature from "./pages/projects/LesCheminsDeLaNature";
import WWWoman from "./pages/projects/WWWoman";

import "./main.css";
import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router basename="/portfolio">
        <Routes>
          <Route index element={<App />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/carnet" element={<Carnet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/ecomiam" element={<Ecomiam />} />
          <Route path="/projects/better" element={<Better />} />
          <Route path="/projects/lescheminsdelanature" element={<LesCheminsDeLaNature />} />
          <Route path="/projects/wwwoman" element={<WWWoman />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
