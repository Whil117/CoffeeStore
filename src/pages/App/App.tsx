import { FC, useEffect, useState } from "react";
import Home from "./Home/Home";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";
import styled from "@emotion/styled";

const MainApp = styled.main`
  font-family: "Inter", sans-serif;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#212734")};

`;

const App: FC = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("themew") || "light");
  }, []);
  return (
    <MainApp  theme={theme} >
      <Nav
        mode={true}
        coins={false}
        setcoins={false}
        username={""}
        ModeCoins={false}
        theme={theme}
      />
      <Home  theme={theme}/>
      <Slider />
    </MainApp>
  );
};

export default App;
