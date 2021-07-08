/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { NavButton, NavMain } from "../../styles/Nav/NavStyle";
import { CardCoins } from "../../styles/Card/CardStyle";

interface Props {
  mode: Boolean;
  coins: number | false;
  setcoins: any;
  username: string;
}
const Nav: React.FC<Props> = ({ mode, coins, setcoins, username }) => {
  const router = useRouter();
  return (
    <NavMain>
      <CardCoins>
        <h1>Coffee Store</h1>
        <div>
          {mode ? (
            true
          ) : (
            <>
              {coins ? (
                <>
                  <h3>{username}</h3>
                  <p>Coins:{coins}</p>
                  <button onClick={() => setcoins(100)}>
                    <img src="/Images/el_refresh.svg" alt="update" />
                  </button>
                </>
              ) : (
                false
              )}
            </>
          )}
        </div>
      </CardCoins>
      {mode ? (
        <NavButton
          menu={true}
          type="button"
          onClick={() => router.replace("./App/Sign/Sign")}
        >
          Sign up
        </NavButton>
      ) : (
        <NavButton menu={false}>
          <img src="/Images/menu.svg" alt="menu" />
        </NavButton>
      )}
    </NavMain>
  );
};

export default Nav;
