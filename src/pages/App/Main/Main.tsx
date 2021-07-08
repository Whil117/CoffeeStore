/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { Category } from "../../../assets/data";
import Cards from "../../../components/Cards/Cards";
import Nav from "../../../components/Nav/Nav";
import {
  CardBuy,
  CardBuyButton,
  CardBuyDiv,
  CardErrorCheck,
  CardsMain,
} from "../../../styles/Card/CardStyle";
import { methodGet } from "./assets/methods";

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
const tokenLocal = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token") || "";
  }
};
const Main: React.FC = () => {
  const [coins, setcoins] = useState(100);
  const [user, setUser] = useState<User>({} as User);
  const [coffee, setCoffee] = useState<Coffee>({} as Coffee);
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
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
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
    if (coins > 0) {
      setShow(false);
      setcoins(coins - 10);
      setMsg("datasend");
      const info = useFetchData("data", methodPost).then((data) =>console.log(data))
    } else {
      setMsg("error_coins");
    }
  };
  useEffect(() => {
    const validInfo = Number(localStorage.getItem("COINS") || 0);
    setcoins(validInfo);
  }, []);

  useEffect((): void => {
    localStorage.setItem("COINS", JSON.stringify(coins));
  }, [coins]);

  useEffect(() => {
    const data = useFetchData("me", methodGet)
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {user.auth ? (
        <>
          <Nav
            mode={false}
            coins={coins}
            username={user.user.username}
            setcoins={setcoins}
          />
          <CardsMain>
            <Cards
              check={coffee.Coffee}
              name="Coffee"
              handleCheck={handleCheck}
              width="true"
              flow="true"
              title={Category.titles[0]}
              category={Category.Coffee}
            />
            <Cards
              check={coffee.Type}
              name="Type"
              handleCheck={handleCheck}
              width="false"
              flow="false"
              title={Category.titles[1]}
              category={Category.Type}
            />
            <Cards
              check={coffee.With}
              name="With"
              handleCheck={handleCheck}
              width="false"
              flow="false"
              title={Category.titles[2]}
              category={Category.With}
            />
            <Cards
              check={coffee.Grind}
              name="Grind"
              handleCheck={handleCheck}
              width="false"
              flow="false"
              title={Category.titles[3]}
              category={Category.Grind}
            />
            <Cards
              check={coffee.Week}
              name="Week"
              handleCheck={handleCheck}
              width="false"
              flow="false"
              title={Category.titles[4]}
              category={Category.Week}
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
