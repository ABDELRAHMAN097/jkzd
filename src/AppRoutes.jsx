import { Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  )
}

export default AppRoutes;