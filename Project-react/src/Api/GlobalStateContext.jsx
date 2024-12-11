import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); 
  const [bookings, setBookings] = useState([]);

  
  const setBookingData = (newBookingData) => {
    setBookings((prevBookings) => [...prevBookings, newBookingData]);
  };

  return (
    <GlobalStateContext.Provider value={{ userData, setUserData, bookings, setBookingData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
