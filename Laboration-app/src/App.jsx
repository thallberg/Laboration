import React from "react";
import { Routes, Route } from "react-router-dom";

import "./Styles/Styles.css"

import HomePage from "./Pages/HomePage"
import BookingPage from "./Pages/BookingPage";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";





function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer/>
      </>
  );
}

export default App
