import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import SideBar from "./components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import {
  ContentContainer,
  MainContainer,
  RecoilSideBar,
} from "./Index.style";
import { SideBarContext } from "./context/AssideVisibledContext";
import {QuickNotesBar} from "./components/QuickNotesBar/QuickNotesBar";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const { sideBarVisibled, changeSideBar, quickNotesBarVisibled } = useContext(SideBarContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <MainContainer isvisible={sideBarVisibled !== "block" ? "true" : "false"}>
        <ContentContainer>
          <RecoilSideBar
            onClick={changeSideBar}
            isvisible={sideBarVisibled !== "block" ? "true" : "false"}
          />
          <SideBar />
          <Outlet />
        </ContentContainer>
        <QuickNotesBar visible={quickNotesBarVisibled !== "flex" ? "false" : "true"} />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
