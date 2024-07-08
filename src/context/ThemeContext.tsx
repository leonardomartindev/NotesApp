import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: "light",
  toggleValor: () => {},
  labelSwitch: "Light Mode",
  checkTheme: () => {}
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Verifica o tema salvo no localStorage ao inicializar o estado
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);
  const [labelSwitch, setLabelSwitch] = useState(theme === 'light' ? 'Dark Mode' : 'Light Mode');
  const [switchPosition, setSwitchPosition] = useState<number>(theme === 'light' ? 0 : 25);

  // Recupera a posição do switch salva no localStorage
  useEffect(() => {
    const savedPosition = localStorage.getItem('switchPosition');
    if (savedPosition) {
      setSwitchPosition(parseInt(savedPosition));
    }
  }, []);

  // Atualiza o localStorage sempre que o tema mudar
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('switchPosition', switchPosition.toString());
  }, [theme, switchPosition]);

  const checkTheme = () => { 
    setLabelSwitch(theme === "light" ? "Light Mode" : "Dark Mode");
  };

  const toggleValor = () => {
    const newPosition = theme === "light" ? 25 : 0;
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setSwitchPosition(newPosition);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleValor, labelSwitch, checkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
