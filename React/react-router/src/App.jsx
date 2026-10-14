import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import DefaultPage from "./pages/DefaultPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/" element={<DefaultPage />} />
      </Routes>
    </div>
  );
};

export default App;
