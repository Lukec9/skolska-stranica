import React from "react";
import HighlightMenu from "./HighlightMenu";

function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <img
          src="https://strukovna.com/wp-content/uploads/2022/04/cropped-Skola-web.jpg"
          alt="Nekakav video"
        />
        <h1 className="header">Srednja strukovna škola Antuna Horvata</h1>
      </div>
      <HighlightMenu />
    </section>
  );
}

export default HeroSection;
