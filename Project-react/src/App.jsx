import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./Styles/Styles.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import { GlobalStateProvider } from "./Api/GlobalStateContext";
import BookingForm from "./Pages/BookingForm";



function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/BookingForm/:id" element={<BookingForm />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
