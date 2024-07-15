import React, { createContext, useState, useCallback, useEffect } from 'react';

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
  const getInitialSideBarState = () => {
    return window.matchMedia('(max-width: 1000px)').matches ? "none" : "block";
  };

  const [sideBarVisibled, setSideBarVisibled] = useState(getInitialSideBarState);

  const changeSideBar = useCallback(() => {
    setSideBarVisibled(prevState => (prevState === "block" ? "none" : "block"));
  }, []);

  const [quickNotesBarVisibled, setQuickNotesBarVisibled] = useState("flex");

  const changeQuickNotesBar = useCallback(() => {
    setQuickNotesBarVisibled(prevState => (prevState === "flex" ? "none" : "flex"));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 1000px)').matches) {
        setSideBarVisibled("none");
      } else {
        setSideBarVisibled("block");
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SideBarContext.Provider value={{ sideBarVisibled, changeSideBar, quickNotesBarVisibled, changeQuickNotesBar }}>
      {children}
    </SideBarContext.Provider>
  );
};
