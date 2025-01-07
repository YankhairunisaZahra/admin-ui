/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => setIsDarkMode((prev) => !prev);

    return (
        <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
