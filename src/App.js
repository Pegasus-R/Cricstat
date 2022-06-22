import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/listing" element={<Listing />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
//BrowserRouter is used to allow the brower URL to be changed and keep the UI in sync with the URL
//To use multiple routes in the same div we use <Routes>
//EXACT param comes into play when we have multiple paths that have similar  names