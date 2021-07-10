/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import  { useState, useEffect, FC } from "react";
import Coffee from "../../../components/Coffee/Coffee";
import Nav from "../../../components/Nav/Nav";
import { CoffeeOrders } from "../../../styles/Coffee/CoffeeStyle";
import { useRouter } from "next/router";

interface Coffee {
  _id: any;
  Coffee: string;
  Type: string;
  With: string;
  Grind: string;
  Week: string;
}
interface Data {
  auth: Boolean;
  user: {
    username: string;
  };
}
const CoffeesSee: FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [data, setData] = useState<Data>({} as Data);
  const [theme, setTheme] = useState('light');
  
  const router = useRouter();

  const useFetch = async (site: string) => {
    const url = `https://coffeeapi11.herokuapp.com/${site}`;
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token") || ""}`,
      },
    });
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    setTheme(localStorage.getItem("themew") || "light")
    if (true) {
      useFetch("data").then((data) => setCoffees(data));
    }
    if (true) {
      useFetch("me").then((data) =>
        data
          ? setData(data)
          : setTimeout(() => {
              router.replace("/");
            }, 5000)
      );
    }
  }, []);

  return (
    <>
      {data.auth ? (
        <>
          <Nav
            mode={false}
            coins={false}
            setcoins={false}
            username={data.user.username}
            ModeCoins={false}
            theme={theme}
          />
          <CoffeeOrders>
            <h2>Your Order's</h2>
            <div className="box">
              {coffees ? (
                <>
                  {coffees.map((coffee) => (
                    <Coffee key={coffee._id} coffee={coffee} />
                  ))}
                </>
              ) : (
                <p>There not coffees</p>
              )}
            </div>
          </CoffeeOrders>
        </>
      ) : (
        <p>No authorize</p>
      )}
    </>
  );
};

export default CoffeesSee;
