import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Menu from "./pages/menu";
import AboutUs from "./pages/aboutus";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <h1>Ini Navbar</h1>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
