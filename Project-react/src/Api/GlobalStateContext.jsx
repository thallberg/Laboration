import React, { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [bookingData, setBookingData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    peopleCount: 1,
    totalPrice: 0,
  });
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        userData,
        setUserData,
        bookingData,
        setBookingData,
        formData,
        setFormData,
        openConfirmModal,
        setOpenConfirmModal,
        openSuccessModal,
        setOpenSuccessModal,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
