import { FC } from "react";
import Home from "./Home/Home";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";
import styled from "@emotion/styled";

const MainApp = styled.main`
  font-family: "Inter", sans-serif;
`;

const App: FC = () => {
  return (
    <MainApp>
      <Nav
        mode={true}
        coins={false}
        setcoins={false}
        username={""}
        ModeCoins={false}
      />
      <Home />
      <Slider />
    </MainApp>
  );
};

export default App;
