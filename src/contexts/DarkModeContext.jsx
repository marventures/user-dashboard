import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

/**
 * @component DarkModeProvider
 * @version 1.0
 * @copyright (c) 2024, Marvin M. Pacis
 *
 * The DarkModeProvider component provides the context for managing
 * the application's dark mode state. It uses the React Context API
 * to allow nested components to access and toggle the dark mode setting.
 *
 * Utilizes:
 * - useState: Hook to manage the dark mode state.
 *
 * @param {React.ReactNode} children - The child components that will
 * have access to the dark mode context.
 *
 * @returns {JSX.Element} The provider wrapping its children.
 */
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

/**
 * Custom hook to use the DarkModeContext.
 *
 * @returns {Object} The dark mode state and toggle function.
 */
export const useDarkMode = () => useContext(DarkModeContext);
