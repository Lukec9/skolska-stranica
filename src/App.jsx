import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Palette1 from "./pages/Palette1";
import Palette2 from "./pages/Palette2";
import Palette3 from "./pages/Palette3";
import CarouselDemo from "./pages/CarouselDemo";
import "./styles/carousel-demo.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palette1" element={<Palette1 />} />
          <Route path="/palette2" element={<Palette2 />} />
          <Route path="/palette3" element={<Palette3 />} />
          <Route path="/carousel" element={<CarouselDemo />} />
        </Routes>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
