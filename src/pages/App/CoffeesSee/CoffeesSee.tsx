/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Coffee from "../../../components/Coffee/Coffee";
import Nav from "../../../components/Nav/Nav";
import { CoffeeOrders } from "../../../styles/Coffee/CoffeeStyle";

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
const CoffeesSee: React.FC = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [data, setData] = useState<Data>({} as Data);

  const useFetch = async (url: string) => {
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
    if (true) {
      useFetch("https://coffeeapi11.herokuapp.com/data").then((data) =>
        setCoffees(data)
      );
    }
    if (true) {
      useFetch("https://coffeeapi11.herokuapp.com/me").then((data) =>
        setData(data)
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
