import { Routes, Route } from "react-router-dom"; 

import Header from "./components/Header";
import Projets from "./components/Projets";
import Apropos from "./components/APropos";
import Journal from "./components/Journal";

import WWWomen from "./components/projets/WWWomen";
import Ecomiam from "./components/projets/Ecomiam";

import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />

        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Projets />} />
            <Route path="/projets" element={<Projets />} />
            
            <Route path="/projets/wwwomen" element={<WWWomen />} />
            <Route path="/projets/ecomiam" element={<Ecomiam />} />
            
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