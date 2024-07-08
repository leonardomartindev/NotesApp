import React, { createContext, useState, useCallback } from 'react';

interface SideBarContextProps {
  sideBarVisibled: string;
  changeSideBar: () => void;
  changeQuickNotesBar: () => void;
  quickNotesBarVisibled: string;
}

interface SideBarProviderProps {
  children: React.ReactNode;
}

export const SideBarContext = createContext<SideBarContextProps>({ sideBarVisibled: "block", changeSideBar: () => {}, quickNotesBarVisibled: "flex", changeQuickNotesBar: () => {},  });

export const SideBarProvider: React.FC<SideBarProviderProps> = ({ children }) => {
  const [sideBarVisibled, setSideBarVisibled] = useState("block");

  const changeSideBar = useCallback(() => {
    setSideBarVisibled(prevState => (prevState === "block" ? "none" : "block"));
  }, []);

  const [quickNotesBarVisibled, setQuickNotesBarVisibled] = useState("flex");

  const changeQuickNotesBar = useCallback(() => {
    setQuickNotesBarVisibled(prevState => (prevState === "flex" ? "none" : "flex"));
  }, []);

  

  return (
    <SideBarContext.Provider value={{ sideBarVisibled, changeSideBar, quickNotesBarVisibled, changeQuickNotesBar }}>
      {children}
    </SideBarContext.Provider>
  );
};
