import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/navBar";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </main>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
);
