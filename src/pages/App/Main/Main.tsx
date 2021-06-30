import React, { useState, useEffect } from "react";
import NavBar from "../../../components/Home/NavBar";

interface Props {
  initCoins: number;
}

const Main: React.FC<Props> = ({ initCoins }) => {
  const [coins, setcoins] = useState(initCoins);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const validInfo = Number(localStorage.getItem("COINS")) || initCoins;
    setcoins(validInfo);
  }, [initCoins]);

  useEffect((): void => {
    localStorage.setItem("COINS", JSON.stringify(coins));
  }, [coins]);
  useEffect(() => {
    const data: string | null = localStorage.getItem("mycount");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);
  return (
    <>
      <NavBar
        coins={coins}
        initC={initCoins}
        setcoins={setcoins}
        username={user.username}
      />
      <button onClick={() => setcoins(coins - 1)}>-1</button>
    </>
  );
};

export default Main;
