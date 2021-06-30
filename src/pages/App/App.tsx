import styled from "@emotion/styled";
import React, { useEffect, useState, FC } from "react";
import Main from "./Main/Main";
import MainLogin from "./MainLogin/MainLogin";

const MainApp = styled.main`
    font-family: 'Inter', sans-serif;
`

const App: FC = () => {

  const [count, setCount] = useState({
    username:"",
    password:""
  });

  useEffect(() => {
     const validInfo = JSON.parse(localStorage.getItem("mycount") || '{ "username": "", "password": "" }')
     setCount(validInfo)

  }, [])

  return (
    <MainApp>
      {count?.username  || count?.password  ? (
        <Main initCoins={100}/>
      ) : (
        <MainLogin/>
      )}
    </MainApp>
  );
};

export default App;
