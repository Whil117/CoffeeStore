/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect, FC, createContext } from "react";
import Nav from "../../../components/Nav/Nav";
import { useRouter } from "next/router";
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
const typesCoffee = {
  Coffee: "",
  Type: "",
  With: "",
  Grind: "",
  Week: "",
};
export const ThemeContext = createContext("");

const Main: FC = () => {
  const [coins, setcoins] = useState(100);
  const [user, setUser] = useState<User>({} as User);
  const [coffee, setCoffee] = useState<Coffee>(typesCoffee as Coffee);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  const handleChange = (event: any) => {
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
  const methodGet = {
    method: "GET",
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
    setTheme(localStorage.getItem("themew") || "light");
    setcoins(Number(localStorage.getItem("COINS") || 0));
    useFetchData("me", methodGet)
      .then((data) =>
        data
          ? setUser(data)
          : setTimeout(() => {
              router.replace("/");
            }, 5000)
      )
      .catch((err) =>
        err
          ? (console.log(err),
            setTimeout(() => {
              router.replace("/");
            }, 5000))
          : false
      );
  }, []);

  useEffect((): void => {
    localStorage.setItem("COINS", JSON.stringify(coins));
  }, [coins]);

  return (
    <ThemeContext.Provider value={theme}>
      {user.auth ? (
        <main>
          <Nav
            mode={false}
            coins={coins}
            username={user.user.username}
            setcoins={setcoins}
            ModeCoins={true}
            theme={theme}
          />
          <CardsMain theme={theme}>
            <SelectCards coffee={coffee} handleChange={handleChange} />
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
              <CardBuy theme={theme}>
                <h2>??Do you want to buy this coffee?</h2>
                {msg === "error_coins" && (
                  <p>
                    <b>You have no coins</b>
                  </p>
                )}
                <div>
                  <CardBuyButton
                  theme={theme}
                    onClick={() => setShow(false)}
                    mode={true.toString()}
                  >
                    Cancel
                  </CardBuyButton>
                  <CardBuyButton theme={theme} onClick={handleBuy} mode={false.toString()}>
                    Acept
                  </CardBuyButton>
                </div>
              </CardBuy>
            </CardBuyDiv>
          )}
        </main>
      ) : (
        <p>Not authorize</p>
      )}
    </ThemeContext.Provider>
  );
};

export default Main;
