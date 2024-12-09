import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Styles/Styles.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Bookingform from "./Pages/Bookingform";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/booking-form/:id" element={<Bookingform />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
