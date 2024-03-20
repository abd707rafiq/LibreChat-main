import React, { createContext, useState, useContext } from 'react';

// Create a context with a default value
const SettingsContext = createContext({
  mode: 'Normal', // Default mode
  setMode: () => {}, // Placeholder function
});

// Create a provider component
export const SettingsProvider = ({ children }) => {
  const [mode, setMode] = useState('Normal'); // Initialize the mode state

  // Provide the state and updater function to context consumers
  const value = { mode, setMode };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

// Custom hook to use the settings context
export const useSettings = () => useContext(SettingsContext);
