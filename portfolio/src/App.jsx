import { Routes, Route } from "react-router-dom"; 

import Header from "./components/Header";
import Projets from "./components/Projets";
import Apropos from "./components/APropos";
import Journal from "./components/Journal";

import WWWomen from "./components/projets/WWWomen";
import Ecomiam from "./components/projets/Ecomiam";
import GaiaCo from "./components/projets/GaiaCo";
import MichelEtColette from "./components/projets/MichelEtColette";
import Motif from "./components/projets/Motif";
import Better from "./components/projets/Better";

import "./App.css";

import { Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Navigate to="/projets" replace />} />
            <Route path="/projets" element={<Projets />} />
            
            <Route path="/projets/wwwomen" element={<WWWomen />} />
            <Route path="/projets/ecomiam" element={<Ecomiam />} />
            <Route path="/projets/gaiaco" element={<GaiaCo />} />
            <Route path="/projets/micheletcolette" element={<MichelEtColette />} />
            <Route path="/projets/motif" element={<Motif />} />
            <Route path="/projets/better" element={<Better />} />
            
            <Route path="/a-propos" element={<Apropos />} />
            <Route path="/journal" element={<Journal />} />
            
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;