import React, { useState, useEffect } from "react";
import { Category } from "../../../assets/data";
import Cards from "../../../components/Cards/Cards";
import NavBar from "../../../components/Home/NavBar";
import {
  CardBuy,
  CardBuyButton,
  CardBuyDiv,
  CardErrorCheck,
  CardsMain,
} from "../../../styles/Card/CardStyle";

interface Props {
  initCoins: number;
}
interface Coffee {
  Coffee: string;
  Type: string;
  With: string;
  Grind: string;
  Week: string;
}

const Main: React.FC<Props> = ({ initCoins }) => {
  const [coins, setcoins] = useState(initCoins);
  const [coffee, setCoffee] = useState<Coffee>({} as Coffee);
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
      setShow(false);
      setcoins(coins - 100);
    } else {
      setError("error_coins");
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

  useEffect(() => {
    const validInfo = Number(localStorage.getItem("COINS")) || 0;
    setcoins(validInfo);
  }, [initCoins]);

  useEffect((): void => {
    localStorage.setItem("COINS", JSON.stringify(coins));
  }, [coins]);

  return (
    <>
      <NavBar coins={coins} initC={initCoins} setcoins={setcoins} />
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
  );
};

export default Main;
