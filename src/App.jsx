import React from "react";

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import AllNews from "./pages/AllNews";
import ReadMore from "./pages/ReadMore";

const App = ()=> {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllNews />} />
        <Route path="/readMore/:slug" element={<ReadMore />} /> 
      </Routes>
    </Router>

    </>
  )
}

export default App;
