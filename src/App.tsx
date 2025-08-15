import React from "react";
import Navbar from "./components/Navbar";
import HeroWithVideo from "./components/HeroWithVideo"; // exact casing
import ManufacturerSection from "./components/ManufacturerSection";
import ToolLibrarySection from "./components/ToolLibrarySection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroWithVideo />         {/* 3D motor + overlapping video */}
      <ManufacturerSection />
      <ToolLibrarySection />
      <ContactSection />
    </div>
  );
}

export default App;
