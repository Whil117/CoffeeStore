/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NavButton, NavMain } from "../../styles/Nav/NavStyle";
import Menu from "../../../public/Images/menu.svg";
// import Update from "../../../public";
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
              <h3>{username}</h3>
              <p>Coins:{coins}</p>
              <button onClick={() => setcoins(100)}>
                <img src="/Images/el_refresh.svg" alt="update" />
              </button>
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
          <Image src={Menu} alt="menu" />
        </NavButton>
      )}
    </NavMain>
  );
};

export default Nav;
