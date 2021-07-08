/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { Category } from "../../../assets/data";
import Nav from "../../../components/Nav/Nav";
import {
  CardBuy,
  CardBuyButton,
  CardBuyDiv,
  CardErrorCheck,
  CardsMain,
} from "../../../styles/Card/CardStyle";
import SelectCards from "./components/SelectCards";

interface Coffee {
  Coffee: string;
  Type: string;
  With: string;
  Grind: string;
  Week: string;
}
interface User {
  auth: Boolean;
  user: {
    _id: any;
    username: any;
  };
}
const methodGet = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const Main: React.FC = () => {
  const [coins, setcoins] = useState(100);
  const [user, setUser] = useState<User>({} as User);
  const [coffee, setCoffee] = useState<Coffee>({
    Coffee:'',
    Type:'',
    With:'',
    Grind:'',
    Week:''
  } as Coffee);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const handleCheck = (event: any) => {
    setCoffee({
      ...coffee,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheckCards = () => {
    if (
      coffee.Coffee &&
      coffee.Type &&
      coffee.With &&
      coffee.Grind &&
      coffee.Week
    ) {
      setShow(true);
      setMsg("");
    } else {
      setMsg("error_form");
    }
  };

  const methodPost = {
    method: "POST",
    body: JSON.stringify(coffee),
  };

  const useFetchData = async (site: string, method: any) => {
    const url = `https://coffeeapi11.herokuapp.com/${site}`;
    const resp = await fetch(url, {
      ...method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token") || ""}`,
      },
    });
    const data = await resp.json();
    return data;
  };

  const handleBuy = () => {
    const isValidCoins =
      coins > 0
        ? (setShow(false),
          setcoins(coins - 10),
          useFetchData("data", methodPost)
            .then((data) => (data ? setMsg("datasend") : false))
            .catch((err) => console.log(err)))
        : setMsg("error_coins");
    return isValidCoins;
  };
  useEffect(() => {
    const validInfo = Number(localStorage.getItem("COINS") || 0);
    setcoins(validInfo);
    useFetchData("me", methodGet)
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect((): void => {
    localStorage.setItem("COINS", JSON.stringify(coins));
  }, [coins]);

  return (
    <>
      {user.auth ? (
        <>
          <Nav
            mode={false}
            coins={coins}
            username={user.user.username}
            setcoins={setcoins}
            ModeCoins={true}
          />
          <CardsMain>
            <SelectCards
              coffee={coffee}
              handleCheck={handleCheck}
              Category={Category}
            />
            <button onClick={handleCheckCards}>Buy</button>
            {(msg === "error_form" && (
              <CardErrorCheck>
                <b>Finish the form</b>
              </CardErrorCheck>
            )) ||
              (msg === "datasend" && <p>Coffee Send</p>)}
          </CardsMain>
          {show && (
            <CardBuyDiv>
              <CardBuy>
                <h2>¿Do you want to buy this coffee?</h2>
                {msg === "error_coins" && (
                  <p>
                    <b>You have no coins</b>
                  </p>
                )}
                <div>
                  <CardBuyButton
                    onClick={() => setShow(false)}
                    mode={true.toString()}
                  >
                    Cancel
                  </CardBuyButton>
                  <CardBuyButton onClick={handleBuy} mode={false.toString()}>
                    Acept
                  </CardBuyButton>
                </div>
              </CardBuy>
            </CardBuyDiv>
          )}
        </>
      ) : (
        <p>Not authorize</p>
      )}
    </>
  );
};

export default Main;
