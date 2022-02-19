import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [submenuPage, setSubmenuPage] = useState({ page: "", links: [] });

  const openSubmenu = (text, { center, bottom }) => {
    const page = sublinks.find((sublink) => sublink.page === text);
    setSubmenuPage(page);
    setLocation({ center, bottom });
    setIsSubmenuOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isSubmenuOpen,
        setIsSubmenuOpen,
        openSubmenu,
        location,
        submenuPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
