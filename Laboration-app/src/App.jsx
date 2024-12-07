import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Styles/Styles.css";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
import Navbar from "./Components/navbar";
import Footer from "./Components/Footer";
import BookingFormPage from "./Pages/BookingFormPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/Booking-form/:id" element={<BookingFormPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
