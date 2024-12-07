import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Styles/Styles.css"
import HomePage from "./Pages/HomePage"
import BookingPage from "./Pages/BookingPage";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import BookingFormPage from "./Pages/BookingFormPage";
import { Box } from "@mui/material";





function App() {
  return (
    <BrowserRouter> 
      <Box id="root">
        <Navbar />
        <Box className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/Booking-form/:id" element={<BookingFormPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter> 
  );
}

export default App;