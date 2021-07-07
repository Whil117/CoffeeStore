import styled from "@emotion/styled";
import React, {  FC } from "react";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";
import Home from "./Home/Home";

const MainApp = styled.main`
  font-family: "Inter", sans-serif;
`;

const App: FC = () => {
  return (
    <MainApp>
      <Nav mode={true} coins={false}  setcoins={false}/>
      <Home />
      <Slider/>
    </MainApp>
  );
};

export default App;
