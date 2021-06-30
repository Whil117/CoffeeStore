import React, { useState, useEffect } from "react";
import { Category } from "../../../assets/data";
import Cards from "../../../components/Cards/Cards";
import NavBar from "../../../components/Home/NavBar";
import {
  CardBuy,
  CardBuyButton,
  CardBuyDiv,
  CardsMain,
} from "../../../styles/Card/CardStyle";

interface Props {
  initCoins: number;
}

const Main: React.FC<Props> = ({ initCoins }) => {
  const [coins, setcoins] = useState(initCoins);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [coffee, setCoffee] = useState({
    Coffee: "",
    Type: "",
    With: "",
    Grind: "",
    Week: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const { Coffee, Type, With, Grind, Week, titles } = Category;

  const handleCheck = (event: any) => {
    setCoffee({
      ...coffee,
      [event.target.name]: event.target.value,
    });
  };
  const handleBuy = () => {
    if (coins > 0) {
      setShow(false)
      setcoins(coins - 100);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const validInfo = Number(localStorage.getItem("COINS")) || 0;
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
  console.log(coffee);
  return (
    <>
      <NavBar
        coins={coins}
        initC={initCoins}
        setcoins={setcoins}
        username={user.username}
      />
      <CardsMain>
        <Cards
          check={coffee.Coffee}
          name="Coffee"
          handleCheck={handleCheck}
          width="true"
          flow="true"
          title={titles[0]}
          category={Coffee}
        />
        <Cards
          check={coffee.Type}
          name="Type"
          handleCheck={handleCheck}
          width="false"
          flow="false"
          title={titles[1]}
          category={Type}
        />
        <Cards
          check={coffee.With}
          name="With"
          handleCheck={handleCheck}
          width="false"
          flow="false"
          title={titles[2]}
          category={With}
        />
        <Cards
          check={coffee.Grind}
          name="Grind"
          handleCheck={handleCheck}
          width="false"
          flow="false"
          title={titles[3]}
          category={Grind}
        />
        <Cards
          check={coffee.Week}
          name="Week"
          handleCheck={handleCheck}
          width="false"
          flow="false"
          title={titles[4]}
          category={Week}
        />
        <button onClick={() => {
          setShow(true)
          setError(false)
          }}>Buy</button>
      </CardsMain>
      {show && (
        <CardBuyDiv>
          <CardBuy>
            <h2>¿Do you want to buy this coffee?</h2>
            {error && (
              <p>
                <b>You have no coins</b>
              </p>
            )}
            <div>
              <CardBuyButton onClick={() => setShow(false)} mode={true}>
                Cancel
              </CardBuyButton>
              <CardBuyButton onClick={handleBuy} mode={false}>
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
