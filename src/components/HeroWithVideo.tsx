import React from "react";
import ModelViewer from "./ModelViewer";
import "./HeroWithVideo.css";

export default function HeroWithVideo() {
  return (
    <>
      {/* Hero Section - 3D Motor */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Render the 3D Model */}
          <ModelViewer />
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
  <div className="video-container">
    <iframe
      src="https://www.youtube.com/embed/E1czmX6bjFA?start=10&autoplay=1&mute=1"
      title="Vignam Product Demo Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</section>

    </>
  );
}
