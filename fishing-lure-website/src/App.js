import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const renderChosenTab = () => {
    switch (selectedTab) {
      case "Gallery":
        return <Gallery />;
      case "Contact Me":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="App">
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {renderChosenTab()}
    </div>
  );
}

export default App;
