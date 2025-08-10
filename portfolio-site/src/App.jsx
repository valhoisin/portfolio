import React, { useState, useEffect } from "react";
import "./App.css";
import Background from "./components/Background";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

// Main App component with a multi-layered parallax background
export default function App() {
  return (
    <>
      <div
        id="start"
        className="relative font-sans text-white overflow-hidden bg-stone-950"
      >
        <Background />
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
