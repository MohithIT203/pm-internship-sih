import { useState } from "react";
import "./App.css";
import React from "react";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
