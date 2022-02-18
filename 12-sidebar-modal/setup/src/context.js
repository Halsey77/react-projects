import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };
  const toggleModal = (isOpen) => {
    setIsModalOpen(isOpen);
  };

  return (
    <AppContext.Provider
      value={{ isModalOpen, isSidebarOpen, toggleModal, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
