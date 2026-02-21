import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
import Palette1 from "./pages/Palette1";
import Palette2 from "./pages/Palette2";
import Palette3 from "./pages/Palette3";
import CarouselDemo from "./pages/CarouselDemo";
import FooterDemo from "./pages/FooterDemo";
import "./styles/carousel-demo.css";

function App() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <>
      <Navbar />
      <main>
        <div className={`app-layout${isHomeRoute ? " is-home-route" : ""}`}>
          <Sidebar />
          <section className="app-route-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/palette1" element={<Palette1 />} />
              <Route path="/palette2" element={<Palette2 />} />
              <Route path="/palette3" element={<Palette3 />} />
              <Route path="/carousel" element={<CarouselDemo />} />
              <Route path="/footer" element={<FooterDemo />} />
            </Routes>
          </section>
        </div>
        <footer></footer>
      </main>
    </>
  );
}

export default App;
