import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import Temperature from "./pages/Temperature.jsx";
import Energy from "./pages/Energy.jsx";
import Frequency from "./pages/Frequency.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/frequency" element={<Frequency />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
