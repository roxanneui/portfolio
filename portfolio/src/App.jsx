import React, { useState } from "react";
import Header from "./components/header";
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
      <Header setActiveSection={setActiveSection} />
      <div className="main-content">
        {renderSection()}
      </div>
    </>
  );
}

export default App;
