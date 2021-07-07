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

interface Coffee {
  Coffee: string;
  Type: string;
  With: string;
  Grind: string;
  Week: string;
}
const Main: React.FC = () => {
  const [coins, setcoins] = useState(100);
  const [UserName, setUserName] = useState('')
  const [coffee, setCoffee] = useState<Coffee>({} as Coffee);
  const [auth, setAuth] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleCheck = (event: any) => {
    setCoffee({
      ...coffee,
      [event.target.name]: event.target.value,
    });
  };
  const handleBuy = () => {
    if (coins > 0) {
      setShow(false)
      setcoins(coins - 10);
    } else {
      setError("error_coins")
    }
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
      setError("");
    } else {
      setError("error_form");
    }
  };

  const useFetch = (url: string) => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token") || ""}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setUserName(data.user.username)
        setAuth(data?.auth);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const validInfo = Number(localStorage.getItem("COINS") || 0);
    setcoins(validInfo);
  }, []);

  useEffect((): void => {
    localStorage.setItem("COINS", JSON.stringify(coins));
  }, [coins]);

  useEffect(() => {
    useFetch("https://coffeeapi11.herokuapp.com/me");
  }, []);
  return (
    <>
      {auth ? (
        <>
          <Nav mode={false} coins={coins} username={UserName} setcoins={setcoins} />
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
            {error === "error_form" && (
              <CardErrorCheck>
                <b>Finish the form</b>
              </CardErrorCheck>
            )}
          </CardsMain>
          {show && (
            <CardBuyDiv>
              <CardBuy>
                <h2>¿Do you want to buy this coffee?</h2>
                {error === "error_coins" && (
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
