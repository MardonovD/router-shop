import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Shop from "../components/Shop";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
