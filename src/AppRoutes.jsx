import { Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PDetails from "./pages/PDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Projects/:id" element={<PDetails />} />
    </Routes>
  )
}

export default AppRoutes;