import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import PDetails from "./pages/PDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Projects" element={<Projects />} />
      <Route path="/project/:id" element={<PDetails />} />

      <Route path="/Login" element={<Login />} />

      <Route path="/Register" element={<Register />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;