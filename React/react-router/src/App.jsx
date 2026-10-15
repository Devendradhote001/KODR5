import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import DefaultPage from "./pages/DefaultPage";
import ProductDetail from "./pages/ProductDetail";
import Something from "./pages/Something";
import Cone from "./pages/Cone";
import Ctwo from "./pages/Ctwo";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />}>
          <Route path="something" element={<Something />} />
          <Route path="c1" element={<Cone />} />
          <Route index element={<Ctwo />} />
        </Route>
        <Route path="contact" element={<ContactPage />} />
        <Route path="/" element={<DefaultPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
