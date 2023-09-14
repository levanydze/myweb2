import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Details from "./components/Details";

function App() {
  const [category, setCategory] = useState("favorite");

  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={<Home category="favorite" title="Personal Favorites" />}
        />
        <Route
          path="/archive"
          element={<Home category="archive" title="Archive" />}
        />
        <Route
          path="/portrait"
          element={<Home category="portrait" title="Portrait" />}
        />
        <Route
          path="/landscape"
          element={<Home category="landscape" title="Landscape" />}
        />
        <Route
          path="/cityscape"
          element={<Home category="cityscape" title="Cityscape" />}
        />
        <Route path="/:category/:id" element={<Details />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
