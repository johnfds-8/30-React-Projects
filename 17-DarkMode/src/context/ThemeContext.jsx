import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, SetIsDarkMode] = useState(false)

  const toggleTheme = () => {
    SetIsDarkMode((prevMode) => !prevMode)
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
}

export { useTheme, ThemeProvider } 