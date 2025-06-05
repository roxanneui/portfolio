import React, { useState } from "react";
import Header from "./components/Header";
import Projets from "./components/Projets";
import Apropos from "./components/APropos";
import Journal from "./components/Journal";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("projets");

  const renderSection = () => {
    switch (activeSection) {
      case "apropos":
        return <Apropos />;
      case "journal":
        return <Journal />;
      case "projets":
      default:
        return <Projets />;
    }
  };

  return (
    <>
      <div className="main-container">
        <Header setActiveSection={setActiveSection} />
        <div className="content-wrapper">
          {renderSection()}
        </div>
      </div>
    </>
  );
}

export default App;
